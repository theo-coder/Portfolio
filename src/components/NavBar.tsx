import React from 'react';

import useCursor from '../hooks/useCursor'

interface Props {

}

const NavBar: React.FC<Props> = () => {
    
    const [cursor] = useCursor();

    return (
        <nav className="navBar">
            <img className="logo" src="./images/logo200.jpg" alt="Logo Théo" />
            <div className="email">
                <span className="email">{'>'} theo@posty.fr </span>
                {cursor  ? <span className="cursor">|</span> : null}
            </div>
            <hr />
            <ul>
                <li><a href="#aPropos">A propos</a></li>
                <li><a href="#parcours">Parcours</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#services">Service</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;