import React from 'react';

class Message extends React.Component {
    render() {
        //add different css class if message was added by current user
        var fromWhoClass = 'notFromMe';
        if (this.props.fromMe) {
            fromWhoClass = 'fromMe';
        }
        return (
            <div className={`message ${fromWhoClass}`}>
                <div className='username'>
                    { this.props.fromMe ? '':this.props.username }
                </div>
                <div className='messageBody'>
                    { this.props.message }
                </div>
            </div>
        );
    }
}

export default Message;