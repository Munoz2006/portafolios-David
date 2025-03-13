import { Div_E_Es } from '../../layout/Div_E_Es/Div_E_Es';
import './Estudios.css';

export const Estudios = () => {
    return(
        <main>
            <h1>Estudios</h1>
            <section>
               <Div_E_Es contentTitle='Bachiller'
                    contentp='Colegio: Cristobal Colon   
                    Año: 31 de Noviembre del 2023'/>
               <Div_E_Es contentTitle='Tecnico en progremacion de Software'
                    contentp='Colegio: Cristobal Colon   
                    Año: 31 de Noviembre del 2023'/>
            </section> 
        </main>
    )
}