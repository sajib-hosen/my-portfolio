import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Components/TopBanner/TopBanner';
import AboutMe from './Components/AboutMe/AboutMe';
import MyTechnology from './Components/MyTechnology/MyTechnology';
import MyProjects from './Components/MyProjects/MyProjects';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <TopBanner/>
      <AboutMe/>
      <MyTechnology/>
      <MyProjects/>
    </div>
  );
}

export default App;
