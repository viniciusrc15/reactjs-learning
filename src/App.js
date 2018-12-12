import React from 'react';
import './style.css';
import Header from './components/Header';
// import Main from './pages/main';
import Routes from './router';

const App = () => (
  <div>
    <Header />
    <Routes />
  </div>
);

export default App;
