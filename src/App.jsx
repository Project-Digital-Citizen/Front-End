import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./pages/Hero";
import FormKTP from "./pages/FormKTP";
import FormDomisili from "./pages/FormDomisili";
import StatusPengajuan from "./pages/StatusPengajuan";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BerandaADM from "./pages/Admin/BerandaADM";
import Mailinglist from "./pages/Admin/Mailinglist";
import VerifikasiKTP from "./pages/Admin/VerifikasiKTP";
import VerifikasiDomisili from "./pages/Admin/VerifikasiDomisili";
import Account from "./pages/Admin/Account";
import AccountEdit from "./pages/Admin/AccountEdit";
import OTP from "./pages/OTP";
import LupaPW from "./pages/LupaPW";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/admin" element={<BerandaADM />} />
        <Route path="/mailinglist" element={<Mailinglist />} />
        <Route path="/verifikasiktp" element={<VerifikasiKTP />} />
        <Route path="/verifikasidomisili" element={<VerifikasiDomisili />} />
        <Route path="/account" element={<Account />} />
        <Route path="/accountedit" element={<AccountEdit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/formktp" element={<FormKTP />} />
        <Route path="/formdomisili" element={<FormDomisili />} />
        <Route path="/statuspengajuan" element={<StatusPengajuan />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/lupapw" element={<LupaPW />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
