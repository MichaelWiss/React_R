import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Byline from './../imports/ui/Byline';
import PlayerList from './../imports/ui/PlayerList'; 

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
	     <PlayerList players={players}/>
	     <AddPlayer/>
	     </div>
	 );
	ReactDOM.render(jsx, document.getElementById('app'));
  });  
});


	