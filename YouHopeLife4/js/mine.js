
$(".mine_menu a").click(function(){
	$(".mine_menu a").css({
		"color" : "#666666",
		"text-decoration" : "none"
	});
	$(this).css({
		"color" : "#ED7122",
		"text-decoration" : "underline"
 	});
	$(".mine_box").hide();
	$(".mine_box").eq($(this).index()).show();
});
