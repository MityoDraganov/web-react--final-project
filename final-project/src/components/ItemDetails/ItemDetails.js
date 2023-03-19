import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getOneItem } from "../../service/itemsService"
import styles from "./ItemDetails.module.css"

export const ItemDetails =  () => {

    const {id} = useParams()
    console.log(id)
    const [data, setData] = useState({})

    useEffect(()=>{
        getOneItem(id)
        .then(result => {
            setData(result)
        })
    }, [])

    return(
        <div  className={styles['details-item-div']}>

        <img className={styles['details-item-img']} src={data.imageUrl}></img>
        <p><span>Title:</span> {data.title}</p>
        <label>Description:</label>
        <textarea defaultValue={data.description} className={styles['details-item-txtarea']}></textarea>
        
        <div>
            <button className={styles['details-item-btn']}>Edit</button>
            <button className={styles['details-item-btn']}>Delete</button>
        </div>

        <footer>
            <div className="details-comment-section">
                <img></img>
                <h2></h2>
                <p></p>
            </div>
        </footer>
        </div>
    )
}