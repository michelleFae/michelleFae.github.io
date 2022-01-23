const locations = {
    "beach": {"warm": -3, "style":1, "formal":-2, "comfort":1, "swimwear":3, "hiking": 2, "schoolwear":2}
};

//f, b
const topData = [[19, 2], [28, 6]];
const bottomData = [[4, 1], [14, 4], [11, 5], [4, 2], [2,1], [5,1], [5,4], [8,1]];

jQuery('#top1Input').on('input', function() {
    itemStyleChange("top1Input", 'top2', 'top1', maindirectory="tops", data=topData);
});
  
  jQuery('#top1InputR').on('input', function() {
    changeColor("top1Input", "top1");
  });
  
  jQuery('#top1InputG').on('input', function() {
    changeColor("top1Input", "top1");
  });
  
  jQuery('#top1InputB').on('input', function() {
    changeColor("top1Input", "top1");
  });
  
  jQuery('#top2InputR').on('input', function() {
    changeColor("top2Input", "top2");
  });
  
  jQuery('#top2InputG').on('input', function() {
    changeColor("top2Input", "top2");
  });
  
  jQuery('#top2InputB').on('input', function() {
    changeColor("top2Input", "top2");
  });
  

// Bottoms
jQuery('#bottom1Input').on('input', function() {
    itemStyleChange("bottom1Input", 'bottom2', 'bottom1', maindirectory="bottoms", data=bottomData);
});
  
  jQuery('#bottom1InputR').on('input', function() {
    changeColor("bottom1Input", "bottom1");
  });
  
  jQuery('#bottom1InputG').on('input', function() {
    changeColor("bottom1Input", "bottom1");
  });
  
  jQuery('#bottom1InputB').on('input', function() {
    changeColor("bottom1Input", "bottom1");
  });
  
  jQuery('#bottom2InputR').on('input', function() {
    changeColor("bottom2Input", "bottom2");
  });
  
  jQuery('#bottom2InputG').on('input', function() {
    changeColor("bottom2Input", "bottom2");
  });
  
  jQuery('#bottom2InputB').on('input', function() {
    changeColor("bottom2Input", "bottom2");
  });