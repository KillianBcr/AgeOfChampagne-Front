import { createContext } from "react";
import { getMe, loginUrl, logoutUrl } from "../../services/api/users.js";

const UserContext = createContext(null);

export { getMe, loginUrl, logoutUrl, UserContext };