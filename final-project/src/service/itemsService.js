const baseURL = "http://localhost:3030/items"



export const getAllItems = () => {

}

export const createItem = async (method, body) => {
    console.log(body)
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