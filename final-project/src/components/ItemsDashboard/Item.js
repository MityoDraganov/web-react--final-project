export const ItemRenderer = ({title, imageUrl}) =>{
    return(
        <div>
            <img src={imageUrl}></img>
            <p><span>Title:</span> {title}</p>
        </div>
    )
}