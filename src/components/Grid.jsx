import { useState, useEffect, useContext } from "react";
import "../scss/components/Grid.scss"
import Extension from "./Extension.jsx";
import extensionData from "../js/data.json"
import { ExtensionsContext } from "../context/ExtensionsContext.jsx";

export default function Grid() {
  const { extensions, setExtensions } = useContext(ExtensionsContext)
  const [rendered, setRendered] = useState(extensions);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    try {
      setExtensions(extensionData);
    } catch (error) {
      console.error("Failed to load extensions: ", error);
    }
  }, [])

  function handleFilter(e) {
    setFilter(e.target.id.trim());
  }

  function renderExtensions(exten = extensions) {
    if (exten.length <= 0) {
      if (filter == "all") return <div className="grid-body-empty">No Extensions available.<br></br>Visit the marketplace to add an extension</div>
      else return <div className="grid-body-empty">No {filter} Extensions available</div>
    }
    return exten.map((data, i) => <Extension key={i} data={data} />);
  }

  return <main className="grid">
    <div className="grid-header">
      <h1>Extensions List</h1>
      <fieldset>
        <input type="radio" name="filter" id="all" onChange={handleFilter} defaultChecked="true"/>
        <label htmlFor="all">
          All
        </label>
        <input type="radio" name="filter" id="active" onChange={handleFilter}/>
        <label htmlFor="active">
          Active
        </label>
        <input type="radio" name="filter" id="inactive" onChange={handleFilter}/>
        <label htmlFor="inactive">
          Inactive
        </label>
      </fieldset>
    </div>

    <div className="grid-body">
      {extensions.length > 0 ?
        (filter == "all") ?
          renderExtensions()
        : (filter == "active") ?
            renderExtensions(extensions.filter(ext=> ext.isActive == true))
          : (filter == "inactive") ?
            renderExtensions(extensions.filter(ext=> ext.isActive == false))
          : null
      : null
      }
    </div>
  </main>
}

