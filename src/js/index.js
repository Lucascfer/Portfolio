const header = document.getElementById("header")

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
const headerText = document.querySelector('.inner')
headerText.classList.add('preload')

console.log(headerText)


setTimeout(() => {
    headerText.classList.remove('preload')
}, 500)
