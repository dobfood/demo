function sum() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    let tong = a + b +c;
    document.getElementById('tong').innerHTML=" Tong=" + tong
    let average = tong /3;
    document.getElementById('average').innerHTML="Trung binh=" +  average
}