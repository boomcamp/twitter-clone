$("document").ready(function() {
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
      $("textarea").on("keyup", tweet);
      $(".input-container textarea").addClass("expanded");
      $("textarea").keyup(count);
   });

   function tweet() {
      if ($(this).val() != "") {
         $(".post-tweet").attr("disabled", false);
      } else {
         $(".post-tweet").attr("disabled", true);
      }
   }

   function count() {
      var tweetContent = $(this).val().length;
      $(".message-count").text(280 - tweetContent);

      if (tweetContent > 280 || tweetContent <= 0) {
         $(".post-tweet").attr("disabled", true);
      }
      if (tweetContent <= 280 && tweetContent >= 270) {
         $(".message-count").addClass("danger");
      } else {
         $(".message-count").removeClass("danger");
      }
   }

   $(".post-tweet").click(input);

   function input() {
      var tweet = $("textarea").val();
      $(".tweets").prepend(
         '<div class="tweet"><div class="profile"><img class="img-tweet-profile" src="img/damenleeturks.jpg" /></div><div class="message"><div class="posted-by"><span class="display-name">Jeff</span><span class="handle">@damenleeturks</span></div><div class="content"><p>' +
            tweet +
            '</p></div><div class="tweet-actions"><i class="far fa-comment"></i><i class="fas fa-retweet"></i><i class="far fa-heart"></i><i class="far fa-envelope"></i></div></div></div>'
      );
      $(".message-count").text(280);
      $("textarea").val("");
      $(".actions").hide();
      $(".input-container textarea").removeClass("expanded");
      $(".input-button").show();
      if ($("textarea").val() == "") {
         $(".post-tweet").attr("disabled", true);
      }
   }
});
