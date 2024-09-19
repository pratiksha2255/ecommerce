import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
