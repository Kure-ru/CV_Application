import { useState } from "react"
import Form from "./Form"

const ProfessionalExp = ({ jobExp, setJobExp }) => {
  const [showForm, setShowForm] = useState(false)

  const formQuestions = ['nom du poste', "nom de l'entreprise", "date", "description du poste"]
  const handleClick = () => {
    setShowForm(true)
}

const handleDelete = (index:number) => {
  setJobExp(current => current.filter((exp, i) => i !== index))
  }

  return (
    <section className='pro'>
          <div className='sub__title'>
            <h3>Expériences</h3>  <button onClick={handleClick} >AJOUTER</button>
          </div>
          {jobExp.map((job, index) => {
            return (
              <div onClick={() => handleDelete(index)}  key={index} className='pro__experience'>
                 <h4 className='experience__title'>{job['nom du poste']} chez {job["nom de l'entreprise"]}</h4>
                 <p className='experience__date'>{job["description du poste"]}</p>
            <ul>
              <li>{job.jobDescription}</li>
            </ul>
          </div>
          )
        })}
           
          { showForm ? <Form variable={jobExp} setVariable={setJobExp} setShowForm={setShowForm} formQuestions={formQuestions} addNew={true}/> : null }
        </section>
  )
}
export default ProfessionalExp