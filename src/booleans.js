export const negate = (a) => {
  if(a){
    return false;
  }
  else{
    return true;
  }
};

export const both = (a, b) => {
  if(a && b){
    return true;
  }
  else{
    return false;
  }
};

export const either = (a, b) => {
  if(a || b){
    return true;
  }
  else{
    return false;
  }
};

export const none = (a, b) => {
  if(!a && !b){
    return true;
  }
  else{
    return false;
  }
};

export const one = (a, b) => {
  if((a && !b) || (!a && b)){
    return true;
  }
  else{
    return false;
  }
};

export const truthiness = (a) => {
  if(a){
    return true;
  }
  else{
    return false;
  }
};

export const isEqual = (a, b) => {
  if(a === b){
    return true;
  }
  else{
    return false;
  }
};

export const isGreaterThan = (a, b) => {
  if(a > b){
    return true;
  }
  else{
    return false;
  }
};

export const isLessThanOrEqualTo = (a, b) => {
  if(a <= b){
    return true;
  }
  else{
    return false;
  }
};

export const isOdd = (a) => {
  if(a % 2 === 0){
    return false;
  }
  else{
    return true;
  }
};

export const isEven = (a) => {
  if(a % 2 === 0){
    return true;
  }
  else{
    return false;
  }
};

export const isSquare = (a) => {
  if(Math.sqrt(a) % 1 === 0){
    return true;
  }
  else{
    return false;
  }
};

export const startsWith = (char, string) => {
  if(string.charAt(0) === char){
    return true;
  }
  else{
    return false;
  }
};

export const containsVowels = (string) => {
  const vowelsArray = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  let i;
  for(i = 0; i < string.length; i++){
    if(vowelsArray.indexOf(string.charAt(i)) >= 0){
      return true;
      exit;
    } 
  }
  return false;
};

export const isLowerCase = (string) => {
  let i;
  for(i = 0; i < string.length; i++){
    if(string.charAt(i).toLowerCase() != string.charAt(i)){
      return false;
      exit;
    }
  }
  return true;
};
