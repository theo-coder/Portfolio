import React from 'react';
import APropos from './components/APropos';
import NavBar from './components/NavBar'
import Competences from './components/Competences';
import Parcours from './components/Parcours';
import Typing from './components/Typing';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {

  return (
    <div>
        <div id="background" />
        <NavBar />
        <Typing />
        <div className="content">
          <APropos />
          <Competences />
          <Parcours />
          <Portfolio />
        </div>
    </div>
  )
}

export default App;