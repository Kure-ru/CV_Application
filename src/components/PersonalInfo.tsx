import { useState } from "react"
import Avatar from "./Avatar"
import Form from "./Form"
import { ProfileProps } from "../utils/interfaces"

export const PersonalInfo: React.FC<ProfileProps> = ({ profile, setProfile }) => {
  const [showForm, setShowForm] = useState<boolean>(false)

  const formQuestions = ["nom", "titre professionnel", "description"]

  const handleClick = () => {
    setShowForm(true)
  }

  return (
    <section className='top'>
      <div>
        <Avatar />
        <h2>{profile.nom}</h2>
      </div>

      <div className="profile__container">
        <h3 className='top__titre'>{profile['titre professionnel']}</h3>
        <p className="container__bio">{profile.description}</p>
        {showForm ? <Form variable={profile} setVariable={setProfile} setShowForm={setShowForm} formQuestions={formQuestions} addNew={false} /> : null}
        <button onClick={handleClick} >EDITER PROFIL</button>
      </div>
    </section>
  )
}

