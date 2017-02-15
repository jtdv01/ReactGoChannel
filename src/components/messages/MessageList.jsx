import React from 'react';
import fecha from 'fecha';
import Message from './Message.jsx';

class MessageList extends React.Component{
    render(){
        let {message} = this.props;
        // let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YYYY');

        return(
            <ul className="message">
                {this.props.messages.map(m => <Message key={m.id} message={m} />)}
            </ul>
        );
    }
}

MessageList.propTypes ={
    messages: React.PropTypes.array.isRequired
};

export default MessageList;