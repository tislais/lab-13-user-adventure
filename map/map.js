import quests from '../data/quest-data.js';
import { getUser } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';

const user = getUser();
const isDead = function(user) {
    if (user.dead === true) return true;
    return (user.age >= 60) ? true : false;
};

if (isDead(user)) window.location = '../results';

const mapDiv = document.getElementById('map-div');

renderHeader();

const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
audioSource.src = '../assets/music_01.ogg';
//audio.load();


for (let quest of quests) {
    const questLink = document.createElement('a');
    questLink.textContent = quest.title;
    questLink.href = `../quest/?id=${quest.id}`;
    questLink.classList.add(`${quest.id}-link`);

    const completed = user.completed[quest.id];
    const completedLink = document.createElement('div');
    completedLink.classList.add(`completed`);
    completedLink.classList.add(`${quest.id}-completed`);
    completedLink.textContent = quest.title;

    questLink.classList.remove('hidden');
    completedLink.classList.add('hidden');

    if (completed) {
        questLink.classList.add('hidden');
        completedLink.classList.remove('hidden');
    }

    if (user.age < 10 && quest.id !== 'home') {
        questLink.classList.add('hidden');
    } else if (user.age < 50 && quest.id === 'apocalypse') {
        questLink.classList.add('hidden');
    } 
    mapDiv.append(questLink, completedLink);
}