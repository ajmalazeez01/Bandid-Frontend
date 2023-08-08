import "./Message.css";
import React from "react";
import { useParams } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getmessageApi, getvendormessageApi } from "../../../Helpers/UserApi";

const Message = () => {
  const email = useSelector((state) => state.user.email);
  const { id } = useParams();

  const [message, setMessage] = useState();
  const [vendoressage, setvendorMessage] = useState();

  useEffect(() => {
    getmessageApi(email)
      .then((response) => {
        setMessage(response.data.message.messages);
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    getvendormessageApi()
      .then((response) => {
        setvendorMessage(response.data.message.messages);
        console.log(response.data.message.messages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [message]);

  return (
    <div>
      <div>
        {vendoressage?.map((vendorMessage, vendorIndex) => (
          <div className="messages" key={vendorIndex}>
            <div className="messageTops">
              <img
                className="messageImgs"
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
              />
              <p className="messageTexts">
                {vendorMessage && vendorMessage.length > 0
                  ? vendorMessage
                  : "No messages"}
              </p>
            </div>
            <div className="messageBottoms">just now</div>
          </div>
        ))}
        {message?.map((userMessage, userIndex) => (
          <div className="message" key={userIndex}>
            <div className="messageTop">
              <img
                className="messageImg"
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
              />
              <p className="messageText">
                {userMessage && userMessage.length > 0
                  ? userMessage
                  : "No messages"}
              </p>
            </div>
            <div className="messageBottom">just now</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
