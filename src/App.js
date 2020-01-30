import React from 'react';
import './App.css';
import IndexFile from './components/main';
import { Provider, connect } from 'react-redux';
import store from './components/store';


function App() {

  return (
    <Provider store={store} >
      <IndexFile></IndexFile>
    </Provider>

  );
}





export default (App);
