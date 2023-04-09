    import { toast } from "react-toastify";

    const baseURL =  process.env.NODE_ENV === 'development' ?
    "http://localhost:3030/items"
    : "https://teachnigo.onrender.com/items"

    //const baseURL = "http://localhost:3030/items"


    export const getAllItems = async () => {
        const response = await fetch(baseURL);
        const result = await response.json()
        return result
    }
    export const getMyArticles = async (id) =>{
        const response = await fetch(`${baseURL}/MyArticles/${id}`)
        const result = await response.json()
        return result
    }

    export const createItem = async (method, body, token) => {
        //console.log(body)
        const response = await fetch(`${baseURL}/create`, {
            method: method,
            body: JSON.stringify(body),
            headers:{
                "Content-type": "application/json",
                'Authorization': token
            }
        })
        const data = response.json()
        return data
    }

    export const editItem = async (body, id, token) =>{
        const response = await fetch(`${baseURL}/edit/${id}`,{
            method: 'PUT',
            body: JSON.stringify(body),
            headers:{
                "Content-type": "application/json",
                'Authorization': token
            }
        })
        const data = await response.json()
        return data
    }

    export const deleteItem = async (body,id, token) =>{
        const response = await fetch(`${baseURL}/delete/${id}`,{
            method: 'delete',
            body: JSON.stringify(body),
            headers:{
                "Content-type": "application/json",
                'Authorization': token
            }
        })
        const data = await response.json()
        return data
    }





    export const getOneItem = async (id) =>{
        const response = await fetch(`${baseURL}/${id}`)
        const data = await response.json()
        return data
    }


    export const getBySearch = async (keyword) =>{
        try{
        const response = await fetch(`${baseURL}/search/${keyword}`, {
        method: 'GET'
    })
        const data = response.json()

        return data
        } catch(err){
            toast("Error: " + err)
            return
        }
    }