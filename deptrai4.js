function sum() {
    let a = +document.getElementById('Amount').value;
    let b = +document.getElementById('from curreny').value;
    let c = +document.getElementById('To Currency').value;
     let averege = (a*b)/c;
        document.getElementById('average').innerHTML=""+averege
}