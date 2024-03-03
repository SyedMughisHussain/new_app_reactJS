import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import General from "../pages/General";
import ResponsiveAppBar from "../components/Header";

const Routers = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/general" element={<General />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
