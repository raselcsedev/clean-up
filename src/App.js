import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contract from "./pages/Contract";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";



function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/contact" element={<Contract />} ></Route>
          <Route path="/services" element={<Services />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
