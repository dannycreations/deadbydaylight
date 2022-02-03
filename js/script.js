let json, fileName
let cookie, platform
let query, charKey

// checking is your save game is dirty
// function checkDirtySaveGame(type) {
//   let dirtyData = ""
//   for (const data of json.characterData) {
//   }
// }

// make database clean before use it
// function cleanDatabase(data) {
//   if (data[0].name) {

//   }
// }

function updateSaveGame(obj, ljson = json) {
  try {
    let lvalue
    const parseTypeData = (ori, sec) => {
      switch (typeof ori) {
        case "boolean":
          return sec === "true"
        case "number":
          return parseInt(sec)
        case "string":
          return sec
      }
    }
    const verifyInputNumber = () => {
      let number = ""
      for (const num of obj.value.split("")) {
        if (num >= 0 && num <= 9) number += num
      }
      if (!number.length) obj.value = obj.max || obj.min
      if (parseInt(number) > parseInt(obj.max)) obj.value = obj.max
      if (parseInt(number) < parseInt(obj.min)) obj.value = obj.min
    }
    ljson = jmespath.search(ljson, obj.getAttribute("data-query"))
    const lupdate = obj.getAttribute("data-update")
    if (obj.type == "number") verifyInputNumber()
    if (obj.type == "datetime-local") {
      lvalue = convertDate(obj.value, obj.getAttribute("data-format"))
    }
    if (_.includes(lupdate, "$a")) {
      const split = lupdate.split("$a")
      ljson[split[1]] = parseTypeData(ljson[split[1]], lvalue || obj.value)
    } else if (_.includes(lupdate, "$c")) {
      const split = lupdate.split("$c")[1].split(":")
      if (split.length != 2) split[1] = ""
      if (ljson.constructor === Array) {
        ljson = _.find(ljson, (r) => _.includes(r[split[0]], split[1]))
      }
      ljson[split[0]] = parseTypeData(ljson[split[0]], `${split[1]}${lvalue || obj.value}`)
    } else if (_.includes(lupdate, "$p")) {
      const split = lupdate.split("$p")[1].split(":")
      const find = _.find(ljson, (r) => _.includes(r[split[0]], obj.id))
      findElementById(`input-${obj.id}`, (r) => {
        if (!find) {
          r.disabled = false
          ljson.push({ [split[0]]: `${split[1]}${r.value}` })
        } else {
          r.disabled = true
          _.remove(ljson, (r) => _.includes(r[split[0]], obj.id))
        }
      })
    }
  } catch (err) {
    tryCatch(err)
  }
}

function generateDate(char, type, inc) {
  const LEGACY_DATE = "2016-11-24"
  const DEFAULT_TIME = "T16:59:00.000Z"

  let endDate, lastGen
  let startDate = `${char.release}${DEFAULT_TIME}`
  if (type == "legacy" && char.legacy) {
    endDate = `${LEGACY_DATE}${DEFAULT_TIME}`
  } else if (char.removal) {
    endDate = `${char.removal}${DEFAULT_TIME}`
  } else {
    if (char.legacy) startDate = `${LEGACY_DATE}${DEFAULT_TIME}`
    const date = (moment().diff(moment(startDate), "seconds") * 1000) / 1.3
    endDate = moment(moment() - date).toISOString()
  }
  let randomGen = []
  for (let i = 0; i < inc; i++) {
    if (!lastGen) lastGen = moment(endDate).valueOf()
    lastGen = _.random(moment(startDate).valueOf(), lastGen)
    if (i && moment(randomGen[i - 1]).diff(moment(lastGen), "days") < 7) {
      lastGen += _.random(5 + i, 14) * 86400000
    }
    randomGen.push(moment(lastGen).toISOString())
  }
  return _.sortBy(randomGen)
}

function convertDate(date, format) {
  const FORMAT_LOCAL = "YYYY-MM-DDTHH:mm:ss.SSS"
  const FORMAT_TIMESTAMP = "YYYY.MM.DD-HH.mm.ss"
  if (format == "0ul") {
    return moment(date).local().format(FORMAT_LOCAL)
  } else if (format == "1lu") {
    return moment(date).utc()
  } else if (format == "0tl") {
    return moment(date, FORMAT_TIMESTAMP).local().format(FORMAT_LOCAL)
  } else if (format == "1lt") {
    return moment(date).format(FORMAT_TIMESTAMP)
  }
}

function findElementById(elements, callback) {
  elements = _.isArray(elements) ? elements : [elements]
  for (let i = 0; i < elements.length; i++) {
    let elements2 = elements[i]
    if (!elements[i].id) elements2 = document.getElementById(elements[i])
    callback(elements2)
  }
}

function genDataByQuery(obj, str, cb) {
  const lquery = `${query || ""}${str || ""}`
  const update = (q, u) => `data-query="${lquery}${q}" data-update="${u}"`
  return str ? cb(_.get(obj, str, ""), update, str) : cb(obj, update, str)
}

function checkProxyServer() {
  request(null, "GET").then((r) => {
    if (r.data.status == 200) {
      findElementById("text-bhvrSession", (r) => {
        r.placeholder = `${randomString(18)}-${randomString(3)}.${randomString(4)}`
        r.addEventListener("change", (r) => (r.target.value.length > 100 ? processSaveGame(r) : null))
      })
      findElementById("col-bhvrSession", (r) => (r.style.display = "block"))
    }
  })
}

function request(data, method = "POST", url = PROXY_API) {
  try {
    let options = { url, method }
    if (data) {
      options.data = _.defaultsDeep(data, {
        method: "GET",
        headers: {
          "x-kraken-client-platform": platform || "egs",
          "x-kraken-client-provider": platform || "egs",
          "x-kraken-client-version": "5.5.1",
          "x-kraken-client-resolution": "1920x1080",
          "x-kraken-client-timezone-offset": "-420",
          "x-kraken-client-os": "10.0.19044.1.768.64bit",
          "x-kraken-analytics-session-id": `${randomString(8)}-${randomString(4)}-${randomString(4)}-${randomString(4)}-${randomString(12)}`,
          cookie: `bhvrSession=${cookie}`,
          "content-type": "application/json",
          "user-agent": `DeadByDaylight/++DeadByDaylight+Live-CL-509094 ${platform ? platform.toUpperCase() : "EGS"}/10.0.19044.1.768.64bit`,
        },
        responseType: "json",
      })
    }
    return axios(options)
  } catch (err) {
    tryCatch(err)
  }
}

function download(customName) {
  const jsonBlob = new Blob([JSON.stringify(json)], { type: "application/javascript;charset=utf-8" })
  saveAs(jsonBlob, fileName || customName || "FullProfile.txt")
}

// https://stackoverflow.com/a/27872144
function randomString(len, an) {
  an = an && an.toLowerCase()
  let str = "",
    i = 0,
    min = an == "a" ? 10 : 0,
    max = an == "n" ? 10 : 62
  for (; i++ < len; ) {
    let r = (Math.random() * (max - min) + min) << 0
    str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48))
  }
  return str
}

// https://gist.github.com/72lions/4528834
function concatBytes(...buffer) {
  let byteArray = [],
    offset = 0
  for (const arr of buffer) {
    for (let i = 0; i < arr.length; i++) {
      byteArray[i + offset] = arr[i]
    }
    offset += arr.length
  }
  return new Uint8Array(byteArray)
}

// https://stackoverflow.com/a/24386744
function utf8BytesToUtf16Bytes(buffer) {
  let byteArray = []
  for (let i = 0; i < buffer.length; i++) {
    byteArray[i * 2] = buffer[i] & 0xff
    byteArray[i * 2 + 1] = (buffer[i] >> 8) & 0xff
  }
  return new Uint8Array(byteArray)
}

// https://stackoverflow.com/a/14601808
function utf16BytesToUtf8Bytes(buffer) {
  let byteArray = []
  for (let i = 0; i < buffer.length; i++) {
    byteArray[i / 2] = buffer[i] | (buffer[i] << 8)
  }
  return new Uint8Array(byteArray)
}

// https://stackoverflow.com/a/12965194
function longToBytes(long) {
  const byteArray = new Uint8Array(4)
  for (let i = 0; i < byteArray.length; i++) {
    const byte = long & 0xff
    byteArray[i] = byte
    long = (long - byte) / 256
  }
  return byteArray
}

// https://stackoverflow.com/a/18729931
function stringToBytes(str) {
  let byteArray = []
  for (let i = 0; i < str.length; i++) {
    let charcode = str.charCodeAt(i)
    if (charcode < 0x80) byteArray[i] = charcode
    else if (charcode < 0x800) {
      byteArray[i] = (0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f))
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      byteArray[i] = (0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f))
    } else {
      i++, (charcode = 0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff)))
      byteArray[i] = (0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f))
    }
  }
  return new Uint8Array(byteArray)
}

// https://stackoverflow.com/a/62364519
function base64ToBytes(str) {
  const abc = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"] // base64 alphabet
  let byteArray = []
  for (let i = 0; i < str.length / 4; i++) {
    let chunk = [...str.slice(4 * i, 4 * i + 4)]
    let bin = chunk.map((x) => abc.indexOf(x).toString(2).padStart(6, 0)).join("")
    let bytes = bin.match(/.{1,8}/g).map((x) => +("0b" + x))
    byteArray.push(...bytes.slice(0, 3 - (str[4 * i + 2] == "=") - (str[4 * i + 3] == "=")))
  }
  return new Uint8Array(byteArray)
}

// https://stackoverflow.com/a/62362724
function bytesToBase64(arr) {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  const bin = (n) => n.toString(2).padStart(8, 0)
  const l = arr.length
  let result = ""
  for (let i = 0; i <= (l - 1) / 3; i++) {
    const c1 = i * 3 + 1 >= l
    const c2 = i * 3 + 2 >= l
    const chunk = bin(arr[3 * i]) + bin(c1 ? 0 : arr[3 * i + 1]) + bin(c2 ? 0 : arr[3 * i + 2])
    result += chunk
      .match(/.{1,6}/g)
      .map((x, j) => (j == 3 && c2 ? "=" : j == 2 && c1 ? "=" : abc[+("0b" + x)]))
      .join("")
  }
  return result
}

function tryCatch(err) {
  alert("Found some error, please check F12 Console!")
  console.log(err)
}
