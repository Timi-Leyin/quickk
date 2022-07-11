
import { useState , useEffect } from 'react';
import { Route, Routes  } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
const ProtectedRoute = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('');
        if (token) {
            setIsAuthenticated(true);
        }
    }
    , []);

    return (
        
            //make conditios to check if token is present 
           <>
           
            {
                isAuthenticated ?  <PublicRoutes /> : <PrivateRoutes /> 
            
            }
           
           </>

    )



}

export default ProtectedRoute;