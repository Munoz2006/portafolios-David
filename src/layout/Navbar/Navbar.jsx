import './Navbar.css'
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar"

export const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='ul'>
                <ItemNavbar route='/portafolios-David' content='Inicio' style='a-link'/>
                <ItemNavbar route='portafolios-David/ProfessionalExperience' content='Experiencia Profesional' style='a-link'/>
                <ItemNavbar route='portafolios-David/Education' content='Educación' style='a-link'/>
            </ul>
        </nav>
    )
}