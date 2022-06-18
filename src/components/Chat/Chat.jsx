import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "./ChatElements";
import api from "../../utils/api";
import Contacts from "./Contacts";
import Wellcome from "../Welcome/Wellcome";
import ChatArea from "./ChatArea";
import io from "socket.io-client";

const backUrl = import.meta.env.VITE_BACKEND_URL;

const Chat = () => {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);

  useEffect(() => {
    if (!localStorage.getItem("chat-user")) {
      navigate("/login");
    } else {
      setCurrentUser(JSON.parse(localStorage.getItem("chat-user")));
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(backUrl);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    const getUsers = async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const { data } = await api.get(`/users/${currentUser._id}`);
          setContacts(data);
        } else {
          navigate("/set-avatar");
        }
      }
    };
    getUsers();
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
    // console.log(currentChat);
  };

  return (
    <MainContainer>
      <div className="container">
        {currentChat === undefined ? (
          <Wellcome />
        ) : (
          <ChatArea currentChat={currentChat} socket={socket} />
        )}

        <Contacts contacts={contacts} changeChat={handleChatChange} />
      </div>
    </MainContainer>
  );
};

export default Chat;
