import './App.css';
import {Blog, Features, Footer, Header, Possibility, WhatGPT} from './containers';
import {Brand, CallToAction, NavBar} from './components';


function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CallToAction />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
