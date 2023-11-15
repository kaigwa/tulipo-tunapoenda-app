import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/Kesho')
  }
  return (
    <div>
      <button onClick={()=>{
        handleClick()
      }}>KARIBU</button>
    </div>
  )
};

export default Home
;
