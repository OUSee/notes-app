import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Main } from "./components/Main/main"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
