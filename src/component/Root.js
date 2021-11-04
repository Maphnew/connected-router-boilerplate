import React from 'react';
import { configureStore } from 'redux/store';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';

const history = createHashHistory();
const store = configureStore(history);

const Root = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App history={history}/>
            </ConnectedRouter>
        </Provider>
    )
}

export default Root;