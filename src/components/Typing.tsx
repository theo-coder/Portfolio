import React from 'react'
import Typical from 'react-typical';

const Typing: React.FC = () => {
    return (
        <div className="typing">
        <p>Théo Posty</p>
        <Typical 
          loop={Infinity}
          wrapper="p"
          className="type"
          steps={[
            'Je suis un développeur web',
            1000,
            'Je suis un développeur freelance',
            1000,
            'Je suis passionné de technologies',
            1000,
            'Je suis créatif',
            1000,
            'Je suis touche à tout',
            1000,
            'Je suis un développeur passionné',
            1000
          ]}
        />
      </div>
    )
}

export default Typing;