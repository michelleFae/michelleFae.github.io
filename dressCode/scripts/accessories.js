
jQuery('#isAccessory1Input').on('input', function() {
    isDisplayAccessory(1);
});

jQuery('#isAccessory2Input').on('input', function() {
    isDisplayAccessory(2);
});

jQuery('#isAccessory3Input').on('input', function() {
    isDisplayAccessory(3);
});

function isDisplayAccessory(accessoryNumber)
{
    const displayAccessory = document.getElementById(`isAccessory${accessoryNumber}Input`).value === "block"? "block": "none";
    document.getElementById(`accessory${accessoryNumber}1`).style.display = displayAccessory;
    document.getElementById(`accessory${accessoryNumber}2`).style.display = displayAccessory;
};

  jQuery('#accessory11InputR').on('input', function() {
    changeColor("accessory11Input", "accessory11");
  });
  
  jQuery('#accessory11InputG').on('input', function() {
    changeColor("accessory11Input", "accessory11");
  });
  
  jQuery('#accessory11InputB').on('input', function() {
    changeColor("accessory11Input", "accessory11");
  });
  
  jQuery('#accessory12InputR').on('input', function() {
    changeColor("accessory12Input", "accessory12");
  });
  
  jQuery('#accessory12InputG').on('input', function() {
    changeColor("accessory12Input", "accessory12");
  });
  
  jQuery('#accessory12InputB').on('input', function() {
    changeColor("accessory12Input", "accessory12");
  });

  jQuery('#accessory21InputR').on('input', function() {
    changeColor("accessory21Input", "accessory21");
  });
  
  jQuery('#accessory21InputG').on('input', function() {
    changeColor("accessory21Input", "accessory21");
  });
  
  jQuery('#accessory21InputB').on('input', function() {
    changeColor("accessory21Input", "accessory21");
  });
  
  jQuery('#accessory22InputR').on('input', function() {
    changeColor("accessory22Input", "accessory22");
  });
  
  jQuery('#accessory22InputG').on('input', function() {
    changeColor("accessory22Input", "accessory22");
  });
  
  jQuery('#accessory22InputB').on('input', function() {
    changeColor("accessory22Input", "accessory22");
  });

  jQuery('#accessory31InputR').on('input', function() {
    changeColor("accessory31Input", "accessory31");
  });
  
  jQuery('#accessory31InputG').on('input', function() {
    changeColor("accessory31Input", "accessory31");
  });
  
  jQuery('#accessory31InputB').on('input', function() {
    changeColor("accessory31Input", "accessory31");
  });
  
  jQuery('#accessory32InputR').on('input', function() {
    changeColor("accessory32Input", "accessory32");
  });
  
  jQuery('#accessory32InputG').on('input', function() {
    changeColor("accessory32Input", "accessory32");
  });
  
  jQuery('#accessory32InputB').on('input', function() {
    changeColor("accessory32Input", "accessory32");
  });