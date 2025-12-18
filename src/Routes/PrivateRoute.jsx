import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider';

const PrivateRoute = ({children}) => {

    const { user , loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return  <span className="loading loading-infinity loading-xl bg-red-500 mx-auto"></span>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default PrivateRoute;