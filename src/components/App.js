import React, { createContext, useState } from "react";
import Home from "./Home";
import { NavLink, Route, Routes } from "react-router-dom";
import AddItem from "./AddItem";

import AssetsList from "./AssetsList";
import Edit from "./Edit";
import Navbar from "./Navbar";
import View from "./View";

import OneAsset from "./OneAsset";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/addnew" element={<AddItem />} />
          <Route path="/assets" element={<AssetsList />} />
          <Route path="/assets/:id" element={<OneAsset />} />

          {/* <Route path="/edit" element={<Edit />} /> */}
          <Route path="/view" element={<View />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
