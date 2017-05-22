jQuery(document).ready(function($) {
	//Look for Checkout crumbs and set dev bar
	if($('#checkout_crumb').length) {
		console.log('This is Checkout');
		$('body').addClass('checkout');
		$('body').prepend($('<div id="dev"></dev>'));
	}
	if($('.checkout').length && !$('.sec-number').length) {
		console.log('Add Phone number');
		$('.mobilelogo').prepend($('<div class="sec-number"><div class="sec-call">Call Today :</div><div id="sec-num" class="sec-num">0800 306 406</div></div>'));
	}
	//Add non breaking spaces to shipping option label text
	if($('.shipping_method_item_title').length) {
		$('.shipping_method_item_title label span').each(function() {
			$(this).html($(this).html().replace(/ /g, '&nbsp;'));
			//$(this).html($(this).html().replace(/-/g, '&#8288'));
		});
	}
	//Move the button to change selected shipping option
	if($('#shipping_delivery_method_option').length) {
		$('#shipping_delivery_method_option').append($('#shipping_delivery_method_option a'));
	}
	//Move Selected Delivery option and change link to below main call to action
	if($('#shipAddressSelect').length) {
		$('#shipAddressSelect').append($('#shipping_delivery_method_option'));
	}
});