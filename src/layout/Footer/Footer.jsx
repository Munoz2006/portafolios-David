import './Footer.css';
import { CiFacebook, CiInstagram } from "react-icons/ci";

export const Footer =() =>{
    return(
        <footer className="footer">
            <div className='footer-content'>
                <a className='icons' href="https://www.facebook.com/profile.php?id=100074747988598&mibextid=ZbWKwL">
                    <CiFacebook/>
                </a>
                <a className='icons' href="https://www.instagram.com/md__.787?igsh=MWhod3h3NmV3OTdv">
                    <CiInstagram/>
                </a>
                <p>David Muñoz</p>
                <p>Desarrollador Backend</p>
                <p>© 2025</p>
            </div>
        </footer>
    )
}