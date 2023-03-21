import React, { useEffect, useState } from "react";
import { BusinessData } from "../../services/pricing";
import BussinessRegisteration from "./BussinessRegisteration";
import CompanyRegisteration from "./CompanyRegisteration";

function Form({ setStateChange }) {
  const [registerChange, setRegisterChange] = useState(false);
  const [editData, setEditData] = useState({});
  const getData = async () => {
    let { data, errRes } = await BusinessData();
    if (data) {
      if (!data.error) {
        setEditData(data.data);
      } else {
        setEditData({});
      }
    } else if (errRes) {
      setEditData({});
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {registerChange === false ? (
        <BussinessRegisteration
          setRegisterChange={setRegisterChange}
          setStateChange={setStateChange}
          editData={editData}
          getData={getData}
        />
      ) : (
        <CompanyRegisteration setRegisterChange={setRegisterChange} />
      )}
    </>
  );
}

export default Form;
