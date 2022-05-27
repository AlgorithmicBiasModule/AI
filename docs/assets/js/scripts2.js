window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('StartButton');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var buttonNextSlide = document.getElementById('right-btn');
  var buttonPrevSlide = document.getElementById('left-btn');
  var buttonPausePlay = document.getElementById('PP');
  var buttonInformation = document.getElementById('information_button');
  var buttonNavIntro = document.getElementById('navigate-btn1')
  var buttonNavTerms = document.getElementById('navigate-btn2')
  var buttonNavConcepts = document.getElementById('navigate-btn3')
  var buttonNavExamples = document.getElementById('navigate-btn4')
  var buttonNavSummary = document.getElementById('navigate-btn5')
  var buttonNavCases = document.getElementById('navigate-btn6')
  var Interval ;

  buttonStart.onclick = function() {
    
	InformationPopup(); 
	HideSlide();
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
  buttonNextSlide.onclick = function() {
  	
	Lock();
	erase();
	ChangeTranscript(); 
	PlayAudio(); 
	ChangePopupText(); 
	ChangeMyCounter(); 
	InformationPopdown();
	clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);
	
  }
  
  buttonPrevSlide.onclick = function() {
  
  	Lock();
	erase();
	ChangeTranscriptBack(); 
	PlayLastAudio(); 
	ChangePopupBack(); 
	MyCounterDown(); 
	InformationPopdown();
	clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);
	
  }
  
  buttonPausePlay.onclick = function() {
  
  	PausePlay();
	if (document.getElementById("PPtoggle").innerHTML == 0) 
	{
	clearInterval(Interval);}
	else {
	clearInterval(Interval);
     Interval = setInterval(startTimer, 10);}
	
	
  }
  
  buttonInformation.onclick = function () {
  
  	PausePlay2(); 
	InformationPopup(); 
	HideSlide();
  	if (document.getElementById("PPtoggle").innerHTML == 0) 
	{
	clearInterval(Interval);}
	else {
	clearInterval(Interval);
     Interval = setInterval(startTimer, 10);}
  
  }
  
  buttonNavIntro.onclick = function() {
  erase();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);

  }
  
    buttonNavTerms.onclick = function() {
	erase();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);

  }
  
      buttonNavConcepts.onclick = function() {
	erase();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);

  }
  
      buttonNavExamples.onclick = function() {
	erase();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);

  }
  
      buttonNavSummary.onclick = function() {
	erase();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);

  }
  
      buttonNavCases.onclick = function() {
	erase();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);

  }
  
  
  function Animations() {
  
  if(seconds > 3 && tens >30 && MySlideCounter == 2)
  {document.getElementById("objective1").classList.remove("noneHolder");
  document.getElementById("objective1").classList.add("fadeIn");}
  
  if(seconds > 12 && tens >20 && MySlideCounter == 2)
  {document.getElementById("objective2").classList.remove("noneHolder");
  document.getElementById("objective2").classList.add("fadeIn");}
  
  if(seconds > 20 && tens >00 && MySlideCounter == 2)
  {document.getElementById("objective3").classList.remove("noneHolder");
  document.getElementById("objective3").classList.add("fadeIn");}
  
  
  if(seconds > 3 && tens >00 && MySlideCounter == 3) 
  {document.getElementById("agenda1").classList.remove("noneHolder");
  document.getElementById("agenda1").classList.add("fadeIn");}
  
  if(seconds > 8 && tens > 30 && MySlideCounter == 3) 
  {document.getElementById("agenda2").classList.remove("noneHolder");
  document.getElementById("agenda2").classList.add("fadeIn");}
  
  if(seconds > 12 && tens > 10 && MySlideCounter == 3) 
  {document.getElementById("agenda3").classList.remove("noneHolder");
  document.getElementById("agenda3").classList.add("fadeIn");}
  
  if(seconds > 18 && tens > 20 && MySlideCounter == 3) 
  {document.getElementById("agenda4").classList.remove("noneHolder");
  document.getElementById("agenda4").classList.add("fadeIn");}
  
  
  if(seconds > 5 && tens > 90 && MySlideCounter == 4) 
  {document.getElementById("hide4").classList.remove("opaqueHolder");
  document.getElementById("hide4").classList.add("fadeOut");
  document.getElementById("term1").classList.remove("noneHolder");
  document.getElementById("term1").classList.add("fadeIn", "transition");}
  
  if(seconds > 9 && tens > 00 && MySlideCounter == 4)
  {document.getElementById("term2").classList.remove("noneHolder");
  document.getElementById("term2").classList.add("fadeIn", "transition");}
  
  if(seconds > 10 && tens > 20 && MySlideCounter == 4)
  {document.getElementById("term3").classList.remove("noneHolder");
  document.getElementById("term3").classList.add("fadeIn", "transition");}
  
  if(seconds > 11 && tens > 60 && MySlideCounter == 4)
  {document.getElementById("term4").classList.remove("noneHolder");
  document.getElementById("term4").classList.add("fadeIn", "transition");}
  
  if(seconds > 12 && tens > 40 && MySlideCounter == 4)
  {document.getElementById("term5").classList.remove("noneHolder");
  document.getElementById("term5").classList.add("fadeIn", "transition");}
  
  
  
  if(seconds > 6 && tens > 50 && MySlideCounter == 5 )
  {document.getElementById("circle1").classList.remove("noneHolder");
  document.getElementById("circle1").classList.add("fadeIn");}
  
  if(seconds > 9 && tens > 70 && MySlideCounter == 5 )
  {document.getElementById("circle2").classList.remove("noneHolder");
  document.getElementById("circle2").classList.add("fadeIn");}
  
  if(seconds > 12 && tens > 20 && MySlideCounter == 5 )
  {document.getElementById("circle3").classList.remove("noneHolder");
  document.getElementById("circle3").classList.add("fadeIn");}
  
  
  
  if(seconds >10 && tens > 00 && MySlideCounter == 6 )
  {document.getElementById("MLpic").classList.remove("opaqueHolder");
  document.getElementById("MLpic").classList.add("fadeOut");}
  
  if(seconds > 11 && tens > 30 && MySlideCounter == 6 )
  {document.getElementById("square1").classList.remove("noneHolder");
  document.getElementById("square1").classList.add("fadeIn");
  document.getElementById("right_arrow1").classList.remove("noneHolder");
  document.getElementById("right_arrow1").classList.add("fadeIn");
  document.getElementById("inputW").classList.remove("noneHolder");
  document.getElementById("inputW").classList.add("fadeIn");
  document.getElementById("square2").classList.remove("noneHolder");
  document.getElementById("square2").classList.add("fadeIn");}
  
    if(seconds > 16 && tens > 30 && MySlideCounter == 6 )
  {document.getElementById("right_arrow2").classList.remove("noneHolder");
  document.getElementById("right_arrow2").classList.add("fadeIn");
  document.getElementById("outputW").classList.remove("noneHolder");
  document.getElementById("outputW").classList.add("fadeIn");
  document.getElementById("square3").classList.remove("noneHolder");
  document.getElementById("square3").classList.add("fadeIn");}
  
  
  if(seconds > 2 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker1").classList.remove("noneHolder");
  document.getElementById("sneaker1").classList.add("fadeInOut");
  document.getElementById("step1v1").classList.remove("noneHolder");
  document.getElementById("step1v1").classList.add("fadeInOut");}
  
  if(seconds > 3 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker2").classList.remove("noneHolder");
  document.getElementById("sneaker2").classList.add("fadeInOut");
  document.getElementById("step2v1").classList.remove("noneHolder");
  document.getElementById("step2v1").classList.add("fadeInOut");}
  
  if(seconds > 4 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker3").classList.remove("noneHolder");
  document.getElementById("sneaker3").classList.add("fadeInOut");
  document.getElementById("step3v1").classList.remove("noneHolder");
  document.getElementById("step3v1").classList.add("fadeInOut");}
  
  if(seconds > 5 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker4").classList.remove("noneHolder");
  document.getElementById("sneaker4").classList.add("fadeInOut");
  document.getElementById("step4v1").classList.remove("noneHolder");
  document.getElementById("step4v1").classList.add("fadeInOut");}
  
  if(seconds > 6 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker5").classList.remove("noneHolder");
  document.getElementById("sneaker5").classList.add("fadeInOut");
  document.getElementById("step5v1").classList.remove("noneHolder");
  document.getElementById("step5v1").classList.add("fadeInOut");}
 
 
 if(seconds > 8 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker1").classList.remove("fadeInOut");
  document.getElementById("sneaker1").classList.add("fadeInOut2");
  document.getElementById("step1v2").classList.remove("noneHolder");
  document.getElementById("step1v2").classList.add("fadeInOut");}
  
  if(seconds > 9 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker2").classList.remove("fadeInOut");
  document.getElementById("sneaker2").classList.add("fadeInOut2");
  document.getElementById("step2v2").classList.remove("noneHolder");
  document.getElementById("step2v2").classList.add("fadeInOut");}
  
  if(seconds > 10 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker3").classList.remove("fadeInOut");
  document.getElementById("sneaker3").classList.add("fadeInOut2");
  document.getElementById("step3v2").classList.remove("noneHolder");
  document.getElementById("step3v2").classList.add("fadeInOut");}
  
  if(seconds > 11 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker4").classList.remove("fadeInOut");
  document.getElementById("sneaker4").classList.add("fadeInOut2");
  document.getElementById("step4v2").classList.remove("noneHolder");
  document.getElementById("step4v2").classList.add("fadeInOut");}
  
  if(seconds > 12 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker5").classList.remove("fadeInOut");
  document.getElementById("sneaker5").classList.add("fadeInOut2");
  document.getElementById("step5v2").classList.remove("noneHolder");
  document.getElementById("step5v2").classList.add("fadeInOut");} 
  
  if(seconds > 14 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker1").classList.remove("fadeInOut2");
  document.getElementById("sneaker1").classList.add("fadeInOut3");
  document.getElementById("step1v3").classList.remove("noneHolder");
  document.getElementById("step1v3").classList.add("fadeInOut");}
  
  if(seconds > 15 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker2").classList.remove("fadeInOut2");
  document.getElementById("sneaker2").classList.add("fadeInOut3");
  document.getElementById("step2v3").classList.remove("noneHolder");
  document.getElementById("step2v3").classList.add("fadeInOut");}
  
  if(seconds > 16 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker3").classList.remove("fadeInOut2");
  document.getElementById("sneaker3").classList.add("fadeInOut3");
  document.getElementById("step3v3").classList.remove("noneHolder");
  document.getElementById("step3v3").classList.add("fadeInOut");}
  
  if(seconds > 17 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker4").classList.remove("fadeInOut2");
  document.getElementById("sneaker4").classList.add("fadeInOut3");
  document.getElementById("step4v3").classList.remove("noneHolder");
  document.getElementById("step4v3").classList.add("fadeInOut");}
  
  if(seconds > 18 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker5").classList.remove("fadeInOut2");
  document.getElementById("sneaker5").classList.add("fadeInOut3");
  document.getElementById("step5v3").classList.remove("noneHolder");
  document.getElementById("step5v3").classList.add("fadeInOut");} 
  
  if(seconds > 20 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker1").classList.remove("fadeInOut3");
  document.getElementById("sneaker1").classList.add("fadeInOut4");
  document.getElementById("step1v4").classList.remove("noneHolder");
  document.getElementById("step1v4").classList.add("fadeInOut");}
  
  if(seconds > 21 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker2").classList.remove("fadeInOut3");
  document.getElementById("sneaker2").classList.add("fadeInOut4");
  document.getElementById("step2v4").classList.remove("noneHolder");
  document.getElementById("step2v4").classList.add("fadeInOut");}
  
  if(seconds > 22 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker3").classList.remove("fadeInOut3");
  document.getElementById("sneaker3").classList.add("fadeInOut4");
  document.getElementById("step3v4").classList.remove("noneHolder");
  document.getElementById("step3v4").classList.add("fadeInOut");}
  
  if(seconds > 23 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker4").classList.remove("fadeInOut3");
  document.getElementById("sneaker4").classList.add("fadeInOut4");
  document.getElementById("step4v4").classList.remove("noneHolder");
  document.getElementById("step4v4").classList.add("fadeInOut");}
  
  if(seconds > 24 && tens >20 && MySlideCounter == 7)
  {document.getElementById("sneaker5").classList.remove("fadeInOut3");
  document.getElementById("sneaker5").classList.add("fadeInOut4");
  document.getElementById("step5v4").classList.remove("noneHolder");
  document.getElementById("step5v4").classList.add("fadeInOut");} 
  
  
  if(seconds >5 && tens > 20 && MySlideCounter == 8 )
  {document.getElementById("dart1").classList.remove("noneHolder");
  document.getElementById("dart1").classList.add("fadeIn5");}
  
  if(seconds >5 && tens > 60 && MySlideCounter == 8 )
  {document.getElementById("dart2").classList.remove("noneHolder");
  document.getElementById("dart2").classList.add("fadeIn5");}
  
  if(seconds >6 && tens > 00 && MySlideCounter == 8 )
  {document.getElementById("dart3").classList.remove("noneHolder");
  document.getElementById("dart3").classList.add("fadeIn5");}
  
  if(seconds >6 && tens > 40 && MySlideCounter == 8 )
  {document.getElementById("dart4").classList.remove("noneHolder");
  document.getElementById("dart4").classList.add("fadeIn5");}
  
  if(seconds >6 && tens > 80 && MySlideCounter == 8 )
  {document.getElementById("dart5").classList.remove("noneHolder");
  document.getElementById("dart5").classList.add("fadeIn5");}
  
  if(seconds >7 && tens > 20 && MySlideCounter == 8 )
  {document.getElementById("dart6").classList.remove("noneHolder");
  document.getElementById("dart6").classList.add("fadeIn5");}
  
  if(seconds >7 && tens > 60 && MySlideCounter == 8 )
  {document.getElementById("dart7").classList.remove("noneHolder");
  document.getElementById("dart7").classList.add("fadeIn5");}
  
  
    if(seconds >10 && tens > 20 && MySlideCounter == 8 )
  {document.getElementById("dart8").classList.remove("noneHolder");
  document.getElementById("dart8").classList.add("fadeIn5");}
  
  if(seconds >10 && tens > 60 && MySlideCounter == 8 )
  {document.getElementById("dart9").classList.remove("noneHolder");
  document.getElementById("dart9").classList.add("fadeIn5");}
  
  if(seconds >11 && tens > 00 && MySlideCounter == 8 )
  {document.getElementById("dart10").classList.remove("noneHolder");
  document.getElementById("dart10").classList.add("fadeIn5");}
  
  if(seconds >11 && tens > 40 && MySlideCounter == 8 )
  {document.getElementById("dart11").classList.remove("noneHolder");
  document.getElementById("dart11").classList.add("fadeIn5");}
  
  if(seconds >11 && tens > 80 && MySlideCounter == 8 )
  {document.getElementById("dart12").classList.remove("noneHolder");
  document.getElementById("dart12").classList.add("fadeIn5");}
  
  if(seconds >12 && tens > 20 && MySlideCounter == 8 )
  {document.getElementById("dart13").classList.remove("noneHolder");
  document.getElementById("dart13").classList.add("fadeIn5");}
  
  if(seconds >12 && tens > 60 && MySlideCounter == 8 )
  {document.getElementById("dart14").classList.remove("noneHolder");
  document.getElementById("dart14").classList.add("fadeIn5");}
  
  
  if(seconds >15 && tens > 00 && MySlideCounter == 10 )
  {document.getElementById("slide10_img").classList.remove("opaqueHolder");
  document.getElementById("slide10_img").classList.add("fadeOut");}
  
   if(seconds >17 && tens > 00 && MySlideCounter == 10 )
  {document.getElementById("conceptlist1").classList.remove("noneHolder");
  document.getElementById("conceptlist1").classList.add("fadeIn");}
  
  if(seconds >19 && tens > 00 && MySlideCounter == 10 )
  {document.getElementById("conceptlist2").classList.remove("noneHolder");
  document.getElementById("conceptlist2").classList.add("fadeIn");}
  
  if(seconds >21 && tens > 00 && MySlideCounter == 10 )
  {document.getElementById("conceptlist3").classList.remove("noneHolder");
  document.getElementById("conceptlist3").classList.add("fadeIn");}
  
  if(seconds >23 && tens > 00 && MySlideCounter == 10 )
  {document.getElementById("conceptlist4").classList.remove("noneHolder");
  document.getElementById("conceptlist4").classList.add("fadeIn");}
  
  if(seconds >25 && tens > 00 && MySlideCounter == 10 )
  {document.getElementById("conceptlist5").classList.remove("noneHolder");
  document.getElementById("conceptlist5").classList.add("fadeIn");}
  
  }
  
  
  function erase() {
  
  document.getElementById("objective1").classList.remove("fadeIn");
  document.getElementById("objective1").classList.add("noneHolder");
  document.getElementById("objective2").classList.remove("fadeIn");
  document.getElementById("objective2").classList.add("noneHolder");
  document.getElementById("objective3").classList.remove("fadeIn");
  document.getElementById("objective3").classList.add("noneHolder");
  
  document.getElementById("agenda1").classList.remove("fadeIn");
  document.getElementById("agenda1").classList.add("noneHolder");
  document.getElementById("agenda2").classList.remove("fadeIn");
  document.getElementById("agenda2").classList.add("noneHolder");
  document.getElementById("agenda3").classList.remove("fadeIn");
  document.getElementById("agenda3").classList.add("noneHolder");
  document.getElementById("agenda4").classList.remove("fadeIn");
  document.getElementById("agenda4").classList.add("noneHolder");
  
  document.getElementById("hide4").classList.remove("fadeOut");
  document.getElementById("hide4").classList.add("opaqueHolder");
  document.getElementById("term1").classList.remove("fadeIn", "transition");
  document.getElementById("term1").classList.add("noneHolder");
  document.getElementById("term2").classList.remove("fadeIn", "transition");
  document.getElementById("term2").classList.add("noneHolder");
  document.getElementById("term3").classList.remove("fadeIn", "transition");
  document.getElementById("term3").classList.add("noneHolder");
  document.getElementById("term4").classList.remove("fadeIn", "transition");
  document.getElementById("term4").classList.add("noneHolder");
  document.getElementById("term5").classList.remove("fadeIn", "transition");
  document.getElementById("term5").classList.add("noneHolder");
  
  document.getElementById("circle1").classList.remove("fadeIn");
  document.getElementById("circle1").classList.add("noneHolder");
  document.getElementById("circle2").classList.remove("fadeIn");
  document.getElementById("circle2").classList.add("noneHolder");
  document.getElementById("circle3").classList.remove("fadeIn");
  document.getElementById("circle3").classList.add("noneHolder");
  
  document.getElementById("square1").classList.remove("fadeIn");
  document.getElementById("square1").classList.add("noneHolder");
  document.getElementById("square2").classList.remove("fadeIn");
  document.getElementById("square2").classList.add("noneHolder");
  document.getElementById("square3").classList.remove("fadeIn");
  document.getElementById("square3").classList.add("noneHolder");
  document.getElementById("right_arrow1").classList.remove("fadeIn");
  document.getElementById("right_arrow1").classList.add("noneHolder");
  document.getElementById("right_arrow2").classList.remove("fadeIn");
  document.getElementById("right_arrow2").classList.add("noneHolder");
  document.getElementById("inputW").classList.remove("fadeIn");
  document.getElementById("inputW").classList.add("noneHolder");
  document.getElementById("outputW").classList.remove("fadeIn");
  document.getElementById("outputW").classList.add("noneHolder");
  document.getElementById("MLpic").classList.remove("fadeOut");
  document.getElementById("MLpic").classList.add("opaqueHolder");
  
  document.getElementById("sneaker1").classList.remove("fadeInOut", "fadeInOut2", "fadeInOut3", "fadeInOut4");
  document.getElementById("sneaker1").classList.add("noneHolder");
  document.getElementById("sneaker2").classList.remove("fadeInOut", "fadeInOut2", "fadeInOut3", "fadeInOut4");
  document.getElementById("sneaker2").classList.add("noneHolder");
  document.getElementById("sneaker3").classList.remove("fadeInOut", "fadeInOut2", "fadeInOut3", "fadeInOut4");
  document.getElementById("sneaker3").classList.add("noneHolder");
  document.getElementById("sneaker4").classList.remove("fadeInOut", "fadeInOut2", "fadeInOut3", "fadeInOut4");
  document.getElementById("sneaker4").classList.add("noneHolder");
  document.getElementById("sneaker5").classList.remove("fadeInOut", "fadeInOut2", "fadeInOut3", "fadeInOut4");
  document.getElementById("sneaker5").classList.add("noneHolder");
  
  document.getElementById("step1v1").classList.remove("fadeInOut");
  document.getElementById("step1v1").classList.add("noneHolder");
  document.getElementById("step1v2").classList.remove("fadeInOut");
  document.getElementById("step1v2").classList.add("noneHolder");
  document.getElementById("step1v3").classList.remove("fadeInOut");
  document.getElementById("step1v3").classList.add("noneHolder");
  document.getElementById("step1v4").classList.remove("fadeInOut");
  document.getElementById("step1v4").classList.add("noneHolder");
  
  document.getElementById("step2v1").classList.remove("fadeInOut");
  document.getElementById("step2v1").classList.add("noneHolder");
  document.getElementById("step2v2").classList.remove("fadeInOut");
  document.getElementById("step2v2").classList.add("noneHolder");
  document.getElementById("step2v3").classList.remove("fadeInOut");
  document.getElementById("step2v3").classList.add("noneHolder");
  document.getElementById("step2v4").classList.remove("fadeInOut");
  document.getElementById("step2v4").classList.add("noneHolder");
  
  document.getElementById("step3v1").classList.remove("fadeInOut");
  document.getElementById("step3v1").classList.add("noneHolder");
  document.getElementById("step3v2").classList.remove("fadeInOut");
  document.getElementById("step3v2").classList.add("noneHolder");
  document.getElementById("step3v3").classList.remove("fadeInOut");
  document.getElementById("step3v3").classList.add("noneHolder");
  document.getElementById("step3v4").classList.remove("fadeInOut");
  document.getElementById("step3v4").classList.add("noneHolder");
  
  document.getElementById("step4v1").classList.remove("fadeInOut");
  document.getElementById("step4v1").classList.add("noneHolder");
  document.getElementById("step4v2").classList.remove("fadeInOut");
  document.getElementById("step4v2").classList.add("noneHolder");
  document.getElementById("step4v3").classList.remove("fadeInOut");
  document.getElementById("step4v3").classList.add("noneHolder");
  document.getElementById("step4v4").classList.remove("fadeInOut");
  document.getElementById("step4v4").classList.add("noneHolder");
  
  document.getElementById("step5v1").classList.remove("fadeInOut");
  document.getElementById("step5v1").classList.add("noneHolder");
  document.getElementById("step5v2").classList.remove("fadeInOut");
  document.getElementById("step5v2").classList.add("noneHolder");
  document.getElementById("step5v3").classList.remove("fadeInOut");
  document.getElementById("step5v3").classList.add("noneHolder");
  document.getElementById("step5v4").classList.remove("fadeInOut");
  document.getElementById("step5v4").classList.add("noneHolder");
  
  document.getElementById("dart1").classList.remove("fadeIn5");
  document.getElementById("dart1").classList.add("noneHolder");
  document.getElementById("dart2").classList.remove("fadeIn5");
  document.getElementById("dart2").classList.add("noneHolder");
  document.getElementById("dart3").classList.remove("fadeIn5");
  document.getElementById("dart3").classList.add("noneHolder");
  document.getElementById("dart4").classList.remove("fadeIn5");
  document.getElementById("dart4").classList.add("noneHolder");
  document.getElementById("dart5").classList.remove("fadeIn5");
  document.getElementById("dart5").classList.add("noneHolder");
  document.getElementById("dart6").classList.remove("fadeIn5");
  document.getElementById("dart6").classList.add("noneHolder");
  document.getElementById("dart7").classList.remove("fadeIn5");
  document.getElementById("dart7").classList.add("noneHolder");
  document.getElementById("dart8").classList.remove("fadeIn5");
  document.getElementById("dart8").classList.add("noneHolder");
  document.getElementById("dart9").classList.remove("fadeIn5");
  document.getElementById("dart9").classList.add("noneHolder");
  document.getElementById("dart10").classList.remove("fadeIn5");
  document.getElementById("dart10").classList.add("noneHolder");
  document.getElementById("dart11").classList.remove("fadeIn5");
  document.getElementById("dart11").classList.add("noneHolder");
  document.getElementById("dart12").classList.remove("fadeIn5");
  document.getElementById("dart12").classList.add("noneHolder");
  document.getElementById("dart13").classList.remove("fadeIn5");
  document.getElementById("dart13").classList.add("noneHolder");
  document.getElementById("dart14").classList.remove("fadeIn5");
  document.getElementById("dart14").classList.add("noneHolder");

  document.getElementById("slide10_img").classList.remove("fadeOut");
  document.getElementById("slide10_img").classList.add("opaqueHolder");
  document.getElementById("conceptlist1").classList.remove("fadeIn");
  document.getElementById("conceptlist1").classList.add("noneHolder");
  document.getElementById("conceptlist2").classList.remove("fadeIn");
  document.getElementById("conceptlist2").classList.add("noneHolder");
  document.getElementById("conceptlist3").classList.remove("fadeIn");
  document.getElementById("conceptlist3").classList.add("noneHolder");
  document.getElementById("conceptlist4").classList.remove("fadeIn");
  document.getElementById("conceptlist4").classList.add("noneHolder");
  document.getElementById("conceptlist5").classList.remove("fadeIn");
  document.getElementById("conceptlist5").classList.add("noneHolder");
  
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
	Animations();
    
  
  }
  

}



// get elements
let presentation = document.querySelector(".presentation");
let slides = 36;
let currentSlide = 34;

var slideNumber = document.querySelector(".counter");
var toLeftBtn = document.querySelector("#left-btn");
var toRightBtn = document.querySelector("#right-btn");
var navigateIntro = document.querySelector("#navigate-btn1");
var navigateTerms = document.querySelector("#navigate-btn2");
var navigateConcepts = document.querySelector("#navigate-btn3");
var navigateExamples = document.querySelector("#navigate-btn4");
var navigateSummary = document.querySelector("#navigate-btn5");
var navigateCases = document.querySelector("#navigate-btn6");

let presentationController = document.querySelector("#presentation-area");
var toFullScreenBtn = document.querySelector("#full-screen");
var toSmallScreenBtn = document.querySelector("#small-screen");

// initailize defualt values
var screenStatus = 0;
var currentSlideNo = 34;
var totalSides = 36;
var MySlideCounter = 34;
var MySlideCounterNo = document.getElementById("MyCounter")

// run init script
init();

function init() {
  getCurrentSlideNo();
  totalSides = slides.length;
  setSlideNo();
}

// handle clicks on left and right icons
toLeftBtn.addEventListener("click", moveToLeftSlide);
toRightBtn.addEventListener("click", moveToRightSlide);

//handle clicks on navigator buttons
navigateIntro.addEventListener("click", moveToIntroSlide);
navigateTerms.addEventListener("click", moveToTermsSlide);
navigateConcepts.addEventListener("click", moveToConceptsSlide);
navigateExamples.addEventListener("click", moveToExamplesSlide);
navigateSummary.addEventListener("click", moveToSummarySlide);
navigateCases.addEventListener("click", moveToCasesSlide);



function InformationPopdown() {
var show1 = document.getElementById("InformationBox");
var show2 = document.getElementById("White");
var show3 = document.getElementById("StartButton");
var hider1 = document.getElementById("hide1");
var hider2 = document.getElementById("hide2");
var hider3 = document.getElementById("hide3");
var hider4 = document.getElementById("hide4");
var hider5 = document.getElementById("hide5");
var hider6 = document.getElementById("hide6");
var hider7 = document.getElementById("hide7");
var hider8 = document.getElementById("hide8");
var hider9 = document.getElementById("hide9");
var hider10 = document.getElementById("hide10");
var hider11 = document.getElementById("hide11");
var hider12 = document.getElementById("hide12");
var hider13 = document.getElementById("hide13");
var hider14 = document.getElementById("hide14");
var hider15 = document.getElementById("hide15");
var hider16 = document.getElementById("hide16");
var hider17 = document.getElementById("hide17");
var hider18 = document.getElementById("hide18");
var hider19 = document.getElementById("hide19");
var hider20 = document.getElementById("hide20");
var hider21 = document.getElementById("hide21");
var hider22 = document.getElementById("hide22");
var hider23 = document.getElementById("hide23");
var hider24 = document.getElementById("hide24");
var hider25 = document.getElementById("hide25");
var hider26 = document.getElementById("hide26");
var hider27 = document.getElementById("hide27");
var hider28 = document.getElementById("hide28");
var hider29 = document.getElementById("hide29");
var hider30 = document.getElementById("hide30");
var hider31 = document.getElementById("hide31");
var hider32 = document.getElementById("hide32");


if (show1.style.display = "block") {
show1.style.display = "none";
show2.style.display = "none";
show3.style.display = "none";
hider1.style.display = "block";
hider2.style.display = "block";
hider3.style.display = "block";
hider4.style.display = "block";
hider5.style.display = "block";
hider6.style.display = "block";
hider7.style.display = "block";
hider8.style.display = "block";
hider9.style.display = "block";
hider10.style.display = "block";
hider11.style.display = "block";
hider12.style.display = "block";
hider13.style.display = "block";
hider14.style.display = "block";
hider15.style.display = "block";
hider16.style.display = "block";
hider17.style.display = "block";
hider18.style.display = "block";
hider19.style.display = "block";
hider20.style.display = "block";
hider21.style.display = "block";
hider22.style.display = "block";
hider23.style.display = "block";
hider24.style.display = "block";
hider25.style.display = "block";
hider26.style.display = "block";
hider27.style.display = "block";
hider28.style.display = "block";
hider29.style.display = "block";
hider30.style.display = "block";
hider31.style.display = "block";
hider32.style.display = "block";
}
}

function InformationPopup(){
var show1 = document.getElementById("InformationBox");
var show2 = document.getElementById("White");
var show3 = document.getElementById("StartButton");
var show4 = document.getElementById("right-btn");
var show5 = document.getElementById("PP");
var show6 = document.getElementById("disabled1");
var show7 = document.getElementById("disabled2");
var show8 = document.getElementById("disabled3");
var show9 = document.getElementById("disabled4");
var show10 = document.getElementById("disabled5");
var show11 = document.getElementById("transcript_button");
var show12 = document.getElementById("information_button");

if (show1.style.display === "none" && MySlideCounter == 1) {
show1.style.display = "block";
show2.style.display = "block";
show3.style.display = "none";
}

else if (show1.style.display === "none") {
show1.style.display = "block";
show2.style.display = "block";
show3.style.display = "none";
}

else if (show1.style.display = "block" && MySlideCounter == 1) {
show1.style.display = "none";
show2.style.display = "none";
show3.style.display = "none";
show4.style.display = "inline-block";
show5.style.display = "inline-block";
show6.style.display = "inline-block";
show7.style.display = "inline-block";
show8.style.display = "inline-block";
show9.style.display = "inline-block";
show10.style.display = "inline-block";
show11.style.display = "inline-block";
show12.style.display = "inline-block";
document.getElementById("slide1_audio").play();}

else {
show1.style.display = "none";
show2.style.display = "none";
show3.style.display = "none";}

}


function HideSlide() {
var InfoRead = document.getElementById("InformationBox");
var hider1 = document.getElementById("hide1");
var hider2 = document.getElementById("hide2");
var hider3 = document.getElementById("hide3");
var hider4 = document.getElementById("hide4");
var hider5 = document.getElementById("hide5");
var hider6 = document.getElementById("hide6");
var hider7 = document.getElementById("hide7");
var hider8 = document.getElementById("hide8");
var hider9 = document.getElementById("hide9");
var hider10 = document.getElementById("hide10");
var hider11 = document.getElementById("hide11");
var hider12 = document.getElementById("hide12");
var hider13 = document.getElementById("hide13");
var hider14 = document.getElementById("hide14");
var hider15 = document.getElementById("hide15");
var hider16 = document.getElementById("hide16");
var hider17 = document.getElementById("hide17");
var hider18 = document.getElementById("hide18");
var hider19 = document.getElementById("hide19");
var hider20 = document.getElementById("hide20");
var hider21 = document.getElementById("hide21");
var hider22 = document.getElementById("hide22");
var hider23 = document.getElementById("hide23");
var hider24 = document.getElementById("hide24");
var hider25 = document.getElementById("hide25");
var hider26 = document.getElementById("hide26");
var hider27 = document.getElementById("hide27");
var hider28 = document.getElementById("hide28");
var hider29 = document.getElementById("hide29");
var hider30 = document.getElementById("hide30");
var hider31 = document.getElementById("hide31");
var hider32 = document.getElementById("hide32");
var hider33 = document.getElementById("hide33");
var hider34 = document.getElementById("hide34");
var hider35 = document.getElementById("hide35");

if (InfoRead.style.display === "none") {
hider1.style.display = "block";
hider2.style.display = "block";
hider3.style.display = "block";
hider4.style.display = "block";
hider5.style.display = "block";
hider6.style.display = "block";
hider7.style.display = "block";
hider8.style.display = "block";
hider9.style.display = "block";
hider10.style.display = "block";
hider11.style.display = "block";
hider12.style.display = "block";
hider13.style.display = "block";
hider14.style.display = "block";
hider15.style.display = "block";
hider16.style.display = "block";
hider17.style.display = "block";
hider18.style.display = "block";
hider19.style.display = "block";
hider20.style.display = "block";
hider21.style.display = "block";
hider22.style.display = "block";
hider23.style.display = "block";
hider24.style.display = "block";
hider25.style.display = "block";
hider26.style.display = "block";
hider27.style.display = "block";
hider28.style.display = "block";
hider29.style.display = "block";
hider30.style.display = "block";
hider31.style.display = "block";
hider32.style.display = "block";
hider33.style.display = "block";
hider34.style.display = "block";
hider35.style.display = "block";}

else {
hider1.style.display = "none";
hider2.style.display = "none";
hider3.style.display = "none";
hider4.style.display = "none";
hider5.style.display = "none";
hider6.style.display = "none";
hider7.style.display = "none";
hider8.style.display = "none";
hider9.style.display = "none";
hider10.style.display = "none";
hider11.style.display = "none";
hider12.style.display = "none";
hider13.style.display = "none";
hider14.style.display = "none";
hider15.style.display = "none";
hider16.style.display = "none";
hider17.style.display = "none";
hider18.style.display = "none";
hider19.style.display = "none";
hider20.style.display = "none";
hider21.style.display = "none";
hider22.style.display = "none";
hider23.style.display = "none";
hider24.style.display = "none";
hider25.style.display = "none";
hider26.style.display = "none";
hider27.style.display = "none";
hider28.style.display = "none";
hider29.style.display = "none";
hider30.style.display = "none";
hider31.style.display = "none";
hider32.style.display = "none";
hider33.style.display = "block";
hider34.style.display = "block";
hider35.style.display = "block";}

}





function ReferencePopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


function ChangePopupText() {
if (MySlideCounter == 4)
{document.getElementById("myPopup").innerHTML = "1. Abr&agrave;moff MD, Tobey D, Char DS. Lessons learned about autonomous AI: Finding a safe, efficacious, and ethical path through the development process. Am J Ophthalmol 2020;214:134-142. <a>https://doi.org/10.1016/j.ajo.2020.02.022</a><br>2. Aggarwal R, Farag S, Martin G, Ashrafian H, Darzi A. Patient perceptions on data sharing and applying artificial intelligence to health care data: Cross-sectional survey. J Med Internet Res 2021;23(8)e26162. <a>https://doi.org/10.2196/26162</a>";}
else
{document.getElementById("myPopup").innerHTML = "";}
}

function ChangePopupBack() {
if (MySlideCounter == 5)
{document.getElementById("myPopup").innerHTML = "1. Abr&agrave;moff MD, Tobey D, Char DS. Lessons learned about autonomous AI: Finding a safe, efficacious, and ethical path through the development process. Am J Ophthalmol 2020;214:134-142. <a>https://doi.org/10.1016/j.ajo.2020.02.022</a><br>2. Aggarwal R, Farag S, Martin G, Ashrafian H, Darzi A. Patient perceptions on data sharing and applying artificial intelligence to health care data: Cross-sectional survey. J Med Internet Res 2021;23(8)e26162. <a>https://doi.org/10.2196/26162</a>";}
else
{document.getElementById("myPopup").innerHTML = "";}
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function NavigatorDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





function Lock() {

document.getElementById("left-btn").style.pointerEvents = 'none';
document.getElementById("right-btn").style.pointerEvents = 'none';

setTimeout(UnlockButton, 1000);

function UnlockButton() {
document.getElementById("left-btn").style.pointerEvents = 'auto';
document.getElementById("right-btn").style.pointerEvents = 'auto';
}

}




