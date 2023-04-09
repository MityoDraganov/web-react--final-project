

    //const baseUrl = 'http://localhost:3030/users'

    const baseUrl =  process.env.NODE_ENV === 'development' ?
    "http://localhost:3030/users"
    : "https://teachnigo.onrender.com/users"

    async function userCreate(body){
    const response = await fetch(`${baseUrl}/register`,{
        
        method: "POST",
        body: JSON.stringify(body),
        headers:{
            'Content-type': 'application/json'
        }
    })
    const data = await response.json()
    return data;
}

    async function userLogin(body){
        const response = await fetch(`${baseUrl}/login`,{
            method: "POST",
            body: JSON.stringify(body),
            headers:{
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    }

export {userCreate, userLogin}    