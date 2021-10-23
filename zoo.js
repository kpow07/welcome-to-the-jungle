let habitats = ['forest', 'grassland', 'desert', 'mountain', 'aquatic']
let randomCreature
let visitorLocation

function listHabitats() {
    return habitats
}

function chooseRandomCreature() {
    randomCreature = habitats[Math.floor(Math.random()*habitats.length)]
    // assignClue()
}

// Description of habitat & creatures within, similar to "look" in hide and seek
function exploreHabitat(habitat) {
    visitorLocation = habitat
    console.log('You have entered the', habitat)
}

// Is the random creature in this habitat?
function searchHabitat() {
    return (randomCreature === visitorLocation)
}

// Assign clue to randomly selected creature 
// function assignClue() {

// }


module.exports = {
    listHabitats,
    chooseRandomCreature,
    exploreHabitat,
    searchHabitat,
    //assignClue,
}