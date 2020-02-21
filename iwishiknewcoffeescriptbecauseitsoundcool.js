
RefreshVariable();

function RefreshVariable(){
	a = Math.random();
}

if (a < 0.5)
    function add() {
		
		score += 1;
        document.getElementById("score").innerHTML = score;
}
else if (a < 0.7)
    function add() {
		
		score += 5;
        document.getElementById("score").innerHTML = score;
}
else
	function add() {
		score += 10;
        document.getElementById("score").innerHTML = score;
}
