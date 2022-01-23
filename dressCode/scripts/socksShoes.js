jQuery('#socksInput').on('input', function() {
    const sockInput = document.getElementById("socksInput").value;
    console.log(sockInput);
    if (["NONE", "SHORT", "MEDIUM", "LONG"].includes(sockInput)){
        console.log(sockInput);
        document.getElementById("socks").style.backgroundImage=`url(images/socks/group0/${sockInput}.png)`;
    }
});

jQuery('#socksInputR').on('input', function() {
    changeColor("socksInput", "socks");
  });
  
  jQuery('#socksInputG').on('input', function() {
    changeColor("socksInput", "socks");
  });
  
  jQuery('#socksInputB').on('input', function() {
    changeColor("socksInput", "socks");
  });


// SHOES

//f, b
const shoeData = [[10, 3], [1, 1], [3, 1], [2, 2]];

jQuery('#shoe1Input').on('input', function() {
    console.log("@");
    itemStyleChange("shoe1Input", 'shoe2', 'shoe1', maindirectory="shoes", data=shoeData);
});
  
  jQuery('#shoe1InputR').on('input', function() {
    changeColor("shoe1Input", "shoe1");
  });
  
  jQuery('#shoe1InputG').on('input', function() {
    changeColor("shoe1Input", "shoe1");
  });
  
  jQuery('#shoe1InputB').on('input', function() {
    changeColor("shoe1Input", "shoe1");
  });
  
  jQuery('#shoe2InputR').on('input', function() {
    changeColor("shoe2Input", "shoe2");
  });
  
  jQuery('#shoe2InputG').on('input', function() {
    changeColor("shoe2Input", "shoe2");
  });
  
  jQuery('#shoe2InputB').on('input', function() {
    changeColor("shoe2Input", "shoe2");
  });
  