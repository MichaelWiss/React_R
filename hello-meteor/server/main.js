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
