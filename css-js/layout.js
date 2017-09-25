$(document).ready(function() {

$('#btn-hide1').click(function(){$('#div-hideshow1').hide();});
$('#btn-show1').click(function(){$('#div-hideshow1').show();});
$('#btn-hide2').click(function(){$('#div-hideshow2').hide(3000);});
$('#btn-show2').click(function(){$('#div-hideshow2').show(3000);});
$('#btn-hide3').click(function(){$('#div-hideshow3').hide(3000,msghide3);});

function msghide3(){
	alert('我被隱藏了');
}

$('#btn-show3').click(function(){$('#div-hideshow3').show(3000,msgshow3);});

function msgshow3(){
	alert('我又出現了');
}

$('#btn-fadeOut1').click(function(){$('#div-fadeOutIn1').fadeOut();});
$('#btn-fadeIn1').click(function(){$('#div-fadeOutIn1').fadeIn();});
$('#btn-fadeOut2').click(function(){$('#div-fadeOutIn2').fadeOut(3000);});
$('#btn-fadeIn2').click(function(){$('#div-fadeOutIn2').fadeIn(3000);});

$('#btn-fadeOut3').click(function(){$('#div-fadeOutIn3').fadeOut(3000,msgfadeOut3);});

function msgfadeOut3(){
	alert('我被淡出了');
}

$('#btn-fadeIn3').click(function(){$('#div-fadeOutIn3').fadeIn(3000,msgfadeIn3);});

function msgfadeIn3(){
	alert('我又淡入了');
}

$('#btn-animateON').click(function(){$('#animateDiv').animate({top:"300px"});});
$('#btn-animateOFF').click(function(){$('#animateDiv').animate({top:"-300px"});});


$("#addrecss").mouseover(function(){$('#addrecss').addClass('addCss1');});
$("#addrecss").mouseout(function(){$('#addrecss').removeClass('addCss1');});

$('.tab4s').each(function(){
	$(this).mouseover(function(){$(this).find('.tab4s-tit').stop().fadeOut(1000);});
	$(this).mouseout(function(){$(this).find('.tab4s-tit').stop().fadeIn(1000);});
});

$('.tab4s-himg').addClass('tab4s-addHide');
$('.tab4s-himg').addClass('tab4s-addCSS1');
$('.tab4s').each(function(){
	$(this).mouseover(function(){
		$(this).find('.tab4s-tit').stop().fadeOut(1000);
		$(this).find('.tab4s-img').stop().animate({top:'-100'},300);
		$(this).find('.tab4s-img').addClass('tab4s-addCSS2');
		$(this).find('.tab4s-himg').removeClass('tab4s-addHide');
	});
	$(this).mouseout(function(){
		$(this).find('.tab4s-tit').stop().fadeIn(1000);
		$(this).find('.tab4s-img').stop().animate({top:'0'},300);
		$(this).find('.tab4s-img').removeClass('tab4s-addCSS2');
		$(this).find('.tab4s-himg').addClass('tab4s-addHide');
	});
});

$('.tab4s-himg').each(function(){
	$(this).mouseover(function(){
		$(this).removeClass('tab4s-addCSS1');
	});
	$(this).mouseout(function(){
		$(this).addClass('tab4s-addCSS1');
	});
});

/* 版頭按鈕列 - 固定、解除 Part2 */
$(window).scroll(function(){
	var headH=$('.headArea').height();
	var scrollH=$(window).scrollTop();
	if (scrollH>headH) { 		
		$('.headBtnArea').addClass('headbtn-fixed');
		$('#totop').show(); 
	} else {		
		$('.headBtnArea').removeClass('headbtn-fixed');
		$('#totop').hide(); 
	}
});

/* 置頂按鈕點擊 */
$('#totop').click(function(){ 
	$('html,body').animate({scrollTop: '0px'}, 800); 
}); 


/*下拉式選單*/
$('.headBtn li').each(function(){
	$(this).find('.btn1').addClass('headbtnTxt1');
	$(this).mouseover(function(){
		$(this).find('.headBtn-items').stop().slideDown(200);
		$(this).find('.btn1').addClass('headbtnBg');
		$(this).find('.btn1').addClass('headbtnTxt2');
	});
	$(this).mouseout(function(){
		$(this).find('.headBtn-items').stop().slideUp(200);
		$(this).find('.btn1').removeClass('headbtnBg');
		$(this).find('.btn1').removeClass('headbtnTxt2');
	});
});

});
