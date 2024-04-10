


function getValue() {

    const value = document.querySelector(input).value
    const reslt = document.querySelector(h3)

    const degree = 
    if (value >= 90) {
        degree = ("A")
    } else {
        if (value >= 80) {
            degree = ("B")
        } else {
            if (value >= 70) {
                degree = ("C")
            } else {
                if (value >= 60) {
                    degree = ("D")
                } else {
                    if (value >= 50) {
                        degree = ("E")
                    } else {
                        degree = ("F")
                    }
                }
            }
        }
    }

   
    reslt.textContent = degree
}

document.querySelector("calculate").onclick = getValue()
