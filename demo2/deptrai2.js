let listBtn = document.getElementsByClassName("btn");

for (let i = 0; i < listBtn.length; i++) {
    listBtn[i].onclick = function () {
        if (listBtn[i].classList.contains("active")) {
            listBtn[i].classList.remove("active")
            for (let j = 0; j < listBtn.length; j++) {
                if (j === i) {
                    continue
                }
                if (!listBtn[j].classList.contains("active")) {
                    listBtn[j].classList.add("")
                    break
                }
            }
        } else {
            listBtn[i].classList.add("active")
            for (let j = 0; j < listBtn.length; j++) {
                if (j === i) continue
                if (listBtn[j].classList.contains("active")) {
                    listBtn[j].classList.remove("active")
                    break
                }
            }
        }
    }
}