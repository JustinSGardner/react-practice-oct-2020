import React, { Components, useEffect, useRef } from 'react';

const { useState } = require("react");

function MessageThread() {
    const [message, setMessage] = useState('');
    const latestMessage = useRef('');
    useEffect(() => {
        latestMessage.current = message;
    });

    const showMessage = () => {
        alert('You sad: ' + latestMessage.current);
    };
    const handleSendClick = () => {
        setTimeout(showMessage, 3000);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        latestMessage.current = e.target.value;
    };

    return (
        <div>
            <input value={message} onChange={handleMessageChange} />
            <button onClick={handleSendClick}>Send</button>
        </div>
    );
}

export default MessageThread;