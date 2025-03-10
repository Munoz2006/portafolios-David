import { NavLink } from 'react-router-dom'
import './ItemNavbar.css'

export const ItemNavbar = ({content, style, route}) =>{
    return(
        <>
           <li>
                <NavLink className={style} to={route}>{content}</NavLink>
           </li>
        </>
    )
}