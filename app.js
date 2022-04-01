document.addEventListener("DOMContentLoaded", function () {
    const screen = document.querySelector("#screen")
    const spans = document.querySelectorAll(".buttons span")
    const spanArray = Array.from(spans)
    document.querySelectorAll(".operator")[1].innerText = "/"
    document.querySelectorAll(".operator")[2].innerText = "*"

    spanArray.map(button => button.addEventListener("click", function () {
        if (button.innerText !== "=") {
            screen.innerText += button.innerText
        } if (button.innerText === "C") {
            screen.innerText = ""
        } 
        try {
            if (button.innerText === "=") {
                if (screen.innerText.includes("/0")){
                    screen.innerText = "Error, Press C"
                }
                screen.innerText = eval(screen.innerText)
            }
        }
        catch (error) {
            screen.innerText = "Error, Press C"
        }
        if (screen.innerText == "Error, Press C"){
            
        }
    }))
})

