jQuery('#skinInput').on('input', function() {
    // change skin
    let dressInput0 = document.getElementById('skinInput').textContent;
    dressInput0 = (dressInput0 && 0 <= Number(dressInput0) && 8 >= Number(dressInput0)) ? dressInput0 : 4;
    document.getElementById('skin').style.backgroundImage=`url(images/skins/skin${dressInput0}.png)`;
});


jQuery('#eyeInputR').on('input', function() {
    changeColor("eyeInput", "eyeIris");
});

jQuery('#eyeInputG').on('input', function() {
    changeColor("eyeInput", "eyeIris");
});

jQuery('#eyeInputB').on('input', function() {
    changeColor("eyeInput", "eyeIris");
});

jQuery('#lipInputR').on('input', function() {
    changeColor("lipInput", "lips");
});

jQuery('#lipInputG').on('input', function() {
    changeColor("lipInput", "lips");
});

jQuery('#lipInputB').on('input', function() {
    changeColor("lipInput", "lips");
});
