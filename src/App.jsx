import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./components/Chat/Chat";
import SetAvatar from "./components/Avatars/SetAvatar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/set-avatar" element={<SetAvatar />} />
    </Routes>
  );
};

export default App;
