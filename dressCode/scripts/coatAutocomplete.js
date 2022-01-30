let coatsDict = {
    "Long-Sleeved Half Length Half Slightly Open Button Jacket": {group:0, front:0, back: 0},
    "Long-Sleeved Half Length Half Slightly Open Jacket Circular Pattern": {group:0, front:1, back: 0},
    "Long-Sleeved Half Length Half Slightly Open Simple Jacket": {group:0, front:2, back: 0},
    "Long-Sleeved Half Length Closed Button Fleece Coat ": {group:0, front:0, back: 1},
    "Long-Sleeved Half Length Closed Fleece Coat Circular Pattern": {group:0, front:1, back: 1},
    "Long-Sleeved Half Length Closed Simple Fleece Coat ": {group:0, front:2, back: 1},
    "Long-Sleeved Half Length Open Button Jacket": {group:0, front:0, back: 2},
    "Long-Sleeved Half Length Open Jacket Circular Pattern": {group:0, front:1, back: 2},
    "Long-Sleeved Half Length Open Jacket Simple Jacket": {group:0, front:2, back: 2},
    "Sparkle Short-Sleeved Half Length Open Sweater": {group:1, front:0, back: 0},
    "Short-Sleeved Half Length Simple Open Sweater": {group:1, front:1, back: 0},
    "Sparkle Short-Sleeved Half Length Closed Mini Sweater": {group:1, front:0, back: 1},
    "Short-Sleeved Half Length Closed Mini Sweater": {group:1, front:1, back: 1},
    "Sleeveless Button Belted Dress Coat": {group:2, front:0, back: 0},
    "Long-Sleeved Snowman Dress Coat": {group:2, front:1, back: 0},
    "Sleeveless Cross Stitch Dress Coat": {group:2, front:2, back: 0},
    "Sleeveless Button Dress Coat": {group:2, front:3, back: 0},
    "Bow Sleeveless Open Dress Coat": {group:2, front:4, back: 0},
    "Top Sparkle Sleeveless Open Dress Coat": {group:2, front:5, back: 0},
    "Simple Sleeveless Open Dress Coat": {group:2, front:6, back: 0},
    "Top Wrap Dress Coat": {group:2, front:7, back: 0},
    "Closed Full-Sleeved Button Belted Dress Coat": {group:2, front:0, back: 1},
    "Closed Long-Sleeved Snowman Dress Coat": {group:2, front:1, back: 1},
    "Closed Full-Sleeved Cross Stitch Dress Coat": {group:2, front:2, back: 1},
    "Closed Full-Sleeved Button Dress Coat": {group:2, front:3, back: 1},
    "Closed Bow Full-Sleeved Dress Coat": {group:2, front:4, back: 1},
    "Closed Top Sparkle Full-Sleeved Dress Coat": {group:2, front:5, back: 1},
    "Closed Simple Full-Sleeved Dress Coat": {group:2, front:6, back: 1},
    "Closed Top Wrap Dress Coat": {group:2, front:7, back: 1},
    "Bobble-Sleeved Button Belted Dress Coat": {group:2, front:0, back: 2},
    "Bobble-Sleeved Snowman Dress Coat": {group:2, front:1, back: 2},
    "Bobble-Sleeved  Cross Stitch Dress Coat": {group:2, front:2, back: 2},
    "Bobble-Sleeved Button Dress Coat": {group:2, front:3, back: 2},
    "Bobble-Sleeved Bow Full-Sleeved Dress Coat": {group:2, front:4, back: 2},
    "Bobble-Sleeved Top Sparkle Full-Sleeved Dress Coat": {group:2, front:5, back: 2},
    "Bobble-Sleeved Simple Full-Sleeved Dress Coat": {group:2, front:6, back: 2},
    "Bobble-Sleeved Top Wrap Dress Coat": {group:2, front:7, back: 2},
    "Dress Parka Buttoned": {group:3, front:0, back: 0},
    "Dress Parka With Circular Decals": {group:3, front:1, back: 0},
    "Zipped Dress Parka": {group:3, front:2, back: 0},
    "Dress Parka With Sequin Decals": {group:3, front:3, back: 0},
    "Sparkle Dress Parka": {group:3, front:4, back: 0},
    "Top Buttoned Dress Parka": {group:3, front:5, back: 0},
    "Cross Patterned Dress Parka": {group:3, front:6, back: 0},
    "Simple Dress Parka": {group:3, front:7, back: 0},
    "Parka Buttoned": {group:3, front:0, back: 1},
    "Parka With Circular Decals": {group:3, front:1, back: 1},
    "Zipped Parka": {group:3, front:2, back: 1},
    "Parka With Sequin Decals": {group:3, front:3, back: 1},
    "Sparkle Parka": {group:3, front:4, back: 1},
    "Top Buttoned Parka": {group:3, front:5, back: 1},
    "Cross Patterned Parka": {group:3, front:6, back: 1},
    "Simple Parka": {group:3, front:7, back: 1},
  };
  
  $(document).bind('coatChanged', function () {
    const coatVariables = coatsDict[document.getElementById('CoatInput').value] || {group:0, front:0, back: 0};
    document.getElementById('coat2').style.backgroundImage = `url(images/coats/group${coatVariables.group}/${coatVariables.front}f.png)`;
    document.getElementById('coat1').style.backgroundImage =  `url(images/coats/group${coatVariables.group}/${coatVariables.back}b.png)`;
  });
  