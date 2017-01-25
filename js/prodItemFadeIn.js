$(document).ready(function() {

	if($('.ct_pd_item:visible .product_prev img').length) {
		$('.displayer').attr('src', $('.ct_pd_item:visible .product_prev img').attr('src').replace('.thumb.', '.')).fadeIn('slow');
	}

	var concat = out_of_stock();

	$( ".ct_pd_options_style select" ).unbind('change');
	$( ".ct_pd_options_style input" ).click(function() {

		$(this).attr('checked', 'checked');
		$('.oos').removeClass('oos');
		var concat = out_of_stock();

	  $('.ct_pd_item').hide();
	  $('#'+concat).fadeIn( 'slow');

	  /* Make the item image the main image */
		var selectedImagesrc = '/images/placeholder/no-image-found.jpg';
		var selectedImagealt = 'Image coming soon'
		if($('#'+concat+' .product_prev img').length) {
			$('.displayer').attr('src', $('#'+concat+' .product_prev img').attr('src').replace('.thumb.', '.')).fadeIn('slow');
			$('.displayer').parent().attr('href', $('#'+concat+' .product_prev img').attr('src').replace('.thumb.', '.')).fadeIn('slow');
		} else {
			//$('.displayer').attr('src', selectedImageSrc);
		}

		/*Reset the Magnifi Gallery*/
		//setGallery();

	});
});

function out_of_stock() {
	var concat = '';
	$('.oos').removeClass('oos');
	$('.is').removeClass('is');
	/* create an array of checked style values */
	var checked_styles = [];
	$('.ct_pd_options_style :radio:checked').each(function() {
		var item = $(this).attr('value');
		checked_styles.push($(this).attr('value'));		
		if (concat == '') {
			concat = concat + item;
		} else {
			concat = concat + '_' + item;
		}
	});

	/* Find out if there is an item for these styles  */
	/* Show the no styles warning if there are no items for the selected styles */
	if (!$('#'+concat).length) {
		$('#ct_pd_noStyle').show();
	} else {
		$('#ct_pd_noStyle').hide();
	}
	/* Find All out of stock items */	
	$('.ct_pd_item_availability_out.ct_pd_item_value').each(function() {
		/*Create an array of the style values for that item*/	
		var out_of_stock_item = $(this).parent().attr('id').split('_');
		/* Find the difference between the checked styles and the out of stock item*/
		var out_of_stock_style = out_of_stock_item.diff(checked_styles);
		if (out_of_stock_style.length == 1) { //Only make this style "out of stock"
			$('input[value=' + out_of_stock_style[0] + ']').parent().addClass('oos');
		} else if (out_of_stock_style.length == 0){ //Make all checked values "out of stock"
			for(var i = out_of_stock_item.length - 1; i >= 0; i--) {
				$('input[value=' + out_of_stock_item[i] + ']').parent().addClass('oos');	
			}
		}

		console.log('Checked: ' + checked_styles);
		console.log('Out of Stock Item: ' + out_of_stock_item);
		console.log('Difference:' + out_of_stock_style);

	});

	// Find All in stock items
	$('.ct_pd_item_availability_in.ct_pd_item_value').each(function() {
		//Create an array of the style values for that item
		var in_stock_item = $(this).parent().attr('id').split('_');
		// Find the difference between the checked styles and the in stock item
		var in_stock_style = in_stock_item.diff(checked_styles);
		if (in_stock_style.length == 1) { //Only make this style "out of stock"
			$('input[value=' + in_stock_style[0] + ']').parent().addClass('is');
		} else if (in_stock_style.length == 0){ //Make all checked values "in stock"
			for(var i = in_stock_item.length - 1; i >= 0; i--) {
				$('input[value=' + in_stock_item[i] + ']').parent().addClass('is');	
			}
		}

		console.log('Checked: ' + checked_styles);
		console.log('In Stock Item: ' + in_stock_item);
		console.log('Difference:' + in_stock_style);

	});	

	return concat;
}

function old_out_of_stock() {

	var concat = '';
	$('.ct_pd_options_style :radio:checked').each(function() {
		var item = $(this).attr('value');
		if (concat == '') {
			concat = concat + item;
		} else {
			concat = concat + '_' + item;
		}

	  /* For every checked value - find items out of stock containing that value and make the other values in that item oos */	
		$('.ct_pd_item_availability_out.ct_pd_item_value').each(function() {
			var out_of_stock_item = $(this).parent().attr('id').split('_');

			var oos_styles = true;
			console.log('concat: '+concat);
			console.log('Checked Item: '+item);
			console.log('Out of Stock Item: '+out_of_stock_item);
			for(var i = out_of_stock_item.length - 1; i >= 0; i--) {
					console.log('  ' + out_of_stock_item[i]);
			    if(out_of_stock_item[i] === item) {
			    		console.log('Matched Checked Item with oos item:    ' + out_of_stock_item[i]);
			      	out_of_stock_item.splice(i, 1);
			      	oos_styles = false;
			    }
			}
			if (oos_styles) {
				for(var i = out_of_stock_item.length - 1; i >= 0; i--) {
					$('input[id*=' + out_of_stock_item[i] + ']').parent().addClass('oos');
				}
			}
		});	

	});

	return concat; //Concat is the combined checkecd

}

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};