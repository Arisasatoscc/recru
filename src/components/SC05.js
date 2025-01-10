import '../css/SC05.css';
import React from "react";
import { Return } from'../ui-components';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SC05() {
  const [data, setData] = useState();
  const handleClick = () => {navigate("/");};
  const navigate = useNavigate(); 


  return (

    <div className="Return">
      <button onClick={handleClick}><Return data={data} /></button> 

    </div>
  );
}

export default SC05;
