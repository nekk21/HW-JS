const IMAGE_API_URL = 'https://picsum.photos/200/300'
const imageElement = document.getElementById('image')

// 1. Реализовать упрощенный вариант функции fetch() используя Promise + XHR (XMLHttpRequest), в response должны быть минимум реализованы методы json() и blob()

function myFetch(method, url){
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        
        xhr.responseType = "blob"
    
        xhr.onload = () => {
            if (xhr.status >= 400) 
                reject (new Error(`Error ${xhr.status}: ${xhr.statusText}`)) 

            else{
               const response = {

                    data : xhr.response,

                    json(){
                        return new Promise((resolve, reject)=>{
                            
                            const read = new FileReader()

                            read.onload = () => {
                                resolve(JSON.parse(read.result));
                            }

                            read.readAsText(this.data)
                        })
                    },

                    blob(){

                        return Promise.resolve(this.data)
                       
                    }
                }
            
                resolve(response)
            }
                    
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send()
    })
}


// 2. Загрузить изображение, преобразовать его в Blob и используя FileReader преобразовать в формат DataUrl,
// далее используя функцию insertImage вставить DataUrl в тег img (добавить обработку ошибок)

    myFetch('GET', IMAGE_API_URL)
    .then(response => response.blob())
    .then(blob => {
      const read = new FileReader()

      read.onload = () => {
        insertImage(read.result)
      }

      read.readAsDataURL(blob)

      return blob
      
    }).catch(e => {
      console.log((`Error is error ${e}`))
    })

 


function insertImage(src){
    imageElement.src = src
}

