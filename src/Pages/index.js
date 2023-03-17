import React, { useState } from "react";
import Form from "./form";
import Navbar from "./navbar";
import Pricing from "./pricing";

const Home = () => {
  const [stateChange, setStateChange] = useState(false);
  return (
    <div className="img">
      <div className="container py-3">
        <Navbar />
        {stateChange === false ? (
          <Pricing setStateChange={setStateChange} />
        ) : (
          <Form setStateChange={setStateChange} />
        )}
      </div>
    </div>
  );
};

export default Home;
