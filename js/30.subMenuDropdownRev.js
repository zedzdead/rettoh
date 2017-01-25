/******************************************************************/
/* Cybertill Plugin                                               */
/* Author: Andy Davies                                            */
/* Created: 12.12.15                                              */
/* Amended:                                                       */
/* Dependencies: subMenuDropdownrev.css                           */
/* Description: This js and css reverses the direction that the   */
/* sub-menus for those top level menu items on the right hand side*/
/* of the viewport.                                               */
/******************************************************************/
$(document).ready(function() {
	$('.ct_cm_menu > li').hover(function() {
		$(this).removeClass('menu-reverse');		
		$(this).children('ul').each(function() {
			var windoww = $(window).width();
			var offset = $(this).offset();
			if (offset.left > (windoww/2)) {
				$(this).addClass('menu-reverse');
			}
		});
	});
});