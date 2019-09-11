import React from 'react'
import logo from './logo.svg'
import './App.css'

import { useSelector } from 'react-redux';
import food from './mockdata/food'
import StoreDashboard from './container/Store'


function App(props) {
  const globalState = useSelector(state => state);
  console.log('APP props == ', props)
  return (
    <div className="App">
      <StoreDashboard menu={food} globalState={globalState}/>
    </div>
  );
}

export default App;
