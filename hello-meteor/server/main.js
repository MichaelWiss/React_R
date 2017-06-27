import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
   class Person {
     constructor(name = 'Anonymous', age = '0') {
         this.name = name;
         this.age = age;
     }
     getGreeting() {
     	// return 'Hi! I am ' + this.name + '.';
     	return `Hi I am ${this.name}.`;
     }
   }


  let me = new Person('Michael');
   console.log(me.getGreeting());
   let him = new Person('Andrew', 25);
   console.log(him.getGreeting());
});
