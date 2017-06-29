import React from 'react';

export default class AddPlayer extends React.Component {
     render() {
     	return (
          <form onSubmit={() => {}}>
	       <input type="text" name="playerName" placeholder="Player name" />
	       <button>Add Player</button>
	     </form>
     	);
     }
}