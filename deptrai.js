function sum() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                document.getElementById('result').innerHTML = "phuong trinh co vo so nghiem"
            } else {
                document.getElementById('result').innerHTML = "phuong trinh vo nghiem"
            }
        } else {
            document.getElementById('result').innerHTML = "Phuong trinh co nghiem" + (-b / 2 * c)
        }
    } else {
        let denta = Math.pow(b, 2) - (4 * a * c)

        if (denta > 0) {
            let x1 = (-b + Math.sqrt(denta)) / (2 * a);
            let x2 = (-b - Math.sqrt(denta)) / (2 * a);
            document.getElementById('result').innerHTML = "phuong trinh co nghiem thu nhat =" + x1 +
            "phuong trinh co nghiem thu hai" + x2
        } else if (denta === 0) {
            let x = -b / (2 * a);
            document.getElementById('result').innerHTML = "phuong trinh co nghiem kep x1=x2" + x
        } else {
            document.getElementById('result').innerHTML = "Phuong trinh vo nghiem"
        }
    }
}