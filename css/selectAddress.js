jQuery(document).ready(function($) {
	if($('.addressDetailInner').length) {
		$('.addressDetailInner').each(function() {
			var address_id = $(this).attr('id').split('_')[1];
			alert(address_id);
			$('.addressDetailInner').after('<label for="address_select">Select</label><input type="radio" name="address_select" value="'address_id'"/>');
		});
	}
});