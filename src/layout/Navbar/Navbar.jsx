import './Navbar.css'
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar"

export const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='ul'>
                <ItemNavbar route='/' content='Inicio' style='a-link'/>
                <ItemNavbar route='/TechnicalSkills' content='Habilidades Técnicas' style='a-link'/>
                <ItemNavbar route='/ProfessionalExperience' content='Experiencia Profesional' style='a-link'/>
                <ItemNavbar route='/Education' content='Educación' style='a-link'/>
            </ul>
        </nav>
    )
}