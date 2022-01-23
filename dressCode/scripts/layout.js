
let currentVisiblePanel = 0;
let panels;



$(document).ready(function() {
  panels = document.getElementsByClassName("panel");
  // set all but div0 to visibilty hidden
  for(const panel of panels) {
    panel.style.display = "none";
  }
  panels[0].style.display = "block";

  function changeButtonColor(prevPanel, currentVisiblePanel) {
    // set button color based on panel
    const buttons = document.getElementsByClassName("button");
    for(const button of buttons) {
      if (button.classList.length > 1) {
        button.classList.remove(panels[prevPanel].classList[1].slice(0,-5));
      }
      button.classList.add(panels[currentVisiblePanel].classList[1].slice(0,-5));
    }
  }

  function nextPanel() {
    panels[currentVisiblePanel].style.display = "none";
    const prevPanel = currentVisiblePanel;
    currentVisiblePanel = (prevPanel + 1) % (panels.length); // assume panels.len >= 1
    panels[currentVisiblePanel].style.display = "block";

    // set button color based on panel
    changeButtonColor(prevPanel, currentVisiblePanel);
  }

  function prevPanel() {
    const prevPanel = currentVisiblePanel;
    panels[currentVisiblePanel].style.display = "none";
    currentVisiblePanel = (currentVisiblePanel - 1 < 0)? panels.length - 1: currentVisiblePanel - 1 ;
    panels[currentVisiblePanel].style.display = "block";

    // set button color based on panel
    changeButtonColor(prevPanel, currentVisiblePanel);
  }
  
  document.getElementById("nextButton").addEventListener("click", nextPanel);
  document.getElementById("prevButton").addEventListener("click", prevPanel);

  });



