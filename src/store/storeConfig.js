import { createStore, combineReducers } from 'redux';
import sites from './reducers/sites';

const storeConfig = ()=>{
    const store = createStore(
        combineReducers({
            sites
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

export default storeConfig;