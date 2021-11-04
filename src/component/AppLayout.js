import React from 'react';
import { useLocation } from 'react-router-dom';


const AppLayout = () => {
    const location = useLocation();
    // console.log(location) // {pathname: '/', search: '', hash: '', state: undefined}
    return (
        <div>
        AppLayout
        </div>
    )
}

export default AppLayout;