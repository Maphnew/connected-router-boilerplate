import React from 'react';
import { configureStore } from 'redux/store';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

const history = createHashHistory();
const store = configureStore(history);

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>Yeeaaaaaaassssssssssssss!</div>
            </ConnectedRouter>
        </Provider>
    )
}

export default App;