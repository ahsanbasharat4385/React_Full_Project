import { useState } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import OurFood from "./Components/OurFood";
import SignIn from "./Components/SignIn";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <BrowserRouter>
          <Header count={count} />
          <Routes>
            <Route path="/" element={<Home handleAdd={handleAdd} />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/ourfood" element={<OurFood handleAdd={handleAdd} />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
