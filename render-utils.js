import { getUser } from '../local-storage-utils.js';
import { arcticExpert, languageExpert, jungleExpert, desertExpert } from './data/expert-data.js';

export function renderHeader() { 
    const user = getUser();
    const header = document.querySelector('header');
    const image = document.createElement('img');

    switch (user.expertise) {
        case 'arctic': 
            image.src = `${arcticExpert.age14Image}`;
            break;
        case 'language': 
            image.src = `${languageExpert.age14Image}`;
            break;
        case 'jungle': 
            image.src = `${jungleExpert.age14Image}`;
            break;
        case 'desert': 
            image.src = `${desertExpert.age14Image}`;
            break;
    }

    header.append(image, `Eve ${user.name}, ${user.age} years old.`);
}