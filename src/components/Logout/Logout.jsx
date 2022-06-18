import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "./LogoutELements";

const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const userResponse = confirm("Desea cerrar la sesión?");
    if (userResponse) {
      localStorage.clear();
      navigate("/login");
    }
  };

  return <LogoutButton onClick={handleClick}> ⛔ </LogoutButton>;
};

export default Logout;
