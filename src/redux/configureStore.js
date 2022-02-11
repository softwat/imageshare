import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
//리듀서

export function configureStore(history) {
    return createStore(
        combineReducers({
            router: connectRouter(history),
        }),
        applyMiddleware(routerMiddleware(history))
    );
}
