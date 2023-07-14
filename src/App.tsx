import React from 'react';
import './null.css'
import './App.css';
import { Sidebar } from './components/sideBar/sideBar';
import { FirstScreen } from './components/pages/firstScreen/firstScreen';

function App() {
  return (
    <div className="App">
      <div className="App__item">
        <Sidebar />
        <FirstScreen />
      </div>
    </div>
  );
}

export default App;
