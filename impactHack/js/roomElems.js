var parameters, viewer, radius, button, position, infospot, timerId, easingItem, list, listItem, index = 0, baseScale = 300;


  list = document.querySelector( '.mdl-list' );
  listItem = document.querySelector( '.mdl-list__item' );

  // Focus tweening parameter
  parameters = {
    amount: 50,
    duration: 1000,
    curve: 'Cubic',
    easing: 'In',
    iterative: false
  };

  // Init rooms
  blackRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/blackRoom/finalRoom.png');
  whiteRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/whiteRoom/whiteRoom.png');
  redRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/redRoom/redRoom.png');
  blueRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/blueRoom/walls/blueRoom.png');

  // Recording image dimensions
  const { edgeLength } = blackRoom;
  radius = edgeLength / 2;


//"https://michelleFae.github.io/impactHack/assets/icons/globe.gif"
//5000.00, -911.25, 20.85

  // /* MAIN - Game and quiz info spots 256x256*/
  // linkPanoInfoSpotWtInfo(new THREE.Vector3(-95.41, -832.33, -5000.00), 'game-container', true,  blackRoom, "Digital Diplomat Go", "https://michelleFae.github.io/impactHack/assets/icons/wydq.png" , radius / 2.5);
 
  
  // infospotsList.forEach(addInfoSpotFunc);

  /* Insert Info Spots */

  /* Main Room Items */
  /* What is diplomacy */
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, -3494.28, -4383.53),"what-is-diplomacy-info" , true, blackRoom, "What is diplomacy?", "https://michelleFae.github.io/impactHack/assets/misc/liberty.png", radius);

  //whats your diplomat
  linkPanoInfoSpotWtInfo(new THREE.Vector3(91.94, -533.50, 5000.00), 'wydq-container', true,  blackRoom, "What's Your Digital Diplomat", "https://michelleFae.github.io/impactHack/assets/icons/digitalDiplomatGoQuestion.png", radius / 2.5);

  //wheel
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-31.66, 877.36, -5000.00),"diplomatic-wheel-info" , false, blackRoom, "info for wheel", PANOLENS.DataImage.Info);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-8.14, -352.10, -5000.00), 'diplomatic-wheel-container', true,  blackRoom, " Wheel of Diplomat Skills", "https://michelleFae.github.io/impactHack/assets/wheel/wheel.png" , radius / 2);
  
  /* FSO Room Items (blue) */
  linkPanoInfoSpotWtInfo(new THREE.Vector3(68.11, -183.40, 5000.00),"fso-dim-container" , true, blueRoom, "FSO Dimensions", "https://michelleFae.github.io/impactHack/assets/icons/dimensionIcons/lightBlueDims.png" , radius / 2);
  // linkPanoInfoSpotWtInfo(new THREE.Vector3(-143.87, 546.09, -5000.00),"consular-affairs-container" , true, blueRoom, "Consular Affairs Officer", PANOLENS.DataImage.Info);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-103.73, -463.00, -5000.00),"fso-interactive-container" , true, blueRoom, "In FSO Shoes", "https://michelleFae.github.io/impactHack/assets/icons/fsoShoes.png", radius/2);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(68.11, -183.40, 5000.00),"fso-wheel" , true, blueRoom, "The FSO wheel","https://michelleFae.github.io/impactHack/assets/wheel/fssWheel.png", radius/1.5);


// 68.11, -183.40, 5000.00)

  /* FSS Room Items (red) */
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, -139.13, 137.05),"fss-dim-container" , true, redRoom, "FSS Dimensions", "https://michelleFae.github.io/impactHack/assets/icons/dimensionIcons/redPinkDims.png" , radius / 2);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-143.87, 546.09, -5000.00),"fss-interactive-container" , true, redRoom, "The FSS Simulation","https://michelleFae.github.io/impactHack/assets/icons/fssShoes.png", radius/2);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(68.11, -183.40, 5000.00),"fss-wheel" , true, redRoom, "The FSS wheel", "https://michelleFae.github.io/impactHack/assets/wheel/fsoWheel.png", radius/1.5);








  /* Civil Service Room Items (white) */
  linkPanoInfoSpotWtInfo(new THREE.Vector3(68.11, -183.40, 5000.00),"cso-wheel" , true, whiteRoom, "The CSO wheel", "https://michelleFae.github.io/impactHack/assets/wheel/csoWheel.png", radius/1.5);



  
  // Link Rooms
  linkPanoRooms (blackRoom, blueRoom, new THREE.Vector3(5000.00, -405.41, -1679.79), new THREE.Vector3(5000.00, -911.25, 20.85), 1000, "Main Room", "Foreign Service Officer Exhibit");
  linkPanoRooms (blackRoom, redRoom, new THREE.Vector3(5000.00, -408.72, 1570.36), new THREE.Vector3(5000.00, -911.25, 20.85), 1000, "Main Room", "Foreign Service Specialist Exhibit");
  linkPanoRooms (blackRoom, whiteRoom, new THREE.Vector3(-5000.00, -877.80, 5.84), new THREE.Vector3(-5000.00, -877.80, 5.84), 1000, "Main Room", "Civil Service Officer Exhibit");



  

  // Add Scenes
  addScenes();

  // Removes the template div from list
  list.removeChild(listItem);

  // Set the navbar list to visible for the first room
  setNavBarListInView(blackRoom);


/* Set Intro vector - so the user sees ceiling on entrance into room */
var lookAtPositions = [
  new THREE.Vector3(188.35, 5000.00, 0.00)
];

blackRoom.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );






