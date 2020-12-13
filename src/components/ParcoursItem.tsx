import React from 'react'
import ParcoursI from '../interfaces/ParcoursI';

interface Props {
    content: ParcoursI
}

const ParcoursItem: React.FC<Props> = ({content}) => {
    return (
        <>
            <span></span>
            <h4>{content.title}</h4>
            {content.date && <span>{content.date}</span>}
            {content.subtitle && <p><em>{content.subtitle}</em></p>}
            <p>{content.description.split('<br/>').map((i, key) => <div key={key}>{i}</div>)}</p>
            {content.place && <p><span role="img" aria-label="pin">📌</span> {content.place}</p>}
        </>
    )
}

export default ParcoursItem;
