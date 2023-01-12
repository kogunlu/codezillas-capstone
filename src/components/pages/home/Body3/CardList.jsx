import React from 'react';
import Card from './Card';
import chat from './images/chat.png';
import phone from './images/phone.png';
import video from './images/video.png';

const Cards = () => {
  return (
    <div className="justify-center  flex flex-wrap items-starts  ">
      <div className="flex items-center justify-center mb-20 ">
        <div className=" flex flex-wrap gap-5 justify-center mb-20 ">
          <Card
            imgSource={phone}
            altText="phone"
            header="Voice Call"
            text="Feeling ready to start a conversation? Give your therapist a voice
              call and talk your heart out!"
          />

          <Card
            imgSource={chat}
            altText="chat"
            header="Chat"
            text="Need to talk to someone?Come have a chat with your therapist!"
          />

          <Card
            imgSource={video}
            altText="video"
            header="Video Call"
            text="For better experience therapists recommend video calls, but
                always remember that its a choice!"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
