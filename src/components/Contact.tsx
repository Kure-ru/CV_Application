import { useState } from "react"
import Form from "./Form"

const Contact = ({ contact, setContact }) => {
    const [showForm, setShowForm] = useState(false)

    const formQuestions = ["numéro de téléphone", "adresse email", "site web", "linkedIn", "Twitter"]

    const handleClick = () => {
        console.log('click')
        setShowForm(true)
    }
    return (
        <>
            <div className='sub__title'>
                <h3>Contact</h3>
                <button onClick={handleClick} >EDITER</button>
            </div>
            <ul>
                <li>{contact["numéro de téléphone"]}</li>
                <li>{contact["adresse email"]}</li>
                <li>{contact["site web"]}</li>
                <li>{contact.linkedIn}</li>
                <li>{contact.Twitter}</li>
            </ul>
            {showForm ? <Form variable={contact} setVariable={setContact} setShowForm={setShowForm} formQuestions={formQuestions} /> : null}
        </>
    )
}
export default Contact