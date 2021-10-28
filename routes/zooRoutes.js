const zoo = require('../model/zoo')

const express = require('express')
const router = express.Router()

let clue = 0
let randomAnimal


router.get('/chooseRandomAnimal', (req, res) => {
    randomAnimal = zoo.chooseRandomAnimal()
    res.send('A random animal has been selected! Continue to /getClue to receive your first clue! Good Luck, Zookeeper! ')
})

router.get('/getClue', (req, res) => {
    zoo.getClue()
    clueToSend = randomAnimal.clues[clue]
    clue++
    if ([clue] > 3) {
        res.send('Oops, you have run out of clues! Keep exploring, Zookeeper!')
    } else {
    res.send('Your clue is: ' + clueToSend + ' To view the habitats you can explore, continue to /listHabitats. For up to 2 additional clues revisit /getClue.')
}})

router.get('/listHabitats', (req, res) => {
    res.json(zoo.listHabitats()) 
    // HELPPPP this won't work
    // res.send('To further explore the habitats and find more about the creatures within, continue to /exploreHabitats.') 
})


router.get('/exploreHabitat', (req, res) => {
    let habitatName = req.query.habitat
    if (habitatName == null) {
        res.send('There are 5 habitats: forest, grasslands, desert, mountain, and aquatic. To explore each habitat further, use req query. Example: /exploreHabitat?habitats=forest')
    } else {
        let animalsByHabitat = zoo.exploreHabitat()
        let habitatInfo = animalsByHabitat.find(function(habitatData) {
            return habitatData.name == habitatName
        })
        if (habitatInfo == null) {
            res.send('Not a real habitat!')
        } else {
            res.send(habitatInfo.animals)
        }
    }
    
    // res.send('You have entered the ' + habitats + 'habitat!')
})


router.get('/selectAnimal', (req, res) => {
    let message
    let found = zoo.selectAnimal(randomAnimal)
    if (found) {
        message = 'Wow! You found the ' + randomAnimal + 'You will make a wonderful Zookeeper!'
    } else {
        message = 'Uh oh! This is not the correct animal enclosure. You still have some work to do, aspiring Zookeeper! Visit /getClue to get another clue.'
    }
    res.send(message)
    // implement 3 guesses before game ends
})

router.get('/', (req, res) => {
  let instructions = 
  `Welcome to the Zoo, do you think you have what it takes to be a Zookeeper? 
   In this game your knowledge will be tested to locate a random animal in one of our 5 habitats! 
   To start a game go to /chooseRandomAnimal 
   To receive up to 3 clues go to /getClue 
   For a list of the 5 available habitats go to /listHabitats 
   For more information on the animals within each habitat go to /exploreHabitat 
   To select the animal which you think best reflects the clues given go to /selectAnimal 
   You will have 3 chances to guess the correct animal! 
   Good luck, and don't be a cheetah!`

  res.send(instructions)
})

module.exports = router