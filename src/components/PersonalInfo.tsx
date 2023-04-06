import { useState } from "react"
export const PersonalInfo = ({ profile, setProfile }) => {
const [showForm, setShowForm] = useState(false)

    const handleClick = () => {
        console.log('click')
        setShowForm(true)
    }
    return (
<section className='top'>
          <h2>{profile.nom}</h2>
          <h3 className='top__titre'>{profile.titre}</h3>
          <div className='sub__title'>
            <h3>Profil</h3> 
            <button onClick={handleClick} >EDITER</button>
          </div>
          <p>{profile.description}</p>
          { showForm ? <Form profile={profile} setProfile={setProfile} setShowForm={setShowForm}/> : null }
        </section>
    )
}

const Form = ({ setShowForm, profile, setProfile }) => {
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(profile)
        setShowForm(false)
    }

    const updateProfile = (e:any) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
        console.log(profile)
    }

    return(
    <form  method="post" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="nom">nom</label>
            <input onChange={updateProfile} name="nom"></input>
            </div>

            <div>
            <label htmlFor="titre">titre professionnel</label>
            <input onChange={updateProfile} name="titre"></input>
            </div>

            <div>
            <label htmlFor="description">description</label>
            <textarea onChange={updateProfile}  name="description"></textarea>
            </div>
           <button type="submit">CONFIRMER</button>
          </form>
)}