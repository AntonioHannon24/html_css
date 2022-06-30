let time = 2000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img"),                    
    max = images.length;

    currentTextIndex = 0,
    text = document
                .querySelectorAll("#slider h2"),                    
    max = text.length;





function nextImage() {
    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function nextText() {
    text[currentTextIndex]
        .classList.remove("selected")

    currentTextIndex++

    if(currentTextIndex >= max)
        currentTextIndex = 0

    text[currentTextIndex]
        .classList.add("selected")
}







function start() {
    setInterval(() => {
        // troca de image
        nextImage()
        nextText()
        
    }, time)
}
window.addEventListener("load", start)



