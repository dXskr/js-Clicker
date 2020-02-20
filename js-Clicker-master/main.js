function addition(){
	
		score = score + 1*clickmultiplier;
        document.getElementById("ScoreDisplay").innerHTML = score;
		document.title = score + " Timesclicked";
}
function buyAutoClick() {
        if (score >= ((autoClick+1) * 12)) {
                score = score - ((autoClick+1) * 12);
                autoClick = autoClick + 1;
				update()
            }
}
function buyMultiplier(){
		if (score >= ((multiplier+1) * 50)){
			score = score - ((multiplier+1) * 50);
			multiplier = multiplier + 1;
			update()	
		}
}
function buyMultiplierClicker(){
	if (score >= ((clickmultiplier+1) * 25)){
		score = score - ((clickmultiplier+1) * 25);
		clickmultiplier = clickmultiplier + 1;
		update()	
	}
}


function timer(){
	score = score + autoClick*multiplier;
	update()
}
	setInterval(timer, 1000) // 1000 = 1 second
	
	
	
function update(){
    document.getElementById('ScoreDisplay').innerHTML = score;
	document.getElementById('multiplierAmount').innerHTML = "Multiplier x" + (multiplier+1);
	document.getElementById('costMultiplier').innerHTML = ((multiplier+1) * 50) + " clicks";
	document.getElementById('clickmultiplieramount').innerHTML = "Click Multiplier x" + (clickmultiplier+1);
	document.getElementById('costclickmultiplier').innerHTML = ((clickmultiplier+1) * 25) + " clicks";
	document.title = score + " Timesclicked";
	document.getElementById('ammountAutoClick').innerHTML = " " + autoClick + " Autoclickers";
	document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " clicks";
}
