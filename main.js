function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;


    if (question1 == "Trzaskowski") {
        correct++;
    }


    if (question2 == "1596") {
        correct++;
    }

    if (question3 == "18") {
        correct++;
    }

    var messages = ["Świetna Robota", " Jest O.K.", "Musisz się pouczyć"];
    var pictures = ["img/win.gif", "img/meh.gif", "img/lose.gif"]

    var range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }

    if (correct > 2) {
        range = 0;
    }






    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];

    document.getElementById("number_correct").innerHTML = "You got  " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}