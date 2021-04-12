import { getUser } from './local-storage-utils.js';
import { arcticExpert, languageExpert, jungleExpert, desertExpert } from './data/expert-data.js';


export function renderHeader() { 
    const user = getUser();
    const header = document.getElementById('header-wrap');
    const image = document.createElement('img');
    const headerName = document.createElement('div');
    const headerAge = document.createElement('div');
    const headerFamily = document.createElement('div');
    const headerExpert = document.createElement('div');

    headerName.textContent = `Eve ${user.name}`;
    headerAge.textContent = `${user.age} yrs old`;
    headerExpert.textContent = `${user.expertise} expert`;
    
    if (user.hp >= 1) {
        headerFamily.textContent = `Family of ${user.hp}`;
    } else {
        headerFamily.textContent = `Family of 1`;
    }

    if (user.age < 10) {
        switch (user.expertise) {
            case 'arctic': 
                image.src = `${arcticExpert.age0Image}`;
                break;
            case 'language': 
                image.src = `${languageExpert.age0Image}`;
                break;
            case 'jungle': 
                image.src = `${jungleExpert.age0Image}`;
                break;
            case 'desert': 
                image.src = `${desertExpert.age0Image}`;
                break;
        }
    } else if (user.age >= 10 && user.age < 20) {
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
    } else if (user.age >= 20 && user.age < 40) {
        switch (user.expertise) {
            case 'arctic': 
                image.src = `${arcticExpert.age30Image}`;
                break;
            case 'language': 
                image.src = `${languageExpert.age30Image}`;
                break;
            case 'jungle': 
                image.src = `${jungleExpert.age30Image}`;
                break;
            case 'desert': 
                image.src = `${desertExpert.age30Image}`;
                break;
        }
    } else if (user.age >= 40 && user.age < 50) {
        switch (user.expertise) {
            case 'arctic': 
                image.src = `${arcticExpert.age40Image}`;
                break;
            case 'language': 
                image.src = `${languageExpert.age40Image}`;
                break;
            case 'jungle': 
                image.src = `${jungleExpert.age40Image}`;
                break;
            case 'desert': 
                image.src = `${desertExpert.age40Image}`;
                break;
        }
    } else {
        switch (user.expertise) {
            case 'arctic': 
                image.src = `${arcticExpert.age55Image}`;
                break;
            case 'language': 
                image.src = `${languageExpert.age55Image}`;
                break;
            case 'jungle': 
                image.src = `${jungleExpert.age55Image}`;
                break;
            case 'desert': 
                image.src = `${desertExpert.age55Image}`;
                break;
        }
    } 
    header.append(image, headerName, headerAge, headerExpert, headerFamily);
}