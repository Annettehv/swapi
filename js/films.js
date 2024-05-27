/* Use try and catch in the fetchfilms and make the rows a 
fixed height so the images has enough space
 */

const filmList = document.getElementById('filmList');
const filmDetails = document.getElementById('filmDetails');

const fetchFilms = async () => {
    const response = await fetch('https://swapi.dev/api/films/');
    const result = await response.json();
    renderData(result.results);
}

// try and catch

fetchFilms();

function renderData(films) {
    films.forEach(film => {
        const li = document.createElement('li');
        const filmTitle = document.createElement('span');
        const filmDirector = document.createElement('span');
        const filmProducer = document.createElement('span');
        const filmDate = document.createElement('span');
        const filmImage = document.createElement('span');
        const filmIcon = document.createElement('img');

        filmTitle.textContent = film.title;
        filmDirector.textContent = film.director;
        filmProducer.textContent = film.producer;
        filmDate.textContent = film.release_date;

        li.classList.add('createdLi');
        filmTitle.classList.add('filmTitle');
        filmDirector.classList.add('filmDirector');
        filmProducer.classList.add('filmProducer');
        filmDate.classList.add('filmDate');
        /* filmImage.classList.add('filmImage'); */

        li.append(filmTitle, filmDirector, filmProducer, filmDate, filmImage);
        filmList.appendChild(li);
    });
}

/* // Create and append an image for each film
const img = document.createElement("img");
img.src = `/assets/images/films/films-${i}.png`; // Use counter i to reference different images
img.alt = film.title;
img.classList.add("filmImg");
image-container.appendChild(img);
i++; // increment counter for next iteration
if (i > 6) { i = 1; } // reset counter if you have only 2 images */
  