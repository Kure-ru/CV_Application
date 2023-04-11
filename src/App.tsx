import { useContext, useState } from 'react'
import { PersonalInfo } from './components/PersonalInfo'

import './App.css'
import ProfessionalExp from './components/ProfessionalExp'
import Formations from './components/Formations'
import Contact from './components/Contact'
import Competences from './components/Competences'
import Langues from './components/Langues'


function App() {
  const [profile, setProfile] = useState([])
  const [jobExp, setJobExp] = useState([])
  const [formations, setFormations] = useState([])
  const [contact, setContact] = useState({})
  const [skills, setSkills] = useState([])
  const [languages, setLanguages] = useState([])

  return (
    <>
      <header>
        <h1>MONCVFACILE</h1>
        <button onClick={generatePDF} type="button">Exporter PDF</button>
      </header>
      <main>
        <div>
          <PersonalInfo profile={profile} setProfile={setProfile} />
          <ProfessionalExp jobExp={jobExp} setJobExp={setJobExp} />
          <Formations formations={formations} setFormations={setFormations} />
        </div>
        <section className='right-column' >
          <Contact contact={contact} setContact={setContact} />
          <Competences skills={skills} setSkills={setSkills} />
          <Langues languages={languages} setLanguages={setLanguages} />
        </section>
      </main>
    </>
  )
}

export default App
