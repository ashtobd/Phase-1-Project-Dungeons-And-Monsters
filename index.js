// Need to fetch data from API, use that data to create spell buttons that,
// when clicked, expand information on the selected spell.

 //initializes fetch

function init(){
    getSpells()
}

function getSpells(){
    fetch('https://www.dnd5eapi.co/api/spells/')
    .then(resp => resp.json())
    .then(data =>{
        makeButtons(data.results)
    })
}

function makeList(spells){
    spells.map(element => {
        fetch(`https://www.dnd5eapi.co/api/spells/${element.index}`)
        .then(resp => resp.json())
        .then(data => {
            const list = document.createElement("ul")
            ul.innerText = data.index
            ul.className = "spell-button"
            button.addEventListener("click", (e) => spellPage(e.target.innerText))
            document.getElementById("spell container").appendChild(ul)
        })
    })
}

function spellPage() {
    fetch(`https://www.dnd5eapi.co/api/classes/${elem}/levels`)
    .then(resp => resp.json())
    .then(data => data.forEach(function(spell) {
        h3 = document.createElement("h3")
        h3.innerText = `spellName: ${spell}.name`
        h3.id = `${spell}.name`
    }))
}
