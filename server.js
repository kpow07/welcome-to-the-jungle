const express = require('express')
const zoo = require('./zoo')
const app = express()
const port = 3000

let randomAnimal
let firstClue 


app.get('/chooseRandomAnimal', (req, res) => {
    randomAnimal = zoo.chooseRandomAnimal()
    res.send('A random animal has been selected! Continue to /getClue to receive your first clue! Good Luck, Zookeeper! ')
})

app.get('/getClue', (req, res) => {
    firstClue = zoo.getClue()
    res.send('Your first clue is: ' + firstClue)
})

app.get('/listHabitats', (req, res) => {
    res.json(zoo.listHabitats())
    res.send('To further explore the habitats and find more about the creatures within, continue to /exploreHabitats. ')
})


app.get('/exploreHabitat', (req, res) => {
    res.send('There are 5 habitats: forest, grasslands, desert, mountain, and aquatic. To explore each habitat further, use req query. Example: /exploreHabitat?habitats=forest')
    let habitats = req.query.habitats
    // zoo.exploreHabitat(habitats)
    res.send('You have entered the ' + habitats + 'habitat!')
})

app.get('/searchHabitat', (req, res) => {
    let message
    let found = zoo.searchHabitat()
    if (found) {
        message = 'Wow! You found the ' + randomAnimal + 'You will make a wonderful Zookeeper!'
    } else {
        message = 'Uh oh! This is not the correct animal enclosure. You still have some work to do, aspiring Zookeeper! Visit /getClue to get another clue.'
    }
    res.send(message)
})

app.get('/', (req, res) => {
  let instructions = 
  `Welcome to the Zoo, do you think you have what it takes to be a Zookeeper? <br />
   In this game your knowledge will be tested using a series of clues to locate a random animal in one of our 5 habitats! <br />
   To start a game go to /chooseRandomAnimal <br />
   To receive additional clues go to /getClue <br />
   For a list of the 5 available habitats go to /listHabitats <br />
   For more information on each habitat go to /exploreHabitat <br />
   To select the animal which you think best reflects the clues given go to /searchHabitat <br />
   Good luck, and don't be a cheetah!`

  res.send(instructions)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})