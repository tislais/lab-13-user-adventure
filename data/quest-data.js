export const arcticQuest = {
    id: 'arctic',
    title: 'Snow Mountain',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/arctic/arctic.png',
    texture: '../assets/textures/ground_4.png',
    description: `
        You stumble upon a large village nestled deeply among the tall snowy mountains. A family of arctic experts dwell here. They enjoy great wealth due to their ability to drill for oil in the snow, providing the rarest and most essential resource for all advanced civilizations.
        `,
    choices: [{
        id: 'good',
        description: 'Steal their crude oil.',
        result: `
            You stash 8 tanks of crude oil in your horsecart and flee. They're so busy fighting and cult worshipping that they don't even notice! You scored the most valuable resource in the world and your family will sing praises for generations!
        `,
        hp: +100,
        age: +10,
        dead: false
    }, {
        id: 'neutral',
        description: 'Explore the region.',
        result: `
            You leave the village and explore the nearby snowy mountains. You really aren't equipped for this. You're no expert at oil drilling so you're basically useless and have wasted years of your life.
        `,
        hp: 0,
        age: +10,
        dead: false
    }, {
        id: 'bad',
        choiceImage: '../assets/arctic/arctic-death.png',
        description: 'Trade for crude oil.',
        result: `
            You can't speak their language but they have a high-tech speech-translation device available. You use the device to negotiate a trade of valuable jungle resources in exchange for a few tanks of crude oil. They laugh at you! They don't need anything. They're rich! They kill you because they're bored. Your clothes, horse, and equipment now belong to them while your family at home suffers.
        `,
        hp: -25,
        age: +0,
        dead: true,
        deathCause: 'murder'
    }]
};

const homeQuest = {
    id: 'home',
    title: 'your home village',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    imageArctic: '../assets/arctic/arctic-home.png',
    imageLanguage: '../assets/language/language-home.png',
    imageJungle: '../assets/jungle/jungle-home.png',
    imageDesert: '../assets/desert/desert-home.png',
    texture: '../assets/textures/ground_4.png',
    description: `
        You are born in a semi-advanced town and your family is 20 people strong. Life is comforting for now but your help is needed. The family's newcomen well will dry out unless it is upgraded to use a diesel engine. The only problem is that your family doesn't have the resources needed to upgrade the technology! You will need to expore the map to find regional experts that can help you gather sulfur, latex, and palm oil so that you can create the drive belt needed to build the engine. You will also need kerosine for fuel. Remember that every one of your actions will not only effect you, but your family as well!
    `,
    choices: [{
        id: 'farm',
        description: 'Help out with the farm.',
        result: `
            You spend the next few years making sure your family's crops are healthy. The workers in the kitchen thank you as they now have the supplies needed to make more advanced foods. Your family size grows thanks to your work! 
        `,
        hp: +5,
        age: +10,
        dead: false
    }, {
        id: 'socialize',
        description: 'Socialize with your family.',
        result: `
            You follow around various family members and talk their ears off. Even though you're being friendly, they're too busy trying to save the town and your friendliness becomes more of a distraction. Important work didn't get done due to your actions. Your family is worse off. 
        `,
        hp: -5,
        age: +10,
        dead: false
    }, {
        id: 'explore',
        choiceImage: '../assets/bear.png',
        description: 'Explore the surrounding wilderness.',
        result: `
            Ahh. The surrounding wildness sure is pretty. But wait -- isn't this bear-country? You've walked straight into a bear cave! You're too young to defend yourself and you're too slow to flee. You are mauled by the bear and succumb to your wounds in a brutal and agonizing death. Your family mourns the death of a child.
        `,
        hp: +0,
        age: +10,
        dead: true,
        deathCause: 'mauled by bear'
    }]
};

const languageQuest = {
    id: 'language',
    title: 'Thinn Kingdom',
    map: {
        top: '17%',
        left: '37%'
    },
    image: '../assets/language/language.png',
    texture: '../assets/textures/ground_4.png',
    action: 'dragon-growl.aiff',
    description: `
        Language story
    `,
    choices: [{
        id: 'run',
        description: 'one',
        result: `
            one
        `,
        hp: -35,
        age: +10,
        dead: false
    }, {
        id: 'fight',
        description: 'two!',
        result: `
            two
        `,
        hp: -45,
        age: +10,
        dead: false
    }, {
        id: 'archer',
        description: 'three',
        result: `
            three
        `,
        hp: 0,
        age: +10,
        dead: false
    }]
};

const jungleQuest = {
    id: 'jungle',
    title: 'Sugarland',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: '../assets/jungle/jungle.png',
    texture: '../assets/textures/ground_6.png',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        age: +10,
        dead: false
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        age: +10,
        dead: false
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        age: +10,
        dead: false
    }]
};

const desertQuest = {
    id: 'desert',
    title: 'Nova Camp',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: '../assets/desert/desert.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        This is a very new village and people are panicking and barely staying alive.
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        age: +10,
        dead: false
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        age: +10,
        dead: false
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        age: +10,
        dead: false
    }]
};

const apocalypseQuest = {
    id: 'apocalypse',
    title: 'Apocalypse Tower',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        age: +10,
        dead: false
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        age: +10,
        dead: false
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        age: +10,
        dead: false
    }]
};

const quests = [
    arcticQuest, 
    languageQuest,
    jungleQuest,
    desertQuest,
    apocalypseQuest,
    homeQuest
];

export default quests;