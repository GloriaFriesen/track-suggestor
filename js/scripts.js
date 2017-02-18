$(document).ready(function(){

  $("#takeQuiz").click(function(){
    $(".quizForm").slideDown();
  });

  $(".quizForm").submit(function(){
    var nameInput = $("input#name").val();
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var totalScore = answer1 + answer2 + answer3;

    $(".name").text(nameInput);

    if (totalScore >2 && totalScore <= 4) {
      $(".css").slideDown();
      $(".cSharp, .java, .ruby, .error").hide();
    } else if (totalScore > 4 && totalScore <= 7) {
      $(".cSharp").show();
      $(".css, .java, .ruby").hide();
    } else if (totalScore > 7 && totalScore <= 10) {
      $(".java").show();
      $(".css, .cSharp, .ruby").hide();
    } else if (totalScore > 10 && totalScore <= 12){
      $(".ruby").show();
      $(".css, .cSharp, .java").hide();
    } else {
      $("#formSubmit").after("<p class='error'>Looks like you're missing something. Please complete the quiz.</p>")
      $(".css, .cSharp, .java, .ruby").hide();
    }

    event.preventDefault();
  });
});
