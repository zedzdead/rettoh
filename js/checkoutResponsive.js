jQuery(document).ready(function($) {
	console.log('Looking for crumbs');
	if($('#checkout_crumb').length) {
		console.log('This is Checkout');
		$('body').addClass('checkout');
		$('body').prepend($('<div id="dev"></dev>'));
	}
});