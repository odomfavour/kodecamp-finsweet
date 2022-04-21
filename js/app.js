function quadraticEqn(a, b, c) {
    // var a = document.getElementById("a").value;
    // var b = document.getElementById("b").value;
    // var c = document.getElementById("c").value;
    console.log(a, b, c);
    let x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let x = [x1, x2];
    console.log(x);
    // document.getElementById("x1").innerHTML = x1;
    // document.getElementById("x2").innerHTML = x2;
}

quadraticEqn(1, -13, 40);
