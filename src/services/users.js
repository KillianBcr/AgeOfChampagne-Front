import React, { createContext } from "react";

export const BASE_URL = "https://127.0.0.1:8000/";

export const UserContext = React.createContext({});



export function getMe() {
    return fetch(`${BASE_URL}api/me`, { credentials: "include" })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 401) {
                return Promise.resolve(null);
            } else {
                throw new Error("Error fetching current user.");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export function loginUrl() {
    const redirectUrl = encodeURIComponent(window.location.href);
    return `${BASE_URL}login`;
}

export function logoutUrl() {
    return `${BASE_URL}logout`;
}
