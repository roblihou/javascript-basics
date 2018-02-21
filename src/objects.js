export const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
  };
  return person;
};

export const getName = (object) => {
  return object.name;
};

export const getProperty = (property, object) => {
  return object[property];
};

export const hasProperty = (property, object) => {
  if(object.hasOwnProperty(property)){
    return true;
  }
  else{
    return false;
  }
};

export const isOver65 = (person) => {
  if(person.age > 65){
    return true;
  }
  else{
    return false;
  }
};

export const getAges = (people) => {
  let ages = [];
  for(let i = 0; i < people.length; i++){
    //console.log(people[i].age);
    ages.push(people[i].age);
  }
  return ages;
};

export const findByName = (name, people) => {
  for(let i = 0; i < people.length; i++){
    if(people[i].name === name){
      return people[i];
      exit;
    }
  }
};

export const findHondas = (cars) => {
  let hondas = [];
  for(let i = 0; i < cars.length; i++){
    if(cars[i].manufacturer === 'Honda'){
      hondas.push(cars[i]);
    }
  }
  return hondas;
};

export const averageAge = (people) => {
  let totalAge = 0;
  for(let i = 0; i < people.length; i++){
    totalAge += people[i].age;
    console.log(people[i].age, totalAge);
  }

  
  let avAge = totalAge/people.length;
  return avAge;
};

export const createTalkingPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
    introduce: function(friendName) {return "Hi " + friendName + ", my name is " + this.name + " and I am " + this.age + "!";}
  };
  return person;
};
