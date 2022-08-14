/** output the pressed key */
/*const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');
textBox.addEventListener('keydown', (event) => output.textContent = `vous avez appuyé sur "${event.key}".`);*/

/** form submission event checker */
/*const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});*/

/** parents event handler */
/* const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
container.addEventListener('click', handleClick);*/

/** video event handler */
/**const btn = document.querySelector('button');
const videoBox = document.querySelector('div');

function displayVideo() {
  if (videoBox.getAttribute('class') === 'hidden') {
    videoBox.setAttribute('class','showing');
    videoBox.setAttribute('alt','showing');
  }
}

btn.addEventListener('click', displayVideo);
videoBox.addEventListener('click', () => videoBox.setAttribute('class', 'hidden'));

const video = document.querySelector('video');

video.addEventListener('click', (e) => {
    e.stopPropagation();
    video.play();
});*/

/** logiing event phases */
/*
 * source 1: https://dom.spec.whatwg.org/#dom-event-eventphase
 * source 2: https://stackoverflow.com/a/4616720/15266715
*/
const evtPhasestr = ["NONE: ", "CAPTURING_PHASE: ", "AT_TARGET: ", "BUBBLING_PHASE: "];
const logElement = document.getElementById('log');

function log(msg) {
    logElement.innerHTML += (`<p>${msg}</p>`);
}

function phase(evt) {
    log(evtPhasestr[evt.eventPhase] + this.firstChild.nodeValue.trim());
}
function gphase(evt) {
    log(evtPhasestr[evt.eventPhase] + evt.currentTarget.toString().slice(8,-1));
}

function clearOutput(evt) {
    evt.stopPropagation();
    logElement.innerHTML = '';
}

const divs = document.getElementsByTagName('div');
for (const div of divs) {
  div.addEventListener('click', phase, true);
  div.addEventListener('click', phase, false);
}

document.addEventListener('click', gphase, true);
document.addEventListener('click', gphase, false);
window.addEventListener('click', gphase, true);
window.addEventListener('click', gphase, false);

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearOutput);
