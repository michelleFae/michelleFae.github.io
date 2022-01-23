
// index = group num, [(num front, num back)]

const hairData = [[1, 5], [2, 4], [2, 6], [1, 3]];

jQuery('#hairInput').on('input', function() {
  // change hair
  itemStyleChange("hairInput", 'hairFront', 'hairBack', maindirectory="hair", data=hairData);
  itemStyleChange("hairInput", 'hairFrontHighlight', 'hairBackHighlight', maindirectory="hair", data=hairData, subdirectory="/highlight"); 
});

jQuery('#hairInputR').on('input', function() {
  changeColor("hairInput", "hairFront");
  changeColor("hairInput", "hairBack");
});

jQuery('#hairInputG').on('input', function() {
  changeColor("hairInput", "hairFront");
  changeColor("hairInput", "hairBack");
});

jQuery('#hairInputB').on('input', function() {
  changeColor("hairInput", "hairFront");
  changeColor("hairInput", "hairBack");
});

jQuery('#hairFrontHighlightInput').on('input', function() {
  changeDivVisibility("hairFrontHighlightInput", "hairFrontHighlight");
});

jQuery('#hairBackHighlightInput').on('input', function() {
  changeDivVisibility("hairBackHighlightInput", "hairBackHighlight");
});

jQuery('#hairHighlightInputR').on('input', function() {
  changeColor("hairHighlightInput", "hairFrontHighlight");
  changeColor("hairHighlightInput", "hairBackHighlight");
});

jQuery('#hairHighlightInputG').on('input', function() {
  changeColor("hairHighlightInput", "hairFrontHighlight");
  changeColor("hairHighlightInput", "hairBackHighlight");
});

jQuery('#hairHighlightInputB').on('input', function() {
  changeColor("hairHighlightInput", "hairFrontHighlight");
  changeColor("hairHighlightInput", "hairBackHighlight");
});
