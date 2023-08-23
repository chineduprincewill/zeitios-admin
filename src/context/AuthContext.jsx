import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const userData = JSON.parse(localStorage.getItem('logged_in'));
    const userInfo = localStorage.getItem('userInfo');
    
    const [token, setToken] = useState(userData ? userData?.Session : '');
    const [user, setUser] = useState(userInfo ? JSON.parse(userInfo) : null);
    const [userid, setUserid] = useState(userData ? userData?.ChallengeParameters?.USER_ID_FOR_SRP : '');

    //const [activenav, setActivenav] = useState('dashboard');
    const [shownav, setShownav] = useState(false);

    const logout = () => {
        setToken('');
        setUser(null);
        setUserid('');
        localStorage.removeItem('logged_in');
        localStorage.removeItem('userInfo');
        window.location.reload();
    }

    /**const updateActivenav = (val) => {
        setActivenav(val);
    }*/

    useEffect(() => {
        
        if(localStorage.getItem('logged_in')){
            
            setToken(userData?.Session);
            setUser(userInfo);
            setUserid(userData?.ChallengeParameters?.USER_ID_FOR_SRP);
        }
    }, [])

    const updateShownav = () => {
        setShownav(!shownav);
    }


    return(
        <AuthContext.Provider value={{ token, user, userid, shownav, updateShownav, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider