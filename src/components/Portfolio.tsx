import React from 'react'
import useResults from '../hooks/useResults'

interface item {
    name: String
    url: string
}

const Portfolio: React.FC = () => {

    const [results, errorMessage] = useResults();
    let items: Array<item> = []

    for(let i = 0; i<results.length; i++){
        let result: any = results[i]
        let item: item = {
            name: result.name,
            url: result.html_url
        }
        items.push(item)
    }
    return (
        <div id="portfolio">
            <h1>Portfolio</h1>
            <div>
                {errorMessage ? 'Failed to parse github' : items.map((item, index) => {
                    return (
                        <div className="container" key={index}>
                            <a target="_blank" rel="noreferrer" href={item.url}>
                                <div className='portfolioItem'>
                                    <div>{item.name}</div>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;
