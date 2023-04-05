import { useContext } from "react";
import { UserContext } from "../contexts/user/index";

function UserButton() {
  const { userData } = useContext(UserContext) ?? { userData: null };

  if (userData === undefined) {
    return <div>Loading...</div>;
  } else if (userData === null) {
    return (
      <a href="/login" className="nav-link">
        Connexion
      </a>
    );
  } else {
    return (
      <a href="/logout" className="nav-link">
        {userData.nom}
      </a>
    );
  }
}

export default UserButton;
