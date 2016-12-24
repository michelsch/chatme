import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        // set the initial state of the application
        this.state = { username: '' };
        // bind the 'this' keyword to the event handlers
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="row" id="loginRow">
                    <div className="col-sm-6">
                        <div className="logoDiv">
                            <img className="logo" src="assets/logo.png"/>
                            <div className="logoTitle"> chat.me</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h1> Set your nickname. </h1>
                        <form onSubmit={this.usernameSubmitHandler}>
                            <h2>
                                <input className="usernameInput" type="text"
                                       onChange={this.usernameChangeHandler}/><br/>
                            </h2>
                        </form>
                        <h2 onClick={this.usernameSubmitHandler} id="continueText">Continue</h2>
                    </div>
                </div>
            </div>
        );
    }

    //set username as it is being typed
    usernameChangeHandler(event) {
        //console.log('changing');
        this.setState({ username: event.target.value });
    }

    //set 'submitted' boolean flag to true
    usernameSubmitHandler(event) {
        //console.log('submitting');
        event.preventDefault();
        this.setState({ submitted: true, username: this.state.username });
    }
}

export default Login;