const baseUrl = 'http://localhost:3030/users'

export const userHandler = async (method, body) =>{
    const response = await fetch(baseUrl,{
        mode: 'no-cors',
        method: method,
        body: JSON.stringify(body),
        headers:{
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()
    return data;
}