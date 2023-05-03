'use strict';

console.log("Hey World");



// Ask the user their name through a prompt()

let userName = prompt('What is your name?');


// Display that name back to the user through a custom greeting welcoming them to your site.


alert(`Welcome to my site ${userName}! Lets play some trivia about Kyle Knight!

“The worst thing about prison was the dementors.” – Michael “Prison Mike” Scott, Season 3`);

// Display the user’s name back to them in your final message to the user.

// Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated

let questionOneGuess = prompt('Does Kyle own birds? True (T) or False (F)?').toLowerCase();

if(questionOneGuess === 't' || questionOneGuess === 'true'){
  alert('True!. Kyle has three birds, a Cockatiel, Lovebird and a Green Conure');

} else if(questionOneGuess === 'f' || questionOneGuess === 'false'){
  alert(`False! Kyle has three birds, a Cockatiel, Lovebird and a Green Conure`);
}


let questionTwoGuess = prompt(`Kyle has driven over a Million miles? True (T) or False? (F)`).toLowerCase();

if(questionTwoGuess === 't' || questionTwoGuess === 'true'){
  alert(`True! Kyle drove over a million miles spanning over a decade as a Truck Driver. Sommetimes averaging 500 miles a day `);

} else if (questionTwoGuess === 'f' || questionTwoGuess === 'false'){
  alert(`False! Kyle drove over a million miles spanning over a decade as a Truck Driver. Sommetimes averaging 500 miles a day`);
}

let questionThreeGuess = prompt(`Kyle has completed two marathons? True (T) or False? (F)`).toLowerCase();

if(questionThreeGuess === 't' || questionThreeGuess === 'true'){
  alert(`False! Kyle hates running`);

} else if (questionThreeGuess === 'f' || questionThreeGuess === 'false'){
  alert(`True! Kyle hates running`);
}

let questionFourGuess = prompt(`Kyle lives in Washington DC? True (T) or False? (F)`).toLowerCase();

if(questionFourGuess === 't' || questionFourGuess === 'true'){
  alert(`False! Kyle lives in Washingston State`);

} else if (questionFourGuess === 'f' || questionFourGuess === 'false'){
  alert(`True! Kyle lives in Washington State`);
}

let questionFiveGuess = prompt(`Kyle prefers Xbox over Playstation? True (T) or False? (F)`).toLowerCase();

if(questionFiveGuess === 't' || questionFiveGuess === 'true'){
  alert(`True! Kyle has a 16 year old Xbox account,and games every weekend`);

} else if (questionFiveGuess === 'f' || questionFiveGuess === 'false'){
  alert(`False! Kyle hates Playstation, prefers Xbox`);
}