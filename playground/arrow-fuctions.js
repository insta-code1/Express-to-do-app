var square = x => x * x;
console.log(square(9));

var user = {
  name: 'instacode',
  sayHi: () => {
    // querks with es6
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    // correct way
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};
user.sayHiAlt(1,2,3);
