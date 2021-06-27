let button = document.querySelector("button")
button.removeAttribute("onclick")

const drawPosts = async (param) => {
    let result = document.getElementById("post-data")
    let listedPosts = document.createElement("ul")
    param.forEach(e => {
        listedPosts.innerHTML += 
        `
        <li>
            <h5>${e.title}</h5>
            <p>${e.body}</p>
        </li>
        `
    })
    result.appendChild(listedPosts)
}

const getPosts = async () => {
    const linkApi = 'https://jsonplaceholder.typicode.com/posts'
    try {
        const response = await fetch(linkApi)
        const data = await response.json()
        let posts = data.slice(0, 20)
        console.log(posts)
        drawPosts(posts)   
    } catch (error) {
        console.log(error)
    } finally {
        return 'Datos enviados'
    }
}

button.addEventListener("click", () => {
    document.getElementById('post-data').replaceChildren()
    getPosts()
})