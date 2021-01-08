import React from "react";
import LogoHeader from "./components/Logo-header";
import WelcomeHeader from "./components/Welcome-header";
import './App.css';

function App() {
  return (
    <div className="App">
      <WelcomeHeader />
      <LogoHeader />
      <div className="Page-body">
        <p>Test</p>
      </div>
    </div>
  );
}

export default App;
