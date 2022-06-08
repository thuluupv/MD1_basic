function sum() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    let d = (b * b) - (4 * a * c);
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.getElementById('result').innerHTML = 'PT co vo so nghiem';
            } else {
                document.getElementById('result').innerHTML = 'PT vo nghiem';
            }
        } else {
            x = -c / b;
            z = x.toFixed(3);
            document.getElementById('result').innerHTML = 'PT co nghiem duy nhat x =' + z;
        }
    } else {
        if (d < 0) {
            document.getElementById('result').innerHTML = "Vo nghiem";
        } else if (d > 0) {
            x1 = ((-b) + Math.sqrt(d)) / (2 * a);
            x2 = ((-b) - Math.sqrt(d)) / (2 * a);
            document.getElementById('result').innerHTML = "pt có nghiệm xa = " + x1 + ' ;xb=' + x2;
        } else {
            x = (-b) / (2 * a)
            document.getElementById('result').innerHTML = "pt có nghiệm kép x = " + x;
        }

    }
}
