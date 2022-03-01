import './Chat.css';
import React, { useEffect, useState } from "react";
import { Avatar, IconButton, Input } from '@material-ui/core';
import { AttachFile, EmojiEmotions, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import { useForm } from "react-hook-form";
function Chat() {
  const [seed, setSeed] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [sentMsg, setSentMsg] = useState("");
  const [isReceivingVisible, setIsReceivingVisible] = useState(false);
  useEffect(() => {

    setSeed(Math.floor(Math.random() * 5000));
  }, [])

  const onSubmitClick = () => {
    
    if (data != "") { setSentMsg(((data.split('{"sentMessage":"'))?.[1].split('"}'))?.[0]); }

    setTimeout(function () {
      setIsReceivingVisible(true);
    }, 3000);


    setIsEmpty(false);
  }
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

        {(!isEmpty) &&
          (<div className="chatReveicer">
            <span className="chatName">Me</span>
            <p>{sentMsg}</p> </div>)}

        {(isReceivingVisible) && (<div className="chatMessage">
          <span className="chatName" >Jessica</span>
          <p>{sentMsg} 💗 </p> </div>)}


        {(isEmpty) && (<h2 className='startNewChat'>Start a new chat</h2>)}
      </div>




      <div className='chatBottom'>
        <div className='chatSendContainer'>
          <IconButton>
            <EmojiEmotions className='iconsColor' />
          </IconButton>


          <IconButton>
            <Mic className='iconsColor' />
          </IconButton>


          <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="form">

            <Input className='input' placeholder='Type a message ...' {...register("sentMessage")}

            />
            <input type="submit" onClick={onSubmitClick} className="submitButton" />
          </form>
        </div>
      </div>

    </div>
  );
}

export default Chat;
