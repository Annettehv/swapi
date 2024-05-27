const filmList = document.getElementById('filmList');
const filmDetails = document.getElementById('filmDetails');

const fetchFilms = async () => {
    const response = await fetch('https://swapi.dev/api/films/');
    const result = await response.json();
    renderData(result.results);
}


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
        

        li.append(filmTitle, filmDirector, filmProducer, filmDate, filmImage);
        filmList.appendChild(li);
    });
}


  