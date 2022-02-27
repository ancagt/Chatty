import './Chat.css';
import React, { useEffect, useState } from "react";
import { Avatar, IconButton, Input } from '@material-ui/core';
import { AttachFile, EmojiEmotions, Mic, MoreVert, SearchOutlined, Send } from '@material-ui/icons';

function Chat(newChatName) {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");
  const [isEmojiIconClicked, setIsEmojiIconClicked] = useState(false);
  const [isEmojiIconVisible, setIsEmojiIconVisible] = useState(true);

  const messages = [{ sentMessage: null, receivedMessage: null, senderName: 'Me', receiverName: 'Jessica Mirutu', chatName:newChatName }];
  useEffect(() => {

    setSeed(Math.floor(Math.random() * 5000));
  }, [])

  const onSendMessage = (event) => {

    messages.push({ sentMessage: input, receivedMessage: (input + "❤️") });
    console.log(messages)
  }

  const onEmojiIconClick = () => {
    setIsEmojiIconClicked(true);
    isEmojiIconVisible(true);
  };
  return (

    <div className="Chat">

      <div className='chatHeader'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chatHeaderInfo'>
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className='rightChatHeader'>
          <IconButton>
            <SearchOutlined className='iconsColor' />
          </IconButton>

          <IconButton>
            <AttachFile className='iconsColor' />
          </IconButton>

          <IconButton>
            <MoreVert className='iconsColor' />
          </IconButton>
        </div>
      </div>

      <div className='chatBody'>

        {(messages.length>1)?  (
          <div>
            <div className="chatReveicer">
              <span className="chatName">{messages.senderName}</span>
              <p>{messages.sentMessage}</p>
              <span className="chatTimestap">3:52 pm</span>

            </div>

            <div className='chatMessage'>
              <span className="chatName">{messages.receiverName}</span>

              <p>{messages.receivedMessage}</p>

              <span className="chatTimestap">6:52 pm</span>
            </div></div>) : (<h2 className='startNewChat'>Start a new chat</h2>)}

        {/* (message.name === user.displayName) */}
        {/* {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )} */}
      </div>

      <div className='chatBottom'>
        <div className='chatSendContainer'>
          <IconButton>
            <EmojiEmotions className='iconsColor' onClick={onEmojiIconClick} />
            {/* {isEmojiIconClicked ? (<Emoji isEmojiIconVisible />) : (<EmojiEmotions className='iconsColor' onClick={onEmojiIconClick} />)} */}
          </IconButton>


          <Input className='input' placeholder='Type a message ...' value={input} onChange={e => setInput(e.target.value)} variant="standard" />

          <IconButton>
            <Mic className='iconsColor' />
          </IconButton>


          <IconButton>
            <Send className='iconsColor' type="submit" onClick={onSendMessage} />
          </IconButton>
        </div>
      </div>

    </div>
  );
}

export default Chat;
