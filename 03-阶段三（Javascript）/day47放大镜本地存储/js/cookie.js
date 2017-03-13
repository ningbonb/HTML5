//通过key 获取对应的值
function getCookie(keyName) {
	var resArr = document.cookie.split(';');
	for(var i = 0; i < resArr.length; i++) {
		var keyValues = resArr[i].split('=');
		if(keyValues[0].trim() == keyName) {
			return keyValues[1];
		}
	}
}

//设置cookie
function setCookie(keyName, value, maxAge) {
	document.cookie = keyName + '=' + value + '; max-age=' + maxAge;
}

//删除cookie
function removeCookie(keyName) {
	setCookie(keyName, '', -1);
}