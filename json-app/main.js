async function populate() {
    // retrieving json resources
    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    // make request with that resources
    const request = new Request(requestURL);
    // getting response with fetch api
    const response = await fetch(request);
    // converting response data in json
    const superHeroes = await response.json();
    // populating header with superHeroes
    populateHeader(superHeroes);
    // populating superHeroes
    populateHeroes(superHeroes);
}

function populateHeader(obj) {
    // retrieve header
    const header = document.querySelector('header');
    // creates myH1
    const myH1 = document.createElement('h1');
    // fills myH1 textContent with obj values
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
    // creates paragraph
    const myPara = document.createElement('p');
    // fills myPara textContent with obj values
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
}
function populateHeroes(obj) {
    // retrieves section
    const section = document.querySelector('section');
    // retrieves heroes
    const heroes = obj.members;

    // loops through each heroes and display on thepage
    for (const hero of heroes) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = 'Superpowers:';

        const superPowers = hero.powers;
        for (const power of superPowers) {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
populate();

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(JSON.parse(text)))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = 0;

// Add your code here
for (const cat of catString) {
    motherInfo += `${cat.name}, `;
    for (const kitten of cat.kittens) {
        total++;
        if (kitten.gender === "m") {
            male++;
        } else {
            female++;
        }
   }
}
kittenInfo = `Total: ${total}, male: ${male} and female: ${female}.`;
let spaceIndex = motherInfo.indexOf(' ', motherInfo.length-10);
//motherInfo += motherInfo.slice(0,spaceIndex) + ' and ';
motherInfo = motherInfo.slice(0,motherInfo.lastIndexOf() -1) + '.';
// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    