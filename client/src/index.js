import React from 'react' 
import { render } from 'react-dom' 
import { Provider } from 'react-redux' 
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './main/reducers' 
import App from './main/App'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

const store = applyMiddleware(promise)(createStore)(rootReducer)

render(
    <Provider store={store}>     
        <App />   
    </Provider> , document.getElementById('root')
);

