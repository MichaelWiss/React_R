import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  let obj = {
    name: 'Michael',
    printName() {
      console.log(`Name: ${this.name}`);
    }
  };
});

// object spread operator
let user = {
   name: 'Michael',
   location: 'New York'
};

let person = {
	...user,
	age: 35
};

console.log(person);

let house = {
	bedrooms: 2,
	bathrooms: 1.5
};

let yearBuilt = 1995;

let myHouse = {
	...house,
	bedrooms: 3,
	yearBuilt: 1995,
	flooring: 'Carpet'
}

console.log(myHouse);
