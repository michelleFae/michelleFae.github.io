let accessoryDict = {
    "Bracelet": {group:"bracelet", back: "bottom"},
    "Watch": {group:"bracelet", front: "watch", back: "bottom"},
    "Swim Cap": {group:"caps", front:"swim", back: "cap"},
    "Summer Cap": {group:"caps", front:"summer", back: "cap"},
    "Winter Cap": {group:"caps", front:"winter", back: "cap"},
    "Hoop Earings": {group:"earings", front:"hoops"},
    "Long Earings": {group:"earings", front:"long earings"},
    "Short Earings": {group:"earings", front:"short earings"},
    "Star Earings": {group:"earings", front:"star earings"},
    "Studs": {group:"earings", front:"studs"},
    "Circular glasses": {group:"glasses", front: "circular top", back: "circular glasses"},
    "Square glasses": {group:"glasses", front: "square top", back: "square glasses"},
    "Bobble Headband": {group:"headbands", front: "bobble", back: "headband"},
    "Dotted Headband": {group:"headbands", front: "dotted", back: "headband"},
    "Music Headband": {group:"headbands", front: "music", back: "headband"},
    "Sparkle Headband": {group:"headbands", front: "sparkle", back: "headband"},
    "Earmuffs": {group:"headGear", front: "earmuffs"},
    "Wireless Headphones": {group:"headGear", front: "wireless headphones"},
    "Plain Hood": {group:"hoods", back: "hood"},
    "Faux Fur Hood": {group:"hoods", front: "faux fur", back: "hood"},
    "Scarf": {group: "neckElements", front: "scarf"},
    "Circle Gem Necklace": {group: "necklaces", front: "circle gem", back: "necklace"},
    "Code Necklace": {group: "necklaces", front: "code necklace"},
    "Dotted Necklace": {group:"necklaces", front: "dotted", back: "necklace"},
    "Dot Bead Necklace": {group:"necklaces", front: "dotted"},
    "Glow Necklace": {group:"necklaces", front: "glow", back: "necklace"},
    "Sparkle Necklace": {group:"necklaces", front: "sparkle", back: "necklace"},
    "Simple Necklace": {group:"necklaces", back: "necklace"},
  };
  
  $(document).bind('accessory1Changed', function () {
    accessoryChanged(1);
  });

  $(document).bind('accessory2Changed', function () {
    accessoryChanged(2);
  });
  $(document).bind('accessory3Changed', function () {
    accessoryChanged(3);
  });

  function accessoryChanged(accessoryNumber){
    const accessoryVariables = accessoryDict[document.getElementById(`accessoryInput${accessoryNumber}`).value];
    if (accessoryVariables)
    {
      if (accessoryVariables.front)
      {
        document.getElementById(`accessory${accessoryNumber}2`).style.backgroundImage = `url(images/accessories/${accessoryVariables.group}/${accessoryVariables.front}.png)`;
      }
      
      if (accessoryVariables.back)
      {
        document.getElementById(`accessory${accessoryNumber}1`).style.backgroundImage =  `url(images/accessories/${accessoryVariables.group}/${accessoryVariables.back}.png)`;
      }
    }

  };
  