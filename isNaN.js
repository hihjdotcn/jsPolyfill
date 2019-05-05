if (!Number.isNaN) {
	Number.isNaN = function (n) {
		return (
			typeof n === "number" && window.isNaN(n)
		)
	}
}
