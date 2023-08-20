import "./Message.css";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getmessageApi, getusermessageApi } from "../../../Helpers/BandApi";

const VendorMessages = () => {
  const email = useSelector((state) => state.band.email);

  const [message, setMessage] = useState();
  const [userMessage, setuserMessage] = useState()

  useEffect(() => {
    getmessageApi(email)
      .then((response) => {
        setMessage(response.data.message.messages);
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });


      getusermessageApi()
      .then((response) => {
        setuserMessage(response.data.message.messages);
        console.log(response.data.message.messages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [message]);
  

  return (
    <div >

<div>
        {userMessage?.map((message, index) => (
          <div className="messages">
            <div className="messageTops">
              <img
                className="messageImgs"
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
              />
              <p className="messageTexts">
              {message && message.length > 0 ? message : "No messages"}
              </p>
            </div>
            <div className="messageBottoms">just now</div>
          </div>
        ))}
      </div>
      <div>
        {message?.map((message, index) => (
          <div key={index} className="message">
            <div className="messageTop">
              <img
                className="messageImg"
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
              />
              <p className="messageText">
                {message && message.length > 0 ? message : "No messages"}
              </p>
            </div>
            <div className="messageBottom">just now</div>
          </div>
        ))}
      </div>

    


    </div>
  );
};

export default VendorMessages;
