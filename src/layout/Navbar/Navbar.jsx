import './Navbar.css'
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar"

export const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='ul'>
                <ItemNavbar/>
            </ul>
        </nav>
    )
}