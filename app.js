import { setUser } from './local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get('name').toLowerCase();
    const expertise = data.get('expert');

    const user = {
        age: 10,
        name: name,
        expertise: expertise,
        hp: 50,
        completed: {}
    };

    setUser(user);

    window.location = './map';
});
