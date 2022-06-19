function sum(value) {
   document.getElementById('view').value += value;
}
function call() {
    let input = document.getElementById('view').value;
    let result = eval(input);
    document.getElementById('view').value = result;
}
function clear(){
    document.getElementById('view').value='';
}