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
  blackRoom = new PANOLENS.ImagePanorama('https://michelleFae.github.io/impactHack/assets/cubeWalls/blueRoom/blueRoomFull.png');
  
  // Recording image dimensions
  const { edgeLength } = blackRoom;
  radius = edgeLength / 2;


  /* Insert Info Spots */

  /* Main Room Items */
  
  //Share on social media
  // linkPanoInfoSpotWtInfo(new THREE.Vector3(5000.00, -431.44, -4953.42), 'share-container', true,  blackRoom, "Share the Digital Love", "https://michelleFae.github.io/impactHack/assets/icons/shareIcon.png", radius / 3);

  // whales
  linkPanoInfoSpotWtInfo(new THREE.Vector3(5000.00, -1961.48, 3770.59),"photo-container" , true, blackRoom, "Task #0: Photo Challenge", "https://michelleFae.github.io/puzzWhaleHunt/assets/officers/jacqueline_whale.png", radius/1.5);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-3487.52, -3785.40, 5000.00),"fullstop-container" , true, blackRoom, "Task #1: Find the Fullstop", "https://michelleFae.github.io/puzzWhaleHunt/assets/officers/prakash_whale.png", radius/1.5);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-5000.00, -1737.50, -4799.07),"officer-whale-container" , true, blackRoom, "Task #2: Where's that officer's whale?", "https://michelleFae.github.io/puzzWhaleHunt/assets/officers/valerie_whale.png", radius/1.5);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(4193.59, -1720.01, -5000.00),"puzzle-container" , true, blackRoom, "Task #3: Puzzle Challenge", "https://michelleFae.github.io/puzzWhaleHunt/assets/officers/mantej_whale.png", radius/1.5);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(31.81, -3833.63, 5000.00),"scramble-container" , true, blackRoom, "Task #4: Unscramble!", "https://michelleFae.github.io/puzzWhaleHunt/assets/officers/chi_whale.png", radius/1.5);
  linkPanoInfoSpotWtInfo(new THREE.Vector3(-94.43, -4232.44, -5000.00),"done-container" , true, blackRoom, "DONE: Enter the Final Secret Word", "https://michelleFae.github.io/puzzWhaleHunt/assets/officers/tim_whale.png", radius/1.5);
 

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






