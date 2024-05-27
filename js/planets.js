const planetsList = document.getElementById('planetsList');
const planetsDetails = document.getElementById('planetsDetails');

const fetchPlanets = async () => {
    const response = await fetch('https://swapi.dev/api/planets/');
    const result = await response.json();
    renderData(result.results);
}

// try and catch

fetchPlanets();

function renderData(planets) {
    planets.forEach(planets => {
        const li = document.createElement('li');
        const planetsName = document.createElement('span');
        const planetsRotationPeriod = document.createElement('span');
        const planetsDiameter = document.createElement('span');
        const planetsClimate = document.createElement('span');
        const planetsTerrain = document.createElement('span');
        /* const filmIcon = document.createElement('img'); */

        planetsName.textContent = planets.name;
        planetsRotationPeriod.textContent = planets.rotation_period;
        planetsDiameter.textContent = planets.diameter;
        planetsClimate.textContent = planets.climate;
		planetsTerrain.textContent = planets.terrain;

        li.classList.add('createdLi');
        planetsName.classList.add('name');
        planetsRotationPeriod.classList.add('rotation-period');
        planetsDiameter.classList.add('diameter');
        planetsClimate.classList.add('climate');
		planetsTerrain.classList.add('terrain');
        /* filmImage.classList.add('filmImage'); */

        li.append(planetsName, planetsRotationPeriod, planetsDiameter, planetsClimate, planetsTerrain);
        planetsList.appendChild(li);
    });
}