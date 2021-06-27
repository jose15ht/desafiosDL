(() => {
    const linkApi = 'https://randomuser.me/api/?results=10'
    const getUsers = async (url) => {
        try {
            let response = await fetch(url)
            let data = await response.json()
            console.log(data.results)
            return data.results
        } catch (error) {
            console.log(error)
        } finally {
            console.log("Datos enviados")
        }
    }
    const drawUsers = async () => {
        const pUsers = document.getElementById("user-data")
        const dataUsers = await getUsers(linkApi)
        dataUsers.forEach(e => {
            pUsers.innerHTML += 
            `
            <p><img src="${e.picture.large}"</p>
            <p>${e.name.first} ${e.name.last}</p>
            <p>${e.email}</p>
            <p>${e.cell}</p>
            `
        })
        return pUsers
    }

    return {
        getData: async () => {
            drawUsers()
        }
    }
})().getData()

