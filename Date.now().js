// 兼容ES5之前的版本
if (!Date.now) {
	Date.now = function () {
		return (new Date()).getTime()
	}
}
