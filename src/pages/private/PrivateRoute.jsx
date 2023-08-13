import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('auth')) === null){
            navigate('/');
        }
    }, [children])

    return children
}

export default PrivateRoute