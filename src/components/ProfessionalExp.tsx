import { useState } from "react"
import Form from "./Form"
import { experienceProps } from "../utils/interfaces"


const ProfessionalExp: React.FC<experienceProps> = ({ jobExp, setJobExp }) => {
  const [showForm, setShowForm] = useState<boolean>(false)

  const formQuestions = ['nom du poste', "nom de l'entreprise", "lieu", "date de début", "date de fin",  "description du poste"]
  const handleClick = () => {
    setShowForm(true)
}

const handleDelete = (index:number) => {
  setJobExp(current => current.filter((exp, i) => i !== index))
  }

  return (
    <section className='pro'>
      
            <h3>Expériences</h3>  <button onClick={handleClick} >AJOUTER</button>
        
          {jobExp.map((job, index) => {
            return (
              <div onClick={() => handleDelete(index)}  key={index} className='pro__experience'>
                <div className='experience__date'>
                  {job["date de début"]} <br/>
                  {job["date de fin"]}
                </div>
                <div>
                 <h4 className='experience__title'>{job['nom du poste']} </h4>
                 <p> {job["nom de l'entreprise"]} {job.lieu}</p>
                 <p>{job["description du poste"]}</p>
            </div>
          </div>
          )
        })}
           
          { showForm ? <Form variable={jobExp} setVariable={setJobExp} setShowForm={setShowForm} formQuestions={formQuestions} addNew={true}/> : null }
        </section>
  )
}
export default ProfessionalExp