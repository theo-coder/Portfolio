import React from 'react';
import APropos from './components/APropos';
import NavBar from './components/NavBar'
import Parcours from './components/Parcours';

const App: React.FC = () => {
  return (
    <div>
      <div id="background"></div>
      <NavBar />
      <div className="content">
        <APropos />
        <Parcours />
      </div>
    </div>
  )
}

export default App;