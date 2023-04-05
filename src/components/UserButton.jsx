import { useContext } from "react";
import { UserContext } from "../contexts/user/index";
import { useNavigate } from "react-router-dom";

function UserButton() {
  const { userData } = useContext(UserContext) ?? { userData: null };
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logique de déconnexion
    navigate("/login");
  };

  if (userData === undefined) {
    return <div>Loading...</div>;
  } else if (userData === null) {
    return (
      <button onClick={() => navigate("/login")} className="nav-link">
        Connexion
      </button>
    );
  } else {
    return (
      <button onClick={handleLogout} className="nav-link">
        {userData.nom}
      </button>
    );
  }
}

export default UserButton;
