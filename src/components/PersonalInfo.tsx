import { useState } from "react"
import Form from "./Form"
export const PersonalInfo = ({ profile, setProfile }) => {
const [showForm, setShowForm] = useState(false)

const formQuestions = ["nom", "titre professionnel", "description"]

    const handleClick = () => {
        console.log('click')
        setShowForm(true)
    }
    return (
<section className='top'>
          
          <div className='sub__title'>
            <h3>Profil</h3> 
            <button onClick={handleClick} >EDITER</button>
          </div>
          <h2>{profile.nom}</h2>
          <h3 className='top__titre'>{profile['titre professionnel']}</h3>
          <p>{profile.description}</p>
          { showForm ? <Form variable={profile} setVariable={setProfile} setShowForm={setShowForm} formQuestions={formQuestions}/> : null }
        </section>
    )
}

