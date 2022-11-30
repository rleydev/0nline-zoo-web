const burgerImage = document.getElementById('burger-image')
const burgerContainer = document.getElementById('burger-container')
const mediaQuery = window.matchMedia('(max-width: 640px)')
const headerElement = document.getElementById('header')
const burgerBackground = document.getElementById('burger-background')
const exitButton = document.getElementById('exit-burger-button')

window.addEventListener('DOMContentLoaded', e => {

    if (mediaQuery.matches) {

        burgerImage.addEventListener("click", e => {

            e.preventDefault()

            console.dir('clicked')

            headerElement.style.position = 'static'

            burgerContainer.style.position = 'fixed'
            burgerContainer.style.display = 'flex'
            burgerContainer.style.zIndex = '43'

            burgerBackground.style.position = 'fixed'
            burgerBackground.style.display = 'flex'
            burgerBackground.style.zIndex = '55'
            burgerBackground.style.background = 'rgba(57, 57, 57, 0.8)'

        })

        burgerBackground.addEventListener("click", e => {

            e.preventDefault()

            console.dir('background clicked')

            burgerBackground.style.position = 'static'
            burgerBackground.style.display = 'none'

            burgerContainer.style.position = 'static'
            burgerContainer.style.display = 'none'

            headerElement.style.position = 'fixed'
           
        })

        exitButton.addEventListener('click', e => {

            e.preventDefault()

            console.dir('exit header button clicked')

            burgerBackground.style.position = 'static'
            burgerBackground.style.display = 'none'

            burgerContainer.style.position = 'static'
            burgerContainer.style.display = 'none'

            headerElement.style.position = 'fixed'
        })
    }
    
})