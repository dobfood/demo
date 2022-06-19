function sum() {

    let tien = +document.getElementById('tien').value;
    let mun = +document.getElementById('mun').value;
    let lai=0;
    if (0 < tien && tien < 100000000) {
        lai = 5 / 100;
    } else if (100000000 <= tien && tien < 500000000) {
        lai = 10 / 100;
    } else if (500000000 <= tien && tien < 1000000000) {
        lai = 20 / 100;
    } else {
        lai = 25 / 100;
    }
    let a = 0;
    for (let i = 1; i <= mun; i++) {
        a = (tien * lai);
        tong = (tien + a);
        tien = tong;

    }
    document.getElementById('Lai').innerHTML = lai + "%"
    document.getElementById('tong').innerHTML = tong + "VND"

}

