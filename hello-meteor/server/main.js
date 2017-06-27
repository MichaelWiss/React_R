import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
   class Person {
     constructor(name = 'Anonymous') {
         this.name = name;
     }
     getGreeting() {
     	return 'Hi! I am ' + this.name + '.';
     }
   }


  let me = new Person('Michael');
   console.log(me);
});
