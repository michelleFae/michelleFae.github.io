
//f, b
const coatData = [[3, 3], [2, 2], [7, 3], [2, 8]];

jQuery('#isCoatInput').on('input', function() {
    const displayCoat = document.getElementById('isCoatInput').value === "block"? "block": "none";
    document.getElementById('coat1').style.display = displayCoat;
    document.getElementById('coat2').style.display = displayCoat;
});

// jQuery('#coat1Input').on('input', function() {
//     itemStyleChange("coat1Input", 'coat2', 'coat1', maindirectory="coats", data=coatData);
// });
  
//   jQuery('#coat1InputR').on('input', function() {
//     changeColor("coat1Input", "coat1");
//   });
  
//   jQuery('#coat1InputG').on('input', function() {
//     changeColor("coat1Input", "coat1");
//   });
  
//   jQuery('#coat1InputB').on('input', function() {
//     changeColor("coat1Input", "coat1");
//   });
  
//   jQuery('#coat2InputR').on('input', function() {
//     changeColor("coat2Input", "coat2");
//   });
  
//   jQuery('#coat2InputG').on('input', function() {
//     changeColor("coat2Input", "coat2");
//   });
  
//   jQuery('#coat2InputB').on('input', function() {
//     changeColor("coat2Input", "coat2");
//   });
  