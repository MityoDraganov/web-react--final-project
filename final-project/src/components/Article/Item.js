import { useContext } from "react"
import { DetailedItemContext } from "../../contexts/[del]"

import { getOneItem } from "../../service/itemsService"
import styles from "./Item.module.css"
import {useNavigate} from 'react-router-dom'
export const ItemRenderer = ({_id,
title,
description,
imageUrl,
keywords,
comments, }) =>{

    const navigate = useNavigate()

    const detailsClickHandler = async (_id) =>{

        navigate(`/articles/${_id}`)
    }


    return(


        <div  className={styles['dashboard-item-div']}>

            <img className={styles['dashboard-item-img']} src={imageUrl}></img>
            <p><span>Title:</span> {title}</p>
            
            <footer>
            <button className={styles['dashboard-item-btn']} onClick = {() => detailsClickHandler(_id)}>Details</button>
            </footer>
        </div>


    )
}