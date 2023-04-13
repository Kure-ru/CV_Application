import { useState } from "react"
import Avatar from "./Avatar"

import Form from "./Form"
export const PersonalInfo = ({ profile, setProfile }) => {
  const [showForm, setShowForm] = useState(false)

  const formQuestions = ["nom", "titre professionnel", "description"]

  const handleClick = () => {
    setShowForm(true)
  }

  console.log(profile)
  return (
    <section className='top'>
      <div>
        <Avatar />
        <h2>{profile.nom}</h2>
      </div>

      <div className="profile__container">
        <h3 className='top__titre'>{profile['titre professionnel']}</h3>
        <p className="container__bio">{profile.description}</p>
        {showForm ? <Form variable={profile} setVariable={setProfile} setShowForm={setShowForm} formQuestions={formQuestions} /> : null}
        <button onClick={handleClick} >EDITER PROFIL</button>
      </div>


    </section>
  )
}

