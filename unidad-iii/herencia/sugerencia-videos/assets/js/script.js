const suggestions = (() => {
    let music = document.getElementById("musica")
    let movie = document.getElementById("peliculas")
    let serie = document.getElementById("series")

    const insertMusic = (param) => {
        return music.insertAdjacentHTML('beforeend', param)
    }
    const insertMovie = (param) => {
        return movie.insertAdjacentHTML('beforeend', param)
    } 
    const insertSerie = (param) => {
        return serie.insertAdjacentHTML('beforeend', param)
    }

    return {
        getMusic: (param) => insertMusic(param),
        getMovie: (param) => insertMovie(param),
        getSerie: (param) => insertSerie(param)
    }
})()

let musicSuggestion = '<iframe width="560" height="315" src="https://www.youtube.com/embed/j4PSvq3BDPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
let movieSuggestion = '<iframe width="560" height="315" src="https://www.youtube.com/embed/kPVbYBYN--I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
let serieSuggestion = '<iframe width="560" height="315" src="https://www.youtube.com/embed/CC4dWgEJq_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

class Video {
    constructor({music: videoMusic, movie: videoMovie, serie: videoSeries}){
        let _videoMusic = videoMusic
        let _videoMovie = videoMovie
        let _videoSeries = videoSeries
        this.getMusic = () => _videoMusic
        this.setMusic = (nMusic) => _videoMusic = nMusic
        this.getMovie = () => _videoMovie  
        this.setMovie = (nMovie) => _videoMovie = nMovie
        this.getSerie = () => _videoSeries
        this.setSerie = (nSerie) => _videoSeries = nSerie 
    }
    get videoMusic() {
        return this.getMusic()
    }
    get videoMovie(){
        return this.getMovie()
    }
    get videoSeries() {
        return this.getSerie()
    }
    set videoMusic(nMusic){
        this.setMusic(nMusic)
    }
    set videoMovie(nMovie){
        this.setMovie(nMovie)
    }
    set videoSeries(nSerie){
        this.setSerie(nSerie)
    }

    showMusic(){
        return suggestions.getMusic(this.videoMusic)
    }
    showMovie(){
        return suggestions.getMovie(this.videoMovie)
    }
    showSeries(){
        return suggestions.getSerie(this.videoSeries)
    }
}

class Music extends Video{
    showMusic(){
        return suggestions.getMusic(this.videoMusic)
    }
}

class Movie extends Video{
    showMovie(){
        return suggestions.getMovie(this.videoMovie)
    }
}

class Series extends Video{
    showSeries(){
        return suggestions.getSerie(this.videoSeries)
    }
}

let musicP = new Music({music: musicSuggestion})
let movieP = new Movie({movie: movieSuggestion})
let seriesP = new Series({serie: serieSuggestion})

musicP.showMusic()
movieP.showMovie()
seriesP.showSeries()