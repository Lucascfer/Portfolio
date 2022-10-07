const header = document.getElementById("header")
const theme = document.getElementById("theme")
const headerText = document.querySelector(".inner")
var icon = document.querySelectorAll(".fa-x")

// Para fechar a aba aberta
icon.forEach(icon => {
    icon.addEventListener("click", event => {
        const tab = event.path[1]
        openTab(tab)
    })
})

// Para navegação
function navigation() {
    const nav = [
        aboutMe = document.querySelectorAll("li")[0],
        projects = document.querySelectorAll("li")[1],
        skills = document.querySelectorAll("li")[2],
        contacts = document.querySelectorAll("li")[3],
    ]

    // nav.forEach(nav => {
    //     nav.addEventListener("click", e => {
    //         console.log(e)
    //     })
    // })

    aboutMe.addEventListener("click", () => {
        openTab(intro)
    })

    projects.addEventListener("click", () => {
        openTab(work)
    })

    skills.addEventListener("click", () => {
        openTab(ability)
    })

    contacts.addEventListener("click", () => {
        openTab(contact)
    })
}
navigation()

//Para troca de visualização
function openTab(way) {
    way.classList.toggle("hidden")
    header.classList.toggle("hidden")
}

//preload
headerText.classList.add("preload")
setTimeout(() => {
    headerText.classList.remove("preload")
}, 500)

//troca de tema
theme.addEventListener("click", () => {
    document.querySelector('body').classList = [theme.checked ? 'themeLight' : 'themeDark']
    headerText.classList.add("preload")
    setTimeout(() => {
        headerText.classList.remove("preload")
    }, 1000)
})
