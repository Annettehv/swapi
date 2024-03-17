const ul = document.querySelector('ul');

const fetchFilms = async()=>{
	const response = await fetch('https://swapi.dev/api/films/');
	const result = await response.json();
	console.log(result.results);
	renderData(result.results)

	
}

fetchFilms();

function renderData(films){
	films.forEach(film => {
		// create elements
		const li = document.createElement('li');
		const filmTitle = document.createElement('span');
		const filmDirector = document.createElement('span');
		const filmProducer = document.createElement('span');
		const filmDate = document.createElement('span');
		const filmImage = document.createElement('span');
		const filmIcon = document.createElement('img');

		// append elements
		ul.append(li);
		li.append(filmTitle, filmDirector, filmProducer, filmDate, filmImage);
		filmImage.append(filmIcon);

		// setting the content of the created elements
		filmTitle.textContent = film.title;
		filmDirector.textContent = film.director;
		filmProducer.textContent = film.producer;
		filmDate.textContent = film.release_date;
/* 		filmImage.src = user.image;*/

		// adding classes to elements
		li.classList.add('createdLi');
		filmTitle.classList.add('filmTitle');
		filmDirector.classList.add('filmDirector');
		filmProducer.classList.add('filmProducer');
		filmDate.classList.add('filmDate');
		filmImage.classList.add('filmImage');
})
}