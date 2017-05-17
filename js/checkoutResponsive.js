jQuery(document).ready(function($) {
	if($('#checkout_crumb').length) {
		$('body').addClass('checkout');
		$('body').prepend($('<div id="dev"></dev>'));
	}
});