checkProxyServer()
findElementById("LoadSaveGame", (r) => r.addEventListener("change", processSaveGame))

function processSaveGame(data, logged) {
  if (logged) return loadSaveGame(data)
  try {
    const reader = new FileReader()
    const file = data.target.files[0]
    reader.onload = () => {
      cookie = null
      fileName = file.name
      return processSaveGame(reader.result, true)
    }
    reader.readAsText(file)
  } catch (err) {
    cookie = data.target.value
    if (cookie) {
      findElementById("text-bhvrSession", (r) => (r.disabled = true))
      findElementById("login-bhvrSession", (r) => (r.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`))
      request({ url: `${BHVRLIVE_API}/playername` }).then((res) => {
        if (res.data.status == 200 && res.data.body.playerName) {
          platform = Object.keys(res.data.body.providerPlayerNames)[0]
          findElementById("form-bhvrlive", (r) => (r.style.display = "block"))
          findElementById("selected-characters", (r) => (r.innerHTML = `Welcome ${platform.toUpperCase()}:<label class="text-success">${res.data.body.playerName}</label>`))
          request({ url: `${BHVRLIVE_API}/players/me/states/FullProfile/binary` }).then((res) => {
            if (res.data.status == 200) {
              json = decrypt(res.data.body)
              processSaveGame(null, true)
            }
          })
        } else {
          findElementById("text-bhvrSession", (r) => (r.disabled = false))
          findElementById("login-bhvrSession", (r) => (r.innerHTML = `Login`))
        }
      })
    }
  }
}

function loadSaveGame(raw, refresh) {
  try {
    if (raw) {
      if (_.includes(raw, "DbdDAgAC")) json = decrypt(raw)
      else json = JSON.parse(raw)
    }
    if (charKey) {
      console.log(charKey)
      changeCharacter(charKey)
    }

    query = ""
    // Load Characters
    let survivorData = "",
      survivorCount = 0,
      killerData = "",
      killerCount = 0
    genDataByQuery(json, "characterData", (obj) => {
      for (const data of obj) {
        const find = _.find(CHARACTERS, { key: data.key })
        const text = `<li><a href="#" onclick="changeCharacter(${find.key})" class="dropdown-item">${find.name}</a></li>`
        if (find.isKiller) (killerData += text), killerCount++
        else (survivorData += text), survivorCount++
      }
    })

    findElementById("label-survivor", (r) => (r.innerHTML = `Survivor (${survivorCount})`))
    findElementById("label-killer", (r) => (r.innerHTML = `Killer (${killerCount})`))
    findElementById("survivor", (r) => (r.innerHTML = survivorData))
    findElementById("killer", (r) => (r.innerHTML = killerData))

    // Load Main
    let mainData = ""
    genDataByQuery(json, null, (obj, upd) => {
      for (const data in obj) {
        if (_.isObject(obj[data])) continue
        let mainData2 = `<label>${data}</label>`
        switch (typeof obj[data]) {
          case "boolean":
            const op2 = obj[data] === false
            mainData2 += `<select ${upd("@", `$c${data}`)} oninput="updateSaveGame(this)" class="form-select">
              <option selected value="${obj[data]}">${obj[data]}</option>
              <option value="${op2}">${op2}</option>
            </select>`
            break
          case "number":
            mainData2 += `<input type="number" ${upd("@", `$c${data}`)} oninput="updateSaveGame(this)" class="form-control" min="0" value="${obj[data]}">`
            break
          case "string":
            mainData2 += `<input type="text" ${upd("@", `$c${data}`)} oninput="updateSaveGame(this)" class="form-control" value="${obj[data]}">`
            break
        }
        const formData = '<div class="col-sm-4">{0}</div>'
        mainData += formData.replace("{0}", mainData2)
      }
    })

    const formData = '<div class="form-group row">{0}</div><p/>'
    findElementById("main", (r) => (r.innerHTML = `${formData.replace("{0}", mainData)}`))
  } catch (err) {
    return tryCatch(err)
  }
  findElementById("instructions", (r) => (r.style.display = "none"))
  findElementById("FullProfile", (r) => (r.style.display = "block"))
}

function changeCharacter(key) {
  charKey = key
  try {
    // Load Inventory
    let levelData = "",
      perksData = "",
      itemsData = "",
      addonsData = "",
      offeringsData = "",
      othersData = ""

    const find = genDataByQuery(json, "characterData", (obj, upd, str) => {
      query = str + "[?key==`{0}`]|[0].".replace("{0}", key)
      return _.find(obj, { key })
    })

    genDataByQuery(find, "data", (obj, upd) => {
      for (const data in obj) {
        if (_.isObject(obj[data])) continue
        levelData += `<div class="col-sm-4">
          <label>${data}</label>
          <input type="number" ${upd("", `$c${data}`)} oninput="updateSaveGame(this)" class="form-control" min="{0}" max="{1}" value="${obj[data]}">
        </div>`
        if (data == "bloodWebLevel") levelData = levelData.replace("{0}", 1).replace("{1}", 50)
        else if (data == "prestigeLevel") levelData = levelData.replace("{0}", 1).replace("{1}", 3)
      }
    })

    genDataByQuery(find, "data.prestigeDates", (obj, upd) => {
      let i = 0
      for (const data of obj) {
        levelData += `<div class="col-sm-4">
          <label>Prestige ${i + 1} Date</label>
          <input type="text" ${upd("", `$a${i++}`)} oninput="updateSaveGame(this)" class="form-control" value="${data}">
        </div>`
      }
    })

    genDataByQuery(find, "data.inventory", (obj, upd) => {
      for (let data of obj) {
        data = data.i.split(",")
        let text = `<div class="col-sm-4">
          <div class="form-check form-switch">
            <input type="checkbox" id="${data[0]}" ${upd("", `$pi:${data[0]},`)} oninput="updateSaveGame(this)" class="form-check-input" role="switch" checked/>
            <label class="form-check-label">${data[0]}</label>
          </div>
          <input type="number" id="input-${data[0]}" ${upd("", `$ci:${data[0]},`)} oninput="updateSaveGame(this)" class="form-control" min="1" max="{0}" value="${data[1]}">
        </div>`
        if (_.find(PERKS, { name: data[0] })) {
          perksData += text.replace("{0}", `${_.includes(data[0], "_TEACH_") ? 1 : 3}`)
          continue
        }
        text = text.replace("{0}", "")
        if (_.includes(ITEMS, data[0])) {
          itemsData += text
        } else if (_.find(ADDONS, { name: data[0] })) {
          addonsData += text
        } else if (_.find(OFFERINGS, { name: data[0] })) {
          offeringsData += text
        } else {
          othersData += text
        }
      }
    })

    const formData = '<div class="form-group row">{0}</div><p/>'
    const find2 = _.find(CHARACTERS, { key })
    findElementById("selected-characters", (r) => (r.innerHTML = `${find2.isKiller ? "Killer" : "Survivor"}: ${find2.name}`))
    findElementById("level", (r) => (r.innerHTML = `${formData.replace("{0}", levelData)}`))
    findElementById("level-tab", (r) => (r.style.display = "block"))

    if (perksData.length) {
      findElementById("perks", (r) => (r.innerHTML = `${formData.replace("{0}", perksData)}`))
      perksData = "block"
    } else perksData = "none"
    findElementById("perks-tab", (r) => (r.style.display = perksData))

    if (!find2.isKiller && itemsData.length) {
      findElementById("items", (r) => (r.innerHTML = `${formData.replace("{0}", itemsData)}`))
      itemsData = "block"
    } else itemsData = "none"
    findElementById("items-tab", (r) => (r.style.display = itemsData))

    if (addonsData.length) {
      findElementById("addons", (r) => (r.innerHTML = `${formData.replace("{0}", addonsData)}`))
      addonsData = "block"
    } else addonsData = "none"
    findElementById("addons-tab", (r) => (r.style.display = addonsData))

    if (offeringsData.length) {
      findElementById("offerings", (r) => (r.innerHTML = `${formData.replace("{0}", offeringsData)}`))
      offeringsData = "block"
    } else offeringsData = "none"
    findElementById("offerings-tab", (r) => (r.style.display = offeringsData))

    if (othersData.length) {
      findElementById("others", (r) => (r.innerHTML = `${formData.replace("{0}", othersData)}`))
      othersData = "block"
    } else othersData = "none"
    findElementById("others-tab", (r) => (r.style.display = othersData))
  } catch (err) {
    tryCatch(err)
  }
}

function modalShowGenerator(type) {
  try {
    findElementById("modal-bodyGenerator", (r) => {
      if (type == "show") {
        const formData = `<div class="accordion" id="accordion-generator">{0}</div>`
        const formData2 = `<div class="accordion-item">
          <h2 class="accordion-header" id="header-{0}">
            <button class="accordion-button {5}" type="button" data-bs-toggle="collapse" data-bs-target="#{0}" aria-expanded="{4}" aria-controls="{0}">{1}</button>
          </h2>
          <div id="{0}" class="accordion-collapse collapse {3}" aria-labelledby="header-{0}" data-bs-parent="#accordion-generator">
            <div class="accordion-body">{2}</div>
          </div>
        </div>`
        const formData3 = `<div class="row tab-content">{0}</div>`

        let mainData = `<div class="col-sm-6">
          <label>Overwrite Save Game?</label>
          <select name="isOverwrite" class="form-select" >
            <option selected value="true">true</option>
            <option value="false" disabled>false</option>
          </select>
        </div>
        <div class="col-md-6">
          <label>How much level per character?</label>
          <input type="number" id="genLevel" name="level" class="form-control" min="1" max="50" value="50">
          <div class="form-check form-switch">
            <input type="checkbox" id="isRandomLvl" name="isRandomLvl" class="form-check-input" role="switch"/>
            <label class="form-check-label">Make level random</label>
          </div>
          <div class="form-check form-switch">
            <input type="checkbox" id="isAllPerk" name="isAllPerk" class="form-check-input" role="switch" checked/>
            <label class="form-check-label">Add all perks available</label>
          </div>
        </div>
        <div class="col-sm-6 offset-md-6">
          <label>How much amount per item?</label>
          <input type="number" id="genItem" name="item" class="form-control" min="1" value="2000">
        </div>
        <div class="col-md-6 offset-md-6">
          <label>How much prestige per character?</label>
          <input type="number" id="genPrestige" name="prestige" class="form-control" min="0" max="3" value="3">
          <div class="form-check form-switch">
            <input type="checkbox" id="isLegacy" name="isLegacy" class="form-check-input" role="switch"/>
            <label class="form-check-label">Switch to legacy if available</label>
          </div>
        </div>`
        let formData4 = formData2.replace("{3}", "show").replace("{4}", true).replace("{5}", "")
        mainData = formData4.replaceAll("{0}", "gen-main").replace("{1}", `Main Settings`).replace("{2}", formData3.replace("{0}", mainData))

        let characterData = "",
          survivorData = "",
          survivorCount = 0,
          killerData = "",
          killerCount = 0
        for (const data of _.sortBy(CHARACTERS, ["key", "name"])) {
          let isOwned = ""
          if (_.find(json.characterData, { key: data.key })) isOwned = "checked"
          const text = `<div class="col-sm-4">
            <div class="form-check form-switch">
              <input type="checkbox" name="characters" value="${data.key}" class="form-check-input" role="switch" ${isOwned}/>
              <label class="form-check-label">${data.name}</label>
            </div>
          </div>`
          if (data.isKiller) killerCount++, (killerData += text)
          else survivorCount++, (survivorData += text)
        }
        formData4 = formData2.replace("{3}", "").replace("{4}", false).replace("{5}", "collapsed")
        characterData += formData4.replaceAll("{0}", "gen-survivor").replace("{1}", `Survivors (${survivorCount})`).replace("{2}", formData3.replace("{0}", survivorData))
        characterData += formData4.replaceAll("{0}", "gen-killer").replace("{1}", `Killers (${killerCount})`).replace("{2}", formData3.replace("{0}", killerData))

        let itemsData = "",
          itemsCount = 0
        for (const data of _.sortBy(ITEMS)) {
          itemsCount++
          itemsData += `<div class="col-sm-4">
            <div class="form-check form-switch">
              <input type="checkbox" name="items" value="${data}" class="form-check-input" role="switch" checked/>
              <label class="form-check-label">${data}</label>
            </div>
          </div>`
        }
        itemsData = formData4.replaceAll("{0}", "gen-items-survivor").replace("{1}", `Survivor Items (${itemsCount})`).replace("{2}", formData3.replace("{0}", itemsData))

        let addonsData = "",
          addonsSurvivorData = "",
          addonsSurvivorCount = 0,
          addonsKillerData = "",
          addonsKillerCount = 0
        for (const data of _.sortBy(ADDONS, ["key", "name"])) {
          const text = `<div class="col-sm-4">
            <div class="form-check form-switch">
              <input type="checkbox" name="addons" value="${data.name}" class="form-check-input" role="switch" checked/>
              <label class="form-check-label">${data.name}</label>
            </div>
          </div>`
          if (data.isKiller) addonsKillerCount++, (addonsKillerData += text)
          else addonsSurvivorCount++, (addonsSurvivorData += text)
        }
        addonsData += formData4.replaceAll("{0}", "gen-addons-survivor").replace("{1}", `Survivor Addons (${addonsSurvivorCount})`).replace("{2}", formData3.replace("{0}", addonsSurvivorData))
        addonsData += formData4.replaceAll("{0}", "gen-addons-killer").replace("{1}", `Killer Addons (${addonsKillerCount})`).replace("{2}", formData3.replace("{0}", addonsKillerData))

        let offeringsData = "",
          offeringsSurvivorData = "",
          offeringsSurvivorCount = 0,
          offeringsKillerData = "",
          offeringsKillerCount = ""
        for (const data of _.sortBy(OFFERINGS, ["name"])) {
          const text = `<div class="col-sm-4">
            <div class="form-check form-switch">
              <input type="checkbox" name="offerings" value="${data.name}" class="form-check-input" role="switch" checked/>
              <label class="form-check-label">${data.name}</label>
            </div>
          </div>`
          if (data.isKiller) offeringsKillerCount++, (offeringsKillerData += text)
          else offeringsSurvivorCount++, (offeringsSurvivorData += text)
        }
        offeringsData += formData4.replaceAll("{0}", "gen-offerings-survivor").replace("{1}", `Survivor Offerings (${offeringsSurvivorCount})`).replace("{2}", formData3.replace("{0}", offeringsSurvivorData))
        offeringsData += formData4.replaceAll("{0}", "gen-offerings-killer").replace("{1}", `Killer Offerings (${offeringsKillerCount})`).replace("{2}", formData3.replace("{0}", offeringsKillerData))

        r.innerHTML = formData.replace("{0}", `${mainData}${characterData}${itemsData}${addonsData}${offeringsData}`)
      } else {
        const raw = new FormData(r)
        const data = Object.fromEntries(raw.entries())
        data.characters = raw.getAll("characters")
        data.items = raw.getAll("items")
        data.addons = raw.getAll("addons")
        data.offerings = raw.getAll("offerings")
        if (data["isOverwrite"]) json.characterData = []
        for (let char of data.characters) {
          char = _.find(CHARACTERS, { key: parseInt(char) })
          let form = _.find(json.characterData, { key: char.key })
          if (!form) form = JSON.parse(Base64.decode(DEFAULT_CHARACTER))
          form.key = char.key
          form.data.bloodWebLevel = parseInt(data.level)
          if (data["isRandomLvl"]) form.data.bloodWebLevel = _.random(1, 50)
          if (data.prestige >= 1 && data.prestige <= 3) {
            let genDate
            if (data["isLegacy"]) genDate = generateDate(char, "legacy", data.prestige)
            else genDate = generateDate(char, null, data.prestige)
            form.data.prestigeLevel = parseInt(data.prestige)
            form.data.prestigeDates = genDate
          } else {
            delete form.data.prestigeLevel
            delete form.data.prestigeDates
          }
          for (const perk of PERKS) {
            if (perk.key == char.key) form.data.uniquePerksAdded.push(perk.name.split("_TEACH_")[0])
            if (_.includes(perk.name, "_TEACH_") && perk.key != char.key) continue
            if (data["isAllPerk"] && perk.isKiller != char.isKiller) continue
            if (!data["isAllPerk"] && perk.key != char.key) continue
            if (!data["isAllPerk"] && _.includes(perk.name, "_TEACH_")) {
              form.data.inventory.push({ i: `${perk.name.split("_TEACH_")[0]},3` })
            }
            form.data.inventory.push({ i: `${perk.name},${_.includes(perk.name, "_TEACH_") ? 1 : 3}` })
          }
          if (!char.isKiller) {
            for (const item of data.items) {
              form.data.inventory.push({ i: `${item},${data.item}` })
            }
          }
          for (const addon of ADDONS) {
            if (!_.includes(data.addons, addon.name)) continue
            if (addon.isKiller != char.isKiller) continue
            if (addon.key != char.key && addon.key > 0) continue
            form.data.inventory.push({ i: `${addon.name},${data.item}` })
          }
          for (const offering of OFFERINGS) {
            if (!_.includes(data.offerings, offering.name)) continue
            if (offering.isKiller != char.isKiller) continue
            form.data.inventory.push({ i: `${offering.name},${data.item}` })
          }
          form.data.inventory = _.shuffle(form.data.inventory)
          json.characterData = _.unionBy([form], json.characterData, "key")
        }
        json.characterData = _.sortBy(json.characterData, ["key"])
        loadSaveGame()
      }
    })
  } catch (err) {
    tryCatch(err)
  }
}

function modalShowJson(type) {
  findElementById("showjson", (r) => {
    try {
      if (type == "show") {
        r.value = JSON.stringify(json, null, 2)
      } else {
        json = JSON.parse(r.value)
        loadSaveGame()
      }
    } catch (err) {
      tryCatch(err)
      if (type == "apply") loadSaveGame()
    }
  })
}
