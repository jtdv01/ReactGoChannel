import React from 'react';
import UserForm from './UserForm.jsx';

class UserSection extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong> Users </strong>
                </div>

                <div className="panel-body channels">
                    {this.props.currentUser === '' ? 'Please Login' : 'Welcome, '}
                    {this.props.currentUser}
                    <UserForm {... this.props} />
                </div>
            </div>
        );
    }
}

UserSection.PropTypes = {
    currentUser: React.PropTypes.string.isRequired,
    setUser: React.PropTypes.func.isRequired
}

export default UserSection;