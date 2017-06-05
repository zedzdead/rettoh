/* Checkout Improvement Project */
/* Created 27/4/2017            */
/* Author: Andy Davies          */
/* Copyright: Hotter Shoes      */

//Replaced below
/*
jQuery(document).ready(function($) {
	if($('#bopis_table').length) {
		$('tr').click(function() {
		  $(this).find('input:radio').prop('checked', true);
		  $('tr').removeClass('collect');
		  $(this).addClass('collect');
		  $(this).find('td:nth-child(2)').append($('#WC_CheckoutStoreSelection_div_8').fadeIn('slow'));  
		});
	}
});
*/
/*WS-2206 Click and collect Store Locator radio buttons*/
jQuery(document).ready(function($) {
	console.log('Start Click and collect Labels');
	if($('#bopis_table').length) {
		//Add a label element for each radio button
		$('#bopis_table input[type="radio"]').each(function() {
			var name   = $(this).attr('name');
			var ps_val = $(this).val();

			$(this).attr('id', name + '-' + ps_val);
			$(this).before($('<label class="full-line" for="' + name + '-' + ps_val +'">Branch</label>'));
		});
		//Find the selected branch and contextually add the continue button 
		$('#bopis_table input[type="radio"]').change(function() {
		//$('#bopis_table label').click(function() {	
			//$('#WC_CheckoutStoreSelection_div_8').hide();
			$('tr').removeClass('selected');
			$(this).parentsUntil('tbody').addClass('selected');
			$('.selected td:nth-child(2)').append($('#WC_CheckoutStoreSelection_div_8'));
		});
	}
	console.log('End Click and Collect Labels');
});

/*WS-2237 Address Finder - "Please enter an Address" persists after use*/
jQuery(document).ready(function($) {
	if($('.shipping_method_item label').length) {
		$('.shipping_method_item label').click(function() {
			setTimeout(function(){ $('#WC_SingleShipmentShippingMethodDetails_div_1 > p').toggleClass('msghide'); }, 2000);
			//$('#WC_SingleShipmentShippingMethodDetails_div_1 > p').toggleClass('msghide');			
		});
		$('#shipping_delivery_method_change').click(function() {
			setTimeout(function(){ $('#WC_SingleShipmentShippingMethodDetails_div_1 > p').toggleClass('msghide'); }, 2000);
			//$('#WC_SingleShipmentShippingMethodDetails_div_1 > p').toggleClass('msghide');
		});
	}
});