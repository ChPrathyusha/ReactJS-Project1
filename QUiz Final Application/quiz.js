function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 

var questions = [
    new Question("1. What is the full form of Ajax?", ["Asynchronous JavaScript And XML", "Asynchronous jQuery And XML","Asynchronous JavaScript And XHTML", "Asynchronous jQuery And XHTML"], "Asynchronous JavaScript And XML"),
    new Question("2. In AJAX you can", ["Update a web page without reloading the page", "Receive data from a server - after the page has loaded","Send data to a server - in the background", "All of the above"], "All of the above"),
    new Question("3. What is the name of the object used for AJAX request?", ["HttpRequest", "xmlRequest", "XMLHTTPRequest", "Request"], "XMLHTTPRequest"),
    new Question("4. Ajax is a…", ["Programing Language", "Technology","OOPs concepts", "Options B and C"], "Technology"),
    new Question("5. Implementing AJAX in our websites we can make our web pages", ["More Dynamic", "More interactive and faster ", "More Responsive", "Easy to connect web page with server"], "More interactive and faster "),
    new Question("6. AJAX allows web page to dynamically", ["Change content", "Reload at times","Control other pages", "Connect to other addresses"], "Change content"),
    new Question("7. _____ Of the following technologies, which one provides the ability to dynamically interact with Web page layout?", ["XML", "HTML", "JavaScript", "Document Object Model"], "Document Object Model"),
    new Question("8. What does the XMLHttpRequest object accomplish in Ajax?", ["It provides the ability to asynchronously exchange data between Web browser and a Web server", "It's the programming language used to develop Ajax applications", "It provides the ability to markup and style the display of web-page text", "It provides a means of exchanging structured data between the Web server and client"], "It provides the ability to asynchronously exchange data between Web browser and a Web server"),
    new Question("9. What two main structures compose JSON?", ["Key and value", "Class and Object", "Arrays and Objects", "None of the above"], "Key and value"),
    new Question("10. Which is the correct format of writing a json name/value pair?", ["name == value", "name = value", "name : value", "All of the Above"], "name : value")
];
// var questions=null;
// function loaddata(){
//     const request = new XMLHttpRequest();
//  request.open("get","text.json")         
//  request.onload = () =>{
//      try{

//      questions=JSON.parse(request.responseText)
//      console.log(questions);
//      }
//      catch(e){
//          console.warn("could not load json");
//      }
//  };
//  request.send();

// }

// var questions;
// const request = new XMLHttpRequest();
//  request.open("get","test.json")         
//  request.onload = () =>{
//      try{
//         questions=JSON.parse(request.responseText)
//      console.log(questions)
//      generate(0,questions);
//      }
//      catch(e){
//          console.warn("could not load json");
//      }
//  };
//  request.send();
 


// var str = "";
// 			var pageNo = 0;
// 	    		var questions = new XMLHttpRequest();
// 	    		questions.open('GET', "test.json", true);
// 	    		questions.responseType = 'json';
// 	    		questions.onload = function() {
// 		      		var status = questions.status;
// 		      		if (status === 200) {
// 		        		callback(null, questions.response);
// 		        		alert(questions.response);
		        		
// 		    			}
		      		 
// 		    	};
// 		    	questions.send();

			



// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();