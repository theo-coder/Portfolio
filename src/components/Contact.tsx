import React, { useState } from 'react'
import axios from 'axios'

const Contact: React.FC = () => {

    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [messageHtml, setMessageHtml] = useState("");


    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_BACK_URI + '/send', {
            firstName,
            lastName,
            email,
            subject,
            messageHtml
        }, { headers }).then((res) => {
            if (res.data.msg === 'success') {
                alert('Message envoyé !')
                setLastName('')
                setFirstName('')
                setEmail('')
                setSubject('')
                setMessageHtml('')
            } else if (res.data.msg === 'fail') {
                console.log(res)
                alert('Erreur d\'envoi du message, veuillez réessayer plus tard')
            }
        })
    }

    return (
        <div id="contact">
            <h1>Contact</h1>
            <form className="contactForm" onSubmit={(e) => handleSubmit(e)}>
                <input
                    required
                    type='text'
                    value={lastName}
                    placeholder="Nom"
                    onChange={(e: any) => setLastName(e.target.value)}
                />
                <input
                    required
                    type='text'
                    value={firstName}
                    placeholder="Prénom"
                    onChange={(e: any) => setFirstName(e.target.value)}
                />
                <input
                    required
                    type='email'
                    value={email}
                    placeholder="Email"
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                <input
                    required
                    type="text"
                    value={subject}
                    placeholder='Sujet'
                    onChange={(e: any) => setSubject(e.target.value)}
                />
                <div className="text">
                    <p>
                        Si vous êtes intéressés par mon profil, que vous avez un projet à me soumettre, ou pour toute autre information, vous pouvez me contacter via ce formulaire. Je tâcherai de vous répondre dans les meilleurs délais.
                    </p>
                </div>
                <textarea
                    required
                    placeholder="Message"
                    value={messageHtml}
                    onChange={(e: any) => setMessageHtml(e.target.value)}
                />
                <button type='submit'>Envoyer</button>
            </form>
        </div>
    )
}

export default Contact;
