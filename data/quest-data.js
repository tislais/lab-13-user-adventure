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
        description: 'Trade for crude oil.',
        result: `
            You can't speak their language but they have a high-tech speech-translation device available. You use the device to negotiate a trade of valuable jungle resources in exchange for a few tanks of crude oil. They laugh at you! They don't need anything. They're rich! They kill you because they're bored. Your clothes, horse, and equipment now belong to them while your family at home suffers.
        `,
        hp: -25,
        age: +0,
        dead: true
    }]
};

const homeQuest = {
    id: 'home',
    title: 'Home',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    texture: '../assets/textures/ground_4.png',
    action: 'dragon-growl.aiff',
    description: `
        You run to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        age: +10,
        dead: false
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        age: +10,
        dead: false
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        age: +10,
        dead: false
    }]
};

const languageQuest = {
    id: 'language',
    title: 'Thinn Kingdom',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    texture: '../assets/textures/ground_4.png',
    action: 'dragon-growl.aiff',
    description: `
        You run to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        age: +10,
        dead: false
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        age: +10,
        dead: false
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
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
    image: 'treasure-chests.png',
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