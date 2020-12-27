import React, { useRef, useEffect } from 'react'
import ParcoursI from '../interfaces/ParcoursI'
import ParcoursItem from './ParcoursItem'

interface Props {
    title: String,
    content: Array<ParcoursI>,
    onGetHeight: Function
}

const ParcoursSection: React.FC<Props> = ({ title, content, onGetHeight }) => {

    const targetRef = useRef<any>();

    useEffect(() => {
        if (targetRef.current) {
            onGetHeight(targetRef.current.offsetHeight)
        }
        // eslint-disable-next-line
    }, [])

    const items = []

    for (let i = 0; i < content.length; i++) {
        items.push(
            <li key={i}>
                <ParcoursItem content={content[i]} />
            </li>
        )
    }

    return (
        <div ref={targetRef}>
            <h2>{title.replaceAll('_', ' ')}</h2>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default ParcoursSection;