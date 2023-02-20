import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable";

const AddItem = ({ onAddAsset }) => {
  const history = useNavigate();
  const [assets, setAssets] = useState([]);
  const [formData, SetFormdata] = useState({
    assetName: "",
    assetTag: " ",
    serialNumber: "",
    model: "",
    category: "",
    status: "",
    assigned: "",
    location: "",
    purchaseCost: "",
  });
  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    event.preventDefault();
    SetFormdata({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/assets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setAssets([...assets, data]));

    history("/");
  }

  return (
    <div className="addItemContainer">
      <div className="addItem">
        <p onClick={() => history("/")}>
          <button id="close-btn">Close X</button>
        </p>
        <form onSubmit={handleSubmit}>
          <h1>Add New Asset</h1>

          <div className="formcontainer"></div>
          <div class="container">
            <label>
              Asset Name:
              <input
                type="text"
                name="assetName"
                value={formData.assetName}
                onChange={handleChange}
              />
            </label>
            <label>
              Asset Tag:
              <input
                type="text"
                name="assetTag"
                value={formData.assetTag}
                onChange={handleChange}
              />
            </label>
            <label>
              Serial Number:
              <input
                type="text"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
              />
            </label>
            <label>
              Model:
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
              />
            </label>
            <label>
              Category:
              <select
                value={formData.category}
                name="category"
                onChange={handleChange}
              >
                <option value="desktops">Desktops</option>
                <option value="laptops">Laptops</option>
                <option value="servers">Servers</option>
                <option value="switches">Switches</option>
                <option value="ups">UPS</option>
              </select>
            </label>
            <label>
              Selected Status:
              <select
                value={formData.status}
                name="status"
                onChange={handleChange}
              >
                <option value="deployed">Deployed</option>
                <option value="obsolete">Obsolete</option>
                <option value="lost">Lost</option>
              </select>
            </label>
            <label>
              Assigned To:
              <input
                type="text"
                name="assigned"
                value={formData.assigned}
                onChange={handleChange}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </label>
            <label>
              Purchase Cost:
              <input
                type="text"
                name="purchaseCost"
                value={formData.purchaseCost}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
