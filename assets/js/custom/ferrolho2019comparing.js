var image1 = document.getElementById("test_img1");
var image2 = document.getElementById("test_img2");
var image3 = document.getElementById("test_img3");

var layer1 = document.getElementById("layer1");
var layer2 = document.getElementById("layer2");
var layer3 = document.getElementById("layer3");
var layer4 = document.getElementById("layer4");

var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var slider4 = document.getElementById("myRange4");

var output1 = document.getElementById("demo1");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");
var output4 = document.getElementById("demo4");

output1.innerHTML = slider1.value; // Display the default slider value
output2.innerHTML = slider2.value; // Display the default slider value
output3.innerHTML = slider3.value; // Display the default slider value
output4.innerHTML = "Force Polytope"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

slider1.oninput = function () {
    output1.innerHTML = this.value * 10;
    image1.src = `${document.location.origin}/research/images/ferrolho2019comparing/peak-torque-s1/frame_${parseInt(this.value) + 1}.svg`;
}

slider2.oninput = function () {
    output2.innerHTML = this.value * 10;
    image2.src = `${document.location.origin}/research/images/ferrolho2019comparing/peak-torque-s2/frame_${parseInt(this.value) + 1}.svg`;
}

slider3.oninput = function () {
    output3.innerHTML = this.value * 10;
    image3.src = `${document.location.origin}/research/images/ferrolho2019comparing/peak-torque-s3/frame_${parseInt(this.value) + 1}.svg`;
}

slider4.oninput = function () {
    if (this.value == 4) {
        layer4.style.opacity = "1";
        output4.innerHTML = "Force Polytope";
    } else if (this.value == 3) {
        layer3.style.opacity = "1";
        layer4.style.opacity = "0.05";
        output4.innerHTML = "Residual Force Polytope";
    } else if (this.value == 2) {
        layer2.style.opacity = "1";
        layer3.style.opacity = "0.05";
        layer4.style.opacity = "0";
        output4.innerHTML = "Force Cone";
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
