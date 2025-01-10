import '../css/SC03.css';
import React from "react";
import { Return } from'../ui-components';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SC03() {
  const [data, setData] = useState();
  const handleClick = () => {navigate("/");};
  const navigate = useNavigate(); 

  return (
    <app>
    <div className="Return">
      <button onClick={handleClick}><Return data={data} /></button> 
    </div>

    <div className = "Infor">
      <p>会社説明会一覧</p>
    </div>

    <table>
      <button>+</button>
      <th>日程(*)</th>
      <th>時間(*)</th>
      <th>会場(*)</th>
      <th>ステータス</th>
      <th></th>
    </table>

    </app>
  );
}


export default SC03;
