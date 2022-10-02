const header = document.getElementById("header")
const intro = document.getElementById("intro")
const work = document.getElementById("work")
const ability = document.getElementById("ability")
const contact = document.getElementById("contact")

let icon = document.querySelectorAll(".fa-x")



function openTab(way) {
    way.classList.toggle("hidden")
    hideHeader()
}

function hideHeader() {
    header.classList.toggle("hidden")
}

icon.forEach(icon => {
    icon.addEventListener("click", event => {
        var tab = event.path[1]
        openTab(tab)
    })
})