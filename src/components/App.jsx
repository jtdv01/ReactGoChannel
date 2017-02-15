import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			channels: [],
			activeChannel: {},
			currentUser: '',
			users:[],
			messages: []
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
		let {users} = this.state;
		users.push({id: users.length, name: u});

		this.setState({users});
        this.setState({currentUser: u});
	}

	addMessage(body){
		let {messages, users} = this.state;
		let createdAt = new Date;
		let author = users.length > 0 ? users[0].name : 'anon';
		messages.push({id: messages.length, body, createdAt , author});
		this.setState({messages});
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

				<MessageSection
					{...this.state}
					addMessage={this.addMessage.bind(this)}
				/>
			</div>

		);
	}
}

export default App;
