import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reducers from './reducers/index';

import Routers from './routes';
//import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk];
const store = createStore(Reducers, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>, document.getElementById('root'));
//registerServiceWorker();
