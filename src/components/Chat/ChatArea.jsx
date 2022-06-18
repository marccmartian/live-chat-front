import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatContainer } from "./ChatElements";
import ChatInput from "./ChatInput";
import api from "../../utils/api";

const ChatArea = ({ currentChat, socket }) => {
  const scrollRef = useRef();
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    const userLs = JSON.parse(localStorage.getItem("chat-user"));

    const getMessagesFetch = async () => {
      const response = await api.get(
        `/messages/${userLs._id}/${currentChat._id}`
      );
      setMessages(response.data);
    };
    getMessagesFetch();
  }, [currentChat]);

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((item) => [...item, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMsg = async (msg) => {
    const userLs = JSON.parse(localStorage.getItem("chat-user"));

    await api.post("/messages", {
      from: userLs._id,
      to: currentChat._id,
      message: msg,
    });

    socket.current.emit("send-msg", {
      from: userLs._id,
      to: currentChat._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  return (
    <ChatContainer>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(
                currentChat.avatarImage
              )}`}
              alt=""
            />
          </div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ChatInput handleSendMsg={handleSendMsg} />
    </ChatContainer>
  );
};

export default ChatArea;
