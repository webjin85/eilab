/*----------------------------------------------------------------------------------------------------
 * 퍼블리싱 변수
----------------------------------------------------------------------------------------------------*/

/* 퍼블리싱 변수 */
var webPage = {
	windowH : $(window).outerHeight(),
	windowW : $(window).outerWidth(),
	jScroll : 'content jindo Scroll',
	popupSroll : 'content jindo Scroll'
};

/*----------------------------------------------------------------------------------------------------
 * 핸들러 이벤트
----------------------------------------------------------------------------------------------------*/

////이벤트
$(document).on('click', '.agree_box', function(){
	$(this).children('.check_btn').toggleClass('on');
});
$(document).on('click', '.family_link div', function(){
	$(this).siblings('.family_site').toggleClass('dsBlock');
});
$(document).on('click', '.header_sub .help', function(){
	$('.header_sub .help_box').slideToggle();
});
$(document).on('click', '.head_link > div', function(){
	$(this).parent('.head_link').toggleClass('on');
	$(this).siblings('.head_site').slideToggle();
});

//탭버튼 클릭시
$(document).on('click', '.tab_btn li', function(){
	var liData = '.'+$(this).attr('data-rel');
	$(this).siblings().removeClass('on');
	$(this).addClass('on');
	console.log(liData);
	$(liData).css({ 'display':'block' });
	$(liData).siblings('div').css({ 'display':'none' });
});

$(document).on('click','.clause', function(){
	$(this).toggleClass('on');
	$(this).parent('div').siblings('div').children('.clause_on').css({ 'display':'block' });
	$(this).parent('div').siblings('div').children('.clause_dim').css({ 'display':'none' });
	$(this).children('button').addClass('on').html('확인완료');
	$(this).parent('div').siblings('.scroll_box').slideToggle(200, function() {
		if($(this).children('div').css('z-index') != '2000') { var clauseScroll = new jindo.m.Scroll($(this).children('div').attr('id'), {  nHeight : 160 }) };
		if(webPage.jScroll != 'content jindo Scroll') { webPage.jScroll.refresh(); }; 
	});	
});
/*----------------------------------------------------------------------------------------------------
 * 함수정의
----------------------------------------------------------------------------------------------------*/

//페이지 열 때 실행함수
(function() {
	
}());