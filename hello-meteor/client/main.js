import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Byline from './../imports/ui/Byline';


const renderPlayers = (playersList) => {
  return playersList.map((player) => {
  	return (
  		<p key={player._id}>
  		   {player.name} has {player.score} point(s).
  		   <button onClick={() => {
  		   	Players.update({_id: player._id}, {
             $inc: {score:-1}
  		   	});
  		   }}>-1</button>
  		   <button onClick={() => {
  		   	Players.update({_id: player._id}, {
             $inc: {score: 1}
  		   	});
  		   }}>+1</button>
  		   <button onClick={() => Players.remove({_id: player._id})}>x</button>
  	    </p>
     );
   });
 };

Meteor.startup(() => {
   Tracker.autorun(() => {
	  let players = Players.find().fetch();
	  let title = 'Score Keep';
	  let name = 'Mike';
	  let subtitle = "Mike's App"
	  let jsx = (
		<div>
		 <TitleBar title={title}/>
		 <TitleBar subtitle={subtitle}/>
		 <Byline/>
		 
		 <p>Hello {name}!</p>
	     {renderPlayers(players)}
	     <AddPlayer score={10}/>
	     </div>
	 );
	ReactDOM.render(jsx, document.getElementById('app'));
  });
  //insert new doc
  
});


	