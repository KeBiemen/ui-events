/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...
let frontendLink = document.querySelector('a[href="#frontend"]')

// Stap 2: addEventListener
// scaleLink.addEventListener...


frontendLink.addEventListener('click', scaleHandler)


// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...

function scaleHandler () {
frontendLink.classList.toggle('scale') }
frontendLink.addEventListener('animationend', scaleHandler)



let andLink = document.querySelector('a[href="#and"]')

andLink.addEventListener('click', translateHandler)

function translateHandler () {
andLink.classList.toggle('translate') }

andLink.addEventListener('animationend', translateHandler)


let developmentLink = document.querySelector('a[href="#development"]')

developmentLink.addEventListener("dblclick", shakeHandler)

function shakeHandler (){
  developmentLink.classList.toggle('shake') 
}
developmentLink.addEventListener('animationend', shakeHandler)


let sprintLink = document.querySelector('a[href="#sprint-5"]')

sprintLink.addEventListener("focus", colorHandler )

function colorHandler (){
sprintLink.classList.toggle('kleur') 

}

sprintLink.addEventListener('animationend', colorHandler)


let fixLink = document.querySelector('a[href="#fix"]')

// Stap 2: addEventListener
fixLink.addEventListener("mouseover", fixEnterHandler)
fixLink.addEventListener("mouseleave", fixLeaveHandler)

// Stap 3: classList (.toggle(), .add(), etc.)
function fixEnterHandler() {
  fixLink.innerText = "Break"
}

function fixLeaveHandler() {
  fixLink.innerText = "Fix"
}



let theLink = document.querySelector('a[href="#the"]')

theLink.addEventListener("mouseout", rotatehandler)

function rotatehandler () {
theLink.classList.toggle('rotate') }

theLink.addEventListener('animationend', rotatehandler)