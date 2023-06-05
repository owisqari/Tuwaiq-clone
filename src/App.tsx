import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutTuwaiq from "./pages/AboutTuwaiq";

import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutTuwaiq />} />
      </Routes>
    </>
  );
}

export default App;
