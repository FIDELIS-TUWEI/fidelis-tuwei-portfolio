import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserAuth = () => {
    return useContext(UserContext);
};

const AuthContextProvider = ({ children }) => {
    const [isLoggedOut, setIsLoggedOut] = useState(true);
    return (
        <UserContext.Provider value={{isLoggedOut}}>
            {children}
        </UserContext.Provider>
    )
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthContextProvider;