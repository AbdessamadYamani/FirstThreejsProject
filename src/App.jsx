import React from 'react';
import Home from './pages/home';
import CanvasM from './canvas'; 
import Customizer from './pages/customizer';

function App() {
    return (
        <main className="app transition-all ease-in">
      <Home />
      <CanvasM />
      <Customizer />
    </main>
    );
}

export default App;
