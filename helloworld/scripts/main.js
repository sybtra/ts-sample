var myImage = document.querySelector('img');
myImage.setAttribute('alt', 'initial image');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
        myImage.setAttribute('alt', 'my image is firefox2.png');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
        myImage.setAttribute('alt', 'my image is firefox-icon.png');
    }
};
var myButton = document.querySelector('button');
myButton.onclick = function () {
    setUserName();
};
var myHeading = document.querySelector('h1');
if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, by getting ' + storedName;
}
function setUserName() {
    var myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}
