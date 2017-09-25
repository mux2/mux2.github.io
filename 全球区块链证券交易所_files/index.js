$(function(){
				
	$(".index-first").height($(window).height());
	function isShow($el){
      var winH = $(window).height(),//获取窗口高度
            scrollH = $(window).scrollTop(),//获取窗口滚动高度
            top = $el.offset().top;//获取元素距离窗口顶部偏移高度
      if(top < scrollH + winH){
          return true;//在可视范围
        }else{
          return false;//不在可视范围
        }
    }
	
	function srcollAnd(){
		$(".flag").each(function(){
			var $this = $(this);
            if (isShow($this)) {
            	$this.addClass("animated");
            };
		});
	}
	srcollAnd();
	$(window).on("scroll", function(){
		srcollAnd();
    })
});