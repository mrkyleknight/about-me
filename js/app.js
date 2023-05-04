'use strict';

console.log("Hey World");




let userName = prompt('What is your name?');



alert(`Welcome to my site ${userName}! Lets play some trivia about Kyle Knight!

“The worst thing about prison was the dementors.” – Michael “Prison Mike” Scott, Season 3`);

let numCorrect = 0;

let questionOneGuess = prompt('Does Kyle own birds? True (T) or False (F)?').toLowerCase();



if(questionOneGuess === 't' || questionOneGuess === 'true'){
  alert('True!. Kyle has three birds, a Cockatiel, Lovebird and a Green Conure');
   numCorrect++;

} else if(questionOneGuess === 'f' || questionOneGuess === 'false'){
  alert(`False! Kyle has three birds, a Cockatiel, Lovebird and a Green Conure`);
}


let questionTwoGuess = prompt(`Kyle has driven over a Million miles? True (T) or False? (F)`).toLowerCase();

if(questionTwoGuess === 't' || questionTwoGuess === 'true'){
  alert(`True! Kyle drove over a million miles spanning over a decade as a Truck Driver. Sommetimes averaging 500 miles a day `);
   numCorrect++;

} else if (questionTwoGuess === 'f' || questionTwoGuess === 'false'){
  alert(`False! Kyle drove over a million miles spanning over a decade as a Truck Driver. Sommetimes averaging 500 miles a day`);
}

let questionThreeGuess = prompt(`Kyle has completed two marathons? True (T) or False? (F)`).toLowerCase();

if(questionThreeGuess === 't' || questionThreeGuess === 'true'){
  alert(`False! Kyle hates running`);
  numCorrect++;

} else if (questionThreeGuess === 'f' || questionThreeGuess === 'false'){
  alert(`True! Kyle hates running`);
}

let questionFourGuess = prompt(`Kyle lives in Washington DC? True (T) or False? (F)`).toLowerCase();

if(questionFourGuess === 't' || questionFourGuess === 'true'){
  alert(`False! Kyle lives in Washingston State`);
   numCorrect++;

} else if (questionFourGuess === 'f' || questionFourGuess === 'false'){
  alert(`True! Kyle lives in Washington State`);
}

let questionFiveGuess = prompt(`Kyle prefers Xbox over Playstation? True (T) or False? (F)`).toLowerCase();

if(questionFiveGuess === 't' || questionFiveGuess === 'true'){
  alert(`True! Kyle has a 16 year old Xbox account,and games every weekend`);
   numCorrect++;

} else if (questionFiveGuess === 'f' || questionFiveGuess === 'false'){
  alert(`False! Kyle hates Playstation, prefers Xbox`);
}

const correctAnswer = 31;
let attempts = 4;

while (attempts > 0) {
 const guess = prompt("Guess Kyle's Age? between 1 and 100. You have " + attempts + " attempts remaining.");

 if (isNaN(guess)) {
 alert("Invalid input. Please enter a number between 1 and 100.");
 } else if (guess == correctAnswer) {
 alert("Congratulations! You guessed the correct age.");
  numCorrect++;
 break;
 } else if (guess < correctAnswer) {
 alert("Too low. Try again.");
 } else if (guess > correctAnswer) {
 alert("Too high. Try again.");
 }

 attempts--;
}

if (attempts == 0) {
 alert("Sorry, you ran out of attempts. The correct age was " + correctAnswer + ".");
}

const correct2ndAnswers = [31, 32, 33];
let attempts2 = 6;

while (attempts2 > 0) {
  const guess = prompt("Guess Kyle's Favorite Numbers? between 1 and 100. You have " + attempts2 + " attempts remaining.");

  if (isNaN(guess)) {
    alert("Invalid input. Please enter a number between 1 and 100.");
  } else if (correct2ndAnswers.includes(Number(guess))) {
    alert("Congratulations! You guessed one of my lucky numbers. 31, 32, 33");
     numCorrect++;
    break;
  } else if (guess < correct2ndAnswers) {
    alert("Too low. Try again.");
  } else if (guess > correct2ndAnswers) {
    alert("Too high. Try again.");
  
  }

  attempts2--;
}

if (attempts2 == 0) {
  alert("Sorry, you ran out of attempts. The correct numbers were: " + correct2ndAnswers.join(", ") + ".");
}

alert (`You got ${numCorrect} out of 7 correct!`);