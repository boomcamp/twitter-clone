$(document).ready(function() {
  $(".actions").hide();

  //composeInput
  $("#composeInput").on("focus", function() {
    $(".input-button").hide();
    $(".actions").show();

    //textarea
    $("textarea").addClass("textarea.expanded");
    if (this.value != 0) {
      $(".actions").show();
      $(".post-tweet").removeAttr("disabled");
    }
    if (this.value > 0) {
      280 - this.value.lenght;
    }
  });

  $("#composeInput").on("blur", function() {
    $(".input-button").show();
    $(".actions").hide();
  });
});
