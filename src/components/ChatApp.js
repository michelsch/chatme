import React from 'react';
import ChatInput from './ChatInput.js';
import Messages from './Messages.js';

class ChatApp extends React.Component {

    constructor(props) {
        super(props);
        // set the initial state of messages and users
        this.state = {messages: [], numUsers:1, isTyping:false};
        this.sendHandler = this.sendHandler.bind(this);
        this.isTyping = this.isTyping.bind(this);
        this.isNotTyping = this.isNotTyping.bind(this);

        // Listen for messages from the server
        socket.on('server:message', message => {
            this.addMessage(message);
        });
        socket.on('user:joined', numUsers => {
            this.setState({numUsers})
        });
        socket.on('user:left', numUsers => {
            this.setState({numUsers})
        });
        socket.on('user:startedTyping', () => {
            //console.log('started Typing');
            this.setState({isTyping:true});
        });
        socket.on('user:stoppedTyping', () => {
            //console.log('done Typing');
            this.setState({isTyping:false});
        });

    }

    render() {
        return (
            <div>
                <div class="usersOnline">{this.state.numUsers} users online</div>
                <Messages messages={this.state.messages}/>
                <img src="assets/typingicon.png" className={this.state.isTyping ? '':'hidden'}/>
                <div className="line"></div>
                <ChatInput onSend={this.sendHandler}
                           isTyping={this.isTyping}
                           isNotTyping={this.isNotTyping}/>
            </div>
        );
    }

    isTyping() {
        socket.emit('user:startedTyping');
        //this.setState({isTyping:true});
    }

    isNotTyping() {
        socket.emit('user:stoppedTyping');
        //this.setState({isTyping:false});
    }

    sendHandler(message) {
        const messageObject = {
            username: this.props.username,
            message
        };
        // Emit the message to the server
        socket.emit('client:message', messageObject);
        messageObject.fromMe = true;
        this.addMessage(messageObject);
    }

    addMessage(message) {
        // Append the message to the component state
        const messages = this.state.messages;
        //console.log(messages);
        messages.push(message);
        this.setState({ messages });
    }

}

export default ChatApp;