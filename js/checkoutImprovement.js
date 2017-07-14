/* Checkout Improvement Project */
/* Created 27/4/2017            */
/* Author: Andy Davies          */
/* Copyright: Hotter Shoes      */

console.log('checkoutImprovement start');
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
//Old Mobile Secure Footer Functions
jQuery(document).ready(function($) {
	if (jQuery('#WC_SingleShipmentShippingMethodDetails_div_1').length > 0)
	{
		jQuery('#WC_SingleShipmentShippingMethodDetails_div_1 > p:eq(0)').html('Please select one of the delivery options below')
	}

	//on reset options remove red banner
	jQuery(document).on('click', '#shipping_delivery_method_change', function () {
		jQuery("#SelecDelBan").css("display", "none");
	});

	//move red box if screen resized
	jQuery(window).resize(function() {
	if( jQuery("#shipping_delivery_method_option_desc").length > 0 ) {
	  var banposofftop2 = jQuery("#shipping_delivery_method_option_desc").offset().top + 30;
		var banposoffleft2 = jQuery("#shipping_delivery_method_option_desc").offset().left - 26;
		jQuery("#SelecDelBan").css({"top":banposofftop2+ "px","left":banposoffleft2+ "px","position": "absolute" });
	}
	});

	//Add time to click and collect message
	jQuery("label:contains('Collect in store')").html('Collect in store <span>Allow up to 7 days</span>')

	//change time of standard delivery
	jQuery("span:contains('Allow up to 5 Working days')").html("Allow 3-5 Working days");

	//remove shipping methods for SS
	if (jQuery(".address:contains('WN8 9PT')").length > 0)
	{
		jQuery('.shipping_method_item').eq(1).css('display','none')
		jQuery('.shipping_method_item').eq(2).css('display','none')
	}  

	jQuery('body').on('click', '#JSShippingId_10651', function () {
		//Set Red banner
		var banposofftop = jQuery("#shipping_delivery_method_option_desc").offset().top + 30;
		var banposoffleft = jQuery("#shipping_delivery_method_option_desc").offset().left - 26;
		jQuery("#SelecDelBan").css("display", "block");
		jQuery("#SelecDelBan").css({"top":banposofftop+ "px","left":banposoffleft+ "px","position": "absolute" });
	});

});


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
	console.log('Start Shipping Message changes');
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
	console.log('End Shipping Message changes');
});

console.log('checkoutImprovement end');