import { useState } from 'react';
import './Header.css'
import { Navbar } from "../Navbar/Navbar"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <h2 className='h2-header'>Portafolio</h2>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <Navbar isOpen={isOpen} />
        </header>
    )
}