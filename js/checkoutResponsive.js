/*Comment for Phil 2*/
jQuery(document).ready(function($) {
	//Look for Checkout crumbs and set dev bar
	console.log('checkoutResponsive start');	
	if($('#checkout_crumb').length) {
		$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0');
		console.log('Add respco class with checkoutResponsive.js');
		$('body').addClass('respco');
		//$('body').prepend($('<div id="dev"></dev>'));
	}

	//Add Phone Number if not already there
	if($('.respco').length && !$('.sec-number').length) {
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

	//Add Currently searched for Post Code or Town*/
	//Add a clickable div to display opening times for click and collect - everything else done with css
	if($('table#bopis_table').length) {

		//Add Currently searched for Post Code or Town*/
		var place =  getQueryVariable('searchWordTownOrPostCode');
		if (place !== undefined) {
			var placedec = place.replace(/\+/g, ' ');
			$('#bopis_table ').prepend($('<caption>Stores nearest to ' + placedec + '.</caption>'));
		}

		$('.respco #bopis_table td:nth-child(2)').prepend($('<div class="opening-times">Open</div>'));
		$('.respco #bopis_table td:last-child > div').before($('<div class="closer">Close</div>'));	
		$('.opening-times').each(function() {
			$(this).click(function() {
				$('.slide').removeClass('slide');
				$(this).parent().next('td').addClass('slide');
			})
		});
		$('.closer').click(function() {
			$('.slide').removeClass('slide');
		});
	}

	if ($('#box > h1 > .button_primary').length) {
		var movebut = $('#box > h1 > .button_primary').removeAttr('style');
		$('#box > h1').after(movebut);
	}

	/*Add bespoke ceckout responsive footer */
	if ($('.respco').length) {
		$('.content_left_shadow').append('<div class="respfoot-guarantee"><h3><span class="mf-cent">100% </span><span class="mf-happy">Happy Promise </span><br><span class="mf-quality">Quality </span><span class="mf-guarantee">Guaranteed</span></h3><div class="respfoot-guarantee-copy">With our no quibble guarantee, your comfort is 100% guaranteed. If for any reason you are not totally delighted, simply return or exchange within 90 days of purchase, no problem.</div></div>');
	}

	console.log('checkoutResponsive end');	
	
});

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}