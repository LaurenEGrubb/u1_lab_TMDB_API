const API_KEY = '8e825a0b2871d61a45bb8474e4ccfe4c'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const button = document.querySelector('button')
const input = document.querySelector('input')
const section = document.querySelector('section')

const renderList = (movies) => {
movies.forEach((movie) => {
    let div = document.createElement('div')
    div.innerHTML = `<img src=${IMAGE_BASE_PATH + movie.poster_path} />`
    let h2 = document.createElement('h2')
    h2.innerText = movie.original_title

    section.appendChild(div)
    section.appendChild(h2)
})
}

button.addEventListener('click', async () => {
    const movieTitle = input.value
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=[${movieTitle}&api_key=8e825a0b2871d61a45bb8474e4ccfe4c`)
    
    renderList(response.data.results)
    
})
