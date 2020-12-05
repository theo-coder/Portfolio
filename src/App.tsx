import React from 'react';
import APropos from './components/APropos';
import NavBar from './components/NavBar'

const App: React.FC = () => {
  return (
    <div>
      <div id="background"></div>
      <NavBar />
      <div className="content">
        <APropos />
      </div>
    </div>
  )
}

export default App;