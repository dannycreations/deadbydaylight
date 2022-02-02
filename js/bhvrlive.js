function injectSaveGame(loop) {
  request({ url: `${BHVRLIVE_API}/players/me/states/FullProfile/binary` }).then((res) => {
    if (res.data.status == 200) {
      const options = {
        url: `${BHVRLIVE_API}/players/me/states/binary`,
        method: "POST",
        headers: {
          "content-type": "application/octet-stream",
        },
        searchParams: {
          version: parseInt(res.data.headers["kraken-state-version"]),
          schemaVersion: parseInt(res.data.headers["kraken-state-schema-version"]),
          stateName: "FullProfile",
        },
        body: encrypt(json),
      }
      request(options).then((res) => {
        console.log(res)
        if (!loop) injectSaveGame(true)
      })
    }
  })
}

function encrypt(content) {
  try {
    const key = stringToBytes(BHVRLIVE_KEY)
    const aes = new aesjs.ModeOfOperation.ecb(key)
    content = JSON.stringify(content)
    content = utf8BytesToUtf16Bytes(stringToBytes(content))
    content = bytesToBase64(concatBytes(longToBytes(content.length), pako.deflate(content)))
    content = `DbdDAQEB${content.padEnd(content.length + 16 - ((8 + content.length) % 16), "\u0001")}`
    content = _.map(content, (r) => String.fromCharCode(r.charCodeAt(0) - 1)).join("")
    content = aes.encrypt(stringToBytes(content))
    content = `DbdDAgAC${bytesToBase64(content)}`
    return content
  } catch (err) {
    tryCatch(err)
  }
}

function decrypt(content) {
  try {
    const key = stringToBytes(BHVRLIVE_KEY)
    const aes = new aesjs.ModeOfOperation.ecb(key)
    content = aes.decrypt(base64ToBytes(content.slice(8)))
    content = _.map(content, (r) => String.fromCharCode(r + 1))
    content = content.join("").replaceAll("\u0001", "")
    content = base64ToBytes(content.slice(8)).slice(4)
    content = _.map(utf16BytesToUtf8Bytes(pako.inflate(content)), (r) => String.fromCharCode(r)).join("")
    content = JSON.parse(content)
    return content
  } catch (err) {
    tryCatch(err)
  }
}
