const peopleList = document.getElementById('peopleList');
const peopleDetails = document.getElementById('peopleDetails');

const fetchPeople = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const result = await response.json();
    renderData(result.results);
}


fetchPeople();

function renderData(people) {
    people.forEach(people => {
        const li = document.createElement('li');
        const peopleName = document.createElement('span');
        const peopleBirthyear = document.createElement('span');
        const peopleHaircolor = document.createElement('span');
        const peopleEyecolor = document.createElement('span');
        const peopleGender = document.createElement('span');

        peopleName.textContent = people.name;
        peopleBirthyear.textContent = people.birth_year;
        peopleHaircolor.textContent = people.hair_color;
        peopleEyecolor.textContent = people.eye_color;
		peopleGender.textContent = people.gender;

        li.classList.add('createdLi');
        peopleName.classList.add('name');
        peopleBirthyear.classList.add('birthyear');
        peopleHaircolor.classList.add('haircolor');
        peopleEyecolor.classList.add('eyecolor');
		peopleGender.classList.add('gender');

        li.append(peopleName, peopleBirthyear, peopleHaircolor, peopleEyecolor, peopleGender);
        peopleList.appendChild(li);
    });
}