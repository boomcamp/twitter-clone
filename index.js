$(document).ready(() => {
  const $inputBtn = $(".input-button");
  $(".actions").hide();

  $("#composeInput").focus("click", () => {
    $(".actions").show();
    $(".input-button").hide();
    $("#composeInput").addClass("expanded");
  });

  $("#composeInput").focusout(() => {
    if ($("#composeInput").val().length <= 0) {
      $(".actions").hide();
      $("#composeInput").removeClass("expanded");
      $(".input-button").show();
    }
  });

  $("#composeInput").on("input", () => {
    var maxlength = $("#composeInput").attr("maxlength");
    var txtLength = $("#composeInput").val().length;
    var messageCounter = maxlength - txtLength;
    $(".message-count").html(messageCounter);

    if (messageCounter <= 10) {
      $(".message-count").addClass("danger");
    } else {
      $(".message-count").removeClass("danger");
    }
    if ($("#composeInput").val().length >= 0) {
      $(".post-tweet").removeAttr("disabled");
    }
  });

  $(".tweets").on("click", () => {
    var $textCounter = $("#composeInput").val().length;

    if ($textCounter == 0) {
      $("#composeInput").removeClass("expanded");
      $(".actions").hide();
      $(".input-button").show();
    }
  });

  var $btnTweet = $(".post-tweet");

  $btnTweet.on("click", () => {
    var $twt = $("#composeInput").val();
    var $newTweet =
      '<div class="tweet">' +
      '<div class="profile">' +
      '<img class="img-tweet-profile" src="img/damenleeturks.jpg" />' +
      "</div>" +
      '<div class="message">' +
      '<div class="posted-by">' +
      '<span class="display-name">Jeff</span>' +
      '<span class="handle">@jeffguy</span>' +
      "</div>" +
      '<div class="content">' +
      "<p>" +
      $twt +
      "</p>" +
      "</div>" +
      '<div class="tweet-actions">' +
      '<i class="far fa-comment"></i>' +
      '<i class="fas fa-retweet"></i>' +
      '<i class="far fa-heart"></i>' +
      '<i class="far fa-envelope"></i>' +
      "</div>" +
      "</div>" +
      "</div>";

    $(".tweets").prepend($newTweet);
    $("#composeInput").removeClass("expanded");
    $(".input-button").show();
    $("#composeInput").val("");
    $(".message-count").text(280);
    $(".post-tweet").prop("disabled", true);
    $(".actions").hide();
  });
});
