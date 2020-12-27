import React from 'react'

const Services: React.FC = () => {
    return (
        <div id="services">
            <h1>Services</h1>
            <div>
                <div>
                    <img src='./images/web.svg' alt="web" />
                    <span>Développement de site web</span>
                </div>
                <div>
                    <img src='./images/discord.svg' alt="discord" />
                    <span>Dévelopement de bot Discord</span>
                </div>
            </div>
        </div>
    )
}

export default Services
