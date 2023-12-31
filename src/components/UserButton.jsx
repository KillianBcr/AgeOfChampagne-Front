import React, { useContext } from "react";
import { UserContext } from "../contexts/user/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { loginUrl, logoutUrl, registerUrl } from "../services/api/users";

function UserButton() {
    const dataUser = useContext(UserContext);
  
    if (dataUser['userData'] === undefined) {
      return <FontAwesomeIcon icon={faSpinner} className="foldable-icon" />;
    } else if (dataUser['userData'] === null) {
      return (
        <>
          <a href={loginUrl()}>
            Connexion
          </a>
          <a href={registerUrl()}>
            Inscription
          </a>
        </>
      );
    } else {
      return (
        <a href={logoutUrl()}>
          Deconnexion
        </a>
      );
    }
  }
  
  export default UserButton;
