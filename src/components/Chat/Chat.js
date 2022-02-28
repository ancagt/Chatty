import './Chat.css';
import React, { useEffect, useState } from "react";
import { Avatar, IconButton, Input } from '@material-ui/core';
import { AttachFile, EmojiEmotions, Mic, MoreVert, SearchOutlined, Send } from '@material-ui/icons';
import { useForm } from "react-hook-form";
function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [isEmojiIconVisible, setIsEmojiIconVisible] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [sentMsg, setSentMsg] = useState("");
  const [isReceivingVisible, setIsReceivingVisible] = useState(false);

  const [messages, setMessages] = useState([]);
  useEffect(() => {

    setSeed(Math.floor(Math.random() * 5000));
  }, [])

  function onSendMessage() {
    setIsEmpty(false);

  }
  //useEffect(() => {

  //localStorage.setItem(messages, sentMsg);
  //let k = localStorage.getItem(messages);
  //console.log(k, typeof k)
  //})

  useEffect(() => {
    messages.push({ data });
    console.log(messages);
    for (var i = 0; i < messages.length; i++) {
      var k = messages[i];
      if (k) {
        var d = k["data"];
        if (d) {
          var sM = d?.split('{"sentMessage":"');
          if (sM) {
            var sM2 = sM[1]?.split('"}');
            if (sM2) {
              var sM3 = sM2[0];
              if (sM3)
              setSentMsg(sM3);
            }
          }
        }
      }
    }

  })

  const onSubmitClick = () => {

    setTimeout(() => {
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


        {(isReceivingVisible) &&

          (<div className="chatMessage">
            <span className="chatName" >Jessica</span>
            <p>{sentMsg} 💗 </p> </div>)}
        {/* (sentMessages?.map((m) => <div className="chatReveicer">
          <span className="chatName">Me {timeOfToday}</span>
          <p>{m.sentMessage}</p> </div>))} */}


        {/* {(!isEmpty)&&(messageWasSent) && (receivedMessages?.map((m) => <div className='chatMessage' style={{ marginTop: "60px" }} >
          <span className="chatName">Jessica Mirutu {timeOfToday}</span>
          <p>{m.receivedMessage}</p> </div>))} */}


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
           <input type="submit" onClick={onSubmitClick} class="submitButton"/>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Chat;
