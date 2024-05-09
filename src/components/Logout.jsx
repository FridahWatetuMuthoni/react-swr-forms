import { useNavigate } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";

function Logout() {
  const { setToken } = useGlobalContext();
  const navigate = useNavigate();
  localStorage.removeItem("token");
  setToken(null);
  navigate("/");
  navigate(0);
}

export default Logout;
