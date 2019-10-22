$(document).ready(function() {
  $(".actions").hide();
  $("#composeInput").on("focus", function() {
    $(".input-button").hide();
    $(".actions").show();
    $(this).addClass("expanded");

    //textarea
    var msgCount = document.getElementsByClassName("message-count");

    $(this).on("keypress", function() {
      if ($(this).val().length > 0) {
        $(".post-tweet").attr("disabled", false);
      } else {
        $(".post-tweet").attr("disabled", true);
      }
    });
  });

  $(this).on("input", function() {
    if (msgCount.innerHtml > 0) {
      $(msgCount).innerText - $(this).val().length;
    } else if (msgCount.innerHtml <= 10) {
      msgCount.addClassList("danger");
    } else {
      msgCount.removeClassList("danger");
    }
  });

  $("#composeInput").on("blur", function() {
    if ($(this).val() === "") {
      $(".input-button").show();
      $(".actions").hide();
      $(this).removeClass("expanded");
    }
  });
});
