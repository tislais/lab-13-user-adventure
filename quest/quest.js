import { renderHeader } from '../render-utils.js';
import quests from '../data/quest-data.js';
import { findById } from '../utils.js';
import { getUser, updateUser } from '../local-storage-utils.js';


const user = getUser();
renderHeader();

const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');


if (user.age < 10) {
    audioSource.src = '../assets/music_03.ogg';
} else if (user.age >= 10 && user.age < 20) {
    audioSource.src = '../assets/music_08.ogg';
} else if (user.age >= 20 && user.age < 30) {
    audioSource.src = '../assets/music_06.ogg';
} else if (user.age >= 30 && user.age < 40) {
    audioSource.src = '../assets/music_11.ogg';
} else if (user.age >= 40 && user.age < 50) {
    audioSource.src = '../assets/music_02.ogg';
} else {
    audioSource.src = '../assets/music_12.ogg';
}

audio.load();

const questDiv = document.getElementById('quest-div');
const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
const quest = findById(quests, questId);
const image = document.createElement('img');
const h3 = document.createElement('h3');
const pIntro = document.createElement('p');
const button = document.createElement('button');
const pQuestion = document.createElement('p');

image.src = `../assets/${quest.image}`;
h3.textContent = quest.title;
pIntro.textContent = quest.description;

const form = document.createElement('form');

for (let item of quest.choices) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    const description = document.createElement('div');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = item.id;
    description.textContent = item.description;

    label.append(radio, description);
    form.append(label);
}

pQuestion.textContent = `How will you spend your time at ${quest.title}?`;

button.textContent = 'Choose';
form.append(button);
questDiv.append(h3, image, pIntro, pQuestion, form); 

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const choiceId = formData.get('choice');
    const choice = findById(quest.choices, choiceId);
    const result = document.createElement('p');
    const mapButton = document.createElement('button');
    updateUser(questId, choice);

    pIntro.classList.add('hidden');
    pQuestion.classList.add('hidden');
    form.classList.add('hidden');
    result.textContent = choice.result;
    mapButton.textContent = 'Back to map';
    questDiv.append(result, mapButton);

    mapButton.addEventListener('click', () => {
        window.location = '../map';
    });



    //window.location = '../map';
});