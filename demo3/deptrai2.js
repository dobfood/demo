/*function  check() {
    document.getElementById('string').value;
    let input = document.getElementById('string').value;
            if (input==="hello"){
                document.getElementById('output').innerHTML=("xin chao");
    }
            else if (input==="goodbye"){
                document.getElementById('output').innerHTML=("tamm biet");
            }
            else if (input==="end"){
                document.getElementById('output').innerHTML=("ket thuc")
            }
    else {
        alert('khong tim thay tu can tim ')
    }
*/
/*function check() {
    document.getElementById('string').value;
    let input = document.getElementById('string').value;
    let Eng = ['hello', 'goodbye', 'end'];
    let Vie = ['xin chao', 'tam biet', 'ket thuc'];

    if (Eng.indexOf(input) !== -1) {
        document.write(Vie[Eng.indexOf(input)]);
    } else {
        alert("xin loi em minh chia tay di ");
    }
}
*/
function check() {
    let Eng = ['book', 'cat', 'dog'];
    let Vie = ['sach', 'meo', 'cho'];
    let words = prompt("nhap tu dien");
    let index = -1;
    for (let i = 0; i < Eng.length; i++) {
        if (Eng[i] === words) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        console.log(`khong co trong tu dien ${words}`);
    } else {
        console.log(`nghia tieng viet :${Vie[index]}`);
    }
}