import { useState } from "react"

const ProfessionalExp = ({ jobExp, setJobExp }) => {
  const [showForm, setShowForm] = useState(false)

  const handleClick = () => {
    console.log('click')
    setShowForm(true)
}
  return (
    <section className='pro'>
          <div className='sub__title'>
            <h3>Expériences</h3>  <button onClick={handleClick} >EDITER</button>
          </div>
          <div className='pro__experience'>
            <h4 className='experience__title'>{jobExp.entreprise}</h4>
            <p className='experience__date'>{jobExp.date}</p>
            <ul>
              <li>{jobExp.jobDescription}</li>
            </ul>
          </div>
          { showForm ? <Form jobExp={jobExp} setJobExp={setJobExp} setShowForm={setShowForm}/> : null }
        </section>
  )
}

const Form = ({ setShowForm, jobExp, setJobExp }) => {
  const handleSubmit = (e:any) => {
      e.preventDefault();
      console.log(jobExp)
      setShowForm(false)
  }

  const updateProfile = (e:any) => {
      setJobExp({
          ...jobExp,
          [e.target.name]: e.target.value
      })
      console.log(jobExp)
  }

  return(
  <form  method="post" onSubmit={handleSubmit}>
          <div>
          <label htmlFor="nom">poste, nom de l'entreprise</label>
          <input onChange={updateProfile} name="entreprise"></input>
          </div>

          <div>
          <label htmlFor="titre">date</label>
          <input onChange={updateProfile} name="date"></input>
          </div>

          <div>
          <label htmlFor="description">description du poste</label>
          <textarea onChange={updateProfile}  name="jobDescription"></textarea>
          </div>
         <button type="submit">CONFIRMER</button>
        </form>
)}

export default ProfessionalExp