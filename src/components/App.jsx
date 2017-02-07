import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			channels: [],
			activeChannel: {}
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

	render(){
		return(
			<div className="app">
				<div className="nav">
					<ChannelSection
						channels={this.state.channels}
						activeChannel={this.state.activeChannel}
						addChannel = {this.addChannel.bind(this)}
						setChannel = {this.setChannel.bind(this)} />
				</div>
			</div>

		);
	}
}

export default App;
