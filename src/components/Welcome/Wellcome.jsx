import { useEffect, useState } from "react";
import { WellContainer } from "./WellcomeElements";
import Robot from "../../images/robot.gif";

const Wellcome = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userLs = JSON.parse(localStorage.getItem("chat-user"));

    if (userLs) {
      setUsername(userLs.username);
    }
  }, []);

  return (
    <WellContainer>
      <img src={Robot} alt="" />
      <h1>
        Hola <span>{username ? username : "amigo"}!</span>
      </h1>
      <h3>Selecciona un contacto y empieza a chatear</h3>
    </WellContainer>
  );
};

export default Wellcome;
