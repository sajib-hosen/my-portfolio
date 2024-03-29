import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Components/TopBanner/TopBanner';
import AboutMe from './Components/AboutMe/AboutMe';
import MyTechnology from './Components/MyTechnology/MyTechnology';
import MyProjects from './Components/MyProjects/MyProjects';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/navBar/NavBar';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <NavBar/>
      <TopBanner/>
      <AboutMe/>
      <MyTechnology/>
      <MyProjects/>
      <Footer/>
    </div>
  );
}

export default App;
