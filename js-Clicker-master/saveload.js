function save() {
		localStorage.setItem("score", score)
		localStorage.setItem("autoClick", autoClick)
		localStorage.setItem("multiplier", multiplier)
		localStorage.setItem("clickmultiplier", clickmultiplier)
}
function load() {
		score = localStorage.getItem("score")
		score = parseInt(score)
		autoClick = localStorage.getItem("autoClick")
		autoClick = parseInt(autoClick)
		multiplier = localStorage.getItem("multiplier")
		multiplier = parseInt(multiplier)
		multiplier = localStorage.getItem("clickmultiplier")
		multiplier = parseInt(clickmultiplier)
		update()
}