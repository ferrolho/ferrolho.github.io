var layer4 = document.getElementById("layer4");
var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");

// Update the current slider value (each time you drag the slider handle)

slider4.oninput = function () {
    if (this.value == 4) {
        layer4.style.opacity = "1";
        output4.innerHTML = "Force Polytope, $P_k$";
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, output4]);
    } else if (this.value == 3) {
        layer3.style.opacity = "1";
        layer4.style.opacity = "0.05";
        output4.innerHTML = "Residual Force Polytope, $P'_k$";
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, output4]);
    } else if (this.value == 2) {
        layer2.style.opacity = "1";
        layer3.style.opacity = "0.05";
        layer4.style.opacity = "0";
        output4.innerHTML = "Force Cone, $C_{\\pmb{\\hat{f}}}$";
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, output4]);
    } else if (this.value == 1) {
        layer1.style.opacity = "1";
        layer2.style.opacity = "0.05";
        layer3.style.opacity = "0";
        layer4.style.opacity = "0";
        output4.innerHTML = "Robot";
    } else {
        console.log('What?')
    }
}
