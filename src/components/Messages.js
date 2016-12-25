import React from 'react';
import Message from './Message.js'

class Messages extends React.Component {

    render() {
        //make sure we don't have an empty array
        if (!this.props.messages) {
            return <div className="messages" id="messageList"> </div>
        };
        const messages = this.props.messages.map((message, i) => {
            return (
                <div>
                    <Message
                        key={i}
                        username={message.username}
                        message={message.message}
                        fromMe={message.fromMe} />
                </div>
            );
        });
        return (
            <div className="messages" id="messageList">
                {messages}
            </div>
        );
    }

    componentDidUpdate() {
        // get the messagelist container and scroll to bottom
        const div = document.getElementById('messageList');
        div.scrollTop = div.scrollHeight;
    }
}

export default Messages;