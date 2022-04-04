let acceptingInput = true

const screen = document.querySelector("#screen")
const spans = document.querySelectorAll(".buttons span")
const calculatorButtons = Array.from(spans)

calculatorButtons.forEach(button => button.addEventListener("click", function () {
    if (button.textContent !== "=" && button.textContent !== "÷" && button.textContent !== "x" && acceptingInput) {
        screen.textContent += button.textContent
    } if (button.textContent == "÷" && acceptingInput) {
        screen.textContent += "/"
    } if (button.textContent == "x" && acceptingInput) {
        screen.textContent += "*"
    } if (button.textContent === "C" && acceptingInput) {
        screen.textContent = ""
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


