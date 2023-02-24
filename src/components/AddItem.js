import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = ({ onAddAsset }) => {
  const navigate = useNavigate();
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

    navigate("/");
  }

  return (
    <>
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form onSubmit={handleSubmit}>
            <p onClick={() => navigate("/")}>
              <button id="close-btn">Close X</button>
            </p>
            <div class="formbold-form-title">
              <h2 class="">Add Asset Item</h2>
            </div>

            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Asset Name</label>
                <input
                  type="text"
                  value={formData.assetName}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Serial Number</label>
                <input
                  type="text"
                  value={formData.serialNumber}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Model</label>
                <input
                  type="text"
                  value={formData.model}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Assigned To</label>
                <input
                  type="text"
                  value={formData.assigned}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Department</label>
                <input
                  type="text"
                  value={formData.location}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Status</label>
                <input
                  type="text"
                  value={formData.status}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Acquisition Date</label>
                <input
                  type="text"
                  value={formData.acquisition_date}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div>
              <label class="formbold-form-label">Purchase Price</label>
              <input
                type="text"
                value={formData.purchaseCost}
                class="formbold-form-input"
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItem;
