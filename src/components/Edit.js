import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit({ row, assets, setAssets }) {
  const history = useNavigate();
  const url = "http://localhost:4000/assets/";
  const [formData, setFormdata] = useState({
    assetName: row.assetName,
    assetTag: row.assetTag,
    serialNumber: row.serialNumber,
    model: row.model,
    category: row.category,
    status: row.status,
    assigned: row.assigned,
    location: row.location,
    purchaseCost: row.purchaseCost,
  });
  function handleUpdate(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormdata({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    // e.preventDefault();
    fetch(`${url}/${row.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        handleUpdateItem(data);
      });
  }
  function handleUpdateItem(updatedItem) {
    const updatedItems = assets.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });

    setAssets(updatedItems);
    history("/");
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          name="assetName"
          value={formData.assetName}
          onChange={handleUpdate}
        />
      </td>

      <td>
        <input
          type="text"
          name="assetTag"
          value={formData.assetTag}
          onChange={handleUpdate}
        />
      </td>

      <td>
        <input
          type="text"
          name="serialNumber"
          value={formData.serialNumber}
          onChange={handleUpdate}
        />
      </td>

      <td>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleUpdate}
        />
      </td>

      <td>
        <select
          value={formData.category}
          name="category"
          onChange={handleUpdate}
        >
          <option value="desktops">Desktops</option>
          <option value="laptops">Laptops</option>
          <option value="servers">Servers</option>
          <option value="switches">Switches</option>
          <option value="ups">UPS</option>
        </select>
      </td>

      <td>
        <select value={formData.status} name="status" onChange={handleUpdate}>
          <option value="deployed">Deployed</option>
          <option value="obsolete">Obsolete</option>
          <option value="lost">Lost</option>
        </select>
      </td>

      <td>
        <input
          type="text"
          name="assigned"
          value={formData.assigned}
          onChange={handleUpdate}
        />
      </td>

      <td>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleUpdate}
        />
      </td>

      <td>
        <input
          type="text"
          name="purchaseCost"
          value={formData.purchaseCost}
          onChange={handleUpdate}
        />
      </td>
      <td>
        <p onClick={() => window.location.reload(true)}>
          <button id="close-btn-edit">Close X</button>
        </p>
      </td>

      <td>
        <button type="submit" onClick={handleSubmit}>
          Update
        </button>
      </td>
    </tr>
  );
}

export default Edit;
