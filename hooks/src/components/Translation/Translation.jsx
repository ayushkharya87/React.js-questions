import React from 'react'
import { useLocal } from './TransContext';

const Translation = () => {

  const {local, setLocal, translate} = useLocal();

  const handleChange = (e) => {
    setLocal(e)
  };

  return (
    <div>
      <h1>Translation using "useContext":)</h1>
        <div>
          <h2>{translate("greeting")}</h2>
          <h2>{translate("welcome")}</h2>
        </div>
      
        <button onClick={() => handleChange("en")}>English</button>
        <button onClick={() => handleChange("hindi")}>Hindi</button>
    </div>
  )
}

export default Translation