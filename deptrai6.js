function sum() {
    let R = +document.getElementById('R').value;
    let Pi = Math.PI
     let S = Math.pow(R,2)*Pi;
    document.getElementById('S').innerHTML="Dien tich"+S
    let C = (2*R)*Pi;
    document.getElementById('C').innerHTML="Chu vi "+C

}