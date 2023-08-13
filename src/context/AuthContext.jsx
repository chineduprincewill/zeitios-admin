import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    //const loginData = JSON.parse(localStorage.getItem('login'));

    
    //const [token, setToken] = useState(loginData ? loginData.token : '');
    //const [user, setUser] = useState(loginData ? loginData.user : null);

    //const [activenav, setActivenav] = useState('dashboard');
    const [shownav, setShownav] = useState(false);

    /**const logout = () => {
        setToken('');
        setUser(null);
        localStorage.removeItem('login');
        window.location.reload();
    }

    const updateActivenav = (val) => {
        setActivenav(val);
    }

    useEffect(() => {
        
        if(localStorage.getItem('login')){
            
            setToken(loginData.token);
            setUser(loginData.user);
        }
    }, [loginData])*/

    const updateShownav = () => {
        setShownav(!shownav);
    }


    return(
        <AuthContext.Provider value={{ shownav, updateShownav }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider