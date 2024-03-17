const fetchFilms = async()=>{
	const response = await fetch('https://swapi.dev/api/films/');
	const result = await response.json();
	console.log(result.results);

	
}

fetchFilms();