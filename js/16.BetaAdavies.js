$(document).ready(function(){

  //Wrap the basket, login link, wishlist link and append a placeholder for seach on mobile devices
  //$('.ct_smallBasket').wrapAll('<div id="basketwrap">');//Creates #basketwrap
  $('#basketwrap, .ct_loginLink.ct_link_module, .ct_wishlistLink.ct_link_module').wrapAll('<div id="navigationtop">'); //Creates #navigationtop
  $('#navigationtop').append('<div id="navsearch" />');

  $('.ct_ac_search_go input').attr('value', 'Search');  
  //#navsearch is only displayed on mobile, so the slide down search box only occurs on mobile devices
  if ($('#navsearch').length) { //#navsearch is bespoke
    $('#navsearch').click(function(event) {
      event.stopPropagation();
      $('.ct_ac_search').slideToggle();
    });
  }

});

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};