
const url = "https://yts.mx/api/v2/list_movies.json?";
const url1="https://yts.mx/api/v2/list_movies.json?&minimum_rating=5&sort_by=rating&order_by=desc";
const ur12="https://yts.mx/api/v2/list_movies.json?&minimum_rating=5&sort_by=rating&order_by=asc";


const getMovie= async () => {
  let response = await fetch(url1);
  let data = await response.json();
  console.log(data);
  
  const containerIndexes = [1, 2, 3, 4];
  containerIndexes.forEach(index => {
    const movie = data.data.movies[index - 1]; 
    const movieElement = document.querySelector(`.image-container${index}`); 
    const posterElement = document.getElementById(`img${index}`);
    const titleElement = document.getElementById(`n${index}of1`);

    posterElement.src = movie ? movie.medium_cover_image : ''; 
    titleElement.textContent = movie ? movie.title : '';

    movieElement.appendChild(posterElement);
  });
}

const getMovieHighestRating = async () => {
  let response = await fetch(ur12);
  let data = await response.json();
  console.log(data);
  
  const containerIndexes = [1, 2, 3, 4, 5, 6, 7, 8];
  containerIndexes.forEach(index => {
    const movie = data.data.movies[index - 1]; 
    const movieElement = document.querySelector(`.image-container${index}of2`); 
    const posterElement = document.getElementById(`img${index}of2`);
    const titleElement = document.getElementById(`n${index}of2`);

    posterElement.src = movie ? movie.medium_cover_image : ''; 
    titleElement.textContent = movie ? movie.title : '';

    movieElement.appendChild(posterElement);
  });
}

const getMovieHighestRating1 = async () => {
  let response = await fetch(ur12);
  let data = await response.json();
  console.log(data);
  
  const containerIndexes = [1, 2, 3, 4, 5, 6, 7, 8];
  containerIndexes.forEach(index => {
    const movie = data.data.movies[index - 1]; 
    const movieElement = document.querySelector(`.image-container${index}of3`); 
    const posterElement = document.getElementById(`img${index}of3`);
    const titleElement = document.getElementById(`n${index}of3`);

    posterElement.src = movie ? movie.medium_cover_image : '';
    titleElement.textContent = movie ? movie.title : '';

    movieElement.appendChild(posterElement);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');

  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
       const query_term = searchInput.value;
       
       const url = `https://yts.mx/api/v2/list_movies.json?query_term=${query_term}`;
       console.log(url);
       getSearchMovie(url);
    }
  });
});

const getSearchMovie = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  const containerIndexes = [1, 2, 3, 4];
  containerIndexes.forEach(index => {
    const movie = data.data.movies[index - 1]; 
    const movieElement = document.querySelector(`.image-container${index}`); 
    const posterElement = document.getElementById(`img${index}`);
    const titleElement = document.getElementById(`n${index}of1`);

    posterElement.src = movie ? movie.medium_cover_image : ''; 
    titleElement.textContent = movie ? movie.title : '';

    movieElement.appendChild(posterElement)
  });
 
}



getMovie();
getMovieHighestRating();
getMovieHighestRating1();


// const urlon = "https://yts.mx/api/v2/list_movies.json?&minimum_rating=5&sort_by=rating&order_by=desc";



//   const getMovieOn = async () => {
//     let response = await fetch(urlon);
//     let data = await response.json();
//     console.log(data);
//     const movie = data.data.movies[0]; 
//     const id = movie.id;
//     const src = movie.medium_cover_image;
//     console.log(src);
    
//     const main = document.getElementById('c1');
//     main.innerHTML += `<img src="${src}" width="210px" height="315px" class="image1" id="imgOn" > <br>  `; 
// }

