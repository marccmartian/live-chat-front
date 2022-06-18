import React from "react";
import RegisterForm from "../components/Forms/RegisterForm";

const style = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
};

const Register = () => {
  return (
    <div style={style}>
      <RegisterForm />
    </div>
  );
};

export default Register;
