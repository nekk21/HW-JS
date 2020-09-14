url = 'http://api.tvmaze.com/search/shows/?q='

 
function sendRequest(method, url){
    const headers = {}

    return fetch(url, {
        method: method,
        headers: headers,

    }).then(response =>{ 
        if(response.ok){
            return response
        }
        return response.json()
        .then(error =>{
            const e = new Error(`Error is ${error}`)
            throw e
        })
       
    })
}

sendRequest('GET', url)