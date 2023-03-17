import React, { useState } from "react";
import BussinessRegisteration from "./BussinessRegisteration";
import CompanyRegisteration from "./CompanyRegisteration";

function Form({ setStateChange }) {
  const [registerChange, setRegisterChange] = useState(false);
  return (
    <>
      {registerChange === false ? (
        <BussinessRegisteration
          setRegisterChange={setRegisterChange}
          setStateChange={setStateChange}
        />
      ) : (
        <CompanyRegisteration setRegisterChange={setRegisterChange} />
      )}
    </>
  );
}

export default Form;
