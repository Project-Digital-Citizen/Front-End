import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Jumbotron02 from "./pages/Jumbotron02";
import Login from "./pages/Login";
import Jumbotron from "./pages/Jumbotron";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Jumbotron />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
