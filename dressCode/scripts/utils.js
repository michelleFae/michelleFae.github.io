
function changeColor(inputId, targetID) {
    // change color
    const red = Number(document.getElementById(inputId+"R").value);
    const green = Number(document.getElementById(inputId+"G").value);
    const blue = Number(document.getElementById(inputId+"B").value);

    console.log(red);
    console.log(green);
    console.log(blue);
    const minColor = Math.min(red, green, blue);
    const maxColor = Math.max(red, green, blue);

    if (0 <= minColor && 255 >= maxColor) {
        document.getElementById(targetID).style.filter=getFilter([red, green, blue]);
    }
}
