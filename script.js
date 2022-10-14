// console.log(`working`)

let button = document.querySelector(`#searchButton`)





async function getData (event) {
    event.preventDefault()
    let textInput = document.querySelector(`#inputBar`).value
   
   
//aatrox
    if(textInput == `aatrox`) {
    fetch(`http://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/champion/Aatrox.json`)

        .then(res => {
        return res.json()
        })
        .then(res => {
            console.log(`success!`, res.data.Aatrox.name, res)
            let champName = document.querySelector(`#championName`)
            champName.innerText = res.data.Aatrox.name

            console.log(`success!`, res.data.Aatrox.title, res)
            let champTitle = document.querySelector(`#championTitle`)
            champTitle.innerText = res.data.Aatrox.title

            console.log(`success!`, res.data.Aatrox.lore)
            let champLore = document.querySelector(`#championLore`)
            champLore.innerText = res.data.Aatrox.lore

            console.log(`success!`, res.data.Aatrox.tags)
            let champTags = document.querySelector(`#championTags`)
            champTags.innerText = res.data.Aatrox.tags


                

        })
        .catch(err => {
            console.log(`error!`, err)
    })
    }

//ahri
    if(textInput == `ahri`) {
        fetch(`http://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/champion/Ahri.json`)
    
            .then(res => {
            return res.json()
            })
            .then(res => {
                console.log(`success!`, res.data.Ahri.name, res)
                let champName = document.querySelector(`#championName`)
                champName.innerText = res.data.Ahri.name

                console.log(`success!`, res.data.Ahri.lore)
                let champLore = document.querySelector(`#championLore`)
                champLore.innerText = res.data.Ahri.lore
            })
            .catch(err => {
                console.log(`error!`, err)
        })
        }
    }








//event listeners
button.addEventListener(`click`, getData)