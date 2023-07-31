class HttpClient{
    async get(url){
        const response = await fetch(url)
        return await response.json()
    }

    async getById(url,id){
        const response = await fetch(`${url}/${id}`)
        return await response.json()
    }

    async post(url,data){
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        return await response.json()
    }
    async put(url,data){
        const response = await fetch(`${url}/${data.productId}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        return await response.json()
    }
}

export default new HttpClient()

//export default  HttpClient