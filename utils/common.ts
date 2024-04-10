"use client"

// return the user data from the session storage
export const getCurrUser = () => {
    const currUser = sessionStorage.getItem("user");
    if (currUser === null) return null;
    return JSON.parse(currUser);
};

// return the token from the session storage
export const getToken = () => {
    if (sessionStorage.getItem("user") === null) return null;

    const currUser = JSON.parse(sessionStorage.getItem("user") || "");
    return currUser.userToken;
};



// remove the token and user from the session storage
export const removeUserSession = (email: string) => {
    sessionStorage.removeItem("user");
};

// set the user to the session storage
export const setUserSession = (user: object) => {
    sessionStorage.setItem("user", JSON.stringify(user));
};

// set the command list to the session storage
export const setUserList = (userlist: object) => {
    sessionStorage.setItem("userlist", JSON.stringify(userlist));
};


