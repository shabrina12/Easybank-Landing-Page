import React from 'react';
import {Navbar, Header, Features, Articles, Footer} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Features />
      <Articles />
      <Footer />
    </div>
  )
}

export default App