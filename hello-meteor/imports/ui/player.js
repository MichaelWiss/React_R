import React from 'react';


export default class AddPlayer extends React.Component {
	render() {
		return <p>Player test</p>
		 	return (
  		<p key={this.props.player._id}>
  		   {this.props.player.name} has {this.props.player.score} point(s).
  		   <button onClick={() => {
  		   	Players.update({_id: this.props.player._id}, {
             $inc: {score:-1}
  		   	});
  		   }}>-1</button>
  		   <button onClick={() => {
  		   	Players.update({_id: this.props.player._id}, {
             $inc: {score: 1}
  		   	});
  		   }}>+1</button>
  		   <button onClick={() => Players.remove({_id: this.props.player._id})}>x</button>
  	    </p>
     );
	}
}
	 
