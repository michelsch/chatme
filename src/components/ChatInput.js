import React from 'react';
import InputBoxDoneTyping from 'react-input-box-done-typing';

class ChatInput extends React.Component {

    constructor(props) {
        super(props);
        // Set initial state of the chatInput so that it is not undefined
        this.state = { chatInput: ''};

        // React ES6 does not bind 'this' to event handlers by default
        this.submitHandler = this.submitHandler.bind(this);
    }

    render() {
        return (
            <div className = "chatInputContainer">
                <form className="chatInput" id="chatInputForm" onSubmit={this.submitHandler}>
                    <InputBoxDoneTyping
                        id="chatInputBox"
                        type="text"
                        required
                        value={this.state.chatInput}
                        onChange={(value) => {
                            //console.log('onChange:', value);
                            this.setState({ chatInput: value });
                            this.props.isTyping();
                        }}
                        doneTyping={(value) => {
                            //console.log('doneTyping:', value);
                            this.props.isNotTyping();
                        }}
                        doneTypingInterval={1000}
                    />
                    <input type="image" src="assets/send.png"
                           className="sendButton"/>
                </form>
            </div>
        );
    }

    submitHandler(event) {
        // Stop the form from refreshing the page on submit
        event.preventDefault();

        // Call the onSend callback with the chatInput message
        this.props.onSend(this.state.chatInput);

        // Clear the input box
        this.setState({chatInput: ''});
        document.getElementById("chatInputForm").reset();
    }

}

export default ChatInput;