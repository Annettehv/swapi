const vehiclesList = document.getElementById('vehiclesList');
const vehiclesDetails = document.getElementById('vehiclesDetails');

const fetchVehicles = async () => {
    const response = await fetch('https://swapi.dev/api/vehicles/');
    const result = await response.json();
    renderData(result.results);
}


fetchVehicles();

function renderData(vehicles) {
    vehicles.forEach(vehicles => {
        const li = document.createElement('li');
        const vehiclesName = document.createElement('span');
        const vehiclesModel = document.createElement('span');
        const vehiclesManufacturer = document.createElement('span');
        const vehiclesCrew = document.createElement('span');
        const vehiclesPassengers = document.createElement('span');

        vehiclesName.textContent = vehicles.name;
        vehiclesModel.textContent = vehicles.model;
        vehiclesManufacturer.textContent = vehicles.manufacturer;
        vehiclesCrew.textContent = vehicles.crew;
		vehiclesPassengers.textContent = vehicles.passengers;

        li.classList.add('createdLi');
        vehiclesName.classList.add('name');
        vehiclesModel.classList.add('model');
        vehiclesManufacturer.classList.add('manufacturer');
        vehiclesCrew.classList.add('crew');
		vehiclesPassengers.classList.add('passengers');

        li.append(vehiclesName, vehiclesModel, vehiclesManufacturer, vehiclesCrew, vehiclesPassengers);
        vehiclesList.appendChild(li);
    });
}