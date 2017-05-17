jQuery(document).ready(function($) {
	//Look for Checkout crumbs and set dev bar
	if($('#checkout_crumb').length) {
		console.log('This is Checkout');
		$('body').addClass('checkout');
		$('body').prepend($('<div id="dev"></dev>'));
	}
	//Add non breaking spaces to shipping option label text
	if($('.shipping_method_item_title').length) {
		$('.shipping_method_item_title label span').each(function() {
			$(this).html($(this).html().replace(/ /g, '&nbsp;'));
		});
	}
});