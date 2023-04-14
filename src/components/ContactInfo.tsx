import { useState } from "react"
import Form from "./Form"
import { ContactProps } from "../utils/interfaces"


const ContactInfo: React.FC<ContactProps> = ({ contact, setContact }) => {
    const [showForm, setShowForm] = useState<boolean>(false)

    const formQuestions: string[] = ["numéro de téléphone", "adresse email", "site web", "linkedIn", "Twitter"]

    const handleClick = () => {
        setShowForm(true)
    }

    return (
        <>
            <h3>Contact</h3>
            <button onClick={handleClick} >EDITER</button>
            {contact.map((c) => (
                <ul>
                    <li>{c["numéro de téléphone"]}</li>
                    <li>{c["adresse email"]}</li>
                    <li>{c["site web"]}</li>
                    <li>{c.linkedIn}</li>
                    <li>{c.Twitter}</li>
                </ul>
            ))}

            {showForm ? <Form
                variable={contact}
                setVariable={setContact}
                setShowForm={setShowForm}
                formQuestions={formQuestions}
                addNew={false}
            /> : null}
        </>
    )
}
export default ContactInfo