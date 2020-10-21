"use strict";


// 1. countWords
function countWords(phrase) {
  const newPhrase = phrase.split(' ');
  let phraseObject = {};
  for (const word of newPhrase) {
    // Syntax below returns {'word1': NaN, 'word2': NaN, ...}
    // phraseObject[word] += 1;
    if (phraseObject.hasOwnProperty(word)) {
      phraseObject[word] += 1;
    } else {
      phraseObject[word] = 1;
    }

  }
  return phraseObject;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {

  const melonPrices = {
    2.50 : ['Cantaloupe', 'Honeydew'],
    2.95 : ['Watermelon'],
    3.25 : ['Musk', 'Crenshaw'],
    14.25 : ['Christmas']
    };
  
    if (melonPrices.hasOwnProperty(price)) {
      return melonPrices[price];
    } else {
      console.log('None found.')
    }
    
  // Replace this with your code
}
