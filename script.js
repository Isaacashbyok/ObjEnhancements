function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

//es2015 version

function createInstructor1(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

//computed property names

var favoriteNumber = 42;

var instructor = {
  firstName: 'Colt',
};

instructor[favoriteNumber] = 'That is my favorite!';

//es2015 version

let favoriteNumber = 42;

const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite',
};

//object methods

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName " + "says bye!";
    }
}
  
  //es2015 version 

const instructor = {
    firstName : 'Colt',
    sayHi () {
        return 'hi!'
    },
    sayBye () {
        return this.firstName + ' says bye!'
    }
};

  //animal function 

  const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
           // {species: "sheep", bleet: ƒ}
s.bleet()  //"BAAAAaaaa"

function createAnimal (species,verb,noise) {
    return {
        species,
        [verb] () {
            return noise;
        }
    }
}