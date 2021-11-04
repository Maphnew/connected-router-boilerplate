import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { useLocation } from 'react-router-dom';
import AppLayout from './AppLayout';
import AuthLayout from './AuthLayout';


const App = (props) => {
    const [pathTo, setPathTo] = useState("/");
    const { pathname } = useLocation();

    useEffect(() => {
        props.history.push(pathTo)
    }, [ pathTo ])

    const changeUrlHandler = () => {
        setPathTo(pathname === "/" ? "/auth" : "/")
    }

    return (
        <>
        <div>
            <button onClick={changeUrlHandler}>Go {pathTo}</button>
        </div>
        <Switch>
            <Route exact path="/" component={AppLayout} />
            <Route exact path="/auth" component={AuthLayout} />
        </Switch>
        </>
    )
}

export default App;