

jQuery('#skinInput').on('input', function() {
    // change skin
    let dressInput0 = document.getElementById('skinInput').textContent;
    dressInput0 = (dressInput0 && 0 <= Number(dressInput0) && 8 >= Number(dressInput0)) ? dressInput0 : 4;
    document.getElementById('skin').style.backgroundImage=`url(images/skins/skin${dressInput0}.png)`;

});


jQuery('#eyeInputR').on('input', function() {
    changeEyeColor();
});

jQuery('#eyeInputG').on('input', function() {
    changeEyeColor();
});

jQuery('#eyeInputB').on('input', function() {
    changeEyeColor();
});

function changeEyeColor() {
    // change eye color
    const red = Number(document.getElementById('eyeInputR').textContent);
    const green = Number(document.getElementById('eyeInputG').textContent);
    const blue = Number(document.getElementById('eyeInputB').textContent);

    const minColor = Math.min(red, green, blue);
    const maxColor = Math.max(red, green, blue);

    if (0 <= minColor && 255 >= maxColor) {
        document.getElementById('eyeIris').style.filter=getFilter([red, green, blue]);
    }
}