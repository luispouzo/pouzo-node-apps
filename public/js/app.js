console.log('Client side javascript file is loaded!');



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', e => {
    // previene que el browser refresque la pagina. Asi podemos disponer de los datos
    // sin que se borren del from
    e.preventDefault()

    const location = search.value

    message1.textContent = 'Loading...'
    message2.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then(data => {
            if (data.error) {
                message1.textContent = ''
                message2.textContent = data.error
            }
            else {
                message1.textContent = data.location
                message2.textContent = data.forecast
            }
        })
    })

    // console.log(location);
})