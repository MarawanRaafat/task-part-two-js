


function getValue() {

    const value = document.querySelector(".numer-input").value


    const numResult  = document.querySelector("h3")
    numResult.textContent = value

    

    if (value >= 90) {
        numResult.textContent = ("A")
    } else {
        if (value >= 80) {
            numResult.textContent = ("B")
        } else {
            if (value >= 70) {
                numResult.textContent = ("C")
            } else {
                if (value >= 60) {
                    numResult.textContent = ("D")
                } else {
                    if (value >= 50) {
                        numResult.textContent = ("E")
                    } else {
                        numResult.textContent = ("F")
                    }
                }
            }
        }
    }

   
    
}


document.querySelector("button").onclick = getValue