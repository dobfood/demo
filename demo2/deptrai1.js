function sum() {
    let a = +document.getElementById('a').value;
    let  resaul;
    let level = 0;
    let  money ;
    if (a>0&&a<=50){
        tong = a*1600;
       resaul = "ban  dang o bac 1 :<br>" + "So tien phai tra cho bac 1 "+" la :" + tong
    }
    else if (a<=100){
        tong = 50*1600 + ((a-50)*1700);
        resaul ="ban  dang o bac 2 :<br>"+ "So tien phai tra cho bac 2"+" la :"  +tong
    }
    else if (a<=200){
        tong = 50*1600 + (50*1700) + ((a-100)*2000);
        resaul ="ban  dang o bac 3 :<br>" + "So tien phai tra cho bac " +" la :" +tong
    }
    else if (a<=300){
        tong = 50*1600 + (50*1700) + (100*2000) + ((a-100)*2500);
        resaul ="ban  dang o bac 4 :<br>"+ "So tien phai tra cho bac 4"+" la :"  +tong
    }
    else if (a<=400){
        tong = 50*1600 + (50*1700)+ (100*2000) + (100*2500) + ((a-300)*2800);
        resaul ="ban  dang o bac 5 <br>"+ "So tien phai tra cho bac 5"+" la :" +tong
    }
    else{
        tong = 50*1600 + (50*1700) +(100*2000) + (100*2500) + (100*2800) + ((a-400))*2900;
        resaul ="ban  dang o bac 6 <br>" + "So tien phai tra cho bac 6"+" la :" +tong
    }
    document.getElementById('resaul').innerHTML=resaul
}