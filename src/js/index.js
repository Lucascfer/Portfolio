import { header, theme, headerText, icon, aboutMe, projects, skills, contacts } from "./variables.js"

//preload
setTimeout(() => {
    headerText.classList.remove("preload")
}, 500)

// Para fechar a aba aberta
icon.forEach(icon => {
    icon.addEventListener("click", event => {
        const tab = event.composedPath()[1]
        openTab(tab)
    })    
})    

// Para navegação
function navigation() {
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

//troca de tema
theme.addEventListener("click", () => {
    document.querySelector('body').classList = [theme.checked ? 'themeLight' : 'themeDark']
    headerText.classList.add("preload")
    setTimeout(() => {
        headerText.classList.remove("preload")
    }, 1000)
})

//repositório do GitHub
async function repos() {
    const response = await fetch("https://api.github.com/users/Lucascfer/repos?per_page=10")
    return await response.json()
}

function getUserProfile() {
    repos().then(reposData => {
        let userRepositories = ""
        reposData.forEach(repo => {
            userRepositories += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })
        document.querySelector("#repositories").innerHTML += `<ul>${userRepositories}</ul>`
    })
}
getUserProfile()