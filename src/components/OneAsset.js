import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function OneAsset() {
  const [asset, setAsset] = useState([]);
  const assetId = useParams();
  const navigate = useNavigate();

  //const asset = assets.find((asset) => asset.id === assetId);
  //const { assetName, assetTag } = asset;
  console.log(assetId);
  const url = "http://localhost:4000/assets";
  useEffect(() => {
    fetch(`${url}/${assetId.id}`)
      .then((res) => res.json())
      .then((data) => {
        setAsset(data);
      });
  }, [assetId.id]);

  return (
    <div>
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form>
            <div class="formbold-form-title">
              <h2 class="">{asset.assetName}</h2>
            </div>

            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Asset Name</label>
                <input
                  type="text"
                  value={asset.assetName}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Serial Number</label>
                <input
                  type="text"
                  value={asset.serialNumber}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Model</label>
                <input
                  type="text"
                  value={asset.model}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Category</label>
                <input
                  type="text"
                  value={asset.category}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Assigned To</label>
                <input
                  type="text"
                  value={asset.assigned}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Department</label>
                <input
                  type="text"
                  value={asset.location}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label class="formbold-form-label">Status</label>
                <input
                  type="text"
                  value={asset.status}
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label class="formbold-form-label">Acquisition Date</label>
                <input
                  type="text"
                  value={asset.acquisition_date}
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div>
              <label class="formbold-form-label">Purchase Price</label>
              <input
                type="text"
                value={asset.purchaseCost}
                class="formbold-form-input"
              />
            </div>

            <p onClick={() => navigate("/")}>
              <button id="close-btn-edit">Close X</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OneAsset;
