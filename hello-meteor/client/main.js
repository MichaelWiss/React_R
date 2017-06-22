import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
	_id: '1',
	name: 'Lauren',
	score: 99
}, {
	_id: '2',
	name: 'Cory',
	score: -1
}, {
	_id: '3',
	name: 'Andrew',
	score: -12
}];

const renderPlayers = function (playersList) {
  let numbers = [{val:9}, {val:2}, {val:3}];

  return newNumbers= numbers.map(function (number) {
  	return <p key={number.val}>{number.val}</p>;

  });
};

Meteor.startup(function () {
	let title = 'Account Settings';
	let name = 'Michael';
	let jsx = (
		<div>
		<h1>{title}</h1>
	     <p>Hello {name}!</p>
	     <p>This is my second P.</p>
	     {renderPlayers()}
	   </div>
	 );
	ReactDOM.render(jsx, document.getElementById('app'));
});