import React from 'react';
import fecha from 'fecha';

class Message extends React.Component{
    render(){
        let {message} = this.props;
        let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YYYY');

        return(
            <li className="message">
                <div className="author">
                    <strong>{message.author}</strong>
                    <i className='timestamp'> {createdAt} </i>
                </div>
                <div className='body'> {message.body} </div>
            </li>
        );
    }
}

Message.propTypes ={
    message: React.PropTypes.string.isRequired
};

export default Message;