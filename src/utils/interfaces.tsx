export interface jobExp {
    'nom du poste': string;
    "nom de l'entreprise": string;
    "lieu": string;
    "date de début": string;
    "date de fin": string;
    "description du poste": string
  }
  
  export interface  experienceProps {
    jobExp: jobExp[]
    setJobExp: React.Dispatch<React.SetStateAction<jobExp[]>>
  }

 
  export interface Formation {
    "nom de la formation": string;
    "date de début": string;
    "date de fin": string;
    "contenu de la formation": string;
  }
  
  export interface FormationProps {
    formations: Formation[];
    setFormations: React.Dispatch<React.SetStateAction<Formation[]>>
  }

 export interface Contact {
    "numéro de téléphone": string;
    "adresse email": string;
    "site web": string;
    linkedIn: string;
    Twitter: string;
    [key: string]: string;
  }

  export interface ContactProps {
    contact: Contact[],
    setContact: React.Dispatch<React.SetStateAction<Contact[]>>
  }

export interface Profile {
    "nom": string;
    "titre professionnel": string;
    "description": string;
    [key: string]: string;
  }
  
 export interface ProfileProps {
    profile: Profile;
    setProfile: React.Dispatch<React.SetStateAction<Profile>>
  }

  export interface Language {
    langue: string;
  }
  
  export interface LanguageProps {
    languages: Language[];
    setLanguages: React.Dispatch<React.SetStateAction<Language[]>>
  }

  export interface Competences {
    compétence: string;
  }

  export interface CompetencesProps {
    skills: Competences[];
    setSkills: React.Dispatch<React.SetStateAction<Competences[]>>
  }

  export interface FormProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>,
    variable: any[],
    setVariable: React.Dispatch<React.SetStateAction<any[]>>,
    formQuestions: string[],
    addNew?: boolean
}

