/*
 * @Author: hsy
 * @Date:   2017-08-07 10:26:37
 * @Last Modified by:   hsy
 * @Last Modified time: 2017-08-08 22:16:28
 */

'use strict';
$(function() {
	var num = 0;
	var timer;
	$('.screen1') .children('.title').removeClass('no');
	$('.side li').click(function(event) {
		num = $(this).index();
		$('section').animate({
			'top': -100 * num + '%'
		}, 500);
		$(this).addClass('current').siblings('li').removeClass('current');
		$('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no');

	});


	//滚轮事件
	$(document).mousewheel(function(e,d){
		//向下滚动d=-1，向上滚动d=1
		//定时器：serinterval(function(){},时间)
		//一性次定时器：setTimeout(function(){},)
		clearTimeout(timer);
		timer=setTimeout(function(){
			num=num-d;
			if(num>6)
				num=6
			if(num<0)
				num=0
			$('section').animate({
				'top': -100 * num + '%'
			}, 400);
			$('.side li').eq(num).addClass('current').siblings('li').removeClass('current');
			$('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no');
		},400)
	})


	//音乐按钮
	$('.music').click(function(event) {
		$(this).toggleClass('play');
		/*切换类名*/
		var i = $(this).hasClass('play')
			/* hasClass('')判断是否有该类名，返回值是true/false */
		if(i){
			$('audio').get(0).play()
		}
		else{
			$('audio').get(0).pause()
		}

	});
})