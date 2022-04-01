let acceptingInput = true

const screen = document.querySelector("#screen")
const spans = document.querySelectorAll(".buttons span")
const calcButtons = Array.from(spans)
document.querySelectorAll(".operator")[1].textContent = "/"
document.querySelectorAll(".operator")[2].textContent = "*"

calcButtons.map(button => button.addEventListener("click", function () {
    if (button.textContent !== "=" && acceptingInput) {
        screen.textContent += button.textContent
    } if (button.textContent === "C" && acceptingInput) {
        screen.tectContent = ""
    }
    try {
        if (button.textContent === "=" && acceptingInput) {
            if (screen.textContent.includes("/0")) {
                screen.textContent = "Error, Resetting"
            }
            screen.textContent = eval(screen.textContent)
        }
    }
    catch (error) {
        screen.textContent = "Error, Resetting"
        acceptingInput = false
        setTimeout(function () {
            acceptingInput = true
            screen.textContent = ""
        }, 1500)
    }
}))


