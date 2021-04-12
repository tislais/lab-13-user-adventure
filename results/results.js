import { getUser } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';

renderHeader();
const user = getUser();
const resultsDiv = document.getElementById('results-div');
const youDiedDiv = document.createElement('div');
const ageDiv = document.createElement('div');
const causeDiv = document.createElement('div');
const familyDiv = document.createElement('div');
const button = document.createElement('button');
const image = document.createElement('img');

image.src = '../assets/dead.png';
youDiedDiv.textContent = `You died.`;
ageDiv.textContent = `Age: ${user.age} years`;
causeDiv.textContent = `Cause: ${user.death}`;
button.textContent = 'ok';
familyDiv.textContent = `Family: Thriving`;



resultsDiv.append(image, youDiedDiv, ageDiv, causeDiv, familyDiv, button);

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
})