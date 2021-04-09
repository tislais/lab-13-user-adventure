import { getUser, setUser, updateUser } from '../local-storage-utils.js';

const test = QUnit.test;

test('This will get user object from localstorage', (expect) => {
    const stubUser = {
        age: 3,
        name: 'nova',
        expertise: 'arctic',
        completed: []
    };

    localStorage.setItem('USER', JSON.stringify(stubUser));
    
    const expected = stubUser;
    const actual = getUser();
    expect.deepEqual(actual, expected);
});

test('This will set user object to localstorage', (expect) => {
    const stubUser = {
        age: 3,
        name: 'nova',
        expertise: 'arctic',
        completed: []
    };

    setUser(stubUser);

    const expected = stubUser;
    const actual = JSON.parse(localStorage.getItem('USER'));
    expect.deepEqual(actual, expected);
});

test('This will get new data and update localstorage', (expect) => {
    const stubUser = {
        age: 3,
        name: 'nova',
        expertise: 'arctic',
        hp: 0,
        completed: {}
    };

    localStorage.setItem('USER', JSON.stringify(stubUser));

    const stubUserUpdate = {
        age: 14,
        hp: 25
    };

    const questId = 'jungle';

    updateUser(questId, stubUserUpdate);

    const expected = {
        age: 14,
        name: 'nova',
        expertise: 'arctic',
        hp: 25,
        completed: {
            'jungle': true
        }
    };

    const actual = JSON.parse(localStorage.getItem('USER'));
    expect.deepEqual(actual, expected);
});
