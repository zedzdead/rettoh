/* Checkout Improvement Project */
/* Created 27/4/2017            */
/* Author: Andy Davies          */
/* Copyright: Hotter Shoes      */

/*WS-2206 Click and collect Store Locator radio buttons*/
jQuery(document).ready(function($) {
	$('tr').click(function() {
	  $(this).find('input:radio').prop('checked', true);
	  $('tr').removeClass('collect');
	  $(this).addClass('collect');
	  $(this).find('td:nth-child(2)').append($('#WC_CheckoutStoreSelection_div_8').fadeIn('slow'));  
	});
});

jQuery(document).ready(function($) {
	if($('#shipping_delivery_method_option').length) {
		$('#shipping_delivery_method_option').click(function() {
			$('#WC_SingleShipmentShippingMethodDetails_div_1 p').toggleClass('addresstoggle');
		});
	}
});