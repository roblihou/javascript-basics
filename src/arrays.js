export const getNthElement = (index, array) => {
  while(index + 1 > array.length){
    index = index - array.length;
  }
  return array[index];
};

export const arrayToCSVString = (array) => {
  return array.join();
};

export const csvStringToArray = (string) => {
  return string.split(',');
};

export const addToArray = (element, array) => {
    array.push(element);
};

export const addToArray2 = (element, array) => {
  let newArray = array.slice();
  newArray.push(element);
  return newArray;
};

export const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

export const numbersToStrings = (numbers) => {
  for(let i = 0; i < numbers.length; i++){
    let existingElement = numbers[i];
    let newElement = String(existingElement);
    numbers.splice(i, 1, newElement);
  }
  return numbers;
};

export const uppercaseWordsInArray = (strings) => {
  for(let i = 0; i < strings.length; i++){
    let existingElement = strings[i];
    let newElement = existingElement.toUpperCase();
    strings.splice(i, 1, newElement);
  }
  return strings;
};

export const reverseWordsInArray = (strings) => {
  for(let i = 0; i < strings.length; i++){
    let existingElement = strings[i];
    let splitString = existingElement.split("");
    let reverseArray = splitString.reverse();
    let newElement = reverseArray.join(""); 
    strings.splice(i, 1, newElement);
  }
  return strings;
};

export const onlyEven = (numbers) => {
  for(let i = 0; i < numbers.length; i++){
    let existingElement = numbers[i];
    if(existingElement % 2 !== 0){
      numbers.splice(i, 1)
    }
  }
  return numbers;
};

export const removeNthElement2 = (index, array) => {
  let newArray = array.slice();
  newArray.splice(index, 1); 
  return newArray;
};

export const elementsStartingWithAVowel = (strings) => {
  let newArray = [];
  //console.log(strings);
  const vowelsArray = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  for(let i = 0; i < strings.length; i++){
    //console.log(strings[i], strings[i].charAt(0), vowelsArray.indexOf(strings[i].charAt(0)));
    if(vowelsArray.indexOf(strings[i].charAt(0)) >= 0){
      newArray.push(strings[i]);
      //strings.splice(i, 1);
    }
  }
  //console.log(newArray);
  return newArray;
};

export const removeSpaces = (string) => {
  let newArray = [];
  let existingString = string;
  let splitString = existingString.split(""); // split string into an array
  for(let i = 0; i < splitString.length; i++){
    if(splitString[i] !== ' '){
      newArray.push(splitString[i]);
    }
  }
  let newString = newArray.join(""); // Join array back together into a string
  return newString;
};

export const sumNumbers = (numbers) => {
  let sumOfNumbers = 0
  for(let i = 0; i < numbers.length; i++){
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
};

export const sortByLastLetter = (strings) => {
  
};
