//头部移动端菜单点击
$(".min_logo").click(function(){
	$(".topMenu_other").slideDown();
	$(".menu_close").click(function(){
		$(".topMenu_other").slideUp();
	});
});
//隐藏分类
$(".home_classify_button").mouseenter(function(){
	$(".head_select_box").show();
});
$(".head_select_box").mouseleave(function(){
	$(".head_select_box").hide();
});
$(".home_classify_button").click(function(){
	$(".head_select_box").show();
});
$(".logo_search_box").click(function(){
	$(".head_select_box").hide();
});
$(".top_wrap").click(function(){
	$(".head_select_box").hide();
});
//遍历
$(".head_select_menu ul li").mouseenter(function(){
	var index = $(this).index();
	$(".select_about").hide();
	$(".select_about").eq(index).show();
});
$(".select_about span").click(function(){
	$(".head_select_box").hide();
});
