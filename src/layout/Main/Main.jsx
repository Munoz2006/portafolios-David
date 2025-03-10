import './Main.css'
import Foto_David from '../../assets/image/Foto_David.jpg'
import { ItemTitle } from '../../components/ItemTitle/ItemTitle'

export const Main = () =>{
    return(
        <main>
            <section className='section-1'>
                <ItemTitle content='Desarrollador, Junior y Backend' style='h1-tituloP'/>                
                <h3>Persona dispuesta aprender cosas nuevas, con ambiciones a siempre dar lo mejor</h3>
                <img src={Foto_David} alt='#'/>
            </section>
        </main>
    )
}