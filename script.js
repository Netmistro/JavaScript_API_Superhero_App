// My Token
const apiToken = '10158355821080194';

// Function for random Superhero
const randomSuperHero = () => {
    let randomHero = Math.floor(Math.random() * 731) + 1;
    return randomHero;
};

// Grab elements HERE

// Buttons
const randomSuperHeroBtn = document.querySelector('.random-hero');
const searchHeroBtn = document.querySelector('.search-hero');

// Search Field
const superHeroInput = document.getElementById('superhero-input');

// Header Elements
let heroImage = document.querySelector('.img');
let superheroName = document.querySelector('.superhero-name');
let realName = document.querySelector('.real-name');

// Body Elements
const superheroImage = document.querySelector('.superhero-image');
const eyeColor = document.querySelector('.eye-color');
const gender = document.querySelector('.gender');
const haircolor = document.querySelector('.hair-color');
const heightImp = document.querySelector('.height-imp');
const heightMetric = document.querySelector('.height-metric');
const weightImp = document.querySelector('.weight-imp');
const weightMetric = document.querySelector('.weight-metric');

// Biography Elements
const alignment = document.querySelector('.alignment');
const alterEgo = document.querySelector('.alter-ego');
const placeOfBirth = document.querySelector('.place-of-birth');
const publisher = document.querySelector('.publisher');

// Power Statistics
const combat = document.querySelector('.combat');
const durability = document.querySelector('.durability');
const intelligence = document.querySelector('.intelligence');
const power = document.querySelector('.power');
const speed = document.querySelector('.speed');
const strength = document.querySelector('.strength');

// Occupation
const workBase = document.querySelector('.base');
const occupation = document.querySelector('.occupation');

// Superhero API Link
// The link format to get a Superhero
// https://superheroapi.com/api/access-token
const superHeroAPI = `https://superheroapi.com/api.php/${apiToken}/`;

// Function to get the Superhero
const getRandomSuperHero = () => {
    let myHero = randomSuperHero();
    const superHeroID = myHero;
    // Log the ID
    console.log(superHeroID);
    fetch(superHeroAPI + myHero.toString())
        .then(response => response.json())
        .then(json => {
            if (json.response == 'success') {
                console.log(json);
                headerInformation(json);
                appearance(json);
                bioInformation(json);
                powerStatsInfomation(json);
                occupationInformation(json);
            } else {
                console.log('Cannot get Hero at this time');
            }
        }).catch(function (err) {
            console.log(err);
        });
};

// Random Superhero
randomSuperHeroBtn.addEventListener('click', () => {
    getRandomSuperHero();
});

// Search Superhero
searchHeroBtn.addEventListener('click', (e) => {
    console.log(superHeroInput.innerText);
});

const headerInformation = (json, superHeroID) => {
    // Appearance variables from JSON
    let imageEl = json.image.url;
    let nameEl = json.name;
    let bioNameEl = json.biography["full-name"];

    // Populate the DOM with the results
    heroImage.src = imageEl;
    superheroName.innerText = "Super-Hero : " + nameEl;
    realName.innerText = "Real Name : " + bioNameEl;
};

const appearance = (json) => {
    // Appearance variables from JSON
    let eyeColorEl = json.appearance["eye-color"];
    let genderE1 = json.appearance.gender;
    let hairColorE1 = json.appearance['hair-color'];
    let heightImpE1 = json.appearance.height[0];
    let heightMetricE1 = json.appearance.height[1];
    let weightImpE1 = json.appearance.weight[1];
    let weightMetricE1 = json.appearance.weight[1];

    // Populate the DOM with the results
    eyeColor.innerText = "Eye Color : " + eyeColorEl;
    gender.innerText = "Gender : " + genderE1;
    haircolor.innerText = "Hair Color : " + hairColorE1;
    heightImp.innerText = "Height (Imp.) : " + heightImpE1;
    heightMetric.innerText = "Height (Metric) : " + heightMetricE1;
    weightImp.innerText = "Weight (Imp.) : " + weightImpE1;
    weightMetric.innerText = "Weight (Metric) : " + weightMetricE1;
};

const bioInformation = (json) => {
    // Appearance variables from JSON
    let alignmentE1 = json.biography.alignment;
    let alterEgosE1 = json.biography["alter-egos"];
    let placeOfBirthE1 = json.biography["place-of-birth"];
    let publisherE1 = json.biography.publisher;

    // Populate the DOM with the results
    alignment.innerText = "Alignment : " + alignmentE1.toString().toUpperCase();
    alterEgo.innerText = "Alter Egos : " + alterEgosE1;
    placeOfBirth.innerText = "Place of Birth : " + placeOfBirthE1;
    publisher.innerText = "Publisher : " + publisherE1;
};

const powerStatsInfomation = (json) => {
    // Appearance variables from JSON
    let combatE1 = json.powerstats.combat;
    let durabilityE1 = json.powerstats.durability;
    let intelligenceE1 = json.powerstats.intelligence;
    let powerE1 = json.powerstats.power;
    let speedE1 = json.powerstats.speed;
    let strengthE1 = json.powerstats.strength;

    // Populate the DOM with the results
    combat.innerText = "Combat : " + combatE1;
    durability.innerText = "Durability : " + durabilityE1;
    intelligence.innerText = "Intelligence : " + intelligenceE1;
    power.innerText = "Power : " + powerE1;
    speed.innerText = "Speed : " + speedE1;
    strength.innerText = "Strength : " + strengthE1;
};

const occupationInformation = (json) => {
    // Appearance variables from JSON
    let workBaseE1 = json.work.base;
    let occupationE1 = json.work.occupation;

    // Populate the DOM with the results
    workBase.innerText = "Base : " + workBaseE1;
    occupation.innerText = "Occupation : " + occupationE1;
};