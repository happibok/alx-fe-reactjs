import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      <h1><UserProfile></UserProfile></h1>
     <><Header /><MainContent /><Footer /><UserProfile name="Alice" age="25" bio="Loves hiking and photo" /></>
    </div>
  );
}

export default App ;
