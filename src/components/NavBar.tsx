import React from 'react';

import useCursor from '../hooks/useCursor'

interface Props {

}

const NavBar: React.FC<Props> = () => {
    
    const [cursor] = useCursor();

    return (
        <nav>
            <img src="https://theo.posty.fr/img/logo.png" alt="Logo Théo" />
            <div id="email">
                <span>{'>'} theo@posty.fr </span>
                {cursor  ? <span style={{ fontWeight: 'bold' }}>|</span> : null}
            </div>
            <hr />
            <ul id="navBar">
                <li><a href="#top">A propos</a></li>
                <li><a href="#top">Parcours</a></li>
                <li><a href="#top">Portfolio</a></li>
                <li><a href="#top">Service</a></li>
                <li><a href="#top">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;