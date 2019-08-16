var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");

var output = document.getElementById("demo");

var image1 = document.getElementById("test_img1");
var image2 = document.getElementById("test_img2");
var image3 = document.getElementById("test_img3");

output.innerHTML = slider1.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

slider1.oninput = function () {
    output.innerHTML = this.value;
    image1.src = `${document.location.origin}/research/images/ferrolho2019comparing/peak-torque-s1/frame_${this.value}.svg`;
}

slider2.oninput = function () {
    output.innerHTML = this.value;
    image2.src = `${document.location.origin}/research/images/ferrolho2019comparing/peak-torque-s2/frame_${this.value}.svg`;
}

slider3.oninput = function () {
    output.innerHTML = this.value;
    image3.src = `${document.location.origin}/research/images/ferrolho2019comparing/peak-torque-s3/frame_${this.value}.svg`;
}
