const url = "https://yts.mx/api/v2/list_movies.json?&minimum_rating=5&sort_by=rating&order_by=desc";

const getMovieOn = async () => {
    let response = await fetch(url);
    let data = await response.json();
    
    const movie = data.data.movies[0]; 
    const id = movie.id;
    query_term=id;
    console.log(query_term);

    
    
    
    const urlOn = `https://yts.mx/api/v2/movie_details.json?movie_id=${query_term}`;
    const url4=`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${query_term}`;

    getMovieOnClick(urlOn);
    getSimilar(url4);
    

    
}

const getMovieOnClick = async (urlOn) => {
    let response = await fetch(urlOn);
    let data = await response.json();
    console.log(data);
     const movie = data.data.movie

     const main = document.getElementById('c1');
     main.innerHTML += `<img src="${movie.medium_cover_image}"  class="image1" id="imgOn" > <br> <button class="Download">Download</button> <br> <button class="Watch">Watch Now</button>`; 
    
    const titlePage = document.getElementById('c2');
    titlePage.innerHTML +=`<h1 id="t1">${movie.title}</h1> <br> <h2 class="year">${movie.year}<br>${movie.genres[0]}/${movie.genres[1]}</h1><br>
    <h2>${movie.like_count}</h2> <br> <h2>${movie.rating}/10</h2> `;

    const dec=document.getElementById('desc');
    dec.innerHTML+=`<br><h2 style="margin-bottom:0" class="plot">Plot Summary</h2><br><h4 style="color:#919191; margin-top:5px">${movie.description_intro}<h4><br><h4 style="color:#919191">Date uploaded <br>${movie.date_uploaded
        }</h4>`;

    const abc=movie.yt_trailer_code;
        console.log(abc);
   
  }

  const getSimilar = async (url4) => {
    let response = await fetch(url4);
    let data = await response.json();
    console.log(data);

    const containerIndexes = [1, 2, 3, 4];
    containerIndexes.forEach(index => {
        const movie = data.data.movies[index - 1]; 
        const sm = document.getElementById(`cc${index}`);
        
            sm.innerHTML += `<img src="${movie.medium_cover_image}" class="imageR">`;
        
    });
}


getMovieOn()