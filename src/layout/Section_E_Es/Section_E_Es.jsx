import { Div_E_Es } from "../Div_E_Es/Div_E_Es"
import './Section_E_Es.css'
export const Section_E_Es = () => {
    return(
        <section className="section-E-Es">
            <Div_E_Es contentTitle='Libro404' 
                contentp='Este proyecto se trabajo con la metologia scrum, 
                donde participe desarrollando el backend, este proyecto se trataba de una 
                biblioteca donde se podria buscar el libro que desee.'
                link='https://libro404-organization.github.io/libro404/'/>
            
            <Div_E_Es contentTitle='Diccionario'
                contentp='Este proyecto lo elabore solo donde se le pasa una palabra 
                que este en el traductor y la traduce sea de español a ingles o lo contrario'
                link='https://munoz2006.github.io/diccionario/'/>
        </section>
    )
}