const form = document.querySelector('#form')
const input=  document.querySelector('#movie')

//modifies form action so that upon button press, can send parameters to the server 

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const movieTitle = input.value.trim()
    const formAction = `/ratings/searchMovie/${encodeURIComponent(movieTitle)}`
    form.action = formAction
    form.submit()
    console.log('completed')
} )