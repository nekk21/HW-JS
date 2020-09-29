//import './index.css'

const url = `http://api.tvmaze.com/search/shows/`

window.onSubmit = onSubmit

function onSubmit(form) {
  sendRequest('GET', `${url}?q=${form[0].value}`)
}

function sendRequest(method, url) {
  document.getElementById('wrapper').innerHTML = ''

  return fetch(url, {
    method,
  })
    .then(response => response.json())
    .then(response => {
      if (response.length < 1) {
        alert('Nothing was found!')
      } else {
        response.forEach(film => {
          const div = document.createElement('div')
          const a = document.createElement('a')
          const img = document.createElement('img')
          const p = document.createElement('p')

          p.innerHTML = `<strong>Name</strong>: ${film.show.name}</br>
                    <strong>Language:</strong>  ${film.show.language}</br>
                    <strong>Premiered:</strong>  ${film.show.premiered}</br>
                    <strong>Status:</strong>  ${film.show.status}</br>
                    <strong>Geners:</strong>  ${film.show.genres.toString()}</br>`

          div.className = 'inside'

          img.src = film.show.image.medium
          a.href = film.show.url
          a.target = '_blank'

          document.getElementById('wrapper').appendChild(div)
          div.appendChild(a)
          a.appendChild(img)
          div.appendChild(p)
        })
      }
    })
    .catch(error => console.error(error))
}
