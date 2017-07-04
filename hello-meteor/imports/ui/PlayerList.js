import React from 'react';
import Player from './player';

export default class PlayerList extends React.Component {
	renderPlayers() {
      if (this.props.players.length ===0) {
      	return (
          <div className="item">
            <p>Add a Player to Begin!</p>
          </div>
          );
      } else {
        return this.props.players.map((player) => {
          return <Player key={player._id} player={player}/>;
     });
   }
}
render()  {
     return (
      	<div>
      	  {this.renderPlayers()}
      	</div>
      );
	}
};

PlayerList.propTypes = {
	players: React.PropTypes.array.isRequired
}