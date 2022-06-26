let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCount = 0
let guestCount = 0

homeScore.innerText = homeCount
guestScore.innerText = guestCount

function addOnePointHome() {
    homeCount += 1
    homeScore.innerText = homeCount
}

function addTwoPointsHome() {
    homeCount += 2
    homeScore.innerText = homeCount
}

function addThreePointsHome() {
    homeCount += 3
    homeScore.innerText = homeCount
}

function addOnePointGuest() {
    guestCount += 1
    guestScore.innerText = guestCount
}

function addTwoPointsGuest() {
    guestCount += 2
    guestScore.innerText = guestCount
}

function addThreePointsGuest() {
    guestCount += 3
    guestScore.innerText = guestCount
}

function reset() {
    homeCount = 0
    guestCount = 0
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}