let coatsDict = {
    "Long-Sleved Half Length Button Jacket": {group:0, front:0, back: 0},
    "Long-Sleved Half Length Jacket Circular Pattern": {group:0, front:1, back: 0},
  };
  
  $(document).bind('coatChanged', function () {
    //your after changed html, logic goes heres
    console.log("hi");
    const coatVariables = coatsDict[document.getElementById('CoatInput').value] || {group:0, front:0, back: 0};
  
     document.getElementById('coat1').style.backgroundImage = `url(images/coats/group${coatVariables.group}/${coatVariables.front}f.png)`;
     document.getElementById('coat2').style.backgroundImage =  `url(images/coats/group${coatVariables.group}/${coatVariables.back}b.png)`;
     
  
  });
  