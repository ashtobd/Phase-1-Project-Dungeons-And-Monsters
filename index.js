//API https://api.open5e.com/v1/monsters

const monsterDataTemplate = doucument.querySelector("[monster-data-template")
const monsterContainer = document.querySelector("[monster-container]")

fetch("https://api.open5e.com/v1/monsters")
.then(res => res.json())
.then(data => {
    console.log(data)
})