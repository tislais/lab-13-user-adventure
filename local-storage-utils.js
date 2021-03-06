const USER = 'USER';

export function getUser() {
    const user = localStorage.getItem(USER);

    if (!user) return {};
    return JSON.parse(user);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function updateUser(questId, update) {
    const user = getUser();

    user.age += update.age;
    user.hp += update.hp;
    user.dead = update.dead;
    user.deathCause = update.deathCause;
    user.hasEndstone = update.hasEndstone;
    user.completed[questId] = true;

    setUser(user);
}