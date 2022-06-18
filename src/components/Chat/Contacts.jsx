import { useState, useEffect } from "react";
import { ContactsContainer } from "./ChatElements";
import Logout from "../Logout/Logout";

const Contacts = ({ contacts, changeChat }) => {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chat-user"));
    if (data) {
      setCurrentUserName(data.username);
      setCurrentUserImage(data.avatarImage);
    }
  }, []);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserName && currentUserImage && (
        <ContactsContainer>
          <div className="brand">
            <h3>Chat 👥</h3>
            <Logout />
          </div>

          <div className="contacts">
            {contacts.map((contact, index) => (
              <div
                key={contact._id}
                className={`contact ${
                  index === currentSelected ? "selected" : ""
                }`}
                onClick={() => changeCurrentChat(index, contact)}
              >
                <div className="avatar">
                  <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(
                      contact.avatarImage
                    )}`}
                    alt=""
                  />
                </div>
                <div className="username">
                  <h3>{contact.username}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(
                  currentUserImage
                )}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </ContactsContainer>
      )}
    </>
  );
};

export default Contacts;
