function sum(){
    let test   = + document.getElementById('test').value;
    let test2   = + document.getElementById('test2').value;
    let  test3 =+ document.getElementById('test3').value;
    averge = (test+test2+test3)/3;

    if ( averge<=4) {
        document.getElementById('averge').innerHTML="kem";
    }
    else if  (averge<=7){
        document.getElementById('averge').innerHTML="trung binh";
    }

    else if (averge<=9){
        document.getElementById('averge').innerHTML="kha";}
    else{
        document.getElementById('averge').innerHTML="gioi";}
}