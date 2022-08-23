import React from 'react';
import "./app.css"
import Header from './components/sticky/Header/Header';
import Buttons from './components/Inputs/Buttons/Buttons';

function App() {
  return (
  <div className="App">
    <Header/>
    <Buttons.DefaultButton>
      Hello
    </Buttons.DefaultButton>
  </div>
  );
}

export default App;
