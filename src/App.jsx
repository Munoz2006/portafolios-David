import { Home } from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import { Header } from "./layout/Header/Header"
import {Footer} from "./layout/Footer/Footer"
import {ExperienciaP} from "./pages/ExperienciaProfesional/ExperienciaP"
import {Estudios} from "./pages/Estudios/Estudios"
export const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/portafolios-David" element={<Home/>}/>
        <Route path="portafolios-David/ProfessionalExperience" element={<ExperienciaP/>}/>
        <Route path="portafolios-David/Education" element={<Estudios/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

