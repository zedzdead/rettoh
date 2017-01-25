$(document).ready(function() {
	$(function(){
		$('.ct_cm_menu').attr('id', 'menu');
		if($('#menu').length) {
			$(function() {
				$('#menu').slicknav({
					prependTo:'#navigationtop',
					label: 'Menu',
					allowParentLinks: true
				});
			});
		}
	});
});