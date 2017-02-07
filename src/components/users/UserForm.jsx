import React from 'react';

class UserForm extends React.Component{
    onSubmit(e){
        e.preventDefault();
        const node = this.refs.user;
        const user = node.value;
        this.props.setUser(user);
        // clear it 
        node.value = '';
    }
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input
                        type="text"
                        ref="user"
                        placeholder="Type in your username"
                        className="form-control"
                     />
                </div>
            </form>
        )
    }
}

UserForm.propTypes ={
    setUser: React.PropTypes.func.isRequired
};

export default UserForm;