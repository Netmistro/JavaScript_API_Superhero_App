// My Token
const apiToken = '10158355821080194';

// Function for random Superhero
const randomSuperHero = () => {
    let randomHero = Math.floor(Math.random() * 731) + 1;
    return randomHero;
};

// Grab elements
let heroImage = document.querySelector('.img');
let superheroName = document.querySelector('.superhero-name');
let realName = document.querySelector('.real-name');

// Superhero API Link
// The link format to get a Superhero
// https://superheroapi.com/api/access-token
const superHeroAPI = `https://superheroapi.com/api.php/${apiToken}/`;

// Define Constants here
const superheroImage = document.querySelector('.superhero-image');
const eyeColor = document.querySelector('.eye-color');


// Function to get the Superhero
const getSuperHero = (id, name) => {
    fetch(superHeroAPI + randomSuperHero())
        .then(response => response.json())
        .then(json => {
            if (json.response == 'success') {
                console.log(json);
                // Define all variables to use
                let imageEl = json.image.url;
                let nameEl = json.name;
                let bioNameEl = json.biography["full-name"];

                // Appearance
                let eyeColorEl = json.appearance["eye-color"];
                eyeColor.innerText = "Eye Color : " + eyeColorEl;
                // Send all elements to the document
                heroImage.src = imageEl;
                superheroName.innerText = "Super-Hero : " + nameEl;
                realName.innerText = "Real Name : " + bioNameEl;
            } else {
                console.log('Cannot get Hero at this time');
            }

        });
};

// Call function getSuperHero
getSuperHero();