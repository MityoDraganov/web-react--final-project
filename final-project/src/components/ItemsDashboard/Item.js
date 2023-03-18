import styles from "./Item.module.css"

export const ItemRenderer = ({_id,
title,
description,
imageUrl,
keywords,
comments, }) =>{
    return(


        <div  className={styles['dashboard-item-div']}>

            <img className={styles['dashboard-item-img']} src={imageUrl}></img>
            <p><span>Title:</span> {title}</p>
            
            <footer>
            <button className={styles['dashboard-item-btn']}>Details</button>
            </footer>
        </div>


    )
}