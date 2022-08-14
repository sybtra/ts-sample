const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
let insertX = ["Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
];
let insertY = ["the soup kitchen",
    "Disneyland",
    "the White House"
];
let insertZ = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
];
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
let storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    if (customName.value !== '') {
        const name = customName.value;
        console.log(name);
        newStory = newStory.replace('Bob',name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + ' stones';
        newStory = newStory.replace('300 pounds', weight);
        const temperature = Math.round(94-32*5/9) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
