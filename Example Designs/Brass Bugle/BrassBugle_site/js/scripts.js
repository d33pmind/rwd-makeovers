$(document).ready(function(){
	jQuery.fn.exists = function(){return this.length>0;}
	if ($('.panel-top').exists()) {
	setTimeout(function(){
		// Slide effect
		var _parentSlide = 'div.wrapper';
		var _linkSlide = 'a.open-close';
		var _slideBlock = 'div.panel-top';
		var _openClassS = 'active';
		var _durationSlide = 500;
		
		$(_parentSlide).each(function(){
		if (!$(this).is('.'+_openClassS)) {
			$(this).find(_slideBlock).css('display','none');
		}
		});
		$(_linkSlide,_parentSlide).click(function(){
		if ($(this).parents(_parentSlide).is('.'+_openClassS)) {
			$(this).parents(_parentSlide).removeClass(_openClassS);
			$(this).parents(_parentSlide).find(_slideBlock).slideUp(_durationSlide);
			
		} else {
			$(this).parents(_parentSlide).addClass(_openClassS);
			$(this).parents(_parentSlide).find(_slideBlock).slideDown(_durationSlide);
		}
		return false;
		});
	}, 200)
	}
	if ($('.booking-form').exists()) {
			customForm.lib.domReady(function(){
				customForm.customForms.replaceAll();
		});
	}
});
