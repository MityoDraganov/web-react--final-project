const baseURL = "http://localhost:3030/comments"

export const postComment = async (body, id) =>{
    const response = await fetch(`${baseURL}/${id}`,{
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            "Content-type": "application/json"
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

export const editComment = async (body, id) =>{
    const response = await fetch(`${baseURL}/edit/${id}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers:{
            "Content-type": "application/json"
        }
    })
    const data = response.json()
    return data
}

export const deleteComment = async (id) =>{
    const response = await fetch(`${baseURL}/delete/${id}`, {
        method: "DELETE",
    })
    const data = response.json()
    return data
}