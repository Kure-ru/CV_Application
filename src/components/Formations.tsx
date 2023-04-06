import { useState } from "react"

const Formations = ({ formations, setFormations }) => {
    const [showForm, setShowForm] = useState(false)

    const handleClick = () => {
      console.log('click')
      setShowForm(true)
  }

  return (
    <section className='ref'>
          <div className='sub__title'>
            <h3>Formations</h3>
            <button onClick={handleClick} >EDITER</button>
          </div>
          <div className="pro__experience">
            <h4 className='experience__title'>{formations.nom}</h4>
            <p className='experience__date'>{formations.date}</p>
            <ul>
              <li>{formations.contenu}</li>
            </ul>
            </div>
            { showForm ? <Form formations={formations} setFormations={setFormations} setShowForm={setShowForm}/> : null }
        </section>
  )
}

const Form = ({ setShowForm, formations, setFormations  }) => {
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formations)
        setShowForm(false)
    }
  
    const updateProfile = (e:any) => {
        setFormations({
            ...formations,
            [e.target.name]: e.target.value
        })
        console.log(formations)
    }
  
    return(
    <form  method="post" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="nom">nom de l'école ou de la formation</label>
            <input onChange={updateProfile} name="nom"></input>
            </div>
  
            <div>
            <label htmlFor="date">date de la formation</label>
            <input onChange={updateProfile} name="date"></input>
            </div>

            <div>
            <label htmlFor="description">contenu de la formation</label>
            <input onChange={updateProfile}  name="contenu"></input>
            </div>
           <button type="submit">CONFIRMER</button>
          </form>
  )}

export default Formations