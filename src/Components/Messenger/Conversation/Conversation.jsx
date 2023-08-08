import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getConversationApi } from "../../../Helpers/UserApi";
import "./Conversation.css";

const Conversation = () => {
  const { id } = useParams();

  const [conversation, setConversation] = useState();

  useEffect(() => {
    getConversationApi(id)
      .then((res) => {
        // setLoading(false);
        // console.log(res.data.message);
        setConversation(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(conversation);

  return (
    <div className="conversation" key={conversation?.id}>
      <img className="conversationImg" src={conversation?.file} alt="" />
      <span className="conversationName">{conversation?.name}</span>
    </div>
  );
};

export default Conversation;
