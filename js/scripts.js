$(document).ready(function(){

  $("#takeQuiz").click(function(){
    $(".quizForm").show();
    event.preventDefault();
  });
  $("form").submit(function(){
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var totalScore = answer1 + answer2 + answer3;

    if (answer1 === 0 || answer2 === 0 || answer3 === 0) {
      $("button").after("<p>Please complete the quiz</p>")

    } else if (totalScore <= 4) {
      $(".css").show();
      $(".cSharp, .java, .ruby").hide();
    } else if (totalScore > 4 && totalScore <= 7) {
      $(".cSharp").show();
      $(".css, .java, .ruby").hide();
    } else if (totalScore > 7 && totalScore <= 10) {
      $(".java").show();
      $(".css, .cSharp, .ruby").hide();
    } else {
      $(".ruby").show();
      $(".css, .cSharp, .java").hide();
    }
  });
});
