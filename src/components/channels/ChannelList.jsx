import React from 'react';
import Channel from './Channel.jsx';

class ChannelList extends React.Component{
	render(){
		return(
			<ul>
				{this.props.channels.map(chan =>
					<Channel 
						channel={chan}
						{... this.props}
					/>
				)}
			</ul>
		);
	}
}

ChannelList.propTypes = {
	channels: React.PropTypes.array.isRequired,
	setChannel: React.PropTypes.func.isRequired,
	activeChannel: React.PropTypes.bool.isRequired
};

export default ChannelList;
