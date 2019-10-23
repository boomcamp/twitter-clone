$("document").ready(function() {
   var max = parseInt($("textarea").attr("maxlength"));

   $(".actions").hide();
   $(".input-container textarea").blur(function() {
      if ($(".input-container textarea").val() == "") {
         $(".actions").hide();
         $(".input-container textarea").removeClass("expanded");
         $(".input-button").show();
      }
   });

   $(".input-container textarea").focus(function() {
      $(".actions").show();
      $(".input-button").hide();
      $("textarea").on("keypress input", tweet);
      $(".input-container textarea").addClass("expanded");
      $("textarea").on("keypress input", count);
   });

   $("#dark-mode").on("click", darkMode);

   function tweet() {
      if ($(this).val() != "") {
         $(".post-tweet").attr("disabled", false);
      } else {
         $(".post-tweet").attr("disabled", true);
      }
   }

   function count() {
      $(".message-count").text(max);
      var total = max - $("textarea").val().length;

      $(".message-count").text(total);

      if (total <= 10) {
         $(".message-count").addClass("danger");
      } else {
         $(".message-count").removeClass("danger");
      }

      if ($("textarea").val() != "") {
         $(".post-tweet").attr("disabled", false);
      } else {
         $(".post-tweet").attr("disabled", true);
      }
   }

   $(".post-tweet").click(input);

   function input() {
      var tweet = $("textarea").val();
      $(".tweets").prepend(
         '<div class="tweet"><div class="profile"><img class="img-tweet-profile" src="img/jennyshen.jpg" /></div><div class="message"><div class="posted-by"><span class="display-name">Jenny</span><span class="handle">@jennyshen</span></div><div class="content"><p>' +
            tweet +
            '</p></div><div class="tweet-actions"><i class="far fa-comment"></i><i class="fas fa-retweet"></i><i class="far fa-heart"></i><i class="far fa-envelope"></i></div></div></div>'
      );

      $("textarea").val("");
      $(".actions").hide();
      $(".input-container textarea").removeClass("expanded");
      $(".input-button").show();
      if ($("textarea").val() == "") {
         $(".post-tweet").attr("disabled", true);
      }
      $(".message-count").text(280);
   }

   function darkMode() {
      if ($("input[type=checkbox]").prop("checked")) {
         $(".compose").addClass("dark-color");
         $(".tweets").addClass("dark-color");
         $(".toggle-switch").addClass("dark-color border-top");
         $(".dMode-text").text("LIGHT MODE");
      } else {
         $(".compose").removeClass("dark-color");
         $(".tweets").removeClass("dark-color");
         $(".toggle-switch").removeClass("dark-color border-top");
         $(".dMode-text").text("DARK MODE");
      }
   }
});
