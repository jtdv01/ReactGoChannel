import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';
import Socket from '../socket';
class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			channels: [],
			activeChannel: {},
			currentUser: '',
			users:[],
			messages: [],
			connected: false
		};


	}

    componentDidMount(){
        // let ws = this.state.ws;
		this.socket = new Socket('wss://echo.websocket.org');
		let socket = this.socket;
		socket.on('connect', this.onConnect.bind(this));
		socket.on('disconnect', this.onDisconnectConnect.bind(this));
		socket.on('channel add', this.onAddChannel.bind(this));
		socket.on('user add', this.onAddUser.bind(this));
		socket.on('user remove', this.onRemoveUser.bind(this));
		socket.on('message add', this.onMessageAdd.bind(this));
    }

	onMessageAdd(message){
		let { messages } = this.state;
		messages.push(message);
		this.setState({messsages});
	}

	onAddUser(user){
		let { users } = this.state;
		users.push(user);
		this.setState({users});
	}
	
	onRemoveUser(user){
		let { users } = this.state;
		users = users.filter(u => {
			return user.id !== removeUser.id;
		});
		this.setState({users});
	}

	onEditUser(editUser){
		let { users } = this.state;
		users = users.map(u => {
			if(editUser.id === user.id){
				return editUser;
			}
			return user;
		});
		this.setState({users});
	}

	onConnect(){
		this.setState({connected: true});
	}
	onDisconnect(){
		this.setState({connected: false});
	}

	newChannel(channel){
		let {channels} = this.state;
		channels.push(channel);
		this.setState({channels});
	}

	addChannel(name){
		this.socket.emit('channel add', { name });
	}

	setChannel(activeChannel){
		this.setState({activeChannel});
		// TODO get channels messeages
	}


    setUser(name){
		this.socket.emit('user edit', {name});
	}

	addMessage(body){
		let { activeChannel } =  this.state;
		this.socket.emit('message add',
			{channelId: activeChannel.id, body});
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
