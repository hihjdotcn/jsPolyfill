if (!Number.isNaN) {
	Number.isNaN = function (n) {
		return (
			typeof n === "number" && window.isNaN(n)
		)
	}
}

// 利用 NaN 不等于自身
if (!Number.isNaN) {
	Number.isNaN = function (n) {
		return n !== n
	}
}
