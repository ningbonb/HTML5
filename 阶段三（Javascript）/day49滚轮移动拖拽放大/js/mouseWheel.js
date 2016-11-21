
function mouseWheel(obj,fn){
	//判断浏览器:是否是火狐:indexOf()：如果包含，返回位置，否则返回-1
	var ff = navigator.userAgent.indexOf('Firefox');
	//console.log(navigator.userAgent);
	if(ff != -1){
		obj.addEventListener("DOMMouseScroll",scroll);
	}else{
		obj.onmousewheel = scroll;
	}
	
	function scroll(ev){
		var ev = ev || window.event;
		
		var down = false;
		
		//火狐 在Window下的滚轮方向，mac下相反
		if(ff != -1){
			down = ev.detail < 0 ? false : true;
		}else{
			down = ev.wheelDelta > 0 ? false : true;
		}
		
		//把down给回调回去
		fn(ev,down);
		
		//阻止默认事件
		//监听方式组织默认事件
		if(ev.preventDefault){
			ev.preventDefault();
		}
		//谷歌下阻止默认事件 
		return false;
	}
}
