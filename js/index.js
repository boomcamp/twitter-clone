$(document).ready(function() {
  $(".actions").hide();
  $("#composeInput").on("focus", function() {
    $(".input-button").hide();
    $(".actions").show();
    $("textarea").addClass("");

    if (this.value != "") {
      $(".post-tweet").removeAttr("disabled");
    }
    if (this.value > 0) {
      $(".actions").show();
    }
  });
  $("#composeInput").on("blur", function() {
    $(".input-button").show();
    $(".actions").hide();
  });
});
