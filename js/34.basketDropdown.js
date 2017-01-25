/******************************************************************/
/* Cybertill Plugin (for Small Basket Dropdown)                   */
/* Author: Andy Davies                                            */
/* Created: 31.03.16                                              */
/* Amended:                                                       */
/* Dependencies: mobileNavBar (plugin)                            */
/*               subMenuDropdownrevbasketDropdown.css             */
/* Description: This js and css creates a dropdown effect for     */
/* small basket. It is designed only to work for desktop so the   */
/* For mobile devices there is just a link to the basket page.    */
/******************************************************************/
$(document).ready(function(){

  $('.ct_smallBasket').wrapAll('<div id="basketwrap">');//Creates #basketwrap
  //Wraps all of the small basket details to enable a drop-down 
  //(not included in basket function as this only needs to happen once)
  $('.ct_sb_items, .ct_sb_total, .ct_sb_links').wrapAll('<div id="basket-detail">');  
  basket(); //Function to slide-down basket on mouseover (see below)

});

/* Debounce function for window resize                                  */
/* As a responsive site might depend on resizing, the debounce function */
/* throtles functions firing on every pixel width change to a specified */
/* microsecond delay, vastly inproving performance                      */
var resizeBasket = debounce(function() {
  basket();
},250); //fire every 250 milliseconds
window.addEventListener('resize', resizeBasket);

/*Displays a drop down basket summary for desktops*/
function basket() {

  var ww = $(window).width();
  if (ww > 960) {
    $('.ct_smallBasket').mouseenter(function() {
      $('#basket-detail').stop(true, true).slideDown(300);
    })
    $('.ct_smallBasket').mouseleave(function() {
      $('#basket-detail').stop(true, true).slideUp(300);
    }) 
  } else {    
    $('.ct_smallBasket').unbind('mouseenter');
    $('.ct_smallBasket').unbind('mouseleave');
  }
}