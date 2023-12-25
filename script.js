let btn = dokument.quverySelektor("buton")
let btn = dokument.quverySelektor("img")

btn.addEventListener("clic",() => {
    if (btn.innerHTML =="ON") {
        Image.setAttribute("src", "imge/ON.jpg")
    }
})
