import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';


setTimeout(function () {
console.log('Players list', Players.find().fetch());
}, 1000);


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
  return playersList.map(function (player) {
  	return <p key={player._id}>{player.name} has {player.score} points</p>;
   });
};





Meteor.startup(function () {
	let title = 'Score Keep';
	let name = 'Mike'
	let jsx = (
		<div>
		 <h1>{title}</h1>
		 <p>Hello {name}!</p>
	     {renderPlayers(players)}
	   </div>
	 );
	ReactDOM.render(jsx, document.getElementById('app'));
});