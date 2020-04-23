import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/users/signup';
import NavComponent from './components/nav-component/NavComponent';

function App() {
  return (
    <div>
      <NavComponent/>
      <SignUp/>
    </div>
  );
}

export default App;
