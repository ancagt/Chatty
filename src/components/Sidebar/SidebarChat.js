import './SidebarChat.css';
import { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
function SidebarChat({ addNewChat }) {

    const [seed, setSeed] = useState("");

    useEffect(() => {

        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter a name for your chat");
        if (roomName) {
            console.log(roomName)
        }
    }
    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarChatInfo'>
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div className='sidebarChat' onClick={createChat}>
            <h2>Create new chat</h2>
        </div>
    );
}

export default SidebarChat;
