let z = document.getElementById('in');

function gt(value) {
    z.value += value;
}

function tinh() {
    let b = eval(z.value);
    z.value = b;
}

function ac() {
    z.value = "";
}