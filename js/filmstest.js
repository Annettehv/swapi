const filmList = document.getElementById('filmList');
const filmDetails = document.getElementById('filmDetails');

const fetchFilms = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/films/');
        const result = await response.json();
        const films = result.results;

        // Fetch images asynchronously for each film
        const filmsWithImages = await Promise.all(films.map(async (film) => {
            const imageResponse = await fetch(`./images/${film.title.toLowerCase().replace(/ /g, '_')}.jpg`);
            const imageURL = imageResponse.ok ? imageResponse.url : './images/default.jpg';
            return { ...film, imageURL };
        }));

        renderData(filmsWithImages);
    } catch (error) {
        console.error('Error fetching films:', error);
    }
}

fetchFilms();

function renderData(films) {
    films.forEach(film => {
        const li = document.createElement('li');
        const filmTitle = document.createElement('span');
        const filmDirector = document.createElement('span');
        const filmProducer = document.createElement('span');
        const filmDate = document.createElement('span');
        const filmImage = document.createElement('img');

        filmTitle.textContent = film.title;
        filmDirector.textContent = film.director;
        filmProducer.textContent = film.producer;
        filmDate.textContent = film.release_date;
        filmImage.src = film.imageURL; // Use the fetched image URL

        li.classList.add('createdLi');
        filmTitle.classList.add('filmTitle');
        filmDirector.classList.add('filmDirector');
        filmProducer.classList.add('filmProducer');
        filmDate.classList.add('filmDate');
        filmImage.classList.add('filmImage');

        li.append(filmTitle, filmDirector, filmProducer, filmDate, filmImage);
        filmList.appendChild(li);
    });
}
