import React from 'react';
import Header from './components/Header';
import './App.css';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="context">
        <h1>The Loveworld Institute of Innovation and Technology.</h1>
        <p>We create an enabling environment that stimulates emergence of innovative people, products and platforms for the advancement of the gospel, producing intentional result right from the start. We are a throughbred army of versatile skills with focused based operation for the kingdom and the development of humanity.</p>
      </div>
      <WaitlistForm />
      <Footer />
    </div>
  );
}

export default App;