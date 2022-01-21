
// index = group num, [(num front, num back)]

// list of all fronthair

const hairData = [[1, 5], [2, 4], [2, 6], [1, 3]];

jQuery('#hairInput').on('input', function() {
  // change hair
  let hairInput = document.getElementById('hairInput').value;
  const validInput = hairInput !== "" && (Number(hairInput) || Number(hairInput) == 0);
  hairInput = Number(hairInput);

  //max hair len?

  if (validInput)
  {
    for (let g=0; g < hairData.length; g++) {
      for (let f=0; f < hairData[g][0]; f++) {
        for (let b=0; b < hairData[g][1]; b++) {
          if (hairInput<=0)
          {
            console.log(g);
            console.log(f);
            console.log(b);
            console.log(hairInput);
            document.getElementById('hairFront').style.backgroundImage=`url(images/hair/group${g}/${f}f.png)`;
            document.getElementById('hairBack').style.backgroundImage=`url(images/hair/group${g}/${b}b.png)`;
            return;
          }
          hairInput--;
        }
      }
    }
  }  
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