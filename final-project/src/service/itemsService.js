const baseURL = "http://localhost:3030/items"



export const getAllItems = async () => {
    const response = await fetch(baseURL);
    const result = await response.json()
    return result
}

export const createItem = async (method, body) => {
    //console.log(body)
    const response = await fetch(`${baseURL}/create`, {
        method: method,
        body: JSON.stringify(body),
        headers:{
            "Content-type": "application/json"
        }
    })
    const data = response.json()
    return data
}

export const getOneItem = async (id) =>{
    const response = await fetch(`${baseURL}/${id}`)
    const data = await response.json()
    return data
}