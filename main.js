import {API_KEY, BASE_URL, IMG_URL, language} from "./api.js"


function getMovie(id){
    axios.get(`${BASE_URL}${id}?${API_KEY}&${language}`)
    .then(response => {
        console.log(response.data)
        
        if (response.data.adult == true){
            // cover.src = null
            // cover.alt = response.data.title
            console.log("+18")
        }else{
            title.textContent = response.data.title
            runtime.textContent = response.data.runtime
            overview.textContent = response.data.overview
            release_date.textContent = response.data.release_date
            const arrayGenres =[]
            for (const genres_data of response.data.genres) {
                console.log(genres_data.name)
                arrayGenres.push(genres_data.name)
            }
            genres.textContent = arrayGenres
            cover.src = IMG_URL+response.data.poster_path
        }

    })
    .catch(error => console.error(error))
}


// function latestMovie(){
//     axios.get(`https://api.themoviedb.org/3/movie/latest?${API_KEY}&language=en-US`)
//     .then(response => console.log(response.data.id))
//     .catch(error => console.error(error))
// }

const button = document.getElementById("find_movie")
button.addEventListener("click", function(){
    var random 
    // console.log("clicou")
    const min = Math.ceil(1);
    const max = Math.floor(1060766);
    random = Math.floor(Math.random() * (max - min) + min);
    getMovie(random)
    
})


// latestMovie()



// console.log(random)

