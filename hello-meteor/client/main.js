import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
	_id: '1',
	name: 'Lauren',
	score: 99
}, {
	_id: '2',
	name: 'Cory'
	score: -1
}, {
	_id: '3',
	name: 'Andrew',
	score: -12
}];

Meteor.startup(function () {
	let title = 'Account Settings';
	let name = 'Michael';
	let jsx = (
		<div>
		<h1> {title} </h1>
	     <p>Hello {name}!</p>
	     <p>This is my second P.</p>
	   </div>
	 );
	ReactDOM.render(jsx, document.getElementById('app'));
});