import { useContext } from "react"

export const checkRole = (userRole, adminlinks, clientlinks, freelancerlinks, setNavlinks) => {

    //const { user } = useContext(AuthContext);

    if(userRole === 'Client'){
        setNavlinks(clientlinks);
    }
    else if(userRole === 'Freelancer'){
        setNavlinks(freelancerlinks);
    }
    else if(userRole === 'Admin'){
        setNavlinks(adminlinks);
    }
}