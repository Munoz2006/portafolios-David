import './Header.css'
import { Navbar } from "../Navbar/Navbar"

export const Header = () => {
    return (
        <header className="header">
            <h2 className='h2-header'>Portafolio</h2>
            <Navbar/>
        </header>
    )
}