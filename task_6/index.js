const input = document.getElementById("input")
let url = `http://api.tvmaze.com/search/shows/?q=`

function getter(){
    url = `http://api.tvmaze.com/search/shows/?q=${input.value}`
    sendRequest('GET', url)
}

function sendRequest(method, url){
    const headers = {}
    document.getElementById("wrapper").innerHTML = ''

    return fetch(url, {
        method: method,
        headers: headers,
    })
    .then(response =>{ 
        if(response.ok){
            return response.json()
        }
        return response.then(error =>{
        const e = new Error(`Error is ${error}`)
        throw e
        })
       
    }).then(response => {
            if(response.length < 1){
                alert("Nothing was founded!")
            }
            else{
                response.forEach(film => {

                    const div = document.createElement("div")
                    const a = document.createElement("a")
                    const img = document.createElement("img")
                    const p = document.createElement("p")

                    p.innerHTML = `<strong>Name</strong>: ${film.show.name}</br>
                    <strong>Language:</strong>  ${film.show.language}</br>
                    <strong>Premiered:</strong>  ${film.show.premiered}</br>
                    <strong>Status:</strong>  ${film.show.status}</br>
                    <strong>Geners:</strong>  ${film.show.genres.toString()}</br>`
                   
                    div.className = "inside"

                    img.src = film.show.image.medium  
                    a.href = film.show.officialSite
                    a.target = "_blank"

                    document.getElementById("wrapper").appendChild(div)
                    div.appendChild(a)
                    a.appendChild(img)
                    div.appendChild(p)
                    
                })
            }
       })
            
}

