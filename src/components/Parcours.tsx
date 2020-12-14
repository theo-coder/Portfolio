import React from 'react'
import ParcoursSection from './ParcoursSection'

const parcoursList = {
    Formations : [
        {
            title: 'BTS SIO',
            date: '2019 - Aujourd\'hui',
            description: 'BTS Services informatiques aux organisations option SLAM',
            place: 'Lycée Louis Pergaud, Besançon'
        },
        {
            title: 'BAC Technologique',
            date: '2016 - 2019',
            description: 'Bac STI2D option SIN, Mention Bien',
            place: 'Lycée Victor Hugo, Besançon'
        },
    ],
    Expérience: [
        {
            title: 'Sapeur-pompier volontaire',
            description: 'Jeune sapeur-pompier durant 4 ans, début de l\'activité en février 2019',
            date: '2014 - 2019',
            place: 'Caserne de Besançon EST'
        },
        {
            title: 'Job d\'été',
            subtitle: 'Différences Vacances Adaptées',
            description: 'Encadrant de personnes handicapées et accomplissement de leurs besoins',
            date: '2019',
            place: '25370 Jougne'
        },
        {
            title: 'FCSC',
            description: 'Participation au France Cyber Security Challenge<br/>Classement : 33/294 Junior, 157/1597 Général',
            date: '2020'
        },
        {
            title: 'BattleDev',
            description: 'Participation à BattleDev HelloWork',
            date: '11/19 - 03/20'
        },
    ],
    Formations_en_ligne : [
        {
            title: 'OpenClassrooms',
            description: 'Html Css - Web - Git Github - Algorithmes - Javascript'
        },
        {
            title: 'Grafikart',
            description: 'Html - Css - Hebergement'
        }
    ]
}

const Parcours = () => {

    const items = []

    for(let i=0;i< Object.entries(parcoursList).length;i++){
        items.push(
            <ParcoursSection
                key={i}
                title={Object.entries(parcoursList)[i][0]}
                content={Object.entries(parcoursList)[i][1]}
            />
        )
    }
    
    return (
        <div id="parcours">
            <h1>Parcours</h1>
            <div>
                {items}
            </div>
        </div>
    )
}

export default Parcours
