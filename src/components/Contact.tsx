import { useState } from "react"

const Contact = ({ contact, setContact }) => {
    const [showForm, setShowForm] = useState(false)

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
                <li>{contact.phone}</li>
                <li>{contact.email}</li>
                <li>{contact.website}</li>
                <li>{contact.linkedin}</li>
                <li>{contact.twitter}</li>
            </ul>
            { showForm ? <Form contact={contact} setContact={setContact} setShowForm={setShowForm}/> : null }
        </>
    )
}

const Form = ({ setShowForm, contact, setContact }) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(contact)
        setShowForm(false)
    }

    const updateProfile = (e: any) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
        console.log(contact)
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div>
                <label >numéro de téléphone</label>
                <input onChange={updateProfile} name="phone"></input>
            </div>

            <div>
                <label >adresse email</label>
                <input onChange={updateProfile} name="email"></input>
            </div>

            <div>
                <label >site web / portfolio</label>
                <input onChange={updateProfile} name="website"></input>
            </div>

            <div>
                <label >LinkedIn</label>
                <input onChange={updateProfile} name="linkedin"></input>
            </div>

            <div>
                <label>Twitter</label>
                <input onChange={updateProfile} name="twitter"></input>
            </div>
            <button type="submit">CONFIRMER</button>
        </form>
    )
}

export default Contact