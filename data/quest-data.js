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
        hp: +5,
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
        hp: -5,
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
            You spend the next few years making sure your family's crops are healthy. Workers all over town thank you as they now have the supplies needed to make more advanced foods. Your family size grows due to your hard work! 
        `,
        hp: +5,
        age: +10,
        dead: false
    }, {
        id: 'socialize',
        description: 'Socialize with your family.',
        result: `
            You follow around various family members, asking questions and telling jokes. Even though you're being friendly, they become annoyed and your friendliness is distracting them from doing their jobs. Important work didn't get done due to your actions. Your family has made no progress. 
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
        You approach an enormous walled city. The language experts live here. Inside the walls are vineyards, shops, and beautiful gardens. Birds sing in the trees that line the graveyard where hundreds of generations of ancestors lie. 
    `,
    choices: [{
        id: 'trade',
        description: 'Trade.',
        result: `
            They refuse your offer. While they desperately need the resources you already have, they have nothing to offer you in return aside from songs, laughter, and tales of fallen heroes. 
        `,
        hp: -5,
        age: +10,
        dead: false
    }, {
        id: 'gift',
        description: 'Gift excess resources.',
        result: `
            They are overjoyed by your generosity! Bards pull out their pencils and begin writing songs and stories about your heroism and kindness. They promise to never forget your actions and will repay the debt to your family. Their encouragement gives you the strength and motivation you need to continue your journey.
        `,
        hp: +5,
        age: +10,
        dead: false
    }, {
        id: 'steal',
        description: 'Steal horse',
        result: `
            You approach a horse hitched to the animal pen. Cows and sheep approach you looking for food. After unhitching the horse, an old man approaches asking your intentions with the beast but you ignore him mounting the mare. The man cries the town as you head back to your family -- a new horse to help with the fields. This might end in a long feud between your families for your ill gotten gain but for now your family will prosper with the new work horse.
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
    image: '../assets/jungle/jungle.png',
    texture: '../assets/textures/ground_6.png',
    action: 'chest-opening.wav',
    description: `
        Approaching the village you immediately feel the humidity of the jungle overtake you. The village is rich with culture, the walls have murals and everyone is dressed in loud colorful clothing. Many people have drawings covering their face and you have the feeling they can not be removed. Their fields are filled with unfamiliar and attractive food.
    `,
    choices: [{
        id: 'trade',
        description: 'Trade for unfamiliar seeds.',
        result: `
            Wandering through the village's farms, your eyes dart from crop to crop full of unfamiliar yet plump and delicious vegetables and trees filled with magnificent fruit. Your mouth is watering after eating nothing but biscuits and foraged berries during your travel. Some of the farmers ask for your aid in tending the fields, giving you the experience to care for the plants and the payment of seeds to take home to your family. 
        `,
        hp: 0,
        age: +10,
        dead: false
    }, {
        id: 'sacrifice',
        choiceImage: '../assets/nosaj.png',
        description: 
            'Sacrificial ritual.',
        result: `
            During the night, the priestest calls the family around for a ritual to bless their crops and natural springs. A celebration for a new birth in the village, the priest offers up the child for the blessing of their gods. The knife soaked with the infants blood is placed in a skull alter which begins to smoke burning with an invisible fire. A bucket of water is poured over the altar billowing steam above the lit torches. The priestest snatches the stone telling you it has absorbed all of the evil in the tribe. she puts it in the palm of your hand, telling you to take it far away and hide it where no one will find it.
        `,
        hp: -5,
        age: +10,
        dead: false
    }, {
        id: 'neutral',
        description: 'Option 3',
        result: 'Option 3 text',
        hp: +5,
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
        While wondering in the desert and nearly dead from dehydration you stumble upon a village surrounded by desolate wasteland. They carry your quivering weak body into a village hut with a palm frawn roof. You feel instantly gratefull to be relieved of the burden of the scorching sun. A young woman cares for you, squeezing juice from the meat of some unknown fruit, providing you with the water of life you so desperatly need, caring for you for several weeks until you have regained your strength.
    `,
    choices: [{
        id: 'Forage with the villagers',
        description: `
            You join the village in exploring the surrounding wasteland to forage for food. They show you how to be resourceful when exploring and that nearly everything that nature provides can be eaten for nurishment. Many of the plants you are shown how to eat look familiar to you from your travels, unknown to you that they could be eaten until now.
        `,
        result: 'One',
        hp: 0,
        age: +10,
        dead: false
    }, {
        id: 'two',
        description: 'Two',
        result: 'Two',
        hp: -5,
        age: +10,
        dead: false
    }, {
        id: 'three',
        description: 'Three',
        result: 'Three',
        hp: +5,
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
        bjklfdsjfklskjf
    `,
    choices: [{
        id: 'good',
        description: 'sareadgad',
        result: ' dsa dsdsadf a dsa dsa dsadsa',
        hp: 0,
        age: +10,
        dead: false
    }, {
        id: 'bad',
        description: 'dsadsa',
        result: 'dsfdsfds dsf dsfds',
        hp: -50,
        age: +10,
        dead: false
    }, {
        id: 'worse',
        description: 'Apoc',
        result: 'A warm light engulfs you',
        hp: 35,
        age: +10,
        dead: true,
        deathCause: 'Apocalypse'
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