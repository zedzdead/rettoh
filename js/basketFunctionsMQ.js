jQuery( document ).ready(function() {
	checkSizeBag();
});

jQuery(window).resize(checkSizeBag);

function checkSizeBag(){
	if (jQuery(".product").css("width") == "350px" ){

		paypalupdate()
		function itemsvalues()
		{
			//Display pricing
			var avail_array = [];
			var qty_array = [];
			var price_array = [];
			var total_array = [];

			//Get general details
			jQuery( ".avail" ).each(function() {
				avail_array.push(jQuery(this).html());
			});

			jQuery( ".QTY" ).each(function() {
				qty_array.push(jQuery(this).html());
			});

			jQuery( ".each" ).each(function() {
				price_array.push(jQuery(this).html());
			});

			jQuery( ".total" ).each(function() {
				total_array.push(jQuery(this).html());
			});

			for ( var i = 0, l = price_array.length; i < l; i++ ) {
			    jQuery('.itemspecs:eq(' + i + ')').append('<div class="mobava">' + avail_array[i] + '</div>' + '<div>' + price_array[i] + '</div>' + '<div class="mobqty">' + qty_array[i] + '</div>' + '<div class="mobtot">' + total_array[i] + '</div>')
			}

			//display qty label
			jQuery('.item-quantity').find('label').css({
				'display':'block',
				'font-size':'24px',
				'float':'left',
				'padding-right':'15px',
				'line-height':'35px'
			});

			//remove item price
			jQuery( ".itemspecs" ).each(function() {
				jQuery(this).find('.price').eq(0).css('display','none')
				jQuery(this).find('.price').eq(1).css('float','left')
			});
		}

		function paypalupdate()
		{
			//update paypal btn
			jQuery('#guestPayPalContinue').find('img').attr('src','/wcsstore/HotterStorefrontAssetStore/content/images/myaccount/PayPal-Check-M.gif')
		}

		function createtopsummery()
		{
			//Top summery box
			gettotal = jQuery('.grandTotal').html()
			jQuery( "#breadcrumb" ).after('<div class="top_order_total">' + 'Order Total:' + '<span>' + gettotal + '</span>' + '</div>');
		}

		function updatetopsummery()
		{
			gettotal = jQuery('.grandTotal').html()
			jQuery( ".top_order_total" ).find('span').html(gettotal);
		}

		//make images bigger
		function bigimages()
		{
			jQuery( "img.product" ).each(function() {
				var mobileimgchg = jQuery(this).attr('src').replace('small','medium')
				jQuery(this).attr('src',mobileimgchg)
			});
		}

		function extrabuttons()
		{
			//Extra buttons
			if ( jQuery( "#secureCheckout" ).length ) {
	
			//create proceed button
			var topbutadd = jQuery('#secureCheckout').html()
			topbutadd = '<div class="top_sc_btn" style="float:right; padding-bottom:10px">' + topbutadd + '</div>'

			//create paypal button
			var topbutadd2 = jQuery('#payapalCheckout').html()
			topbutadd2 = '<div class="top_pp_btn" style="float:right; padding-bottom:10px">' + topbutadd2 + '</div>'
	
			//create top button set
			topbutaddtotal = topbutadd + topbutadd2
	
			//add top button set
			jQuery( "#breadcrumb" ).after(topbutaddtotal);
	
			//style top button set
			jQuery('.or').css({
				"display":"none"
			})
			}
			else
			{
				//create proceed button
				var topbutadd = jQuery('#WC_CheckoutLogonf_div_10').html()
				topbutadd = '<div class="top_sc_btn" style="float:right; padding-bottom:10px">' + topbutadd + '</div>'
		
				//add top button set
				jQuery( "#breadcrumb" ).after(topbutadd);
			}
		}

		function bagload()
		{
			if (jQuery('.mobava').length == 0)
			{
				itemsvalues()
				paypalupdate()
				bigimages()
				extrabuttons()
				createtopsummery()
			}
		}

		function bagupdate()
		{
			setTimeout(function(){
				if (jQuery('.mobava').length == 0)
				{
					itemsvalues()
					paypalupdate()
					updatetopsummery()
					bigimages()
				}
			}, 2000);
		}

		bagload()

    	var changing_bag = false;
        
        // when a product removed on page
		jQuery('body').on('click', '.remove_address_link', function(){
            if(changing_bag==false) {
                changing_bag = true;
                bag_change_listener();
            }
        });
		
		// when a product removed mini basket
		jQuery('body').on('click', '.deleteCartBtn', function(){
            if(changing_bag==false) {
                changing_bag = true;
                bag_change_listener();
            }
        });
		
		// when a Quantity is updated
		//jQuery('.item-quantity input').change(function(){
		jQuery('body').on('change', 'input', function(){
  			if(changing_bag==false) {
                changing_bag = true;
				console.log('Quantity is updated');
                bag_change_listener();
            }
		});
		
		// when and upsell is added
		jQuery('body').on('click', '.addToBagBtn', function(){
            if(changing_bag==false) {
                changing_bag = true;
                bag_change_listener();
            }
        });
		
		//when a promo is added
		jQuery('body').on('click', '.button_primary', function(){
            if(changing_bag==false) {
                changing_bag = true;
                bag_change_listener();
            }
        });
		
		// when a promo is removed
		jQuery('body').on('click', '#promotion_1', function(){
            if(changing_bag==false) {
                changing_bag = true;
                bag_change_listener();
            }
        });
    
    	// poll for change
    	function bag_change_listener()
    	{
			checkcount = 0;
        	bag_checker = setInterval(function() {
            	console.log("BAG waiting for change");
				if(jQuery( ".mobava" ).length == 0 && changing_bag == true) {
                	console.log("BAG change detected");
                	//clearInterval(bag_checker);
                	bagupdate();
                	changing_bag = false;
					
            	}
				if(checkcount > 15)
				{
					clearInterval(bag_checker);
				}
				checkcount++
				console.log(checkcount);
        	}, 500);
    	}
	}
	else
	{
		//update paypal btn
		jQuery('[id^="guestPayPalContin"]').each(function() {
			jQuery(this).find('img').attr('src','https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-small.png')
		});
		
		//remove qty label
		jQuery('.item-quantity').find('label').css({
			'display':'none',
			'font-size':'24px',
			'float':'left',
			'padding-right':'15px',
			'line-height':'35px'
		});
		
		jQuery('.or').css({
				"display":"block"
			})
			
		jQuery('.or').css({
			"float":"left",
			"margin":"0 10px",
			"height":"26px",
			"vertical-align":"middle",
			"font-size":"12px",
			"float":"right"})
	}
}