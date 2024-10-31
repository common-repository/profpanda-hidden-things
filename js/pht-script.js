(function ($) {
	$('#pht_section_woocommerce, .price, .buyb, .redirect_bb, .redirect_url').hide();
	$('#pht_section_login, .logo, .footext, .bg_form_login, .label_form_login, .bt_text_form_login, .bt_shadow_form_login, .bt_border_form_login, .bg_bt_form_login').hide();
	$('#pht_section_dashboard, .dplugins, .dlibuser, .dhadminbar, .dcomments, .dprim, .dsec, .dinc, .drightn, .dquick, .dactivity').hide();
	$('h2').addClass('borderComplete');

	$('.woo').click(function(){
		$('#pht_section_woocommerce').slideToggle();	
		$('.price').slideToggle();	
		$('.buyb').slideToggle();
		$('.redirect_bb').slideToggle();
		$('.redirect_url').slideToggle();			
		$(this).parent('h2').toggleClass('borderComplete');
	});

	$('.loginscreen').click(function(){
		$('#pht_section_login').slideToggle();	
		$('.logo').slideToggle();	
		$('.footext').slideToggle();
		$('.bg_form_login').slideToggle();
		$('.label_form_login').slideToggle();
		$('.bt_text_form_login').slideToggle();
		$('.bt_shadow_form_login').slideToggle();
		$('.bt_border_form_login').slideToggle();
		$('.bg_bt_form_login').slideToggle();	
		$(this).parent('h2').toggleClass('borderComplete');
	});

	$('.dash').click(function(){
		$('#pht_section_dashboard').slideToggle();	
		$('.dplugins').slideToggle();
		$('.dlibuser').slideToggle();	
		$('.dhadminbar').slideToggle();
		$('.dcomments').slideToggle();
		$('.dprim').slideToggle();
		$('.dsec').slideToggle();
		$('.dinc').slideToggle();
		$('.drightn').slideToggle();	
		$('.dquick').slideToggle();
		$('.dactivity').slideToggle();
		$(this).parent('h2').toggleClass('borderComplete');
	});





})(jQuery);

