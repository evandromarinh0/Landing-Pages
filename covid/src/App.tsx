import React from 'react';
import './App.css';
import logo from './assets/Logo.svg';

function App() {
  return (
    <div>
      <header id="navbar">
        <img src={logo} alt=""/>
        <ul>
          <li id="li-1">Overview</li>
          <li id="li-2">Contagion</li>
          <li id="li-2">Symptoms</li>
          <li id="li-2">Prevention</li>
          <li id="li-3">Contact</li>
        </ul>
      </header>
      <section id="warning">
        <h2>COVID-19 Alert</h2>
        <h1>Stay at home in quarantine<br/> to stop Corona Virus</h1>
        <p>There is no specific medicine to prevent or treat Corona Virus <br /><br />Disease (COVID-19). People may need supportive care to.</p>
      <button type="button">Let us help</button>
      </section>
    </div>
  );
}

export default App;
