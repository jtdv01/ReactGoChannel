import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			channels: [],
			activeChannel: {},
			currentUser: ''
		};


	}

	addChannel(name){
		const {channels} = this.state;
		channels.push({id: channels.length, name});
		this.setState({channels});
		// TODO;send
	}

	setChannel(activeChannel){
		this.setState({activeChannel});
		// TODO get channels messeages
	}

    setUser(u){
        // Sets user given a string u
        this.setState({currentUser: u});
	}

	render(){
		return(
			<div className="app">
				<div className="nav">
					<ChannelSection
						channels={this.state.channels}
						activeChannel={this.state.activeChannel}
						addChannel = {this.addChannel.bind(this)}
						setChannel = {this.setChannel.bind(this)} />
					<UserSection 
						currentUser ={this.state.currentUser}
						setUser = {this.setUser.bind(this)}
						/>
				</div>

				<div className="messages">

				</div>
			</div>

		);
	}
}

export default App;
