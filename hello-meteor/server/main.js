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
