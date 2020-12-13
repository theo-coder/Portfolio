import React from 'react'
import ParcoursI from '../interfaces/ParcoursI'
import ParcoursItem from './ParcoursItem'

interface Props {
    title: String,
    content: Array<ParcoursI>
}

const ParcoursSection: React.FC<Props> = ({title, content}) => {

    const items = []

    for(let i=0;i<content.length;i++){
        items.push(
            <li key={i}>
                <ParcoursItem content={content[i]}/>
            </li>
        )
    }

    return (
        <>
            <h2>{title.replaceAll('_', ' ')}</h2>
            <ul>
                {items}
            </ul>
        </>
    )
}

export default ParcoursSection;