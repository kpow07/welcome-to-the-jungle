let zoo = require('./zoo')

// Test
console.log('Welcome to the Zoo!')
zoo.chooseRandomCreature()

let habitats = zoo.listHabitats()
console.log('You can visit the various habitats: ', habitats)
zoo.exploreHabitat(habitats[0])

let found = zoo.searchHabitat()
if (found) {
    console.log('You found the RANDOMCREATURE in the HABITAT!')
} else {
    console.log('You did not find the creature.. would you like another clue?')
    console.log('The RANDOMCREATURE was in the: TBD')
}
