const baseUrl = 'http://localhost:3030/users'

    async function userCreate(method, body){
    const response = await fetch(`${baseUrl}/registers`,{
        
        method: method,
        body: JSON.stringify(body),
        headers:{
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()
    return data;
}

export {userCreate}    