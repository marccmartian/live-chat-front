import React from "react";
import LoginForm from "../components/Forms/LoginForm";

const style = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
};

const Login = () => {
  return (
    <div style={style}>
      <LoginForm />
    </div>
  );
};

export default Login;
