const getAlbums = async (idAlbum) => {
    let url = 'https://jsonplaceholder.typicode.com/photos'
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        data.forEach((a, index)=> {
            if (a.albumId === idAlbum && index < 20){
                console.log(`${a.title}`)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const aviso = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("%cInformación enviada","color:green; font-size: x-large;"))
        },3000)
    })
}

const deploy = async (param) => {
    aviso()
    return await getAlbums(param)
}
//opcion refactor => IIFE