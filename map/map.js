import quests from '../data/quest-data.js';
import { getUser } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';

const mapDiv = document.getElementById('map-div');
const user = getUser();

renderHeader();

const isDead = function(user) {
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