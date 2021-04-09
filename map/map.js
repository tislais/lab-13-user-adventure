import quests from '../data/quests.js';
import { getUser } from '../local-storage-utils.js';

const mapDiv = document.getElementById('map-div');
const user = getUser();
const header = document.querySelector('header');

header.append(`Eve ${user.name}, ${user.age}`);

const isDead = function(user) {
    return (user.age >= 60) ? true : false;
};

if (isDead(user)) window.location = '../results';

for (let quest of quests) {
    const questLink = document.createElement('a');
    questLink.textContent = quest.title;
    questLink.href = `../quest/?id=${quest.id}`;
    mapDiv.append(questLink);
    
}