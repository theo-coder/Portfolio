import React from 'react'
import ParcoursI from '../interfaces/ParcoursI';

interface Props {
    content: ParcoursI
}

const ParcoursItem: React.FC<Props> = ({content}) => {
    return (
        <>
            <span></span>
            <h3>{content.title}</h3>
            {content.date && <span className="date">{content.date}</span>}
            {content.subtitle && <p><em>{content.subtitle}</em></p>}
            <span>{content.description.split('<br/>').map((i, key) => <div key={key}>{i}</div>)}</span>
            {content.place && <p><span role="img" aria-label="pin">📌</span> {content.place}</p>}
        </>
    )
}

export default ParcoursItem;
