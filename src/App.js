import React from 'react'
import logo from './logo.svg'
import './App.css'

import food from './mockdata/food'

import StoreDashboard from './container/Store'

function App() {
  return (
    <div className="App">
      <StoreDashboard menu={food}/>
    </div>
  );
}

export default App;
