import {toast} from "react-toastify"

const keywordsRegex = /^\w{3,}(,\s\w{3,}){0,2}$/;


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
    if(!keywordsRegex.test(data.keywords)){
        toast("Keyword must be in format \"word1, word2, ... \" and each of them must be at least 3 characters long")
        return
    }

    return true
}