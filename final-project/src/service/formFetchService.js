const baseUrl = 'http://localhost:3005/api'

export const userHandler = async (method, body) =>{
    const response = await fetch(`${baseUrl}/users`,{
        method: method,
        body: JSON.stringify(body),
        headers:{
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()
    return data;
}