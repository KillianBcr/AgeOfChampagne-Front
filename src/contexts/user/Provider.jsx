import React, { useState, useEffect } from "react";
import { UserContext, getMe } from "../../services/api/users";

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(undefined);

    useEffect(() => {
        getMe()
            .then((data) => {
                setUserData(data);
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    setUserData(null);
                }
            });
    }, []);

    const contextValue = {
        userData,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
