import React from 'react';
import APropos from './components/APropos';
import NavBar from './components/NavBar'
import Competences from './components/Competences';
import Parcours from './components/Parcours';
import Typing from './components/Typing';

const App: React.FC = () => {
  return (
    <div>
      <div id="background"></div>
      <NavBar />
      <Typing />
      <div className="content">
        <APropos />
        <Competences />
        <Parcours />
      </div>
    </div>
  )
}

export default App;