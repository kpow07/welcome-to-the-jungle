const zoo = require("../model/zoo");

const express = require("express");
const e = require("express");
const router = express.Router();

let clue = 0;
let guesses = 0;
let randomAnimal;

router.get("/chooseRandomAnimal", (req, res) => {
  randomAnimal = zoo.chooseRandomAnimal();
  res.send(
    "A random animal has been selected!\nContinue to /getClue to receive your first clue! Good Luck, Zookeeper! "
  );
});

router.get("/getClue", (req, res) => {
  zoo.getClue();
  clueToSend = randomAnimal.clues[clue];
  clue++;
  if ([clue] > 3) {
    res.send("Oops, you have run out of clues! Keep exploring, Zookeeper!");
  } else {
    res.send(
      "Your clue is: " +
        clueToSend +
        "\n" +
        "To view the habitats you can explore, continue to /listHabitats. For up to 2 additional clues revisit /getClue."
    );
  }
});

router.get("/listHabitats", (req, res) => {
  let habitatList = zoo.listHabitats();
  let message = "";
  for (let habitat of habitatList) {
    JSON.stringify(habitat)
    message += `${habitat.name.toUpperCase()}: ${habitat.description}\n\n`
  }
  message +=
    "To further explore the habitats and find more about the creatures within, continue to /exploreHabitats.";
  res.send(message);
});

router.get("/exploreHabitat", (req, res) => {
  let habitatName = req.query.habitat;
  if (habitatName == null) {
    res.send(
      "There are 5 habitats: forest, grassland, desert, mountain, and aquatic.\nTo explore each habitat further, use req query. Example: /exploreHabitat?habitat=forest"
    );
  } else {
    let animalsByHabitat = zoo.exploreHabitat();
    let habitatInfo = animalsByHabitat.find(function (habitatData) {
      return habitatData.name == habitatName;
    });
    if (habitatInfo == null) {
      res.send(
        "Oops, you have not entered a real habitat! Please check your spelling. There are 5 habitats: forest, grassland, desert, mountain, and aquatic.\nTo explore each habitat further, use req query. Example: /exploreHabitat?habitat=forest "
      );
    } else {
      res.send("The animals within this habitat are: " + habitatInfo.animals);
    }
  }
});

// Need to add instructions on how to properly guess before a guess is made
router.get("/selectAnimal", (req, res) => {
  let guessAnimal = req.query.animal;
  zoo.selectAnimal(guessAnimal);
  guesses++;
  if (guessAnimal == null) {
    res.send(
      "Oops, that is not an animal we have at the zoo! Please check your spelling. To make a guess, use req query. Example: /selectAnimal?animal=mountain+goat "
    );
  } else {
    if (guessAnimal == randomAnimal.type) {
      res.send(
        "Wow! You found the " +
          randomAnimal.type +
          "!\nYou will make a wonderful Zookeeper!\nIf you'd like to play again revisit /chooseRandomAnimal"
      );
    } else {
      if (guesses >= 3) {
        res.send(
          "Oops, you have run out of guesses. Please leave my zoo.\nIf you'd like to play again revisit /chooseRandomAnimal"
        );
      } else {
        if (guessAnimal != randomAnimal.type) {
          res.send(
            "Uh oh, " +
              guessAnimal +
              " is not the correct animal. You have made: " +
              guesses +
              " guesses.\nYou still have some work to do, aspiring Zookeeper!"
          );
        }
      }
    }
  }
});

router.get("/", (req, res) => {
  let instructions = `Welcome to the Zoo, do you think you have what it takes to be a Zookeeper? 
   In this game your knowledge will be tested to locate a random animal in one of our 5 habitats! 
   To start a game go to /chooseRandomAnimal 
   To receive up to 3 clues go to /getClue 
   For a list of the 5 available habitats go to /listHabitats 
   For more information on the animals within each habitat go to /exploreHabitat
   To select the animal which you think best reflects the clues given go to /selectAnimal 
   When you are ready to guess use /selectAnimal?animal=animal+name
   You will have 3 chances to guess the correct animal! 
   Good luck, and don't be a cheetah!`;

  res.send(instructions);
});

module.exports = router;
