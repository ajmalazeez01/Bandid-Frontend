import { useEffect, useState } from "react";
import { getConversationApi } from "../../../Helpers/BandApi";
import "./Conversation.css";

const VendorConversations = () => {

  const [conversation, setConversation] = useState();

  useEffect(() => {
    getConversationApi()
      .then((res) => {
        setConversation(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
    {conversation?.map((conversations) => {  
      return (
        <div className="conversation" key={conversations._id}>
          <img className="conversationImg" src={conversations.file} alt="" />
          <span className="conversationName">{conversations.name}</span>
        </div>
      );
    })}
  </div>
  
  );
};

export default VendorConversations;
