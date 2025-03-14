import './Main.css'
import Foto_David from '../../assets/image/Foto_David.jpg'
import imgPc from '../../assets/image/setup.svg'
import { ItemTitle } from '../../components/ItemTitle/ItemTitle'
import { Div_Frase } from '../Div_Frase/Div_Frase'
import { Div_Main } from '../Div_Main/Div_Main'

export const Main = () => {
    return (
        <main className='main'>
            <section className='section-1'>
                <ItemTitle content='Desarrollador, Junior y Backend' style='h1-title'/>
                <h3 className='h3-home'>Persona dispuesta a aprender cosas nuevas, con ambición de siempre dar lo mejor</h3>
                <img className='img-1' src={Foto_David} alt='#'/>
                <img className='img-2' src={imgPc} alt="#" />
            </section>
            <section className='section-2'>
                <h3 className='h3-home2'>Hola, soy David, un placer conocerte</h3>
                <h4 className='h4-home'>Comencé haciendo un curso técnico a través de una propuesta que me hicieron en la escuela, para poder llegar a este momento con un título técnico y estudiando un tecnólogo en el Sena, aprendiendo diversas metodologías de desarrollo y también lenguajes con los que trabajar. Sin embargo, a lo largo del camino, aprenderemos más sobre mí.</h4>
            </section>
            <section className='section-3'>
                <Div_Main contentTitle='Habilidades Tecnicas' 
                    contentLi='Frontend: HTML, CSS, Javascrip y introduccion a React.'
                    contentLi1='Backend: Java, Javascript, algunas cosas de Python.'
                    contentLi2='Liderazgo: Una persona que puede ser lider si se lo propone.'
                    />
                
                <Div_Main contentTitle='Habilidades sociales'
                    contentLi='Personero: Fui personero de mi colegio y eso me ayudo a ser mucho mas comicativo'
                    contentLi1='Diplomado Derechos Humanos: Tambien estuve en un diplomado 
                    que me ayudaba a desenvolver mis habilidades sociales'
                    />
                <Div_Main contentTitle='Nivel de ingles'
                    contentLi1='Mi nivel de ingles es de un A2, muy basico'/>    
            </section>
                <Div_Frase content='Nelson Mandela'
                  contentP='La educación es el arma más poderosa que puedes usar 
                para cambiar el mundo'  />
        </main>
    )
}