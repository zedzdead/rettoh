$(document).ready(function() {
	if($('#ct_pd_productReviews').length) {
		$('#ct_pd_reviewLink').before($('#ct_pd_reviewFilter'));
		$('#ct_pd_reviewLink a').addClass('btn');
		$('#ct_pd_productReviews, #ct_pd_title, #ct_pd_reviewsList').wrapAll('<div id="cust-reviews" />');
		var stars = $('#avg').text().trim().split(' ')[0].replace('.','_');
		$('#avg').addClass('star_rating stars'+stars).text('');
		$('#ct_pd_title p').replaceWith('<h3>'+$('#ct_pd_title p').text()+'</h3>');
		$('#total').html('<a href="#ct_pd_title">'+$('#total').html()+'</a>').click(function() {
			$('#ct_pd_title, #ct_pd_reviewsList').slideToggle();
			return false;
		});
		if($('.ct_pd_rl_review_rating').length) {
			$('.ct_pd_rl_review_rating').each(function() {
				var stars = $(this).text().trim().split(' ')[0];
				$(this).addClass('star_rating stars'+stars+'_0').text('');				
			});
			$('.ct_pd_rl_review_from').each(function() {
				$(this).text($(this).text().replace('review by', '').trim());
				$(this).text($(this).text()+' ').append($(this).siblings('.ct_pd_rl_review_title').find('span'));
			});			
		}
	}
});