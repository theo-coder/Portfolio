import { useEffect, useState } from 'react'

const useCursor = () => {
    const [cursor, setCursor] = useState(true);

    const timer = () => {
        setInterval(() => {
            setCursor((cursor) => !cursor)
        }, 750)
    }

    useEffect(() => {
        timer()
    }, [])

    return [cursor]
}

export default useCursor;