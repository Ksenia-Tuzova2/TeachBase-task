import React from 'react';
import './App.css';
import { Sidebar } from './components/sideBar/sideBar';
import { FirstScreen } from './components/pages/firstScreen/firstScreen';

function App() {
  return (
    <div className="App">
      <div className="App__innerContainer"></div>
      <FirstScreen />
      <Sidebar />
    </div>
  );
}

export default App;
