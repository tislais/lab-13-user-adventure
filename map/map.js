import quests from '../data/quest-data.js';
import { getUser } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';

const mapDiv = document.getElementById('map-div');
const user = getUser();

renderHeader();

const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
audioSource.src = '../assets/music_01.ogg';
audio.load();

const isDead = function(user) {
    if (user.dead === true) return true;
    return (user.age >= 60) ? true : false;
};

if (isDead(user)) window.location = '../results';

for (let quest of quests) {
    const questLink = document.createElement('a');
    questLink.textContent = quest.title;
    questLink.href = `../quest/?id=${quest.id}`;
    questLink.classList.add(`${quest.id}-link`);
    mapDiv.append(questLink);
}