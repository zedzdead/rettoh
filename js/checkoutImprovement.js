/* Checkout Improvement Project */
/* Created 27/4/2017            */
/* Author: Andy Davies          */
/* Copyright: Hotter Shoes      */
jQuery(document).ready(function($) {
	$('tr').click(function() {
	  $(this).find('input:radio').prop('checked', true);
	  $('tr').removeClass('collect');
	  $(this).addClass('collect');
	  $(this).find('td:nth-child(2)').append($('#WC_CheckoutStoreSelection_div_8').fadeIn('slow'));  
	});
});