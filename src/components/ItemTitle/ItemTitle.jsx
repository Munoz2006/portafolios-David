import './ItemTitle.css'

export const ItemTitle = ({content, style}) =>{
    return(
        <h1 className={style} >{content}</h1>
    )
}