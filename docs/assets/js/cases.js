


function showContent() {
	var x = document.getElementById("Case1A");
	
	if (x.style.display.match("none")) {
	x.style.display = "block";
	}
	else {
	x.style.display = "none";
	}
	
}

function showContent2() {
	var x = document.getElementById("Case1B");
	
	if (x.style.display.match("none")) {
	x.style.display = "block";
	}
	else {
	x.style.display = "none";
	}
	
}

function showContent3() {
	var x = document.getElementById("Case2");
	
	if (x.style.display.match("none")) {
	x.style.display = "block";
	}
	else {
	x.style.display = "none";
	}
	
}

function showContent4() {
	var x = document.getElementById("Case3");
	
	if (x.style.display.match("none")) {
	x.style.display = "block";
	}
	else {
	x.style.display = "none";
	}
	
}



function loading() {
	document.getElementById("Case1A").style.display = "none";
	document.getElementById("Case1B").style.display = "none";
	document.getElementById("Case2").style.display = "none";
	document.getElementById("Case3").style.display = "none";

}