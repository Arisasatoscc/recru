import './Inforsession.css';
import React from "react";
import { Return } from'./ui-components';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Inforsession() {
  const [data, setData] = useState();
  const handleClick = () => {navigate("/");};
  const navigate = useNavigate(); 


  return (

    <div className="Return">
      <button onClick={handleClick}><Return data={data} /></button> 

    </div>
  );
}

export default Inforsession;
