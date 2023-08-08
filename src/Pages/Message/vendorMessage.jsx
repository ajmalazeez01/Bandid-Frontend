import React, { useState } from 'react'; // Import React and useState
import VendorConversations from '../../Components/Messenger/Conversation/vendorConversations';
import VendorMessages from '../../Components/Messenger/Message/vendorMessages';
import { messageApi } from '../../Helpers/BandApi';
import { useSelector } from 'react-redux';

const VendorMessage = () => { // Component names should start with an uppercase letter

  const email = useSelector((state) => state.band.email);

  const [message, setMessage] = useState({
    user: email,
    message: '',
  });

  const handleClick = (e) => {
    e.preventDefault();
    messageApi(message)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          <VendorConversations />
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <VendorMessages />
          </div>
          <div className="chatBoxBottom">
            <textarea
              className="chatMessageInput"
              value={message.message}
              onChange={(e) =>
                setMessage({ ...message, message: e.target.value })
              }
              placeholder="write something..."
              required
            ></textarea>
            <button className="chatSubmitButton" onClick={handleClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorMessage; // Export the component with the correct name
