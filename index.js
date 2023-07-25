document.addEventListener("DOMContentLoaded", init)
function init() {
  addSpells()
  filterSearch()
}

function addSpells(){
    fetch('https://www.dnd5eapi.co/api/spells/')
    .then(resp => resp.json())
    .then(data => makeButtons(data.results))

function makeButtons(spells){
  spells.map(element => {
    const button = document.createElement("button")
    button.innerText = element.index
    button.className = "spell button"
    button.addEventListener("click", (e) => spellPage(e.target.innerText))
          document.getElementById("buttons").appendChild(button)
  })
}

function spellPage(target){
  document.getElementById("spell name").remove()
  fetch(`https://www.dnd5eapi.co/api/spells/${target}/`)
  .then(resp => resp.json())
  .then(data => {
    h3 = document.createElement("h3")
    p1 = document.createElement("p")
    p2 = document.createElement("p")
    p3 = document.createElement("p")
    p4 = document.createElement("p")
    h3.innerText = `Spell Name: ${data.name}`
    p1.innerText = `Range: ${data.range}`
    p2.innerText = `Casting Time: ${data.casting_time}`
    p3.innerText = `Components: ${data.components}`
    p4.innerText = `Description: ${data.desc}`
    h3.appendChild(p1)
    p1.appendChild(p2)
    p2.appendChild(p3)
    p3.appendChild(p4)
    document.getElementById("spell").appendChild(h3)
    h3.id = "spell name"
    })
}}
