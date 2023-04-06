import { getMe } from "../../services/api/users";
import { UserContext } from "./index.js";
import { useState, useEffect } from "react";

function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getMe().then((data) => {
      if (data === null) {
        setUserData(null);
      } else {
        setUserData(data);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
