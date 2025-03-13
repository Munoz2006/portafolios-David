import { Div_E_Es } from '../../layout/Div_E_Es/Div_E_Es';
import './Estudios.css';

export const Estudios = () => {
    return(
        <main>
            <h1>Estudios</h1>
            <section>
               <Div_E_Es contentTitle='Bachiller'
                    contentp='Colegio: Cristobal Colon   
                    Año: 31 de Noviembre del 2023'
                    link='https://drive.google.com/file/d/1Sk6tp5jAqlGiYAbC5vhdl-W87TxHAHdj/view?usp=sharing'/>
               <Div_E_Es contentTitle='Tecnico en progremacion de Software'
                    contentp='Colegio: Cristobal Colon   
                    Año: 31 de Noviembre del 2023'
                    link='https://drive.google.com/file/d/13o7H2vwH2ffZe4Y7Kae91inhHs_P-8jg/view?usp=sharing'/>
            </section> 
        </main>
    )
}