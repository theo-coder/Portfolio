import React from 'react'
import Typical from 'react-typical';

const Typing: React.FC = () => {
    return (
        <div className="typing">
        <p>Théo Posty</p>
        <p className="type">
          Je suis  
          <Typical 
            loop={Infinity}
            steps={[
              'un développeur web',
              1000,
              'un développeur freelance',
              1000,
              'passionné de technologies',
              1000,
              'créatif',
              1000,
              'touche à tout',
              1000,
              'un développeur passionné',
              1000
            ]}
          />
        </p>
      </div>
    )
}

export default Typing;