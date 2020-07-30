// num questions
const totalAvailableQuestions = Object.keys(questions).length;
const questionsWantToAsk = 3; // change if needed
const numQuestionsToAsk = Math.min(questionsWantToAsk, totalAvailableQuestions);
const shift = 100 / numQuestionsToAsk;
const numNonOptionItems = 2; //num of non option items in the question.

// num of questions answered correctly
var numCorrect = 0;

// for keeping track of the score
var totalScore = 0;

// for keep track of the current question number
var currentQn = 0;

// keeps track of the number of completed questions
var numCompletedQuestions = 0;

// list of deleted questions
var deletedQuestionsList = [];

// current question
var qn;

function pickQuestion() {
    //select random num from 0 to numTotQs - 1
    return Math.floor(Math.random() * (numQuestionsToAsk - numCompletedQuestions));  
}

function pickDiplomat() {
    //select random num from 0 to numTotQs - 1
    return collectibleDiplomats[Math.floor(Math.random() * collectibleDiplomats.length)];  
}

// for setting up each of the questions
function setupQuestion() {
  // find out the current percentage of completion and updates the css
  var progress = shift + numCompletedQuestions * shift;
  var progressbar = document.getElementById("progress");
  progressbar.style.width = progress + "%";
  progressbar.innerText = numCompletedQuestions + 1 + "/" + numQuestionsToAsk;

  //select a random question to ask:
  currentQn = pickQuestion(numQuestionsToAsk - numCompletedQuestions);
  qn = questions[currentQn];
  //remove question from list to avoid repitition
  deletedQuestionsList.push(questions.splice(currentQn, 1));;

  var qnText = document.getElementById("question");
  qnText.innerText = qn.question;


  var numOptions = Object.keys(qn).length - numNonOptionItems;
  // updates each of the options for the current question
  for (var i = 0; i < numOptions; i++) {
    var option = document.getElementById("option" + i);
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

// checks if option is correct choice
function isCorrectChoice(questions, selectedOption) {
  return questions.correctOption == selectedOption;

}

// to select the option that is clicked
function select(element) {
  // check if the option requires an alert message to be sent
  // let ans = $("input[name=answer]:checked").val();
  // var displayAlert = questions["question" + currentQn]["option" + ans].isAlertOption;
  var btn = element.getElementsByTagName("input")[0];
  btn.checked = true;
  var selectedOption = $("input[name=answer]:checked").val();

  var btn = element.getElementsByTagName("input")[0];
  btn.checked = true;

  next();
  
}

function moveToQnList(item, _) 
{ 
  // moves item from list to questions list
  console.log(item);
  questions.push(item[0]);
    
}

// get the next questions, or display result if all questions were answered
function next() {
  // get the current select option
  var selectedOption = $("input[name=answer]:checked").val();


  //Check if answer is correct
  if (isCorrectChoice(qn, selectedOption)){
    //increment points
    totalScore += 1;
    numCorrect += 1;
    //display message about correct answer

  } else {
    // decrement points
    totalScore -= 1;
     //display message about wrong answer + what the correct answer was
     alert('Oh no! The correct answer is ' + qn["option"+qn.correctOption].content);
  }

  //display score
  document.getElementById("running-score").innerText = "  Score: " + totalScore + "  "; 
  console.log("# questions list is " + questions);
  numCompletedQuestions += 1;
  
  // unselect all options
  resetOptions();

  // check if quiz is completed
  if (numCompletedQuestions < numQuestionsToAsk) {
    // if quiz not completed, setup the next question
    setupQuestion();
  } else {
    // else quiz is completed
    setResultpage();

    // set question count to 0 so that when the user wishes to retry, the quiz is on the right question count
    currentQn = 0;
    numCompletedQuestions = 0;
    //restore deleted questions
    deletedQuestionsList.forEach(moveToQnList);
    deletedQuestionsList = [];
    //reset score
    totalScore = 0;
    numCorrect = 0;

    showPage(1);
  }
}

function pointOrPoints(totalScore){
  if (totalScore == 1) {
    return " point";
  }
  return " points";
}

function getDescription(correctPercentage) {
  //returns description for score
  clearCollectibleDiplomat();
  var description;
  if (correctPercentage < 50) {
    description = "Feel free to try again and increase your score in order to get a surprise collectible diplomat! Remember - go around the room to learn more about diplomacy so that you can get a higher score!";
  } else if (correctPercentage < 80) {
    description = "That's a pretty decent score! Play again to increase your score.You'll get a surprise collectible diplomat if you cross 80%! Remember - go around the room to learn more about diplomacy so that you can get a higher score!";
  } else {
    description = "Congratulations! You've earned yourself a collectible diplomat! Play again to collect all 15 of them! Gotta get them all!";
    getCollectibleDiplomat();
  }
  return description;
}

function getCollectibleDiplomat() {
  //returns a collectible diplomat for high scores
  var htmlStr = "<img src='" + pickDiplomat() + "'>";
  document.getElementById("collectible-diplomat").innerHTML = htmlStr;
}

function clearCollectibleDiplomat() {
  //returns a collectible diplomat for high scores
  var htmlStr = "";
  document.getElementById("collectible-diplomat").innerHTML = htmlStr;
}
function setResultpage() {
    // get the description of the personality and update the result page
    document.getElementById("score").innerText =
      "You scored a total of " + totalScore + pointOrPoints(totalScore)+ "!"; //todo: chaneg to accomodate ties

    const correctPercentage = (numCorrect * 100 / numQuestionsToAsk).toFixed(2);
      

    document.getElementById("score-description").innerText = "With a score of " + totalScore + ", you answered " + correctPercentage + "% of questions correctly! ";

    document.getElementById("score-description-2").innerText =
      getDescription(correctPercentage);


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

