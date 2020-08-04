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
  blackRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/blackRoom/blackRoomEmpty.png');
  whiteRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/whiteRoom/resizedImage/whiteRoomEmpty.png');
  redRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/redRoom/redRoomEmpty.png');
  blueRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/blueRoom/walls/BlueRoomEmpty1.png');

  // Recording image dimensions
  const { edgeLength } = blackRoom;
  radius = edgeLength / 2;


  /* MAIN - Game and quiz info spots */
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-95.41, -832.33, -5000.00), 'game-container', true,  blackRoom, "Digital Diplomat Go", "https://michelleFae.github.io/impactHack/assets/icons/digitalDiplomatGoQuestion.png", radius / 2.5);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(5000.00, -953.68, -83.64), 'wydq-container', true,  blackRoom, "What's Your Diplomat", "https://michelleFae.github.io/impactHack/assets/icons/whatsYourDiplomatQuiz.png", radius / 2.5);


  // Link Rooms
  linkPanoRooms (blackRoom, whiteRoom, new THREE.Vector3(-5000.00, -877.80, 5.84), new THREE.Vector3(-5000.00, -877.80, 5.84), 1000, "Main Room", "Civil Service Officer Room");
  linkPanoRooms (blackRoom, redRoom, new THREE.Vector3(-143.87, 546.09, -5000.00), new THREE.Vector3(-143.87, 546.09, -5000.00), 1000, "Main Room", "Foreign Service Officer Room");
  linkPanoRooms (blackRoom, blueRoom, new THREE.Vector3(5000.00, 723.01, 4.34), new THREE.Vector3(5000.00, 723.01, 4.34), 1000, "Main Room", "Foreign Service Specialists Room");




  // infospotsList.forEach(addInfoSpotFunc);

  /* Insert Info Spots */

  // Main Room Items
  
//-62.98, -1401.99, -5000.00
  // FSO Room Items


  // FSS Room Items

  // Civil Service Room Items

  // Insert Info Spots
  linkPanoInfoSpotWtInfo (new THREE.Vector3(-109.84, 5000.00, -228.22), "general-info-container", true, blackRoom, "General Information", PANOLENS.DataImage.Info);
  linkPanoInfoSpotWtInfo (new THREE.Vector3(4000.00, 723.01, 4.34), "FSO-container", true, blackRoom, "Foreign Service Officers", PANOLENS.DataImage.Info);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-143.87, 546.09, -5000.00),"desc-container" , true, blackRoom, "Foreign Service Specialists", PANOLENS.DataImage.Info);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-4999.97, 742.82, 76.35), 'desc-container', true,  blackRoom, "Civil Service Officers", PANOLENS.DataImage.Info);
  

  

  // Add Scenes
  addScenes();

  // Removes the template div from list
  list.removeChild(listItem);

  // Set the navbar list to visible for the first room
  setNavBarListInView(blackRoom);