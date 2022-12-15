
import {API_KEY, BASE_URL, IMG_URL, language, include_adult} from "./api.js"


async function getMovie(id){
    try{

        const getMovie = await axios.get(`${BASE_URL}${id}?${API_KEY}&${language}&${include_adult}`)
    
        const movie = getMovie.data

        // const date = new Date(movie.release_date)

        console.log(movie)
    
        // const day = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate()
        // const month_fix = parseInt(date.getMonth()) + 1;
        // const month = month_fix < 10 ? `0${month_fix}`: month_fix
  
        // console.log(month_fix)

        if(movie.adult === true){
            console.error("+18: Refaça sua busca")
            alert()
        }else{
            title.textContent = movie.original_title
            runtime.textContent = movie.runtime + " min"
            overview.textContent = movie.overview
            // release_date.textContent = `${day}/${month}/${date.getFullYear()}`
            const arrayGenres =[]
            for (const genres_data of movie.genres) {
                arrayGenres.push(genres_data.name)
            }
            genres.textContent = arrayGenres
            cover.src = IMG_URL+movie.poster_path
            cover.alt = movie.title
        }
        
           
    }catch(e){
        console.error(e.response.data)
        alert()

    }
}

const button = document.getElementById("find_movie")
button.addEventListener("click", function(){
   
    getMovie(randomNumber())
    
})

function randomNumber(){
    var random 
    const min = Math.ceil(1);
    const max = Math.floor(1060766);
    random = Math.floor(Math.random() * (max - min) + min);
    return random
}

function alert(){
    const span = document.getElementById("span_button")
    const img = document.getElementById("img_button");
    
    span.style.color = "red";
    span.innerText = "Tente Novamente";
    img.style.animation = "pulse 1s infinite ease-in-out alternate";
    button.addEventListener("click", ()=>{
        span.style.color = "black";
        img.style.animation = "none";
        span.innerText = "Encontrar Filme";
    })
}
