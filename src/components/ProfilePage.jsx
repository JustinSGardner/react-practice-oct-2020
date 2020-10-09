import React, { Components } from 'react';

function ProfilePage({ user }) {
    const showMessage = () => {
        alert('Followed ' + user);
    };
    const handleClick = () => {
        setTimeout(showMessage, 3000);
    };
    return (
        <button onClick={handleClick}>Follow</button>
    );
}

export default ProfilePage;