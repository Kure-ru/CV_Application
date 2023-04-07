import { useState } from "react"
import Form from "./Form"

const ProfessionalExp = ({ jobExp, setJobExp }) => {
  const [showForm, setShowForm] = useState(false)

  const formQuestions = ['nom du poste', "nom de l'entreprise", "date", "description du poste"]

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
            <h4 className='experience__title'>{jobExp['nom du poste']} chez {jobExp["nom de l'entreprise"]}</h4>
            <p className='experience__date'>{jobExp["description du poste"]}</p>
            <ul>
              <li>{jobExp.jobDescription}</li>
            </ul>
          </div>
          { showForm ? <Form variable={jobExp} setVariable={setJobExp} setShowForm={setShowForm} formQuestions={formQuestions}/> : null }
        </section>
  )
}

export default ProfessionalExp