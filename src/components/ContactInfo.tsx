import { useState } from "react"
import Form from "./Form"
import { ContactProps } from "../utils/interfaces"

const ContactInfo = ({ contact, setContact }: ContactProps) => {
    const [showForm, setShowForm] = useState<boolean>(false)

    const formQuestions: string[] = ["numéro de téléphone", "adresse email", "site web", "linkedIn", "Twitter"]

    const handleClick = () => {
        console.log('click')
        setShowForm(true)
    }
    return (
        <>
                <h3>Contact</h3>
                <button onClick={handleClick} >EDITER</button>

            <ul>
                <li>{contact["numéro de téléphone"]}</li>
                <li>{contact["adresse email"]}</li>
                <li>{contact["site web"]}</li>
                <li>{contact.linkedIn}</li>
                <li>{contact.Twitter}</li>
            </ul>
            {showForm ? <Form variable={contact} setVariable={setContact} setShowForm={setShowForm} formQuestions={formQuestions} addNew={false} /> : null}
        </>
    )
}
export default ContactInfo