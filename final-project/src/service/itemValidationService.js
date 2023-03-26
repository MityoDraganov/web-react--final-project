import { useState } from "react";
import {toast} from "react-toastify"

export const itemValidationService = (data) => {
   

    if(data.title.length < 3){
        toast("Title must be at least 3 characters long")
        return
    }
    if(data.description.length < 3){
        toast("Description must be at least 3 characters long")
        return
    }
    if(data.imageUrl.length < 3){
        toast("ImageUrl must be at least 3 characters long")
        return
    }
    if(data.keywords.length < 3){
        toast("You must write at least on keyword that is at least 3 characters long")
        return
    }

    return true
}