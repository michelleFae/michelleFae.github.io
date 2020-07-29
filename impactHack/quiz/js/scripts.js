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
    var highestPersonality;

    // todo edge case: ties

    //normalizes scrore+get highest
    for (var [key, value] of Object.entries(score)) {
      console.log("val for " + key + " is " + value);
      console.log("maxscore for " + key + " is " + maxScores[key]);
      score[key] = value * 100 / maxScores[key];
      console.log("score for " + key + " is " + value);
      console.log("score[key] for " + key + " is " + score[key]);
      value = score[key];
      if (highestScore < value) {
        highestScore = value;
        highestPersonality = key;
      }
    }

    return [highestScore, highestPersonality];
}

function setResultpage(results, highestPersonality) {

    // get the description of the personality and update the result page
    var personalityResult = results[highestPersonality];
    document.getElementById("personality-type").innerText =
      highestPersonality;
    document.getElementById("personality-part-1").textContent =
      personalityResult[0];
    document.getElementById("personality-part-2").innerText =
      personalityResult[1];
    document.getElementById("personality-recommended").innerText =
      personalityResult[2];
      //todo: create progress bars for each thing in result if showAll flag is true

    console.log("results is "+ results);
    console.log("results.keys.len is "+ Object.keys(results).length);
    console.log("results.keys.len is "+ results.length);

    // show bar
    for (const [i, [trait, traitScore]] of Object.entries(Object.entries(score))){
      console.log("i is "+ i);
      var barKey = "option"+ i + "-progress";
      var optionbar = document.getElementById(barKey);
      console.log("score[key] for " + trait + " is " + score[trait]);
      //var normalizedScore = (traitScore / 160) * 100  ; //todo: change hardcoded 80 // change 
      // console.log("normalizedScore is "+ normalizedScore);
      optionbar.style.width =  traitScore + "%";
      optionbar.innerText = traitScore.toFixed(0) + "%";
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
