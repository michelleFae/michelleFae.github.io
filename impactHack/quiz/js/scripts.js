// num questions
const numQuestions = Object.keys(questions).length;
const shift = 100 / numQuestions;
const numNonOptionItems = 1; //OBJECTS IS NUMBER OF THINGS IN THE QUESTION - 1.

// for keeping track of the score
var score = {};

// for keep track of the current question
var currentQn = 0;

initScore(results);

function initScore(results) {
  // Takes in a results object and uses its keys as attributes in a score object

  resultKeys = Object.keys(results);
  resultKeys.forEach(function (resultKey, _) {
    score[resultKey] = 0;
  });
}

// for setting up each of the questions
function setupQuestion() {
  // find out the current percentage of completion and updates the css
  var progress = shift + currentQn * shift;
  var progressbar = document.getElementById("progress");
  progressbar.style.width = progress + "%";
  progressbar.innerText = currentQn + 1 + "/" + numQuestions;

  // get the current questions content
  var qn = questions["question" + currentQn];
  var qnText = document.getElementById("question");
  if (qnText == null) {
      console.log("qnText is null");
    }
  qnText.innerText = qn.question;


  // ASSUMPTION: NUM OF OBJECTS IS NUMBER OF THINGS IN THE QUESTION - 1.
  var numOptions = Object.keys(qn).length - numNonOptionItems;
  // updates each of the options for the current question
  for (var i = 0; i < numOptions; i++) {
    var option = document.getElementById("option" + i);
    if (option == null) {
      console.log("rere");
    }
    var content = option.getElementsByClassName("content")[0];
    var qnOption = qn["option" + i];
    if (qnOption.type == "image") {
      var htmlStr = "<img src='" + qnOption.content + "'>";
      content.innerHTML = htmlStr;
    } else {
      var htmlStr = "<p>" + qnOption.content + "</p>";
      content.innerHTML = htmlStr;
    }
  }
}

// to unselect all of the options
function resetOptions() {
  var btn = document.getElementsByTagName("input");
  for (var i = 0; i < btn.length; i++) {
     btn[i].checked = false;
  }
}

// to select the option that is clicked
function select(element) {
  // check if the option requires an alert message to be sent
  // let ans = $("input[name=answer]:checked").val();
  // var displayAlert = questions["question" + currentQn]["option" + ans].isAlertOption;
  var btn = element.getElementsByTagName("input")[0];
  btn.checked = true;
  var ans = $("input[name=answer]:checked").val();
  var qn = questions["question" + currentQn];
  var isRequired = qn["option" + ans].isRequired;
  if (isRequired) {
    alert(qn["option" + ans].requiredMsg);
  } else {
    var btn = element.getElementsByTagName("input")[0];
    btn.checked = true;
    next();
  }
}

// get the next questions, or display result if all questions were answered
function next() {
  // get the current select option
  var ans = $("input[name=answer]:checked").val();
  var qn = questions["question" + currentQn];
  // get the personality type for the option selected
  var personality = qn["option" + ans].personality;
  // increase the score of the personality by the points gained value
  var pointsGained = qn["option" + ans].pointsGained;
  score[personality] += pointsGained;
  // increase the question count by 1
  currentQn++;
  // unselect all options
  resetOptions();
  // check if quiz is completed
  if (currentQn < numQuestions) {
    // if quiz not completed, setup the next question
    setupQuestion();
  } else {
    // else quiz is completed
    // assume that the highest score is the adventurous personality
    // and go through each of the personality type, and update the highest score and personality
    const highestAttributes = findHighest(score);
    var highestScore = highestAttributes[0];
    var highestPersonality = highestAttributes[1];

    setResultpage(results, highestPersonality);

    // set question count to 0 so that when the user wishes to retry, the quiz is on the right question count
    currentQn = 0;
    //reset score
    initScore(results);
    showPage(1);
  }
}

function findHighest(score) {

    var highestScore = -Number.MAX_VALUE;
    var highestPersonality = [];

    // todo edge case: ties

    //normalizes scrore+get highest
    for (var [key, value] of Object.entries(score)) {
      score[key] = value * 100 / maxScores[key];
      value = score[key];
      if (highestScore == value) {
        highestPersonality.push(key);
      } else if (highestScore < value) {
        highestScore = value;
        highestPersonality = [key];
      }
    }

    return [highestScore, highestPersonality];
}

/* Assumption - trait score is a percentage */
function getOptionNum(traitScore) {
   
  if (traitScore < 30) {
    return 0;
  } else if (traitScore < 60) {
    return 1;
  } else if (traitScore < 80) {
    return 2;
  } else {
    return 3;
  }
}

function prettyWithAnd(highestPersonality) {
  /* returns a string of words in the list highestPersonality, with commas and ands. */
  /* assumes len highest personality >= 1 */
  var finalStr = "";
  if (highestPersonality.length == 1) {
    return highestPersonality[0];
  }
  for (var i = 0; i < highestPersonality.length - 1; i++) {
    finalStr = finalStr + highestPersonality[i] + ", ";
  }
  return finalStr + "and " + highestPersonality[highestPersonality.length - 1];
}

function setResultpage(results, highestPersonality) {
    // get the description of the personality and update the result page
    document.getElementById("personality-type").innerText =
      "You are best suited for " + prettyWithAnd(highestPersonality) + "!"; //todo: chaneg to accomodate ties


    // take care of highest personality:

     for (const [i, [trait, traitScore]] of Object.entries(Object.entries(score))) {
          document.getElementById("option" + i + "-title").textContent = "About " + trait;
          const optionNum = getOptionNum(traitScore);
          document.getElementById("option" + i + "-suitability").textContent = results[trait][optionNum];

          //set progress bar
          var barKey = "option"+ i + "-progress";
          var optionbar = document.getElementById(barKey);
          optionbar.style.width =  traitScore + "%";
          optionbar.innerText = traitScore.toFixed(1) + "%";

          //option0-info1 & 2
          if (optionNum != 0) {
            document.getElementById("option" + i + "-info1").textContent = results[trait][4];
            document.getElementById("option" + i + "-info2").textContent = results[trait][5];
          }
     }
     
}

// bring the particular page into view.
// page 0: start page
// page 1: result page
// page 2: quiz
function showPage(num) {
  var pages = document.getElementsByClassName("container");
  pages[0].style.display = "none";
  pages[1].style.display = "none";
  pages[2].style.display = "none";
  pages[num].style.display = "block";
}

function setUpTraitProgress(divName){
  var progress = shift + currentQn * shift;
  var progressbar = document.getElementById("progress");
  progressbar.style.width = progress + "%";
  progressbar.innerText = currentQn + 1 + "/" + numQuestions;
}
