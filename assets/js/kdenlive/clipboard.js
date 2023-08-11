function myFunction() {
    const my_width = parseFloat(document.getElementById("myInput_w").value);
    const my_height = parseFloat(document.getElementById("myInput_h").value);
    console.log(`Using resolution: ${my_width}x${my_height}`);

    const my_xoffset = parseFloat(document.getElementById("myInput_xoffset").value);
    const my_yoffset = parseFloat(document.getElementById("myInput_yoffset").value);
    console.log(`Using offsets: x=${my_xoffset}, y=${my_yoffset}`);

    var text_box = document.getElementById("myInput");
    const original_data = text_box.value;

    const points = text_box.value.split(";");
    // console.log(points);

    var str_res = ""

    for (let i = 0; i < points.length; i++) {
        const tokens = points[i].split(/\/|:/);
        var a = tokens[0];
        var b = tokens[1];

        a.includes("=") && (a = a.split("=")[1]);

        const x_i = parseFloat(a)
        const y_i = parseFloat(b)

        str_res += `${i}=${my_xoffset - x_i + my_width/2}/${my_yoffset - y_i + my_height/2};`
    }

    text_box.value = str_res;
    console.log(str_res);

    text_box.select();
    text_box.setSelectionRange(0, 99999);
    document.execCommand("copy");

    text_box.value = original_data;

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!"; // + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
