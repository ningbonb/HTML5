window.onload = function(){
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;

	function showButton(){
		for( var i = 0; i < buttons.length; i++){
			if(buttons[i].className == 'on'){
				buttons[i].className = "";
				break;
			}
		}
		buttons[index - 1].className = 'on';
	}
	 function animate (offset) {
	                if (offset == 0) {
	                    return;
	                }
	                animated = true;
	                var time = 300;//位移总的时间
	                var inteval = 10;//位移间隔时间
	                var speed = offset/(time/inteval);//每次位移量
	                var left = parseInt(list.style.left) + offset;

	                var go = function (){
	                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
	                        list.style.left = parseInt(list.style.left) + speed + 'px';
	                        setTimeout(go, inteval);
	                    }
	                    else {
	                        list.style.left = left + 'px';
	                        if(left>-200){
	                            list.style.left = -600 * len + 'px';
	                        }
	                        if(left<(-600 * len)) {
	                            list.style.left = '-600px';
	                        }
	                        animated = false;
	                    }
	                }
	                go();
	            }
	next.onclick = function(){
		if( index == 5 ){
			index = 1;
		}else{
			index += 1;
		}
		showButton();
		// list.style.left = parseInt(list.style.left) - 600 + 'px';
		animate(-600);
	}
	prev.onclick = function(){
		if( index == 1 ){
			index = 5;
		}else{
			index -= 1;
		}
		// index -= 1;
		showButton();
		// list.style.left = parseInt(list.style.left) + 600 + 'px';
		animate(+600);
	}

	for(var i = 0; i < buttons.length; i++){
		buttons[i].onclick = function(){
			if(this.className == 'on'){
				return;
			}
			var myindex = parseInt(this.getAttribute('index'));
			var offset = -600*(myindex - index);
			animate(offset);
			index = myindex;
			showButton();
		}
	}
}