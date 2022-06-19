function sum() {
    let doanh = +document.getElementById('doanh').value;
    if (0 <doanh && doanh < 2000000) {
        flower = 3/100;
    } else if (2000000 <= doanh && doanh< 4000000) {
        flower = 5/100;
    } else if (4000000 <= doanh && doanh< 8000000) {
        flower = 10/100;
    } else {
        flower = 8/100;
    }
    money = (doanh * flower);
    document.getElementById('flower').innerHTML=flower +"%";
    document.getElementById('money').innerHTML=money +"VND";
}
document.getElementById('btn-no').style.top = Math.floor(Math.random()*300)+"px";