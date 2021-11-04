import React from 'react';
import { configureStore } from 'redux/store';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import AppLayout from './AppLayout';
import AuthLayout from './AuthLayout';

const history = createHashHistory();
const store = configureStore(history);

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
            <>
            <Switch>
                <Route exact path="/" component={AppLayout} />
                <Route exact path="/auth" component={AuthLayout} />
            </Switch>
            </>
            </ConnectedRouter>
        </Provider>
    )
}

export default App;