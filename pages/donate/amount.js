const amountInput = document.getElementById('amount-number-input')

const fiveThousandSeceletionImage = document.getElementById('5000-selection-image')
const fiveThousandSeceletionArea = document.getElementById('5000-selection')

const twoThousandSeceletionImage = document.getElementById('2000-selection-image')
const twoThousandSeceletionArea = document.getElementById('2000-selection')

const oneThousandSeceletionImage = document.getElementById('1000-selection-image')
const oneThousandSeceletionArea = document.getElementById('1000-selection')

const fiveHundreedSeceletionImage = document.getElementById('500-selection-image')
const fiveHundreedSeceletionArea = document.getElementById('500-selection')

const twoHundreedFiftySeceletionImage = document.getElementById('250-selection-image')
const twoHundreedFiftySeceletionArea = document.getElementById('250-selection')

const oneHundreedSeceletionImage = document.getElementById('100-selection-image')
const oneHundreedSeceletionArea = document.getElementById('100-selection')

const fiftySeceletionImage = document.getElementById('50-selection-image')
const fiftySeceletionArea = document.getElementById('50-selection')

const twentyFiveSeceletionImage = document.getElementById('25-selection-image')
const twentyFiveSeceletionArea = document.getElementById('25-selection')

const fiveThousandDollarSign = document.getElementById('5000-dollar-sign')
const fiveThousandDollarText = document.getElementById('5000-dollar-text')

const twoThousandDollarSign = document.getElementById('2000-dollar-sign')
const twoThousandDollarText = document.getElementById('2000-dollar-text')

const oneThousandDollarSign = document.getElementById('1000-dollar-sign')
const oneThousandDollarText = document.getElementById('1000-dollar-text')

const fiveHundreedDollarSign = document.getElementById('500-dollar-sign')
const fiveHundreedDollarText = document.getElementById('500-dollar-text')

const twoHundreedFiftyDollarSign = document.getElementById('250-dollar-sign')
const twoHundreedFiftyDollarText = document.getElementById('250-dollar-text')

const oneHundreedDollarSign = document.getElementById('100-dollar-sign')
const oneHundreedDollarText = document.getElementById('100-dollar-text')

const fiftyDollarSign = document.getElementById('50-dollar-sign')
const fiftyDollarText = document.getElementById('50-dollar-text')

const twentyFiveDollarSign = document.getElementById('25-dollar-sign')
const twentyFiveDollarText = document.getElementById('25-dollar-text')

const selectedDollarImageSource = '../../assets/icons/dollar_sign_selected.svg'
const defaultDollarImageSource = '../../assets/icons/dollar_sign.svg'

const selectedDollarTextColor = 'rgba(254, 144, 19, 1)'
const defaultDollarTextColor = 'rgba(51, 59, 65, 1)'

const maxWidth1600 = window.matchMedia('(max-width: 1600px)')
const width1000to1600 = window.matchMedia('(min-width: 1001px) and (max-width: 1599px)')
const maxWidth1000 = window.matchMedia('(max-width: 1000px)')
const width640to1000 = window.matchMedia('(min-width: 641px) and (max-width: 999px)')
const maxWidth640 = window.matchMedia('(max-width: 640px)')
const width320to640 = window.matchMedia('(min-width: 321px) and (max-width: 639px)')
const maxWidth320 = window.matchMedia('(max-width: 320px)')

window.addEventListener('DOMContentLoaded', e => {

    if (maxWidth1600 || width1000to1600 || maxWidth1000 || width640to1000 || maxWidth640 || width320to640 || maxWidth320) {
    fiveThousandSeceletionImage.style.display = 'none'
    twoThousandSeceletionImage.style.display = 'none'
    oneThousandSeceletionImage.style.display = 'none'
    fiveHundreedSeceletionImage.style.display = 'none'
    twoHundreedFiftySeceletionImage.style.display = 'none'
    fiftySeceletionImage.style.display = 'none'
    twentyFiveSeceletionImage.style.display = 'none'


    oneThousandDollarText.style.color = defaultDollarTextColor
    oneHundreedDollarText.style.color = selectedDollarTextColor
    fiveHundreedDollarSign.src = defaultDollarImageSource
    amountInput.value = 100

    }

    

    fiveThousandSeceletionArea.addEventListener('click', e => {

        e.preventDefault()

        fiveThousandSeceletionImage.style.display = 'block'
        fiveThousandDollarText.style.color = selectedDollarTextColor
        fiveThousandDollarSign.src = selectedDollarImageSource

        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        amountInput.value = 5000

    })

    twoThousandSeceletionArea.addEventListener('click', e => {

        e.preventDefault()

        twoThousandSeceletionImage.style.display = 'block'
        twoThousandDollarText.style.color = selectedDollarTextColor
        twoThousandDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        amountInput.value = 2000

    })

    oneThousandSeceletionArea.addEventListener('click', e => {
        e.preventDefault()

        oneThousandSeceletionImage.style.display = 'block'
        oneThousandDollarText.style.color = selectedDollarTextColor
        oneThousandDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        amountInput.value = 1000
    })

    fiveHundreedSeceletionArea.addEventListener('click', e => {
        e.preventDefault()

        fiveHundreedSeceletionImage.style.display = 'block'
        fiveHundreedDollarText.style.color = selectedDollarTextColor
        fiveHundreedDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        amountInput.value = 500

    })

    twoHundreedFiftySeceletionArea.addEventListener('click', e => {

        e.preventDefault()

        twoHundreedFiftySeceletionImage.style.display = 'block'
        twoHundreedFiftyDollarText.style.color = selectedDollarTextColor
        twoHundreedFiftyDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        amountInput.value = 250
    })

    oneHundreedSeceletionArea.addEventListener('click', e => {
        e.preventDefault()

        oneHundreedSeceletionImage.style.display = 'block'
        oneHundreedDollarText.style.color = selectedDollarTextColor
        oneHundreedDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        amountInput.value = 100
    })

    fiftySeceletionArea.addEventListener('click', e => {
        e.preventDefault()

        fiftySeceletionImage.style.display = 'block'
        fiftyDollarText.style.color = selectedDollarTextColor
        fiftyDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        amountInput.value = 50
    })

    twentyFiveSeceletionArea.addEventListener('click', e => {
        e.preventDefault()

        twentyFiveSeceletionImage.style.display = 'block'
        twentyFiveDollarText.style.color = selectedDollarTextColor
        twentyFiveDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor

        amountInput.value = 25
    })


    amountInput.addEventListener('input', function() {
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)


        if (this.value == 5000) {

        fiveThousandSeceletionImage.style.display = 'block'
        fiveThousandDollarText.style.color = selectedDollarTextColor
        fiveThousandDollarSign.src = selectedDollarImageSource

        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        } else if (this.value == 2000) {

        twoThousandSeceletionImage.style.display = 'block'
        twoThousandDollarText.style.color = selectedDollarTextColor
        twoThousandDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        } else if (this.value == 1000) {

        oneThousandSeceletionImage.style.display = 'block'
        oneThousandDollarText.style.color = selectedDollarTextColor
        oneThousandDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        } else if (this.value == 500) {

        fiveHundreedSeceletionImage.style.display = 'block'
        fiveHundreedDollarText.style.color = selectedDollarTextColor
        fiveHundreedDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        } else if (this.value == 250) {

        twoHundreedFiftySeceletionImage.style.display = 'block'
        twoHundreedFiftyDollarText.style.color = selectedDollarTextColor
        twoHundreedFiftyDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        } else if (this.value == 100) {

        oneHundreedSeceletionImage.style.display = 'block'
        oneHundreedDollarText.style.color = selectedDollarTextColor
        oneHundreedDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        fiftySeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        fiftyDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        fiftyDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        } else if (this.value == 50) {
            fiftySeceletionImage.style.display = 'block'
        fiftyDollarText.style.color = selectedDollarTextColor
        fiftyDollarSign.src = selectedDollarImageSource

        fiveThousandSeceletionImage.style.display = 'none'
        twoThousandSeceletionImage.style.display = 'none'
        oneThousandSeceletionImage.style.display = 'none'
        fiveHundreedSeceletionImage.style.display = 'none'
        twoHundreedFiftySeceletionImage.style.display = 'none'
        oneHundreedSeceletionImage.style.display = 'none'
        twentyFiveSeceletionImage.style.display = 'none'
        
        fiveThousandDollarSign.src = defaultDollarImageSource
        twoThousandDollarSign.src = defaultDollarImageSource
        oneThousandDollarSign.src = defaultDollarImageSource
        fiveHundreedDollarSign.src = defaultDollarImageSource
        twoHundreedFiftyDollarSign.src = defaultDollarImageSource
        oneHundreedDollarSign.src = defaultDollarImageSource
        twentyFiveDollarSign.src = defaultDollarImageSource

        fiveThousandDollarText.style.color = defaultDollarTextColor
        twoThousandDollarText.style.color = defaultDollarTextColor
        oneThousandDollarText.style.color = defaultDollarTextColor
        fiveHundreedDollarText.style.color = defaultDollarTextColor
        twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
        oneHundreedDollarText.style.color = defaultDollarTextColor
        twentyFiveDollarText.style.color = defaultDollarTextColor

        } else if (this.value == 25) {
            twentyFiveSeceletionImage.style.display = 'block'
            twentyFiveDollarText.style.color = selectedDollarTextColor
            twentyFiveDollarSign.src = selectedDollarImageSource
    
            fiveThousandSeceletionImage.style.display = 'none'
            twoThousandSeceletionImage.style.display = 'none'
            oneThousandSeceletionImage.style.display = 'none'
            fiveHundreedSeceletionImage.style.display = 'none'
            twoHundreedFiftySeceletionImage.style.display = 'none'
            oneHundreedSeceletionImage.style.display = 'none'
            fiftySeceletionImage.style.display = 'none'
            
            fiveThousandDollarSign.src = defaultDollarImageSource
            twoThousandDollarSign.src = defaultDollarImageSource
            oneThousandDollarSign.src = defaultDollarImageSource
            fiveHundreedDollarSign.src = defaultDollarImageSource
            twoHundreedFiftyDollarSign.src = defaultDollarImageSource
            oneHundreedDollarSign.src = defaultDollarImageSource
            fiftyDollarSign.src = defaultDollarImageSource
    
            fiveThousandDollarText.style.color = defaultDollarTextColor
            twoThousandDollarText.style.color = defaultDollarTextColor
            oneThousandDollarText.style.color = defaultDollarTextColor
            fiveHundreedDollarText.style.color = defaultDollarTextColor
            twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
            oneHundreedDollarText.style.color = defaultDollarTextColor
            fiftyDollarText.style.color = defaultDollarTextColor
    
        } else {
            twentyFiveSeceletionImage.style.display = 'none'
            twentyFiveDollarText.style.color = defaultDollarTextColor
            twentyFiveDollarSign.src = defaultDollarImageSource
    
            fiveThousandSeceletionImage.style.display = 'none'
            twoThousandSeceletionImage.style.display = 'none'
            oneThousandSeceletionImage.style.display = 'none'
            fiveHundreedSeceletionImage.style.display = 'none'
            twoHundreedFiftySeceletionImage.style.display = 'none'
            oneHundreedSeceletionImage.style.display = 'none'
            fiftySeceletionImage.style.display = 'none'
            
            fiveThousandDollarSign.src = defaultDollarImageSource
            twoThousandDollarSign.src = defaultDollarImageSource
            oneThousandDollarSign.src = defaultDollarImageSource
            fiveHundreedDollarSign.src = defaultDollarImageSource
            twoHundreedFiftyDollarSign.src = defaultDollarImageSource
            oneHundreedDollarSign.src = defaultDollarImageSource
            fiftyDollarSign.src = defaultDollarImageSource
    
            fiveThousandDollarText.style.color = defaultDollarTextColor
            twoThousandDollarText.style.color = defaultDollarTextColor
            oneThousandDollarText.style.color = defaultDollarTextColor
            fiveHundreedDollarText.style.color = defaultDollarTextColor
            twoHundreedFiftyDollarText.style.color = defaultDollarTextColor
            oneHundreedDollarText.style.color = defaultDollarTextColor
            fiftyDollarText.style.color = defaultDollarTextColor
        }
    })


    
})