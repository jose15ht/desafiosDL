let baseUrl = 'https://api.github.com/users'

const request = async (url) => {
    const results = await fetch(url)
    const response = await results.json()
    return response
}

const getUser = async (nombre) => {
    const url = `${baseUrl}/${nombre}`
    return request(url)
}

const getRepo = async (nombre, pagina, cantidad_repos) => {
    const url = `${baseUrl}/${nombre}/repos?page=${pagina}&per_page=${cantidad_repos}`
    return request(url)
}

const drawUser = user => {
    let userInfo = document.createElement("div")
    userInfo.className =  "col-4"
    userInfo.innerHTML = 
        `
        <h2>Datos de Usuario</h2>
        <ul style="list-style: none;">
            <li><img src="${user.avatar_url}" width="100"></li>
            <li>Nombre de usuario:${user.name}</li>
            <li>Nombre de login:${user.login}</li>
            <li>Cantidad de repositorios:${user.public_repos}</li>
            <li>Localidad:${user.location}</li>
            <li>Tipo de usuario:${user.type}</li>
        </ul>`
    return userInfo
}

const drawRepo = (repo) => {
    let repoInfo = document.createElement("div")
    repoInfo.insertAdjacentHTML("afterbegin", "<h2>Nombre de los repositorios</h2>")
    repoInfo.className = "offset-4 col-4 "
    let list = document.createElement("ul")
    list.setAttribute("style", "list-style: none;")
    repo.forEach( e => {
        list.innerHTML += 
        `<li><a href="${e.html_url}">${e.name}</a></li>`
    })
    repoInfo.appendChild(list)
    return repoInfo
}

const tables = (user, repo) => {
    let result = document.getElementById("resultados")
    result.className = "row"
    let userList = drawUser(user)
    let repoList = drawRepo(repo)
    result.appendChild(userList)
    result.appendChild(repoList)
}

const getParams = event => {
    event.preventDefault()
    let name = document.getElementById("nombre").value
    let pages = document.getElementById("pagina").value
    let numPages = document.getElementById("repoPagina").value 

    Promise.all([getUser(name), getRepo(name,pages,numPages)])
        .then(resp => {
            datosUsusario = resp[0]
            datosRepo = resp[1]
            //operador ternario para verificar que exista el usuario, y si es el caso, saltará un aviso
            datosUsusario.message === "Not Found" 
            ? window.confirm("El usuario no existe")
            : tables(datosUsusario, datosRepo)
        })
    document.querySelector("#resultados").innerHTML = ""
}

const form = document.querySelector("form")
form.addEventListener("submit", getParams)