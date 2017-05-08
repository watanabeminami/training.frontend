var UDY = UDY || {};

UDY.COMMON = {};
UDY.CONSTANT = {
	BREAK_POINT: 737
}

UDY.COMMON.SMOOTH_SCROLLING = {
	init : function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.$trigger = $('.jsc-trigger');
	},
	bindEvent : function(){
		this.$trigger.on('click',function(){
			$('html, body').animate({scrollTop:$('#udemy-profile').offset().top});
		});
	}
}

UDY.COMMON.KV_CONTROLLER = {
	CONSTANT: {
		BREAK_POINT: UDY.CONSTANT.BREAK_POINT
	},
	init: function(){
		if(!this.setParameters()){
			return;
		}
		this.prepare();
		this.bindEvents();
	},
	setParameters: function(){
		this.$imgSP = $('.jsc-kv-text-image-sp');
		this.$targetSP = $('.jsc-target-sp');
		this.$imgPC = $('.jsc-kv-text-image');
		this.$targetPC = $('.jsc-target');

		$size = $().add(this.$targetPC).add(this.$imgPC).add(this.$imgSP).add(this.$targetSP);
		if($size.length == 0){
			return false;
		}
		this.$window = $(window);

		return true;
	},
	prepare: function(){
		this.judgeBreakPoint();

		var $targets = $().add(this.$targetPC).add(this.$imgPC).add(this.$imgSP).add(this.$targetSP);
		$targets.css({display: 'block'});
	},
	bindEvents: function(){
		this.$window.on('resize', $.proxy(this.judgeBreakPoint, this));
	},
	judgeBreakPoint: function(){
		if(this.$window.width() <= this.CONSTANT.BREAK_POINT) {
			this.setSize(this.$imgSP, this.$targetSP);
		}else {
			this.setSize(this.$imgPC, this.$targetPC);
		}
	},
	setSize: function($img, $target){
		var imgWidth = $img.width();
		var imgHeight = $img.height();

		$target.width(imgWidth);
		$target.height(imgHeight);
	}
}

$(function(){
	UDY.COMMON.SMOOTH_SCROLLING.init();
	$(window).on('load', function(){
		UDY.COMMON.KV_CONTROLLER.init();
	});
});
