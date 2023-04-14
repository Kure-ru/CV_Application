import './App.css'

import { useState } from 'react'
import { PersonalInfo } from './components/PersonalInfo'
import ProfessionalExp from './components/ProfessionalExp'
import Formations from './components/Formations'
import ContactInfo from './components/ContactInfo'
import CompetencesInfo from './components/CompetencesInfo'
import Langues from './components/Langues'
import Guide from './components/Guide'
import { jobExp, Profile, Formation, Contact, Language, Competences } from './utils/interfaces'

function App() {
  const [profile, setProfile] = useState<Profile>({"nom": "", "titre professionnel": "", "description": ""})
  const [jobExp, setJobExp] = useState<jobExp[]>([])
  const [formations, setFormations] = useState<Formation[]>([])
  const [contact, setContact] = useState<Contact>({ "numéro de téléphone": "", "adresse email":"", "site web": "", linkedIn: "", Twitter: ""})
  const [skills, setSkills] = useState<Competences[]>([])
  const [languages, setLanguages] = useState<Language[]>([])

  return (
    <>
      <header>
        <h1>MONCVFACILE</h1>
      </header>
      <main>
        <Guide/>

          <PersonalInfo profile={profile} setProfile={setProfile} />
          <div className='left-column'>
          <ProfessionalExp jobExp={jobExp} setJobExp={setJobExp} />
          <Formations formations={formations} setFormations={setFormations} />
          </div>
        <section className='right-column' >
          <ContactInfo contact={contact} setContact={setContact} />
          <CompetencesInfo skills={skills} setSkills={setSkills} />
          <Langues languages={languages} setLanguages={setLanguages} />
        </section>
      </main>
    </>
  )
}

export default App
