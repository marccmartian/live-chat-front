import React from "react";
import loader from "../../images/loader.gif";
import { LoaderContainer } from "./LoaderElements";

const Loader = () => {
  return (
    <LoaderContainer>
      <img src={loader} alt="loader" />
    </LoaderContainer>
  );
};

export default Loader;
