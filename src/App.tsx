import { useContext, useState } from 'react'
import { data } from './utils/CVData'
import { PersonalInfo } from './components/PersonalInfo'

import './App.css'
import ProfessionalExp from './components/ProfessionalExp'
import Formations from './components/Formations'
import Contact from './components/Contact'
import Competences from './components/Competences'

function App() {
const [profile, setProfile] = useState({})
const [jobExp, setJobExp] = useState({})
const [formations, setFormations] = useState({})
const [contact, setContact] = useState({})
const [skill, setSkill] = useState({})

  return (
    <>
      <header>
        <h1>MONCVFACILE</h1>
      </header>
      <main>
      <div>
        <PersonalInfo profile={profile} setProfile={setProfile}/>
        <ProfessionalExp jobExp={jobExp} setJobExp={setJobExp}/>
       <Formations formations={formations} setFormations={setFormations}/>
        </div>
        <section className='right-column' >
          <Contact contact={contact} setContact={setContact}/>
          <Competences skill={skill} setSkills={setSkill}/>
          <div className='sub__title'>
            <h3>Education</h3>
          </div>
          <h4 className="experience__title">Université Trop cool</h4>
          <p className='experience__date'>1111-2015</p>
          <p className='experience__description'  >licence d'informatique</p>
        </section>
      </main>
    </>
  )
}

export default App
