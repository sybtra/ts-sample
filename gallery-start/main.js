const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageName = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg'
];

/* Declaring the alternative text for each image file */

/* Looping through images */
for (const name of imageName) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${name}`);
    newImage.setAttribute('alt', name);
    newImage.addEventListener('click', function () {
        newImage.getAttribute('src');
        newImage.getAttribute('alt');
        displayedImage.setAttribute('src', `images/${name}`);
    });
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function () {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
