import './Div_Frase.css'

export const Div_Frase = ({content, contentP}) => {
    return(
        <div className='div-main2'>
            <p className="p-home">{contentP}</p>
            <h4 className='h4-home2'>{content}</h4>
        </div>  
    )
}