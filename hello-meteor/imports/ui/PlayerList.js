import React from 'react';
import Player from './player';


const renderPlayers = (playersList) => {
  return playersList.map((player) => {
     return <Player key={player._id} player={player}/>;
    });
 };

export default class PlayerList extends React.Component {
	renderPlayer() {
    return this.props.map((player) => {
     return <Player key={player._id} player={player}/>;
    });
	}
	render()  {
      return (
      	<div>
      	  player list
      	</div>
      );
	}
};