//const baseURL = "http://localhost:3030/comments"

const baseURL =  process.env.NODE_ENV === 'development' ?
"http://localhost:3030/comments"
: "https://teachnigo.onrender.com/comments"

export const postComment = async (body, id, token) =>{
    const response = await fetch(`${baseURL}/${id}`,{
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            "Content-type": "application/json",
            'Authorization': `${token}`
        }
    })
    const data = await response.json()
    return data
}


export const getOneComment = async (id) => {
    const response = await fetch(`${baseURL}/${id}`)
    const data = await response.json()
    return data
}

export const editComment = async (body, id, token) =>{
    const response = await fetch(`${baseURL}/edit/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers:{
            "Content-type": "application/json",
            'Authorization': token
        }
    })
    const data = response.json()
    return data
}

export const deleteComment = async (id, token) =>{
    const response = await fetch(`${baseURL}/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': token
        }
    })
    const data = response.json()
    return data
}