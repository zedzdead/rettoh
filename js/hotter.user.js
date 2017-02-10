// ==UserScript==
// @name        hotter
// @namespace   hotter
// @description First Pass
// @include     http://www.hotter.com
// @version     1
// @grant       none
// ==/UserScript==
//alert('hi');
jQuery(document).ready(function() {
	//alert('jQ');
	//jQuery('body').addClass('zoom');
	jQuery('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1');
	//jQuery('link[rel=stylesheet').remove();

	//jQuery('head').append('<link href="https://zedzdead.github.io/rettoh/css/99.BetaResponsive.css" rel="stylesheet" />');
	jQuery('head').append('<link href="https://zedzdead.github.io/rettoh/css/198.corrective.css" rel="stylesheet" />');
	jQuery('head').append('<link href="https://zedzdead.github.io/rettoh/css/199.responsive.css" rel="stylesheet" />');

	jQuery('body').prepend('<div id="devbar" />');
});