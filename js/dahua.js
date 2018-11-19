$(function() {
	/*菜单点击*/

	$(".nav-list li").click(function() {
		$(this).addClass("bg").siblings().removeClass("bg")
	})

	/*banner*/
	var n = 0;
	$(".bannerx div").mouseover(function() {
		n = $(this).index()
		$(".bannerx div").eq(n).addClass("img1").siblings().removeClass("img1")
	})
	var timerxx = null
	clearInterval(timerxx)
	timerxx = setInterval(cli, 4000)

	$("#banner-right").click(function() {
		cli()
	})
	$("#banner-left").click(function() {
		n--;
		if(n < 0) {
			n = 1;
		}
		$(".bannerx div").eq(n).addClass("img1").siblings().removeClass("img1")

	})

	function cli() {
		n++;
		if(n > 1) {
			n = 0;
		}
		$(".bannerx div").eq(n).addClass("img1").siblings().removeClass("img1")
	}

	$(".banner").mouseover(function() {
		clearInterval(timerxx)
	})
	$(".banner").mouseout(function() {
		timerxx = setInterval(cli, 4000)
	})
	
	
	
	
	

	/*官方*/
	$(".GF").click(function() {
		$(this).addClass("color").siblings().removeClass("color")
		$(".guanfang").eq($(this).index()).show().siblings().hide()
		$(".guanfang1").eq($(this).index()).show().siblings().hide()
	})

	var now = 0
	$(".guanfang2 span").mouseover(function() {
		$(this).addClass("red").siblings().removeClass("red")
		$(".guanfangimg").find(".img").eq($(this).index()).addClass("img1").siblings().removeClass("img1")
		now = $(this).index()
	})
	var timer = null;
	clearInterval(timer)
	timer = setInterval(tmi, 2000)

	function tmi() {
		now++;
		if(now > $(".guanfangimg").find(".img").size() - 1) {
			now = 0
		}
		$(".guanfang2 span").eq(now).addClass("red").siblings().removeClass("red")
		$(".guanfangimg").find(".img").eq(now).addClass("img1").siblings().removeClass("img1")
	}






	/*合作*/
	var now1 = 0
	$(".hezuobtn span").mouseover(function() {
		$(this).addClass("red").siblings().removeClass("red")
		$(".hezuoimg").find(".img").eq($(this).index()).addClass("img1").siblings().removeClass("img1")
		now1 = $(this).index()
	})
	var timer1 = null;
	clearInterval(timer1)

	timer1 = setInterval(tmi1, 2000)

	function tmi1() {
		now1++;
		if(now1 > $(".hezuoimg").find(".img").size() - 1) {
			now1 = 0
		}
		$(".hezuobtn span").eq(now1).addClass("red").siblings().removeClass("red")
		$(".hezuoimg").find(".img").eq(now1).addClass("img1").siblings().removeClass("img1")
	}

	$(".lunbo").mouseover(function() {
		clearInterval(timer)
		clearInterval(timer1)

	})
	$(".lunbo").mouseout(function() {
		timer = setInterval(tmi, 2000)

		timer1 = setInterval(tmi1, 2000)

	})
	
	$(".news-box-title span").mouseover(function(){
		$(this).addClass("acti").siblings().removeClass("acti").find("a").removeClass("acti1")
		$(this).find("a").addClass("acti1")
		$(".divn li").eq($(this).index()).css("display","block").siblings().css("display","none")
	})
	
	$(".tuijian-header span").mouseover(function(){
		$(this).addClass("activex").siblings().removeClass("activex")
		$(".tuijian1 li").eq($(this).index()).css("display","block").siblings().css("display","none")
	})
	
	
	
	
	$(".wamp-title-b span").mouseover(function(){
		$(this).addClass("axxx").siblings().removeClass("axxx").find("i").addClass("axx")
		$(this).find("i").removeClass("axx")
	})
	

})