import "../scss/components/Extension.scss";
import { useState, useContext } from "react";
import { ExtensionsContext } from "../context/ExtensionsContext";


export default function Extension({ data }) {
  const {setExtensionState} = useContext(ExtensionsContext)

  function handleInputChange() {
    setExtensionState(data.name)
  }

  return <div className="extension">
    <div className="extension-info">
      <div className="extension-info-img">
        <img
          src={`src${data.logo.slice(1, data.logo.length)}`}
          alt={`${data.name} Logo`}
        />
      </div>
      <div className="extension-info-text">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>
    </div>
    <div className="extension-controls">
      <button className="remove">Remove</button>
      <input type="checkbox" name="state" id="state" checked = {data.isActive? true: false} onChange={handleInputChange}/>
    </div>
  </div>
}

//data-name={data.name.toLowerCase()}