import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./pages/Hero";
import FormKTP from "./pages/FormKTP";
import FormDomisili from "./pages/FormDomisili";
import StatusPengajuan from "./pages/StatusPengajuan";
import Register from "./pages/Register";
import PageNotFound from "./pages/Pagenotfound";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formktp" element={<FormKTP />} />
        <Route path="/formdomisili" element={<FormDomisili />} />
        <Route path="/statuspengajuan" element={<StatusPengajuan />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
