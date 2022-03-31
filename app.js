document.addEventListener("DOMContentLoaded", function () {
    const screen = document.querySelector("#screen")
    const spans = document.querySelectorAll(".buttons span")
    const spanArray = Array.from(spans)
    document.querySelectorAll(".operator")[1].innerText = "/"
    document.querySelectorAll(".operator")[2].innerText = "*"

    spanArray.map(button => button.addEventListener("click", function() {
        if(button.innerText !== "=") {
            screen.innerText += button.innerText
        }
        if(button.innerText === "="){
            screen.innerText = eval(screen.innerText)
        }
        if(button.innerText === "C"){
            screen.innerText = ""
        }
    }))
})

