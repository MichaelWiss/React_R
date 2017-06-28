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
     getPersonDescription() {
     	return `${this.name} is ${this.age} years old.`;
     }
   }

   class Employee extends Person {
   	 constructor(name, age, title) {
   	 	super(name, age);
   	 	this.title = title;
   	 }
   	 getGreeting() {
   	 	if (this.title) {
        return `Hi I am ${this.name}. I work as a ${this.title}`;
   	 	} else {
         retun super.getGreeting();
   	 	}
   	 }
    hasJob() {
      return !!this.title;
    }
  }


  let me = new Employee('Michael', 26, 'db admin');
   console.log(me.getGreeting());
   
   let him = new Employee('Andrew', 25);
   console.log(him.getGreeting());
   console.log(him.getPersonDescription());
   console.log(him.hasJob());

});
