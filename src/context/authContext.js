import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext= createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || "");

    const login = async(inputs) =>{
        const res = await axios.post("https://app-blog-hopeitowkrs-fde410f2c677.herokuapp.com/api/auth/login", inputs)
        axios.defaults.withCredentials = true
        console.log("login")
        console.log(res)
        setCurrentUser(res.data)
    }

    const logout = async(inputs) =>{
        const res = await axios.post("https://app-blog-hopeitowkrs-fde410f2c677.herokuapp.com/api/auth/logout")
      
        setCurrentUser("");
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
    <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>
    )
}
