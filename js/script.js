fruitButton.addEventListener('click', function(){
  index = Math.floor(Math.random() * fruits.length);
  hiddenWord = fruits[index];
  for(let i=0; i<hiddenWord.length; i++){
    dashes.push("_");
  }
  for(let i=0; i<hiddenWord.length; i++){
    word.push(hiddenWord[i]);
  }
  dashedWord = dashes.join(" ");
  wordDisplay.innerHTML = dashedWord;

  fruitButton.classList.add("chosen-category");
  animalButton.disabled = true;
  movieButton.disabled = true;
  wordChosen = true;
})
animalButton.addEventListener('click', function(){
  index = Math.floor(Math.random() * animals.length);
  hiddenWord = animals[index];
  for(let i=0; i<hiddenWord.length; i++){
    dashes.push("_");
  }
  for(let i=0; i<hiddenWord.length; i++){
    word.push(hiddenWord[i]);
  }
  dashedWord = dashes.join(" ");
  wordDisplay.innerHTML = dashedWord;

  animalButton.classList.add("chosen-category");
  fruitButton.disabled = true;
  movieButton.disabled = true;
  wordChosen = true;
})
movieButton.addEventListener('click', function(){
  index = Math.floor(Math.random() * movies.length);
  hiddenWord = movies[index];
  for(let i=0; i<hiddenWord.length; i++){
    if(hiddenWord[i]===" "){
      dashes.push("\t")
    } else{
      dashes.push("_");
    }
  }
  for(let i=0; i<hiddenWord.length; i++){
    word.push(hiddenWord[i]);
  }
  dashedWord = dashes.join(" ");
  wordDisplay.innerHTML = dashedWord;

  movieButton.classList.add("chosen-category");
  animalButton.disabled = true;
  fruitButton.disabled = true;
  wordChosen = true;
})

// message.innerHTML = wrongGuesses;
updateHangman();

for(let i=0; i<letters.length; i++){
  letters[i].addEventListener('click', function(){
    if(!wordChosen){
      alert("You must pick a category before guessing!");
      return;
    }
    for(let j=0; j<hiddenWord.length; j++){
      if(hiddenWord[j]===letters[i].value){
        letters[i].classList.add("correct-letter");
        dashes.splice(j, 1, letters[i].value);
        dashedWord = dashes.join(" ");
        wordDisplay.innerHTML = dashedWord;
        letters[i].disabled = "true";
        // console.log(dashedWord);
        checkWin();
      } 
    }
    if(!word.includes(letters[i].value)){
      letters[i].classList.add("incorrect-letter");
      wrongGuesses++;
      letters[i].disabled = "true";
      // message.innerHTML = wrongGuesses
      checkWin();
    }
    updateHangman();
  })
}

function checkWin(){
  for(let i=0; i<dashes.length; i++){
    if(wrongGuesses>=7){
      message.innerHTML = "You Lose... &Tab;&Tab; <button id='new-game'>New Game</button>"
      gameOver = true;

      restart();
    }else if(!dashes.includes("_")){
      message.innerHTML = "You Win! &Tab;&Tab; <button id='new-game'>New Game</button>"
      gameOver = true;

      restart();
    }
  }
}

function updateHangman(){
  if(wrongGuesses===0){
    canvas.innerHTML = `
    ___________
    <pre>|       |</pre>
    <pre>|       </pre>
    <pre>|     </pre>
    <pre>|       </pre>
    <pre>|      </pre>
    `
  }
  if(wrongGuesses===1){
    canvas.innerHTML = `
    ___________
    <pre>|       |</pre>
    <pre>|       O</pre>
    <pre>|      </pre>
    <pre>|       </pre>
    <pre>|      </pre>
    `
  }
  if(wrongGuesses===2){
    canvas.innerHTML = `
    ___________
    <pre>|       |</pre>
    <pre>|       O</pre>
    <pre>|       |</pre>
    <pre>|       </pre>
    <pre>|      </pre>
    `
  }if(wrongGuesses===3){
    canvas.innerHTML = `
    ___________
    <pre>|       |</pre>
    <pre>|       O</pre>
    <pre>|      \\|</pre>
    <pre>|       </pre>
    <pre>|      </pre>
    `
  }if(wrongGuesses===4){
    canvas.innerHTML = `
    ___________
    <pre>|       |</pre>
    <pre>|       O</pre>
    <pre>|      \\|/</pre>
    <pre>|       </pre>
    <pre>|      </pre>
    `
  }if(wrongGuesses===5){
    canvas.innerHTML = `
    ___________
    <pre>|       |</pre>
    <pre>|       O</pre>
    <pre>|      \\|/</pre>
    <pre>|       ∆</pre>
    <pre>|      </pre>
    `
  }if(wrongGuesses===6){
    canvas.innerHTML = `
    ___________
    <pre>|       |</pre>
    <pre>|       O</pre>
    <pre>|      \\|/</pre>
    <pre>|       ∆</pre>
    <pre>|      /</pre>
    `
  }if(wrongGuesses===7){
    canvas.innerHTML = `
    ___________
    <pre>|       |</pre>
    <pre>|       O</pre>
    <pre>|      \\|/</pre>
    <pre>|       ∆</pre>
    <pre>|      / \\</pre>
    `
  }
}

function restart(){
  const newGame = document.getElementById("new-game");
  newGame.addEventListener('click', function(){
    fruitButton.disabled = false;
    animalButton.disabled = false;
    movieButton.disabled = false;
  
    fruitButton.classList.remove("chosen-category");
    animalButton.classList.remove("chosen-category");
    movieButton.classList.remove("chosen-category");
  
    hiddenWord = "";
    dashes = [];
    word = [];
    wordDisplay.innerHTML = "";
    message.innerHTML = "";
    wrongGuesses = 0;
    updateHangman();
  
    for(let i=0; i<letters.length; i++){
      letters[i].classList.remove("correct-letter");
      letters[i].classList.remove("incorrect-letter");
      letters[i].disabled = false;
    }
  
    wordChosen = false;
  })
}