const body = document.body;
const letters = document.querySelectorAll("[class='letter-button']");
const wordDisplay = document.getElementById("hidden-word");
const fruitButton = document.getElementById("fruits");
const animalButton = document.getElementById("animals");
const movieButton = document.getElementById("movies");
const fruits = ["APPLE", "ORANGE", "BANANA", "STRAWBERRY", "GRAPE", "GRAPEFRUIT"];
const animals = ["PANDA", "BEAR", "ELEPHANT", "MONKEY", "ALLIGATOR", "GIRAFFE"];
const movies = ["GALDIATOR", "PIXELS", "GREAT GATSBY", "JURASSIC PARK", "TED", "DIARY OF A WIMPY KID"];
let index = 0;
let hiddenWord = "";
let dashedWord = "";
let dashes = [];
let word = [];
const tempDisplay = document.getElementById("temp-display");
const message = document.getElementById("game-message");
const canvas = document.getElementById("hangman-canvas");
let wrongGuesses = 0;
let gameOver = false;
let wordChosen = false;

