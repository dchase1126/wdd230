function displayMenu() {
    const displayState = document.getElementById("hamburgerMenu").style.display
    if (displayState == "none") {

        document.getElementById("hamburgerMenu").style.display = "block"
    } else {
        document.getElementById("hamburgerMenu").style.display = "none"
    }
}
