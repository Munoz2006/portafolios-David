import './Navbar.css'
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar"

export const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='ul'>
                <ItemNavbar route='/' content= 'Incio' style='a-link'/>
                <ItemNavbar route='/HabilidadesTecnicas' content= 'Habilidades Tecnicas' style='a-link'/>
                <ItemNavbar route='/ExperienciaProfecional' content= 'Experiencia Profesional' style='a-link'/>
                <ItemNavbar route='/Estudios' content= 'Estudios' style='a-link'/>
            </ul>
        </nav>
    )
}