import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import Byline from './Byline';
import PlayerList from './PlayerList'; 

export default class App extends React.Component {
	render() {
		return (
			<div>
			    <TitleBar title={this.props.title} subtitle="Created by Michael Wiss"/>
			    <div className="wrapper">
		           <Byline byline={this.props.byline}/>
	               <PlayerList players={this.props.players}/>
	               <AddPlayer/>
	            </div>
			</div>
        );
	}
};

App.propTypes = {
	title: React.PropTypes.string.isRequired,
	players: React.PropTypes.array.isRequired
}