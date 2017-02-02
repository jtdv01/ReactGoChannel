import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			channels: [{name: "value"}]
		};
	}

	addChannel(name){
		const {channels} = this.state;
		// channels.push({id: channels.length, name});
		// this.setState({channels});
		// TODO;send
	}

	setChannel(activeChannel){
		// this.setState({activeChannel});
		// TODO get channels messeages
	}

	render(){
		return(
			<div>
			<ChannelSection
				channels={this.state.channels}
				addChannel = {this.addChannel.bind(this)}
				setChannel = {this.setChannel.bind(this)} />
				</div>
		);
	}
}

export default App;
