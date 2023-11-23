import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>INI LOGIN</h1>
      </div>
      <button onClick={() => navigate("/")} className="btn">
        Beranda
      </button>
    </>
  );
};

export default Login;
