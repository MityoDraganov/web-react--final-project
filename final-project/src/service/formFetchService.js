const baseUrl = 'http://localhost:3030/users'

    async function userHandler(method, body){
    const response = await fetch(baseUrl,{
        
        method: method,
        body: JSON.stringify(body),
        headers:{
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()
    return data;
}

export {userHandler}    