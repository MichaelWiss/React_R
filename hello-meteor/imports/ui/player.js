import React from 'react';
import {Players} from './../imports/api/players';



export default class AddPlayer extends React.Component {
	render() {
      return (
       <p key={this.props.player._id}>
  		   {this.props.player.name} has {this.props.player.score} point(s).
  		   <button onClick={() => {
  		   	Players.update(this.props.player._id, {$inc: {score:-1}});}}>-1</button>
  		   <button onClick={() => {
  		   	Players.update(this.props.player._id, {$inc: {score: 1}});
  		   }}>+1</button>
  		   <button onClick={() => Players.remove(this.props.player._id)}>x</button>
  	    </p>
     );
	}
}

// Setup prop types. player should be a required object
Player.propTypes = {
  player: React.PropTypes.object.isRequired
};
	 


