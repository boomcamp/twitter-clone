$(document).ready(function() {
  //initial state
  $(".actions").hide();
  $("#composeInput").on("focus", function() {
    $(".input-button").hide();
    $(".actions").show();
    $(this).addClass("expanded focus");

    //start on focus
    $(this).on("keypress", function() {
      if ($(this).val().length > 0) {
        $(".post-tweet").attr("disabled", false);
      } else {
        $(".post-tweet").attr("disabled", true);
      }
      //message-count
      let msgCount = $("#composeInput").attr("maxlength");
      msgCount -= $(this).val().length;
      $(".message-count").text(msgCount);
      if (msgCount <= 10) {
        $(".message-count").addClass("danger");
      } else {
        $(".message-count").removeClass("danger");
      }
    }); //on key press
  }); //on focus

  //start on blur
  $("#composeInput").on("blur", function() {
    if ($(this).val() === "") {
      $(".input-button").show();
      $(".actions").hide();
      $(this).removeClass("expanded");
    }
  }); //on blur
}); //document.ready.function
