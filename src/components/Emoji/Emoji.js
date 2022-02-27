import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const Emoji = (isEmojiIconVisible) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
     {/* {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}  */}
      {!isEmojiIconVisible ? (<Picker onEmojiClick={onEmojiClick} />) :(<div></div>)}
    </div>
  );
};

export default Emoji;