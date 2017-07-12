/*Comment for changed at 12:54 12/07/2017*/
jQuery(document).ready(function($) {
	//Look for Checkout crumbs and set dev bar
	console.log('checkoutResponsive start');

	if($('#checkout_crumb').length) {
		$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0');
		console.log('Add respco class with checkoutResponsive.js');
		$('body').addClass('respco');
		//$('body').prepend($('<div id="dev"></dev>'));
	}

	//Get the Country
	var storeId = getQueryVariable('storeId');
	//Add Phone Number if not already there
	if($('.respco').length && !$('.sec-number').length) {
		console.log('Add Phone number for ' + storeId);
		var phone = '0800 306 406';
		if (storeId == '10152') {        //US
			phone = '1 866 378 7811';
		} else if (storeId == '10153') { //DE
			phone = '0800 990 0660'; 
		}
		$('.mobilelogo').prepend($('<div class="sec-number"><div class="sec-call">Call Today :</div><div id="sec-num" class="sec-num">' + phone + '</div></div>'));
	}

	if($('.respco').length && storeId == '10152') {
		console.log('USA');
		//All Gary's old code
		$('span:contains("Allow up to 10 Working days")').html('Allow up to 14 days')

		//on reset options remove red banner
		$(document).on('click', '#shipping_delivery_method_change', function () {
			$("#SelecDelBan").css("display", "none");
		});

		//move red box if screen resized
		$(window).resize(function() {
		  var banposofftop2 = jQuery("#shipping_delivery_method_option_desc").offset().top + 30;
			var banposoffleft2 = jQuery("#shipping_delivery_method_option_desc").offset().left - 26;
			$("#SelecDelBan").css({"top":banposofftop2+ "px","left":banposoffleft2+ "px","position": "absolute" });
		});

		jQuery('body').on('click', '#JSShippingId_12951', function () {
			//Set Red banner
			var banposofftop = jQuery("#shipping_delivery_method_option_desc").offset().top + 30;
			var banposoffleft = jQuery("#shipping_delivery_method_option_desc").offset().left - 26;
			$("#SelecDelBan").css("display", "block");
			$("#SelecDelBan").css({"top":banposofftop+ "px","left":banposoffleft+ "px","position": "absolute" });
		});		
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

	//Add bespoke ceckout responsive footer
	//Script replaces non-checkout footer for sign-in page.  All other checkout pages use Secure Mobile Footer in MC
	if ($('.respco').length) {
		console.log('add mobile footer');
		/*
		$('.content_left_shadow').append('<div class="respfoot-guarantee"><h3><span class="mf-cent">100% </span><span class="mf-happy">Happy Promise </span><br><span class="mf-quality">Quality </span><span class="mf-guarantee">Guaranteed</span></h3><div class="respfoot-guarantee-copy">With our no quibble guarantee, your comfort is 100% guaranteed. If for any reason you are not totally delighted, simply return or exchange within 90 days of purchase, no problem.</div></div>');
		if ($('#cards_and_security').length) {
			$('.respfoot-guarantee').after($('#cards_and_security'));
		} else {
			$('.content_left_shadow').append('<div id="cards_and_security"><div class="inline-block cardcontainer"><div class="copy">Payment Options:</div><div class="inline-block card payment_sprite payment-MasterCard-icn lazy_slow" style="display: inline-block; background-image: url(&quot;/wcsstore/HotterStorefrontAssetStore/content/images/sprites/payment.gif&quot;); overflow: hidden;"></div><div class="inline-block card payment_sprite payment-Visa-icn lazy_slow" style="display: inline-block; background-image: url(&quot;/wcsstore/HotterStorefrontAssetStore/content/images/sprites/payment.gif&quot;); overflow: hidden;"></div><div class="inline-block card payment_sprite payment-VisaElec-icn lazy_slow" style="display: inline-block; background-image: url(&quot;/wcsstore/HotterStorefrontAssetStore/content/images/sprites/payment.gif&quot;); overflow: hidden;"></div><div class="inline-block card payment_sprite payment-Maestro-icn lazy_slow" style="display: inline-block; background-image: url(&quot;/wcsstore/HotterStorefrontAssetStore/content/images/sprites/payment.gif&quot;); overflow: hidden;"></div><div class="inline-block card payment_sprite payment-PayPal-icn lazy_slow" style="display: inline-block; background-image: url(&quot;/wcsstore/HotterStorefrontAssetStore/content/images/sprites/payment.gif&quot;); overflow: hidden;"></div></div><div class="inline-block securitycontainer"><div class="inline-block security"><script type="text/javascript" src="https://seal.thawte.com/getthawteseal?host_name=www.hotter.com&amp;size=L&amp;lang=en"></script></div><div class="inline-block security"><a href="https://www.securitymetrics.com/site_certificate?id=1152229&amp;tk=0fdf7138da449e815ab12b26f88eb331" target="_blank"><div class="security_sprite security-identity_theft_protected lazy_slow" style="display: block; background-image: url(&quot;/wcsstore/HotterStorefrontAssetStore/content/images/sprites/security.gif&quot;); overflow: hidden;"></div></a></div><div class="inline-block security"><a href="https://www.securitymetrics.com/site_certificate?id=1152229&amp;tk=0fdf7138da449e815ab12b26f88eb331" target="_blank"><div class="security_sprite security-sm_ccsafe_check1 lazy_slow" style="display: block; background-image: url(&quot;/wcsstore/HotterStorefrontAssetStore/content/images/sprites/security.gif&quot;); overflow: hidden;"></div></a></div></div></div>');
		}
		*/
		
		if ($('#FooterHold').length) {
			var cardsandsecurity = $('#cards_and_security');
			$('.footer_wrapper_position').children().remove();
			$('.footer_wrapper_position').append('<div class="respfoot-guarantee"><h3><span class="mf-cent">100% </span><span class="mf-happy">Happy Promise </span><br><span class="mf-quality">Quality </span><span class="mf-guarantee">Guaranteed</span></h3><div class="respfoot-guarantee-copy">With our no quibble guarantee, your comfort is 100% guaranteed. If for any reason you are not totally delighted, simply return or exchange within 90 days of purchase, no problem.</div></div>');
			$('.footer_wrapper_position').append(cardsandsecurity);
		}
			 		
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