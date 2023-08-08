import "./Messages.css";
import Message from "../../Components/Messenger/Message/Message";
import Conversation from "../../Components/Messenger/Conversation/Conversation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { messageApi } from "../../Helpers/UserApi";
import { useParams } from "react-router-dom";

const Messages = () => {
  const email = useSelector((state) => state.user.email);
  const { id } = useParams();

  const [message, setMessage] = useState({
    user: email,
    message: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    messageApi(message, id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />

            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            
            <>
              <div className="chatBoxTop">
                <Message />
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
                <button
                  className="chatSubmitButton"
                  onClick={handleClick}
                  disabled={!message.message}
                >
                  Send
                </button>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
