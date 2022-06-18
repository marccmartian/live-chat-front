import styled from "styled-components";

export const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  .container {
    height: 100%;
    width: 85vw;
    background-color: var(--lightYellow);
    display: grid;
    grid-template-columns: 75% 25%;

    @media (max-width: 425px) {
      width: 100%;
    }
  }
`;

// CONTACTS
export const ContactsContainer = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  overflow: hidden;
  background-color: var(--lightGreen);

  .brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    h3 {
      text-transform: uppercase;
      text-align: center;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0;
      }
    }
    .selected {
      background-color: var(--purple);
    }
  }
  .current-user {
    background-color: var(--darkGreen);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        width: 3rem;
        @media (max-width: 768px) {
          width: 2rem;
        }
      }
    }
  }
`;

// CHAT AREA
export const ChatContainer = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;

  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: var(--lightGreen);
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: var(--purple);
      }
    }
  }
`;

// CHAT INPUT
export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--lightGreen);
  padding: 0 2rem;
  gap: 1rem;
  @media (max-width: 425px) {
    gap: 0.3rem;
    padding: 0 0.3rem;
  }

  .button-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    .emoji {
      position: relative;
    }
  }
  .input-container {
    width: 100%;
    height: 2.7rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      &:hover {
        cursor: pointer;
        background-color: var(--white);
      }
      @media (max-width: 425px) {
        padding: 0.3rem 1rem;
      }
    }
  }
`;
