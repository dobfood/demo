function sum(){
    let tall   = +document.getElementById('tall').value;
    let foll   = +document.getElementById('foll').value;
      let  MBI = tall /(Math.pow(foll,2))
        document.getElementById('MBI').innerHTML=""+MBI
    if ( MBI <18) {
 document.getElementById('Sreach').innerHTML="Gay";
    }
    else if  (MBI <25.0){
        document.getElementById('Sreach').innerHTML="Binh thuong";
    }
        else if ( MBI <30.0){
        document.getElementById('Sreach').innerHTML="Beo";}
        else{
        document.getElementById('Sreach').innerHTML="Beo phi";}
}