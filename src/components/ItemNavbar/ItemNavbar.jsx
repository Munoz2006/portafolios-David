import { Link } from 'react-router-dom'
import './ItemNavbar.css'

export const ItemNavbar = ({ content, style, route }) => {
    return (
        <>
           <li>
                <Link className={style} to={route}>{content}</Link>
           </li>
        </>
    )
}