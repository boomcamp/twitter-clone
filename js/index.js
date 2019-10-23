$(document).ready(function() {
  //initial state
  $(".actions").fadeOut();
  //start on focus
  $("#composeInput").on("focus", function() {
    $(".input-button").hide();
    $(".actions").fadeIn();
    $(this).addClass("expanded");

    //start on input
    $(this).on("input", function() {
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
    }); //on input end
  }); //on focus end

  //on click tweet post
  $(".post-tweet").on("click", function() {
    var today = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(month[today.getMonth()]);
    var yyyy = today.getFullYear();
    var hr = String(today.getHours()).padStart(2, "0");
    var min = String(today.getMinutes()).padStart(2, "0");

    today = dd + " " + mm + " " + yyyy + " " + hr + ":" + min;
    console.log(today);
    let post = `<div class="tweet">
    <div class="profile">
      <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
    </div>
    <div class="message">
      <div class="posted-by">
        <span class="display-name">Jeff</span>
        <span class="handle">@jeffguy</span>
      </div>
      <div class="content">
        <p>${$("textarea[id*='composeInput']").val()}</p>
      </div>
      <div class="time">
          <p>Posted <time class="timeago" datetime="${today}"></time></p>
      </div>
      <div class="tweet-actions">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-envelope"></i>
      </div>
    </div>
  </div>`;
    $(".tweets").prepend(post);
    $("time.timeago").timeago();
    $(".actions").hide();
    $(".input-button").show();
    $("#composeInput")
      .removeClass("expanded")
      .val("");
    $(".message-count").text("280");
    $(".post-tweet").attr("disabled", true);
  });

  //start on blur
  $("#composeInput").on("blur", function() {
    if ($(this).val() === "") {
      $(".input-button").fadeIn();
      $(".actions").hide();
      $("#composeInput").removeClass("expanded");
    }
  }); //on blur end

  //toggle dark mode
  $(".inner-switch").on("click", function() {
    if ($("main").hasClass("dark")) {
      $("main").removeClass("dark");
      $(".inner-switch").text("OFF");
    } else {
      $("main").addClass("dark");
      $(".inner-switch").text("ON");
    }
  });
}); //document end
