
function changeColor(inputId, targetID, prependBlack=true) {
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

function changeDivVisibility(input, target) {
    const inputDiv = document.getElementById(input);
    if (inputDiv.value === "true") {
        document.getElementById(target).style.visibility = "visible";
    } 
    if (inputDiv.value === "false") {
        document.getElementById(target).style.visibility = "hidden";
    } 
}


function itemStyleChange( input, frontTarget, backTarget, maindirectory, data, subdirectory="") {
    let itemInput = document.getElementById(input).value;
    const validInput = itemInput !== "" && (Number(itemInput) || Number(itemInput) == 0);
    itemInput = Number(itemInput);
  
    if (validInput)
    {
      for (let g=0; g < data.length; g++) {
        for (let f=0; f < data[g][0]; f++) {
          for (let b=0; b < data[g][1]; b++) {
            if (itemInput<=0)
            {
              console.log(g);
              console.log(f);
              console.log(b);
              if (frontTarget){
                document.getElementById(frontTarget).style.backgroundImage=`url(images/${maindirectory}/group${g}${subdirectory}/${f}f.png)`;
       
              }
              if (backTarget){
                document.getElementById(backTarget).style.backgroundImage=`url(images/${maindirectory}/group${g}${subdirectory}/${b}b.png)`;
                
              }
              return;
            }
            itemInput--;
          }
        }
      }
    }  
  }