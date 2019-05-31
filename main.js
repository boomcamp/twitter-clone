$(document).ready(()=> {
    $('.actions').hide();

    $('#composeInput').on('focus', () => {
        $('#composeInput').addClass('expanded');
        $('.input-button').hide();
        $('.actions').show();
    })
    $('#composeInput').on('keyup', () => {
        $('.post-tweet').removeAttr('disabled')
    });

    $('#composeInput').on('keyup', event  => {
        var post = $(event.currentTarget).val();
        var remaining = 280 - post.length;
        if(remaining <= 10) {
            $('.message-count').addClass('danger')
        } else {
            $('.message-count').removeClass('danger')
        }
        $('.message-count').html(remaining);

    });
    
    $('#composeInput').on('focusout', event => {
       var checkLength = $(event.currentTarget).val();
       if(checkLength == 0) {
            $('.actions').hide();
            $('#composeInput').removeClass('expanded');
            $('.input-button').show();
       } else {
            $('.actions').show();
       }
    });
    
    $('.post-tweet').on('click', () => {
      var valtweet =  $('#composeInput').val();
      $clone = $('.tweet:first').clone();
      $("p", $clone).text(valtweet);
      $(".display-name", $clone).text('haceee');
      $(".handle", $clone).text('@haceremorosa');
      $('.tweets').prepend($clone);


      $('#composeInput').removeClass('expanded');
      document.getElementById('composeInput').value = '';
      $('.actions').hide();
      $('.input-button').show();
    })
    
});
