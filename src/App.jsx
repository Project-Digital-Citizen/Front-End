import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Hero from "./pages/Hero";
import FormKTP from "./pages/FormKTP";
import FormDomisili from "./pages/FormDomisili";
import StatusPengajuan from "./pages/StatusPengajuan";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formktp" element={<FormKTP />} />
        <Route path="/formdomisili" element={<FormDomisili />} />
        <Route path="/statuspengajuan" element={<StatusPengajuan />} />
      </Routes>
    </Router>
  );
};

export default App;
