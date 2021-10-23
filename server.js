const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let instructions = 
  `Welcome to the Zoo, do you think you have what it takes to be a Zookeeper? <br>
   In this game your knowledge will be tested using a series of clues to locate a random creature in one of our 5 habitats! <br>
   To receive your first clue go to /getClue <br>
   For a list of the 5 available habitats go to /listHabitats <br>
   For more information on each habitat go to /exploreHabitats <br>
   To select the creature which you think best reflects the clues given go to /searchHabitats <br>
   Good luck, and don't be a cheetah!`

  res.send(instructions)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})