import "./App.css";

import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import AddItem from "./AddItem";

import AssetsList from "./AssetsList";
import Edit from "./Edit";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addnew" element={<AddItem />} />
        <Route path="/assets" element={<AssetsList />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
