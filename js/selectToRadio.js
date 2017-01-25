$(document).ready(function() {
  //Get Exising Select Options    
  $('.ct_pd_options_style select').each(function(i, select){
    var styleType = $(this).siblings('label').text().replace(' ', '_');   
    var $select = $(select);
    $select.find('option').each(function(j, option){
      var $option = $(option);
      // Create a radio:
      var $radio = $('<input type="radio" />');
      if ($option.val() > 0) { //Don't include the "Select" default value
        var $divwrap = $('<div />').addClass($select.attr('name') + $option.attr('value'));
        // Set name and value:
        $radio.attr('name', $select.attr('name')).attr('value', $option.val()).attr('id', $select.attr('name') + $option.val());
        //$radio.attr('name', $select.attr('name')).attr('id', $option.val());
        // Set checked if the option was selected
        if ($option.attr('selected')) $radio.attr('checked', 'checked');

        // Insert radio before select box:
        $select.before($divwrap);
        $divwrap.append($radio);

        // Insert a label:
        $divwrap.append($("<label />").attr('for', $select.attr('name') + $option.attr('value')).text($option.text()).addClass($option.text().replace(' ', '_').toLowerCase()));

        switch (styleType) {
          case 'Colour':
              colours = Colour;
              break;
          case 'Paint_Colour':
              colours = Paint_Colour;
              break;
          case 'Barrel_Colour':
              colours = Barrel_Colour;
              break;
          case 'FF_Colour':
              colours = FF_Colour;
              break;
          case 'Ink_Colour':
              colours = Ink_Colour;
              break;
          case 'Paper_Colour':
              colours = Paper_Colour;
              break;
          case 'SN_Colour':
              colours = SN_Colour;
          default: 
              colours = '';
        }
          
        if (typeof colours[$option.text()] !== 'undefined') {
          var bg = colours[$option.text()];
          if (bg == '') {
            bg = 'url(/webbuild/layout/no-colour.jpg) no-repeat center center transparent';
          } else if (bg.substring(0,6) == 'itembg') {
            bg = 'url(/' + bg + ') no-repeat center center transparent';
          }
          console.log(bg.substring(0,5));
          $divwrap.find('label').prepend($('<span style="background: '+bg+'"></span>'));
        } 

      }

    });
    $select.remove();
  });

  /*Hide all styles with only one option*/
  $('.ct_pd_options_style').each(function() {
    if ($(this).find('input').length < 2) {
      $(this).addClass('onlyone');
    }
  });

});