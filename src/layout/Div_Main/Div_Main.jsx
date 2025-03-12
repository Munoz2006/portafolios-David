import './Div_Main.css';
export const Div_Main = ({contentTitle, contentLi, contentLi1, contentLi2}) => {
    return(
        <div className='div-main'>
           <h3 className="h3-home2">{contentTitle}</h3>
           <ul>
                <li className='li-main'>{contentLi}</li>
                <li className='li-main'>{contentLi1}</li>
                <li className='li-main'>{contentLi2}</li>
           </ul>
        </div>
    )
}
