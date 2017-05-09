jQuery(document).ready(function($) {
  console.log('Start Form Fields');
  if ($('input').length) {
    $('input').each(function() {
      //var phText = $(this).prev('label').text();
      var phText =$(this).prev('label').contents().get(0).nodeValue;
      console.log(phText);
      /*
      $(this).prop('placeholder', phTest);   
      $(this).focus(function() {
        $(this).prev('label').addClass('placeholder');
      });
      $('input').blur(function() {
        if($(this).val().length == 0) {
          $(this).prev('label').removeClass('placeholder');
        }
      });
      */
    });
  }
  console.log('End Form Fields');
});