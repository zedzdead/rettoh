jQuery(document).ready(function($) {
  if ($('input').length) {
    $('input').each(function() {
      $(this).focus(function() {
        $(this).prev('label').addClass('placeholder');
        var phText = $(this).prev('label').text();
        $(this).prop('placeholder', phText);
      });
      $('input').blur(function() {
        if($(this).val().length == 0) {
          $(this).prev('label').removeClass('placeholder');
        }
      });
    });
  }
});