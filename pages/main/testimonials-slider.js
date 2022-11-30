const slider = document.getElementById('review-slider')
const reviewContainer = document.getElementById('customer-feedback-container')

const mediaQuery1600px = window.matchMedia('(max-width: 1600px)')
const mediaQuery1000px = window.matchMedia('(max-width: 1000px)')
const mediaQuery640px = window.matchMedia('(max-width: 640px)')
const mediaQuery320px = window.matchMedia('(max-width: 320px)')
const mediaQuery320px640px = window.matchMedia('(min-width: 321px) and (max-width: 639px)')
const mediaQuery1000px1600px = window.matchMedia('(min-width: 1001px) and (max-width: 1599px)')

const michaelReviewArea = document.getElementById('michael-popup-review-area')
const oskarReviewArea = document.getElementById('oskar-popup-review-area')
const frederikaReviewArea = document.getElementById('frederika-popup-review-area')

const firstReview = document.getElementById('michael-review')
const secondReview = document.getElementById('oskar-review')
const thirdReview = document.getElementById('frederika-review')

const michealPopUpReview = document.getElementById('michael-popup-review')
const oskarPopUpReview = document.getElementById('oskar-popup-review')
const frederikaPopUpReview = document.getElementById('frederika-popup-review')

const exitButtonReviewMich = document.getElementById('exit-icon-review-mich')
const exitButtonReviewOsk = document.getElementById('exit-icon-review-osk')
const exitButtonReviewFred = document.getElementById('exit-icon-review-fred')

const michaelContainer = document.getElementById('michael-container')
const oskarContainer = document.getElementById('oskar-container')
const frederikaContainer = document.getElementById('frederika-container')

const popUpBackground = document.getElementById('popup-background')

const fourthReview = document.getElementById('mila-review')
const fifthReview = document.getElementById('alex-review')
const sixthReview = document.getElementById('ann-review')
const seventhReview = document.getElementById('matt-review')
const eighthReview = document.getElementById('unknown-review')
const ninethReview = document.getElementById('sam-review')
const tenthReview = document.getElementById('kamila-review')
const eleventhReview = document.getElementById('ken-review')

window.addEventListener('DOMContentLoaded', e => {

    slider.oninput = function() {
        
        console.dir(this.value)
        
        let total = reviewContainer.scrollWidth - reviewContainer.offsetWidth;

        let percentage = total * (this.value / 7)

        reviewContainer.scrollLeft = percentage

        if (mediaQuery1600px.matches) {


            if (this.value == 0) {
                firstReview.classList.add('feedback-active')
                fourthReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    firstReview.classList.remove('feedback-active')
                    fourthReview.classList.remove('feedback-active')
                }, 1000)
            }

            if (this.value == 1) {

                secondReview.classList.add('feedback-active')
                fifthReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    secondReview.classList.remove('feedback-active')
                    fifthReview.classList.remove('feedback-active')
                }, 1000)
                
            }
            if (this.value == 2) {
                
                thirdReview.classList.add('feedback-active')
                sixthReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    thirdReview.classList.remove('feedback-active')
                    sixthReview.classList.remove('feedback-active')
                }, 1000)
            }
            if (this.value == 3) {
                
                fourthReview.classList.add('feedback-active')
                seventhReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    fourthReview.classList.remove('feedback-active')
                    seventhReview.classList.remove('feedback-active')
                }, 1000)
            }

            if (this.value == 4) {
                
                fifthReview.classList.add('feedback-active')
                eighthReview.classList.add('feedback-active')


                window.setTimeout(function() {
                    fifthReview.classList.remove('feedback-active')
                eighthReview.classList.remove('feedback-active')
                }, 1000)
            }
            if (this.value == 5) {
                
                sixthReview.classList.add('feedback-active')
                ninethReview.classList.add('feedback-active')


                window.setTimeout(function() {
                    sixthReview.classList.remove('feedback-active')
                    ninethReview.classList.remove('feedback-active')
                }, 1000)
            }

            if (this.value == 6) {
                
                seventhReview.classList.add('feedback-active')
                tenthReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    seventhReview.classList.remove('feedback-active')
                    tenthReview.classList.remove('feedback-active')
                }, 1000)
            }

            if (this.value == 7) {
                
                eighthReview.classList.add('feedback-active')
                eleventhReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    eighthReview.classList.remove('feedback-active')
                    eleventhReview.classList.remove('feedback-active')
                }, 1000)
            }
        }
        
        if (mediaQuery1000px.matches || mediaQuery1000px1600px.matches) {
            if (this.value == 0) {

                secondReview.classList.remove('feedback-active')
                fourthReview.classList.remove('feedback-active')

                firstReview.classList.add('feedback-active')
                thirdReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    firstReview.classList.remove('feedback-active')
                    thirdReview.classList.remove('feedback-active')
                }, 1000)
            }

            if (this.value == 1) {
                firstReview.classList.remove('feedback-active')
                thirdReview.classList.remove('feedback-active')

                thirdReview.classList.remove('feedback-active')
                sixthReview.classList.remove('feedback-active')

                secondReview.classList.add('feedback-active')
                fourthReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    secondReview.classList.remove('feedback-active')
                    fourthReview.classList.remove('feedback-active')
                }, 1000)
            }
            if (this.value == 2) {

                secondReview.classList.remove('feedback-active')
                fourthReview.classList.remove('feedback-active')


                fifthReview.classList.remove('feedback-active')
                seventhReview.classList.remove('feedback-active')


                thirdReview.classList.add('feedback-active')
                sixthReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    thirdReview.classList.remove('feedback-active')
                    sixthReview.classList.remove('feedback-active')
                }, 1000)
            }
            if (this.value == 3) {

                thirdReview.classList.remove('feedback-active')
                sixthReview.classList.remove('feedback-active')


                sixthReview.classList.remove('feedback-active')
                eighthReview.classList.remove('feedback-active')

                fifthReview.classList.add('feedback-active')
                seventhReview.classList.add('feedback-active')


                window.setTimeout(function() {
                    fifthReview.classList.remove('feedback-active')
                    seventhReview.classList.remove('feedback-active')
                }, 1000)
            }
            if (this.value == 4) {

                fifthReview.classList.remove('feedback-active')
                seventhReview.classList.remove('feedback-active')


                seventhReview.classList.remove('feedback-active')
                ninethReview.classList.remove('feedback-active')

                sixthReview.classList.add('feedback-active')
                eighthReview.classList.add('feedback-active')


                window.setTimeout(function() {
                    sixthReview.classList.remove('feedback-active')
                    eighthReview.classList.remove('feedback-active')
                }, 1000)
            }
            if (this.value == 5) {

                sixthReview.classList.remove('feedback-active')
                eighthReview.classList.remove('feedback-active')

                eighthReview.classList.remove('feedback-active')
                tenthReview.classList.remove('feedback-active')

                seventhReview.classList.add('feedback-active')
                ninethReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    seventhReview.classList.remove('feedback-active')
                    ninethReview.classList.remove('feedback-active')
                }, 1000)
            }

            if (this.value == 6) {
                seventhReview.classList.remove('feedback-active')
                ninethReview.classList.remove('feedback-active')

                ninethReview.classList.remove('feedback-active')
                eleventhReview.classList.remove('feedback-active')

                eighthReview.classList.add('feedback-active')
                tenthReview.classList.add('feedback-active')

               

                window.setTimeout(function() {
                    eighthReview.classList.remove('feedback-active')
                    tenthReview.classList.remove('feedback-active')
                }, 1000)
            }

            if (this.value == 7) {

                eighthReview.classList.remove('feedback-active')
                tenthReview.classList.remove('feedback-active')

                ninethReview.classList.add('feedback-active')
                eleventhReview.classList.add('feedback-active')

                window.setTimeout(function() {
                    ninethReview.classList.remove('feedback-active')
                    eleventhReview.classList.remove('feedback-active')
                }, 1000)
            }
        }

    }

    if (mediaQuery640px.matches) {

        michaelContainer.addEventListener('click', e => {

            e.preventDefault()
            console.dir('first review clicked')
            popUpBackground.style.display = 'flex'
            popUpBackground.style.alignItems = 'center'
            popUpBackground.style.justifyContent = 'center'

            oskarReviewArea.style.display = 'none'
            frederikaReviewArea.style.display = 'none'
            michaelReviewArea.style.display = 'flex'
            michealPopUpReview.style.display = 'flex'

            michaelReviewArea.addEventListener('click', e => {
                e.stopPropagation()
            })

            exitButtonReviewFred.style.display = 'none'
            exitButtonReviewOsk.style.display = 'none'

        })


        oskarContainer.addEventListener('click', e => {
            e.preventDefault()

            console.dir('second review clicked')
            popUpBackground.style.display = 'flex'

            popUpBackground.style.alignItems = 'center'
            popUpBackground.style.justifyContent = 'center'
            michaelReviewArea.style.display = 'none'
            frederikaReviewArea.style.display = 'none'
            oskarPopUpReview.style.display = 'flex'
            oskarReviewArea.style.display = 'flex'


            oskarReviewArea.addEventListener('click', e => {
                e.stopPropagation()
            })

            exitButtonReviewFred.style.display = 'none'
            exitButtonReviewMich.style.display = 'none'
        })

        frederikaContainer.addEventListener('click', e => {

            e.preventDefault()

            console.dir('third review clicked')

            popUpBackground.style.display = 'flex'

            popUpBackground.style.alignItems = 'center'
            popUpBackground.style.justifyContent = 'center'
            michaelReviewArea.style.display = 'none'
            oskarReviewArea.style.display = 'none'
            frederikaReviewArea.style.display = 'flex'
            frederikaPopUpReview.style.display = 'flex'

            frederikaReviewArea.addEventListener('click', e => {
                e.stopPropagation()
            })

            exitButtonReviewOsk.style.display = 'none'
            exitButtonReviewMich.style.display = 'none'
        })

        popUpBackground.addEventListener('click', e => {

            e.preventDefault()
            popUpBackground.style.display = 'none'
            michaelReviewArea.style.display = 'none'
            oskarReviewArea.style.display = 'none'
            frederikaReviewArea.style.display = 'none'

            exitButtonReviewOsk.style.display = 'block'
            exitButtonReviewFred.style.display = 'block'
            exitButtonReviewMich.style.display = 'block'
        })

        exitButtonReviewMich.addEventListener('click', e => {

            e.preventDefault()

            popUpBackground.style.display = 'none'
            michaelReviewArea.style.display = 'none'

            exitButtonReviewOsk.style.display = 'block'
            exitButtonReviewFred.style.display = 'block'
        })

        exitButtonReviewOsk.addEventListener('click', e => {
            e.preventDefault()
            popUpBackground.style.display = 'none'
            oskarReviewArea.style.display = 'none'

            exitButtonReviewMich.style.display = 'block'
            exitButtonReviewFred.style.display = 'block'
        })

        exitButtonReviewFred.addEventListener('click', e => {
            e.preventDefault()
            popUpBackground.style.display = 'none'
            frederikaReviewArea.style.display = 'none'

            exitButtonReviewOsk.style.display = 'block'
            exitButtonReviewMich.style.display = 'block'
        })

    }

    if (mediaQuery320px640px || mediaQuery320px) {
        
        michaelReviewArea.style.marginLeft = '0%'
        oskarReviewArea.style.marginLeft = '0%'
        frederikaReviewArea.style.marginLeft = '0%'
    }
})

