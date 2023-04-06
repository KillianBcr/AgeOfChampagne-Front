import { createContext, useState } from "react";

const UserContext = createContext({
  userData: null,
  setUserData: () => {},
});

export { UserContext, useState };
