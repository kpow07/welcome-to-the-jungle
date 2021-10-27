let habitats = [
    { name: 'forest', description: 'Forests are often found in cool areas in the Northern Hemisphere, such as Canada, Alaska, Scandinavia, and parts of Russia. They are dominated by evergreen fir trees, and are home to animals such as moose, elk, beavers, and wolves. ',
        animals: [ 
        { type: 'bear', clues: ['I eat a diet of mainly fish and berries.', 'I spend 4 to 6 months of the year in a deep sleep.', 'I work part-time at A&W as their loveable mascot, Rooty.' ]},
        { type: 'deer', clues: ['I have eyes on the side of my head.', 'A male of my species is called a buck.', 'A similar species to mine propels Santa\'s sleigh.' ]},
        { type: 'wolf', clues: ['I travel in packs.', 'I am the largest member of the canine family.', 'Ah-woooooo! I love to howl at the moon.' ]},
        { type: 'beaver', clues: ['I have really big teeth.', 'I can be found on a Canadian nickel.', 'Some people eat my tail as a dessert.' ]},
    ]}, 
    { name: 'grassland', description: 'The tropical grasslands are found in Africa. They are home to huge herds of grass-eating animals, and powerful predators that feed on them. ', 
    animals: [ 
        { type: 'giraffe', clues: ['I am a herbivore that can guzzle up to 45kg of leaves and twigs per day!', 'I am the tallest land animal.', 'Our spots are like human fingerprints, no two individual animals have the same pattern.' ]},
        { type: 'lion', clues: ['I live in a group called a pride.', 'I am often the mane attraction.',  'I shall call him, Simba.' ]},
        { type: 'elephant', clues: ['I am constantly eating.', 'I can communicate through vibrations.', 'I never forget.' ]},
        { type: 'zebra', clues: ['I can run at speeds up to 65km per hour.', 'I am currently classified as endangered. Sad face.', 'My unique colouring helps to camouflage me from predators.' ]},
    ]}, 
    { name: 'desert', description: 'Deserts are dry places where little plant life can grow. Hot deserts may be barren areas of rock and sand, but some support animals and plants that can cope with very little water. ',
    animals: [ 
        { type: 'camel', clues: ['I will spit if you make me mad!', 'I have three sets of eyelids and two rows of eyelashes to keep sand out of my eyes.', 'The most famous of my species was called Sally.' ]},
        { type: 'snake', clues: ['I do not have eyelids.', 'I smell with my tongue.', 'You might find me slithering in your garden, catching me a mouse.' ]},
        { type: 'horned lizard', clues: ['I am a cold-blooded species.', 'I have large pointed scales that protrude from my back.', 'Some call me Liz for short.' ]},
        { type: 'scorpion', clues: ['I may be the oldest land animal, fossil records suggest I was here even before the dinosaurs!', 'I am a member of the arachnid family.', 'I can control how much venom to release with my stinger.' ]},
    ]}, 
    { name: 'mountain', description: 'The tops of high mountain ranges are extremely cold, and few plants grow there. Animals living in these high places must cope with cold, lack of food, and steep, rocky terrain. ',
    animals: [ 
        { type: 'mountain goat', clues: ['I can jump 12 feet in one leap!', 'Males are called billies.', 'Both males and females have beards and horns.' ]},
        { type: 'mountain lion', clues: ['When in danger, I may climb a tree to escape.', 'I am very solitary and will avoid encounters, sometimes I am referred to as a "ghost".', 'Bubbles had one named Steve French.' ]},
        { type: 'wolverine', clues: ['I am little but fierce, with sharp teeth and retractable claws.', 'I am a member of the weasel family.', 'Played by Hugh Jackman several times.' ]},
        { type: 'bighorn sheep', clues: ['The female of my species is called an ewe.', 'The males of my species have long spiral horns.', 'I am on the Dodge emblem.' ]},
    ]}, 
    { name: 'aquatic', description: 'Oceans and seas form the largest habitat on the planet. A large variety of animals live in the marine habitat, from tiny plankton to the largest animal in the world - the blue whale. ',
    animals: [ 
        { type: 'shark', clues: ['I have no bones in my body.', 'My species is estimated to have been around for over 455 million years.', 'There is a whole week dedicated to me on TV.' ]},
        { type: 'sea lion', clues: ['I can hold my breath underwater from 8 to 20 minutes!', 'I spend time both on land and in the sea.', 'My name might fool you, I am not the King of the Jungle.' ]},
        { type: 'lobster', clues: ['I can exert 100 pounds per square inch of pressure with my "hands".', 'I can regenerate limbs.', 'Homer Simpson kept one as a pet and named it Pinchy.' ]},
        { type: 'dolphin', clues: ['Scientists believe that we are the second smartest mammals, right after humans!', 'I communicate with others through whistles.', 'Flipper was a movie about my species making friends with a human.' ]},
    ]}, 
];


let randomAnimal 
let zookeeperLocation

// Starts game with random animal selection
function chooseRandomAnimal() {
    let randomHabitat = habitats[Math.floor(Math.random()*habitats.length)] 
    randomAnimal = randomHabitat.animals[Math.floor(Math.random()*randomHabitat.animals.length)] 
    console.log('The random animal has been selected as: ' + randomAnimal.type)
    return randomAnimal
}

// Assign clue to random animal
function getClue() {
    console.log('The zookeeper has been given a clue.')
}

// Habitat names and descriptions
function listHabitats() {
    let habitatList = habitats.map(function(habitat) {
        return { name: habitat.name, description: habitat.description } 
    })
    console.log('The list of 5 habitats and descriptions has been provided.')
    return habitatList
}

// Explore each habitat futher to see list of animals inside
function exploreHabitat(habitats) {
    zookeeperLocation = habitats.name.description
    console.log('The zookeeper has entered the: ', habitats)
}

// Select the animal you think fits the clues given to win the game!
function selectAnimal() {
    return (randomAnimal.type === zookeeperLocation)
}

module.exports = {
    listHabitats,
    chooseRandomAnimal,
    getClue,
    exploreHabitat,
    selectAnimal,
}