import libro404 from '../../assets/image/libro404.jpg'
import './Div_E_Es.css'

export const Div_E_Es = ({contentTitle, contentp, link}) => {
    return (
        <div className="card">
           <p>{contentTitle}</p>
           <p>{contentp}</p>
           <div className='btn'>
                <a href={link}>Ir a ver</a>
           </div>
        </div>
    )  
}