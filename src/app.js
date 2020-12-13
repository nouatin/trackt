import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './Root';
import configureStore from './store/storeConfig';
import './styles/style.scss';
import 'normalize.css';


const store = configureStore();

store.subscribe(()=>{
  const state = store.getState();
});

const jsx = (
    <Provider store={store}>
        <Root />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));