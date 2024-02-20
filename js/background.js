const images = ["0.jpeg", "1.jpeg", "2.jpeg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]
const bgImage = document.createElement("img")
bgImage.src = `img/${chosenImage}`
bgImage.id = 'bgimg'

document.getElementById("bgbox").appendChild(bgImage)