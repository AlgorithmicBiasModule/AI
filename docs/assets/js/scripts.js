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
  var buttonNavIntro = document.getElementById('navigate-btn1');
  var buttonNavTerms = document.getElementById('navigate-btn2');
  var buttonNavConcepts = document.getElementById('navigate-btn3');
  var buttonNavExamples = document.getElementById('navigate-btn4');
  var buttonNavSummary = document.getElementById('navigate-btn5');
  var buttonNavCases = document.getElementById('navigate-btn6');
  var buttonAutoPlay = document.getElementById('autoplay');
  var buttonCalibrateRight = document.getElementById('calibrate-right');
  var buttonCalibrateLeft = document.getElementById('calibrate-left');
  var boxSlide12a = document.getElementById('slide12_box1');
  var boxSlide12b = document.getElementById('slide12_box2');
  var boxSlide12c = document.getElementById('slide12_box3');
  var boxSlide12d = document.getElementById('slide12_box4');
  var rowSlide14a = document.getElementById('slide14_row1');
  var rowSlide14b = document.getElementById('slide14_row2');
  var rowSlide14c = document.getElementById('slide14_row3');
  var Interval ;
  
  buttonCalibrateLeft.onclick = function() {
  var Trust = document.getElementById("Trusttoggle").innerHTML;
  if (Trust == 1) {
  document.getElementById("Mtext").classList.remove("opaqueHolder");
  document.getElementById("Mtext").classList.add("noneHolder");
  document.getElementById("Ltext").classList.remove("noneHolder");
  document.getElementById("Ltext").classList.add("opaqueHolder");
  document.getElementById("bar").classList.remove("BarPosition1");
  document.getElementById("bar").classList.add("BarPosition3");
  document.getElementById("Trusttoggle").innerHTML = 0;
  }
  if (Trust == 2) {
  document.getElementById("Htext").classList.remove("opaqueHolder");
  document.getElementById("Htext").classList.add("noneHolder");
  document.getElementById("Mtext").classList.remove("noneHolder");
  document.getElementById("Mtext").classList.add("opaqueHolder");
  document.getElementById("bar").classList.remove("BarPosition2");
  document.getElementById("bar").classList.add("BarPosition1");
  document.getElementById("Trusttoggle").innerHTML = 1;
  }
  }
  
  buttonCalibrateRight.onclick = function() {
  var Trust = document.getElementById("Trusttoggle").innerHTML;
  if (Trust == 0) {
  document.getElementById("Ltext").classList.remove("opaqueHolder");
  document.getElementById("Ltext").classList.add("noneHolder");
  document.getElementById("Mtext").classList.remove("noneHolder");
  document.getElementById("Mtext").classList.add("opaqueHolder");
  document.getElementById("bar").classList.remove("BarPosition3");
  document.getElementById("bar").classList.add("BarPosition1");
  document.getElementById("Trusttoggle").innerHTML = 1;
  }
  if (Trust == 1) {
  document.getElementById("Mtext").classList.remove("opaqueHolder");
  document.getElementById("Mtext").classList.add("noneHolder");
  document.getElementById("Htext").classList.remove("noneHolder");
  document.getElementById("Htext").classList.add("opaqueHolder");
  document.getElementById("bar").classList.remove("BarPosition1");
  document.getElementById("bar").classList.add("BarPosition2");
  document.getElementById("Trusttoggle").innerHTML = 2;
  }
  }
  
  boxSlide12a.onclick = function() {
  document.getElementById("12b1").classList.remove("backcolor1");
  document.getElementById("12b1").classList.add("backcolor2");
  document.getElementById("12b2").classList.remove("backcolor2");
  document.getElementById("12b2").classList.add("backcolor1");
  document.getElementById("12b3").classList.remove("backcolor2");
  document.getElementById("12b3").classList.add("backcolor1");
  document.getElementById("12b4").classList.remove("backcolor2");
  document.getElementById("12b4").classList.add("backcolor1");
  document.getElementById("slide12_audio").load();
  document.getElementById("slide12b_audio").load();
  document.getElementById("slide12c_audio").load();
  document.getElementById("slide12d_audio").load();
  document.getElementById("slide12a_audio").play();
  document.getElementById("PPtoggle").innerHTML = 1;
  document.getElementById("PP_text").innerHTML = "playing";
  document.getElementById("transcript").innerHTML = "Biased data primarily orginates from flaws in data collection. Despite the lack of quality in data collection, many people assume that artificial intelligence is free of bias due to the use of a scientific process in its development. However, flaws in data collection can lead to overrepresentation or underrepresentation in data used to train the AI tool. Bias can also be present in data sets that are too small or incomplete. Health care in particular has numerous potential sources of biased data. If, for example, you want to avoid using EHR records with missing data and only use complete data to train your algorithm, you would introduce a bias toward older and sicker patients who are also more likely female. Similarly, when performing data collections in the health care setting, the process is inherently biased toward those who are able to afford health care services.";
  document.getElementById("InteractiveAutoSlide12a").innerHTML = 1;
  document.getElementById("PP2toggle").innerHTML = 1;
  document.getElementById("PP2atoggle").innerHTML = 1;
  document.getElementById("PP2btoggle").innerHTML = 0;
  document.getElementById("PP2ctoggle").innerHTML = 0;
  document.getElementById("PP2dtoggle").innerHTML = 0;
  }
  
  boxSlide12b.onclick = function() {
  document.getElementById("12b1").classList.remove("backcolor2");
  document.getElementById("12b1").classList.add("backcolor1");
  document.getElementById("12b2").classList.remove("backcolor1");
  document.getElementById("12b2").classList.add("backcolor2");
  document.getElementById("12b3").classList.remove("backcolor2");
  document.getElementById("12b3").classList.add("backcolor1");
  document.getElementById("12b4").classList.remove("backcolor2");
  document.getElementById("12b4").classList.add("backcolor1");
  document.getElementById("slide12_audio").load();
  document.getElementById("slide12a_audio").load();
  document.getElementById("slide12c_audio").load();
  document.getElementById("slide12d_audio").load();
  document.getElementById("slide12b_audio").play();
  document.getElementById("PPtoggle").innerHTML = 1;
  document.getElementById("PP_text").innerHTML = "playing";
  document.getElementById("transcript").innerHTML = "Preexisting social biases often implicitly contribute to the presence of bias in data. Social biases can influence the availability of data to be used, the selection of variables to represented, and other, often difficult to recognize, features of data.";
  document.getElementById("InteractiveAutoSlide12b").innerHTML = 1;
  document.getElementById("PP2toggle").innerHTML = 1;
  document.getElementById("PP2btoggle").innerHTML = 1;
  document.getElementById("PP2atoggle").innerHTML = 0;
  document.getElementById("PP2ctoggle").innerHTML = 0;
  document.getElementById("PP2dtoggle").innerHTML = 0;
  }
  
  boxSlide12c.onclick = function() {
  document.getElementById("12b1").classList.remove("backcolor2");
  document.getElementById("12b1").classList.add("backcolor1");
  document.getElementById("12b2").classList.remove("backcolor2");
  document.getElementById("12b2").classList.add("backcolor1");
  document.getElementById("12b3").classList.remove("backcolor1");
  document.getElementById("12b3").classList.add("backcolor2");
  document.getElementById("12b4").classList.remove("backcolor2");
  document.getElementById("12b4").classList.add("backcolor1");
  document.getElementById("slide12_audio").load();
  document.getElementById("slide12a_audio").load();
  document.getElementById("slide12b_audio").load();
  document.getElementById("slide12d_audio").load();
  document.getElementById("slide12c_audio").play();
  document.getElementById("PPtoggle").innerHTML = 1;
  document.getElementById("PP_text").innerHTML = "playing";
  document.getElementById("transcript").innerHTML = "System drift is a reflection of how bias can accrue over a period of time due to changes in society, changes in goals for the AI system, and how the AI system is implemented.";
  document.getElementById("InteractiveAutoSlide12c").innerHTML = 1;
  document.getElementById("PP2toggle").innerHTML = 1;
  document.getElementById("PP2ctoggle").innerHTML = 1;
  document.getElementById("PP2atoggle").innerHTML = 0;
  document.getElementById("PP2btoggle").innerHTML = 0;
  document.getElementById("PP2dtoggle").innerHTML = 0;
  }
  
  boxSlide12d.onclick = function() {
  document.getElementById("12b1").classList.remove("backcolor2");
  document.getElementById("12b1").classList.add("backcolor1");
  document.getElementById("12b2").classList.remove("backcolor2");
  document.getElementById("12b2").classList.add("backcolor1");
  document.getElementById("12b3").classList.remove("backcolor2");
  document.getElementById("12b3").classList.add("backcolor1");
  document.getElementById("12b4").classList.remove("backcolor1");
  document.getElementById("12b4").classList.add("backcolor2");
  document.getElementById("slide12_audio").load();
  document.getElementById("slide12a_audio").load();
  document.getElementById("slide12b_audio").load();
  document.getElementById("slide12c_audio").load();
  document.getElementById("slide12d_audio").play();
  document.getElementById("PPtoggle").innerHTML = 1;
  document.getElementById("PP_text").innerHTML = "playing";
  document.getElementById("transcript").innerHTML = "Similar to system drift, feedback loops can make data biased over time. In this case, the results of the AI system itself can cause changes in the data which then change how the AI functions.";
  document.getElementById("InteractiveAutoSlide12d").innerHTML = 1;
  document.getElementById("PP2toggle").innerHTML = 1;
  document.getElementById("PP2dtoggle").innerHTML = 1;
  document.getElementById("PP2atoggle").innerHTML = 0;
  document.getElementById("PP2btoggle").innerHTML = 0;
  document.getElementById("PP2ctoggle").innerHTML = 0;
  }
  
  rowSlide14a.onclick = function() {
  document.getElementById("14r1").classList.remove("backcolor1");
  document.getElementById("14r1").classList.add("backcolor2");
  document.getElementById("14r2").classList.remove("backcolor2");
  document.getElementById("14r2").classList.add("backcolor1");
  document.getElementById("14r3").classList.remove("backcolor2");
  document.getElementById("14r3").classList.add("backcolor1");
  document.getElementById("slide14_audio").load();
  document.getElementById("slide14b_audio").load();
  document.getElementById("slide14c_audio").load();
  document.getElementById("slide14a_audio").play();
  document.getElementById("PPtoggle").innerHTML = 1;
  document.getElementById("PP_text").innerHTML = "playing";
  document.getElementById("transcript").innerHTML = "A simple way that preexisting biases are codified into AI systems is through the use of form entries with restricted options. A major example of this is when gender options are limited to just male or female.";
  document.getElementById("InteractiveAutoSlide14a").innerHTML = 1;
  document.getElementById("PP3toggle").innerHTML = 1;
  document.getElementById("PP3atoggle").innerHTML = 1;
  document.getElementById("PP3btoggle").innerHTML = 0;
  document.getElementById("PP3ctoggle").innerHTML = 0;
  }
  
  rowSlide14b.onclick = function() {
  document.getElementById("14r1").classList.remove("backcolor2");
  document.getElementById("14r1").classList.add("backcolor1");
  document.getElementById("14r2").classList.remove("backcolor1");
  document.getElementById("14r2").classList.add("backcolor2");
  document.getElementById("14r3").classList.remove("backcolor2");
  document.getElementById("14r3").classList.add("backcolor1");
  document.getElementById("slide14_audio").load();
  document.getElementById("slide14a_audio").load();
  document.getElementById("slide14c_audio").load();
  document.getElementById("slide14b_audio").play();
  document.getElementById("PPtoggle").innerHTML = 1;
  document.getElementById("PP_text").innerHTML = "playing";
  document.getElementById("transcript").innerHTML = "Examples of unintended consequences in the use of AI systems for health care include effects on access to health care for marginalized populations or increases in cost of care. Not all unintended consquences are negative, but it can be difficult to take advantage of positive effects that are not expected.";
  document.getElementById("InteractiveAutoSlide14b").innerHTML = 1;
  document.getElementById("PP3toggle").innerHTML = 1;
  document.getElementById("PP3btoggle").innerHTML = 1;
  document.getElementById("PP3atoggle").innerHTML = 0;
  document.getElementById("PP3ctoggle").innerHTML = 0;
  }
  
  rowSlide14c.onclick = function() {
  document.getElementById("14r1").classList.remove("backcolor2");
  document.getElementById("14r1").classList.add("backcolor1");
  document.getElementById("14r2").classList.remove("backcolor2");
  document.getElementById("14r2").classList.add("backcolor1");
  document.getElementById("14r3").classList.remove("backcolor1");
  document.getElementById("14r3").classList.add("backcolor2");
  document.getElementById("slide14_audio").load();
  document.getElementById("slide14a_audio").load();
  document.getElementById("slide14b_audio").load();
  document.getElementById("slide14c_audio").play();
  document.getElementById("PPtoggle").innerHTML = 1;
  document.getElementById("PP_text").innerHTML = "playing";
  document.getElementById("transcript").innerHTML = "A study from Nature Medicine 2021 describes an example of bias amplification in an AI system that could increase the rates of underdiagnosis in chest radiographs for under-served patient populations. The model risked not only failing to diagnose patients that clinicians underdiagnosed but also patients who clinicians did not underdiagnose.";
  document.getElementById("InteractiveAutoSlide14c").innerHTML = 1;
  document.getElementById("PP3toggle").innerHTML = 1;
  document.getElementById("PP3ctoggle").innerHTML = 1;
  document.getElementById("PP3atoggle").innerHTML = 0;
  document.getElementById("PP3btoggle").innerHTML = 0;
  }
  
  document.getElementById("slide12a_audio").onended = function() {
  var AutoToggle = document.getElementById("Atoggle").innerHTML;
  
  document.getElementById("12b1").classList.remove("backcolor2");
  document.getElementById("12b1").classList.add("backcolor1");
  document.getElementById("12b2").classList.remove("backcolor2");
  document.getElementById("12b2").classList.add("backcolor1");
  document.getElementById("12b3").classList.remove("backcolor2");
  document.getElementById("12b3").classList.add("backcolor1");
  document.getElementById("12b4").classList.remove("backcolor2");
  document.getElementById("12b4").classList.add("backcolor1");
  document.getElementById("PP2toggle").innerHTML = 0;
  document.getElementById("PP2atoggle").innerHTML = 0;
  document.getElementById("PP2btoggle").innerHTML = 0;
  document.getElementById("PP2ctoggle").innerHTML = 0;
  document.getElementById("PP2dtoggle").innerHTML = 0;
  document.getElementById("transcript").innerHTML = "Click each of the four areas to learn about different major sources of biased data in AI systems.";
  
  if (AutoToggle == 1 && document.getElementById("InteractiveAutoSlide12a").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12b").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12c").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12d").innerHTML == 1) {
  moveToRightSlide();
  Lock();
  SetButton1();
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
  }
  
  document.getElementById("slide12b_audio").onended = function() {
  var AutoToggle = document.getElementById("Atoggle").innerHTML;
  
  document.getElementById("12b1").classList.remove("backcolor2");
  document.getElementById("12b1").classList.add("backcolor1");
  document.getElementById("12b2").classList.remove("backcolor2");
  document.getElementById("12b2").classList.add("backcolor1");
  document.getElementById("12b3").classList.remove("backcolor2");
  document.getElementById("12b3").classList.add("backcolor1");
  document.getElementById("12b4").classList.remove("backcolor2");
  document.getElementById("12b4").classList.add("backcolor1");
  document.getElementById("PP2toggle").innerHTML = 0;
  document.getElementById("PP2atoggle").innerHTML = 0;
  document.getElementById("PP2btoggle").innerHTML = 0;
  document.getElementById("PP2ctoggle").innerHTML = 0;
  document.getElementById("PP2dtoggle").innerHTML = 0;
  document.getElementById("transcript").innerHTML = "Click each of the four areas to learn about different major sources of biased data in AI systems.";
  
  if (AutoToggle == 1 && document.getElementById("InteractiveAutoSlide12a").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12b").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12c").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12d").innerHTML == 1) {
  moveToRightSlide();
  Lock();
  SetButton1();
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
  }
  
  document.getElementById("slide12c_audio").onended = function() {
  var AutoToggle = document.getElementById("Atoggle").innerHTML;
  
  document.getElementById("12b1").classList.remove("backcolor2");
  document.getElementById("12b1").classList.add("backcolor1");
  document.getElementById("12b2").classList.remove("backcolor2");
  document.getElementById("12b2").classList.add("backcolor1");
  document.getElementById("12b3").classList.remove("backcolor2");
  document.getElementById("12b3").classList.add("backcolor1");
  document.getElementById("12b4").classList.remove("backcolor2");
  document.getElementById("12b4").classList.add("backcolor1");
  document.getElementById("PP2toggle").innerHTML = 0;
  document.getElementById("PP2atoggle").innerHTML = 0;
  document.getElementById("PP2btoggle").innerHTML = 0;
  document.getElementById("PP2ctoggle").innerHTML = 0;
  document.getElementById("PP2dtoggle").innerHTML = 0;
  document.getElementById("transcript").innerHTML = "Click each of the four areas to learn about different major sources of biased data in AI systems.";
  
  if (AutoToggle == 1 && document.getElementById("InteractiveAutoSlide12a").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12b").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12c").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12d").innerHTML == 1) {
  moveToRightSlide();
  Lock();
  SetButton1();
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
  }
  
  document.getElementById("slide12d_audio").onended = function() {
  var AutoToggle = document.getElementById("Atoggle").innerHTML;
  
  document.getElementById("12b1").classList.remove("backcolor2");
  document.getElementById("12b1").classList.add("backcolor1");
  document.getElementById("12b2").classList.remove("backcolor2");
  document.getElementById("12b2").classList.add("backcolor1");
  document.getElementById("12b3").classList.remove("backcolor2");
  document.getElementById("12b3").classList.add("backcolor1");
  document.getElementById("12b4").classList.remove("backcolor2");
  document.getElementById("12b4").classList.add("backcolor1");
  document.getElementById("PP2toggle").innerHTML = 0;
  document.getElementById("PP2atoggle").innerHTML = 0;
  document.getElementById("PP2btoggle").innerHTML = 0;
  document.getElementById("PP2ctoggle").innerHTML = 0;
  document.getElementById("PP2dtoggle").innerHTML = 0;
  document.getElementById("transcript").innerHTML = "Click each of the four areas to learn about different major sources of biased data in AI systems.";
  
  if (AutoToggle == 1 && document.getElementById("InteractiveAutoSlide12a").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12b").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12c").innerHTML == 1 && document.getElementById("InteractiveAutoSlide12d").innerHTML == 1) {
  moveToRightSlide();
  Lock();
  SetButton1();
  erase();
  ChangeTranscript();
  PlayAudio();
  ChangePopupText();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);
  ChangeMyCounter();
  InformationPopdown();
  
  }
  }
  
  document.getElementById("slide14a_audio").onended = function() {
  var AutoToggle = document.getElementById("Atoggle").innerHTML;
  
  document.getElementById("14r1").classList.remove("backcolor2");
  document.getElementById("14r1").classList.add("backcolor1");
  document.getElementById("14r2").classList.remove("backcolor2");
  document.getElementById("14r2").classList.add("backcolor1");
  document.getElementById("14r3").classList.remove("backcolor2");
  document.getElementById("14r3").classList.add("backcolor1");
  document.getElementById("PP3toggle").innerHTML = 0;
  document.getElementById("PP3atoggle").innerHTML = 0;
  document.getElementById("PP3btoggle").innerHTML = 0;
  document.getElementById("PP3ctoggle").innerHTML = 0;
  document.getElementById("transcript").innerHTML = "Another way in which data is biased is when preexisting social biases are captured in the data and then codified into the algorithm. In any AI tool, there are risks for unintended consequences when users are not aware of the social biases being captured in the data. And furthermore, those biases can become amplified by the system. Click each line to hear examples of how each biased process could occur.";
  
  if (AutoToggle == 1 && document.getElementById("InteractiveAutoSlide14a").innerHTML == 1 && document.getElementById("InteractiveAutoSlide14b").innerHTML == 1 && document.getElementById("InteractiveAutoSlide14c").innerHTML == 1) {
  moveToRightSlide();
  Lock();
  SetButton1();
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
  } 
  
  document.getElementById("slide14b_audio").onended = function() {
  var AutoToggle = document.getElementById("Atoggle").innerHTML;
  
  document.getElementById("14r1").classList.remove("backcolor2");
  document.getElementById("14r1").classList.add("backcolor1");
  document.getElementById("14r2").classList.remove("backcolor2");
  document.getElementById("14r2").classList.add("backcolor1");
  document.getElementById("14r3").classList.remove("backcolor2");
  document.getElementById("14r3").classList.add("backcolor1");
  document.getElementById("PP3toggle").innerHTML = 0;
  document.getElementById("PP3atoggle").innerHTML = 0;
  document.getElementById("PP3btoggle").innerHTML = 0;
  document.getElementById("PP3ctoggle").innerHTML = 0;
    document.getElementById("transcript").innerHTML = "Another way in which data is biased is when preexisting social biases are captured in the data and then codified into the algorithm. In any AI tool, there are risks for unintended consequences when users are not aware of the social biases being captured in the data. And furthermore, those biases can become amplified by the system. Click each line to hear examples of how each biased process could occur.";
  
  if (AutoToggle == 1 && document.getElementById("InteractiveAutoSlide14a").innerHTML == 1 && document.getElementById("InteractiveAutoSlide14b").innerHTML == 1 && document.getElementById("InteractiveAutoSlide14c").innerHTML == 1) {
  moveToRightSlide();
  Lock();
  SetButton1();
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
  }   
  
  document.getElementById("slide14c_audio").onended = function() {
  var AutoToggle = document.getElementById("Atoggle").innerHTML;
  
  document.getElementById("14r1").classList.remove("backcolor2");
  document.getElementById("14r1").classList.add("backcolor1");
  document.getElementById("14r2").classList.remove("backcolor2");
  document.getElementById("14r2").classList.add("backcolor1");
  document.getElementById("14r3").classList.remove("backcolor2");
  document.getElementById("14r3").classList.add("backcolor1");
  document.getElementById("PP3toggle").innerHTML = 0;
  document.getElementById("PP3atoggle").innerHTML = 0;
  document.getElementById("PP3btoggle").innerHTML = 0;
  document.getElementById("PP3ctoggle").innerHTML = 0;
    document.getElementById("transcript").innerHTML = "Another way in which data is biased is when preexisting social biases are captured in the data and then codified into the algorithm. In any AI tool, there are risks for unintended consequences when users are not aware of the social biases being captured in the data. And furthermore, those biases can become amplified by the system. Click each line to hear examples of how each biased process could occur.";
  
  if (AutoToggle == 1 && document.getElementById("InteractiveAutoSlide14a").innerHTML == 1 && document.getElementById("InteractiveAutoSlide14b").innerHTML == 1 && document.getElementById("InteractiveAutoSlide14c").innerHTML == 1) {
  moveToRightSlide();
  Lock();
  SetButton1();
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
  } 
  
  function autoplay() {
  var AutoToggle = document.getElementById("Atoggle").innerHTML;
  if (AutoToggle == 1) {
  	 if(seconds > 26 && tens >50 && MySlideCounter == 1){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 31 && tens >00 && MySlideCounter == 2){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 29 && tens >00 && MySlideCounter == 3){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 27 && tens >00 && MySlideCounter == 4){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 15 && tens >00 && MySlideCounter == 5){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 19 && tens >50 && MySlideCounter == 6){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 14 && tens >50 && MySlideCounter == 7){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 26 && tens >20 && MySlideCounter == 8){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 18 && tens >00 && MySlideCounter == 9){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 39 && tens >20 && MySlideCounter == 10){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 8 && tens >20 && MySlideCounter == 11){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 17 && tens >00 && MySlideCounter == 13){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 22 && tens >00 && MySlideCounter == 15){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 21 && tens >00 && MySlideCounter == 16){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 31 && tens >00 && MySlideCounter == 17){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 43 && tens >00 && MySlideCounter == 18){
	 moveToRightSlide();
	 document.getElementById("Atoggle").innerHTML = 0;
	 document.getElementById("autoplay_text").innerHTML = "autoplay:off";
	 Lock();
	 SetButton1();
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
	 if(seconds > 15 && tens >50 && MySlideCounter == 20){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 45 && tens >00 && MySlideCounter == 21){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 18 && tens >00 && MySlideCounter == 22){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 36 && tens >00 && MySlideCounter == 23){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 29 && tens >00 && MySlideCounter == 24){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 31 && tens >50 && MySlideCounter == 25){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 15 && tens >00 && MySlideCounter == 26){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 27 && tens >50 && MySlideCounter == 27){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 7 && tens >30 && MySlideCounter == 28){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 56 && tens >00 && MySlideCounter == 29){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 52 && tens >00 && MySlideCounter == 30){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 if(seconds > 128 && tens >00 && MySlideCounter == 31){
	 moveToRightSlide();
	 Lock();
	 SetButton1();
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
	 
	 
	 
	 
  }
  }
  


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
	SetButton1();
	erase();
	ChangeTranscript(); 
	PlayAudio(); 
	togglePauseplay();
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
	SetButton2();
	erase();
	ChangeTranscriptBack(); 
	PlayLastAudio();
	togglePauseplay(); 
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
  togglePauseplay();
     setButton3(); 
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);

		if (document.getElementById("InformationBox").style.display === "block") {		
InformationPopup();
	HideSlide();}
	
  }
  
    buttonNavTerms.onclick = function() {
	erase();
	togglePauseplay();
	setButton5();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);
		
if (document.getElementById("InformationBox").style.display === "block") {		
InformationPopup();
	HideSlide();}
  }
  
      buttonNavConcepts.onclick = function() {
	erase();
	togglePauseplay();
	setButton5();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);

		if (document.getElementById("InformationBox").style.display === "block") {		
InformationPopup();
	HideSlide();}
  }
  
      buttonNavExamples.onclick = function() {
	erase();
	togglePauseplay();
	setButton5();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);

		if (document.getElementById("InformationBox").style.display === "block") {		
InformationPopup();
	HideSlide();}
  }
  
      buttonNavSummary.onclick = function() {
	erase();
	togglePauseplay();
	setButton5();
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);
		
if (document.getElementById("InformationBox").style.display === "block") {		
InformationPopup();
	HideSlide();}
  }
  
      buttonNavCases.onclick = function() {
	
	erase();
	togglePauseplay();
	   setButton4(); 
  clearInterval(Interval);
	tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
		Interval = setInterval(startTimer, 10);

if (document.getElementById("InformationBox").style.display === "block") {		
InformationPopup();
	HideSlide();}
	
  }
  
  
  function Animations() {
  
  if(seconds > 3 && tens >30 && MySlideCounter == 2)
  {document.getElementById("objective1").classList.remove("noneHolder");
  document.getElementById("objective1").classList.add("fadeIn");}
  
  if(seconds > 12 && tens >20 && MySlideCounter == 2)
  {document.getElementById("objective2").classList.remove("noneHolder");
  document.getElementById("objective2").classList.add("fadeIn");}
  
  if(seconds > 18 && tens >00 && MySlideCounter == 2)
  {document.getElementById("objective3").classList.remove("noneHolder");
  document.getElementById("objective3").classList.add("fadeIn");}
  
  
  if(seconds > 2 && tens >50 && MySlideCounter == 3) 
  {document.getElementById("agenda1").classList.remove("noneHolder");
  document.getElementById("agenda1").classList.add("fadeIn");}
  
  if(seconds > 7 && tens > 30 && MySlideCounter == 3) 
  {document.getElementById("agenda2").classList.remove("noneHolder");
  document.getElementById("agenda2").classList.add("fadeIn");}
  
  if(seconds > 10 && tens > 50 && MySlideCounter == 3) 
  {document.getElementById("agenda3").classList.remove("noneHolder");
  document.getElementById("agenda3").classList.add("fadeIn");}
  
  if(seconds > 13 && tens > 50 && MySlideCounter == 3) 
  {document.getElementById("agenda4").classList.remove("noneHolder");
  document.getElementById("agenda4").classList.add("fadeIn");}
  
  if(seconds > 23 && tens > 00 && MySlideCounter == 3) 
  {document.getElementById("agenda5").classList.remove("noneHolder");
  document.getElementById("agenda5").classList.add("fadeIn");}
  
  
  if(seconds > 9 && tens > 00 && MySlideCounter == 4) 
  {document.getElementById("hide4").classList.remove("opaqueHolder");
  document.getElementById("hide4").classList.add("fadeOut");
  document.getElementById("term1").classList.remove("noneHolder");
  document.getElementById("term1").classList.add("fadeIn", "transition");}
  
  if(seconds > 11 && tens > 00 && MySlideCounter == 4)
  {document.getElementById("term2").classList.remove("noneHolder");
  document.getElementById("term2").classList.add("fadeIn", "transition");}
  
  if(seconds > 14 && tens > 00 && MySlideCounter == 4)
  {document.getElementById("term3").classList.remove("noneHolder");
  document.getElementById("term3").classList.add("fadeIn", "transition");}
  
  if(seconds > 15 && tens > 30 && MySlideCounter == 4)
  {document.getElementById("term4").classList.remove("noneHolder");
  document.getElementById("term4").classList.add("fadeIn", "transition");}
  
  if(seconds > 16 && tens > 50 && MySlideCounter == 4)
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
  
  
  if(seconds >2 && tens > 20 && MySlideCounter == 8 )
  {document.getElementById("dart1").classList.remove("noneHolder");
  document.getElementById("dart1").classList.add("fadeIn5");}
  
  if(seconds >2 && tens > 50 && MySlideCounter == 8 )
  {document.getElementById("dart2").classList.remove("noneHolder");
  document.getElementById("dart2").classList.add("fadeIn5");}
  
  if(seconds >2 && tens > 80 && MySlideCounter == 8 )
  {document.getElementById("dart3").classList.remove("noneHolder");
  document.getElementById("dart3").classList.add("fadeIn5");}
  
  if(seconds >3 && tens > 10 && MySlideCounter == 8 )
  {document.getElementById("dart4").classList.remove("noneHolder");
  document.getElementById("dart4").classList.add("fadeIn5");}
  
  if(seconds >3 && tens > 40 && MySlideCounter == 8 )
  {document.getElementById("dart5").classList.remove("noneHolder");
  document.getElementById("dart5").classList.add("fadeIn5");}
  
  if(seconds >3 && tens > 70 && MySlideCounter == 8 )
  {document.getElementById("dart6").classList.remove("noneHolder");
  document.getElementById("dart6").classList.add("fadeIn5");}
  
  if(seconds >4 && tens > 00 && MySlideCounter == 8 )
  {document.getElementById("dart7").classList.remove("noneHolder");
  document.getElementById("dart7").classList.add("fadeIn5");}
  
  
  
  if(seconds >10 && tens > 60 && MySlideCounter == 8 )
  {document.getElementById("slide8_square").classList.remove("noneHolder");
  document.getElementById("slide8_square").classList.add("fadeIn");}
  
  if(seconds >10 && tens > 60 && MySlideCounter == 8 )
  {document.getElementById("myCanvas").classList.remove("noneHolder");
  document.getElementById("myCanvas").classList.add("fadeIn");}
  
  if(seconds >10 && tens > 60 && MySlideCounter == 8 )
  {document.getElementById("socialBias").classList.remove("noneHolder");
  document.getElementById("socialBias").classList.add("fadeIn");}
  
  if(seconds >12 && tens > 60 && MySlideCounter == 8 )
  {document.getElementById("myCanvas2").classList.remove("noneHolder");
  document.getElementById("myCanvas2").classList.add("fadeIn");}
  
  if(seconds >12 && tens > 60 && MySlideCounter == 8 )
  {document.getElementById("statisticalBias").classList.remove("noneHolder");
  document.getElementById("statisticalBias").classList.add("fadeIn");}
  
  
  
  
    if(seconds >19 && tens > 50 && MySlideCounter == 8 )
  {document.getElementById("dart8").classList.remove("noneHolder");
  document.getElementById("dart8").classList.add("fadeIn5");}
  
  if(seconds >19 && tens > 80 && MySlideCounter == 8 )
  {document.getElementById("dart9").classList.remove("noneHolder");
  document.getElementById("dart9").classList.add("fadeIn5");}
  
  if(seconds >20 && tens > 10 && MySlideCounter == 8 )
  {document.getElementById("dart10").classList.remove("noneHolder");
  document.getElementById("dart10").classList.add("fadeIn5");}
  
  if(seconds >20 && tens > 40 && MySlideCounter == 8 )
  {document.getElementById("dart11").classList.remove("noneHolder");
  document.getElementById("dart11").classList.add("fadeIn5");}
  
  if(seconds >20 && tens > 70 && MySlideCounter == 8 )
  {document.getElementById("dart12").classList.remove("noneHolder");
  document.getElementById("dart12").classList.add("fadeIn5");}
  
  if(seconds >21 && tens > 00 && MySlideCounter == 8 )
  {document.getElementById("dart13").classList.remove("noneHolder");
  document.getElementById("dart13").classList.add("fadeIn5");}
  
  if(seconds >21 && tens > 30 && MySlideCounter == 8 )
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
  
  
  if(seconds >15 && tens > 00 && MySlideCounter == 16 )
  {document.getElementById("VR").classList.remove("noneHolder");
  document.getElementById("VR").classList.add("move1");}
  
  if(seconds >16 && tens > 00 && MySlideCounter == 16 )
  {document.getElementById("holo").classList.remove("noneHolder");
  document.getElementById("holo").classList.add("move2");}
  
  if(seconds >17 && tens > 00 && MySlideCounter == 16 )
  {document.getElementById("dash").classList.remove("noneHolder");
  document.getElementById("dash").classList.add("move3");}
  
  
  if(seconds >5 && tens > 00 && MySlideCounter == 17 )
  {document.getElementById("laptop").classList.remove("opaqueHolder");
  document.getElementById("laptop").classList.add("fadeOut");}
  
  if(seconds >5 && tens > 00 && MySlideCounter == 17 )
  {document.getElementById("BlackBox").classList.remove("noneHolder");
  document.getElementById("BlackBox").classList.add("fadeIn");}
  
  
  
  if(seconds >21 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("audit").classList.remove("noneHolder");
  document.getElementById("audit").classList.add("audit_animation");}
  
   if(seconds >21 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("audit_text").classList.remove("noneHolder");
  document.getElementById("audit_text").classList.add("audit_animationT1");}
  
  if(seconds >24 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("audit_text2").classList.remove("noneHolder");
  document.getElementById("audit_text2").classList.add("opaqueHolder");}
  
  if(seconds >25 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("certainty").classList.remove("noneHolder");
  document.getElementById("certainty").classList.add("certainty_animation");}
  
   if(seconds >25 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("certainty_text").classList.remove("noneHolder");
  document.getElementById("certainty_text").classList.add("certainty_animationT1");}
  
  if(seconds >35 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("certainty_text2").classList.remove("noneHolder");
  document.getElementById("certainty_text2").classList.add("opaqueHolder");}
  
  if(seconds >44 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("scale").classList.remove("noneHolder");
  document.getElementById("scale").classList.add("fadeIn");}
  
  if(seconds >44 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("bar").classList.remove("noneHolder");
  document.getElementById("bar").classList.add("fadeIn");}
  
  if(seconds >44 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("calibrate-left").classList.remove("noneHolder");
  document.getElementById("calibrate-left").classList.add("fadeIn");}
  
  if(seconds >44 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("calibrate-right").classList.remove("noneHolder");
  document.getElementById("calibrate-right").classList.add("fadeIn");}
  
  if(seconds >44 && tens > 00 && MySlideCounter == 19 )
  {document.getElementById("trust-mid").classList.remove("noneHolder");
  document.getElementById("trust-mid").classList.add("opaqueHolder");}
  
  
  
  if(seconds >4 && tens > 00 && MySlideCounter == 23 )
  {document.getElementById("thermFill").classList.remove("noneHolder");
  document.getElementById("thermFill").classList.add("fill","opaqueHolder");}
  
     if(seconds >13 && tens > 20 && MySlideCounter == 23 )
   {document.getElementById("disproA").classList.remove("noneHolder");
  document.getElementById("disproA").classList.add("disproFade1");}
  
  if(seconds >13 && tens > 50 && MySlideCounter == 23 )
   {document.getElementById("disproB").classList.remove("noneHolder");
  document.getElementById("disproB").classList.add("disproFade1");}
  
   if(seconds >13 && tens > 80 && MySlideCounter == 23 )
   {document.getElementById("disproC").classList.remove("noneHolder");
  document.getElementById("disproC").classList.add("disproFade1");}
  
  if(seconds >14 && tens > 10 && MySlideCounter == 23 )
   {document.getElementById("disproD").classList.remove("noneHolder");
  document.getElementById("disproD").classList.add("disproFade1");}
  
  if(seconds >14 && tens > 40 && MySlideCounter == 23 )
   {document.getElementById("disproE").classList.remove("noneHolder");
  document.getElementById("disproE").classList.add("disproFade1");}
  
  if(seconds >14 && tens > 70 && MySlideCounter == 23 )
   {document.getElementById("disproF").classList.remove("noneHolder");
  document.getElementById("disproF").classList.add("disproFade1");}
  
  if(seconds >15 && tens > 00 && MySlideCounter == 23 )
   {document.getElementById("disproG").classList.remove("noneHolder");
  document.getElementById("disproG").classList.add("disproFade2");}
  
  if(seconds >16 && tens > 00 && MySlideCounter == 23 )
  {document.getElementById("lifecycle").classList.remove("noneHolder");
  document.getElementById("lifecycle").classList.add("fadeIn", "cycle");
  document.getElementById("life1").classList.remove("noneHolder");
  document.getElementById("life1").classList.add("fadeInOutL");}
  
  if(seconds >19 && tens > 00 && MySlideCounter == 23 )
  {document.getElementById("lifecycle").classList.remove("fadeIn", "cycle");
  document.getElementById("lifecycle").classList.add("noneHolder");
  document.getElementById("lifecycle2").classList.remove("noneHolder");
  document.getElementById("lifecycle2").classList.add("fadeIn", "cycle");
  document.getElementById("life1").classList.remove("fadeInOutL");
  document.getElementById("life1").classList.add("noneHolder");
  document.getElementById("life2").classList.remove("noneHolder");
  document.getElementById("life2").classList.add("fadeInOutL");}
  
  if(seconds >22 && tens > 00 && MySlideCounter == 23 )
  {document.getElementById("lifecycle2").classList.remove("fadeIn", "cycle");
  document.getElementById("lifecycle2").classList.add("noneHolder");
  document.getElementById("lifecycle3").classList.remove("noneHolder");
  document.getElementById("lifecycle3").classList.add("fadeIn", "cycle");
  document.getElementById("life2").classList.remove("fadeInOutL");
  document.getElementById("life2").classList.add("noneHolder");
  document.getElementById("life3").classList.remove("noneHolder");
  document.getElementById("life3").classList.add("fadeInOutL");}
  
  if(seconds >25 && tens > 00 && MySlideCounter == 23 )
  {document.getElementById("lifecycle3").classList.remove("fadeIn", "cycle");
  document.getElementById("lifecycle3").classList.add("noneHolder");
  document.getElementById("lifecycle4").classList.remove("noneHolder");
  document.getElementById("lifecycle4").classList.add("fadeIn", "cycle");
  document.getElementById("life3").classList.remove("fadeInOutL");
  document.getElementById("life3").classList.add("noneHolder");
  document.getElementById("life4").classList.remove("noneHolder");
  document.getElementById("life4").classList.add("fadeInOutL");}
  
  if(seconds >28 && tens > 00 && MySlideCounter == 23 )
  {document.getElementById("lifecycle4").classList.remove("fadeIn", "cycle");
  document.getElementById("lifecycle4").classList.add("noneHolder");
  document.getElementById("lifecycle5").classList.remove("noneHolder");
  document.getElementById("lifecycle5").classList.add("fadeIn", "cycle");
  document.getElementById("life4").classList.remove("fadeInOutL");
  document.getElementById("life4").classList.add("noneHolder");
  document.getElementById("life5").classList.remove("noneHolder");
  document.getElementById("life5").classList.add("fadeInOutL");}
  
  if(seconds >31 && tens > 00 && MySlideCounter == 23 )
  {document.getElementById("lifecycle5").classList.remove("fadeIn", "cycle");
  document.getElementById("lifecycle5").classList.add("noneHolder");
  document.getElementById("lifecycle6").classList.remove("noneHolder");
  document.getElementById("lifecycle6").classList.add("fadeIn", "cycle");
  document.getElementById("life5").classList.remove("fadeInOutL");
  document.getElementById("life5").classList.add("noneHolder");
  document.getElementById("life6").classList.remove("noneHolder");
  document.getElementById("life6").classList.add("fadeInOutL");}
  
  if(seconds >34 && tens > 00 && MySlideCounter == 23 )
  {document.getElementById("lifecycle6").classList.remove("fadeIn", "cycle");
  document.getElementById("lifecycle6").classList.add("fadeOut");
  document.getElementById("life6").classList.remove("fadeInOutL");
  document.getElementById("life6").classList.add("noneHolder");}
  

  
  
  
  if(seconds >1 && tens > 00 && MySlideCounter == 27 )
  {document.getElementById("paradigm1").classList.remove("opaqueHolder");
  document.getElementById("paradigm1").classList.add("paradigm_shift1");
  document.getElementById("paradigm_text").classList.add("paradigm_shiftT");}
  
  if(seconds >1 && tens > 00 && MySlideCounter == 27 )
  {document.getElementById("paradigm2").classList.remove("noneHolder");
  document.getElementById("paradigm2").classList.add("paradigm_shift2");}
  
  if(seconds >13 && tens > 00 && MySlideCounter == 27 )
  {document.getElementById("transform2").classList.remove("noneHolder");
  document.getElementById("transform2").classList.add("fadeIn");
  document.getElementById("bytes").classList.remove("noneHolder");
  document.getElementById("bytes").classList.add("fadeIn");}
  
  
  
  if(seconds >2 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("brain2").classList.remove("noneHolder");
  document.getElementById("brain2").classList.add("fadeInOut31a");}
  
  if(seconds >8 && tens > 70 && MySlideCounter == 31 )
  {document.getElementById("data2").classList.remove("noneHolder");
  document.getElementById("data2").classList.add("fadeInOut31b");}
  
  if(seconds >10 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("methods2").classList.remove("noneHolder");
  document.getElementById("methods2").classList.add("fadeInOut31c");}
  
  if(seconds >11 && tens > 50 && MySlideCounter == 31 )
  {document.getElementById("human2").classList.remove("noneHolder");
  document.getElementById("human2").classList.add("fadeInOut31d");}
  
  if(seconds >15 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("usb2").classList.remove("noneHolder");
  document.getElementById("usb2").classList.add("fadeInOut31e");}
    
  if(seconds >18 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("BlackBox2").classList.remove("noneHolder");
  document.getElementById("BlackBox2").classList.add("fadeInOut31f");}
  
  if(seconds >21 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("risk2").classList.remove("noneHolder");
  document.getElementById("risk2").classList.add("fadeInOut31g");}
  
  if(seconds >25 && tens > 30 && MySlideCounter == 31 )
  {document.getElementById("dispro2").classList.remove("noneHolder");
  document.getElementById("dispro2").classList.add("fadeInOut31h");}
  
  if(seconds >32 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("transform3").classList.remove("noneHolder");
  document.getElementById("transform3").classList.add("fadeInOut31i");}
  
  if(seconds >39 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("databias2").classList.remove("noneHolder");
  document.getElementById("databias2").classList.add("fadeInOut31j");}
  
  if(seconds >41 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("regulation2").classList.remove("noneHolder");
  document.getElementById("regulation2").classList.add("fadeInOut31k");}
  
  if(seconds >45 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("weight2").classList.remove("noneHolder");
  document.getElementById("weight2").classList.add("fadeInOut31l");}
  
  if(seconds >60 && tens > 50 && MySlideCounter == 31 )
  {document.getElementById("rec1").classList.remove("noneHolder");
  document.getElementById("rec1").classList.add("opaqueHolder");}
  
  if(seconds >68 && tens > 50 && MySlideCounter == 31 )
  {document.getElementById("rec1").classList.remove("opaqueHolder");
  document.getElementById("rec1").classList.add("fadeOutR");}
  
  if(seconds >69 && tens > 50 && MySlideCounter == 31 )
  {document.getElementById("rec1").classList.remove("fadeOutR");
  document.getElementById("rec1").classList.add("noneHolder");}
  
  if(seconds >69 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec2").classList.remove("noneHolder");
  document.getElementById("rec2").classList.add("opaqueHolder");}
  
  if(seconds >75 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec2").classList.remove("opaqueHolder");
  document.getElementById("rec2").classList.add("fadeOutR");}
  
  if(seconds >76 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec2").classList.remove("fadeOutR");
  document.getElementById("rec2").classList.add("noneHolder");}
  
  if(seconds >76 && tens > 10 && MySlideCounter == 31 )
  {document.getElementById("rec3").classList.remove("noneHolder");
  document.getElementById("rec3").classList.add("fadeOutR3");}
  
  if(seconds >80 && tens > 50 && MySlideCounter == 31 )
  {document.getElementById("rec4").classList.remove("noneHolder");
  document.getElementById("rec4").classList.add("opaqueHolder");}
  
  if(seconds >87 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec4").classList.remove("opaqueHolder");
  document.getElementById("rec4").classList.add("fadeOutR");}
  
  if(seconds >88 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec4").classList.remove("fadeOutR");
  document.getElementById("rec4").classList.add("noneHolder");}
  
  if(seconds >88 && tens > 10 && MySlideCounter == 31 )
  {document.getElementById("rec5").classList.remove("noneHolder");
  document.getElementById("rec5").classList.add("opaqueHolder");}
  
  if(seconds >95 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec5").classList.remove("opaqueHolder");
  document.getElementById("rec5").classList.add("fadeOutR");}
  
  if(seconds >96 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec5").classList.remove("fadeOutR");
  document.getElementById("rec5").classList.add("noneHolder");}
  
  if(seconds >97 && tens > 10 && MySlideCounter == 31 )
  {document.getElementById("rec6").classList.remove("noneHolder");
  document.getElementById("rec6").classList.add("fadeOutR2");}
  
  if(seconds >104 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec7").classList.remove("noneHolder");
  document.getElementById("rec7").classList.add("opaqueHolder");}
  
  if(seconds >111 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec7").classList.remove("opaqueHolder");
  document.getElementById("rec7").classList.add("fadeOutR");}
  
  if(seconds >112 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec7").classList.remove("fadeOutR");
  document.getElementById("rec7").classList.add("noneHolder");}
  
  if(seconds >112 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec8").classList.remove("noneHolder");
  document.getElementById("rec8").classList.add("opaqueHolder");}
  
  if(seconds >118 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec8").classList.remove("opaqueHolder");
  document.getElementById("rec8").classList.add("fadeOutR");}
  
  if(seconds >119 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec8").classList.remove("fadeOutR");
  document.getElementById("rec8").classList.add("noneHolder");}
  
  if(seconds >119 && tens > 10 && MySlideCounter == 31 )
  {document.getElementById("rec9").classList.remove("noneHolder");
  document.getElementById("rec9").classList.add("opaqueHolder");}
  
  if(seconds >126 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec9").classList.remove("opaqueHolder");
  document.getElementById("rec9").classList.add("fadeOutR");}
  
  if(seconds >135 && tens > 00 && MySlideCounter == 31 )
  {document.getElementById("rec9").classList.remove("fadeOutR");
  document.getElementById("rec9").classList.add("noneHolder");}
  
  
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
  document.getElementById("agenda5").classList.remove("fadeIn");
  document.getElementById("agenda5").classList.add("noneHolder");
  
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
  document.getElementById("slide8_square").classList.remove("fadeIn");
  document.getElementById("slide8_square").classList.add("noneHolder");
  document.getElementById("myCanvas").classList.remove("fadeIn");
  document.getElementById("myCanvas").classList.add("noneHolder");
  document.getElementById("socialBias").classList.remove("fadeIn");
  document.getElementById("socialBias").classList.add("noneHolder");
  document.getElementById("myCanvas2").classList.remove("fadeIn");
  document.getElementById("myCanvas2").classList.add("noneHolder");
  document.getElementById("statisticalBias").classList.remove("fadeIn");
  document.getElementById("statisticalBias").classList.add("noneHolder");

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
  
  document.getElementById("VR").classList.add("noneHolder");
  document.getElementById("VR").classList.remove("move1");
  document.getElementById("holo").classList.add("noneHolder");
  document.getElementById("holo").classList.remove("move2");
  document.getElementById("dash").classList.add("noneHolder");
  document.getElementById("dash").classList.remove("move3");
  
  document.getElementById("laptop").classList.add("opaqueHolder");
  document.getElementById("laptop").classList.remove("fadeOut");
  document.getElementById("BlackBox").classList.add("noneHolder");
  document.getElementById("BlackBox").classList.remove("fadeIn");
  
  document.getElementById("audit").classList.remove("audit_animation");
  document.getElementById("audit").classList.add("noneHolder");
  document.getElementById("audit_text").classList.remove("audit_animationT1");
  document.getElementById("audit_text").classList.add("noneHolder");
  document.getElementById("audit_text2").classList.remove("opaqueHolder");
  document.getElementById("audit_text2").classList.add("noneHolder");
  document.getElementById("certainty").classList.remove("certainty_animation");
  document.getElementById("certainty").classList.add("noneHolder");
  document.getElementById("certainty_text").classList.remove("certainty_animationT1");
  document.getElementById("certainty_text").classList.add("noneHolder");
  document.getElementById("certainty_text2").classList.remove("opaqueHolder");
  document.getElementById("certainty_text2").classList.add("noneHolder");
  document.getElementById("scale").classList.remove("fadeIn");
  document.getElementById("scale").classList.add("noneHolder");
  document.getElementById("bar").classList.remove("fadeIn");
  document.getElementById("bar").classList.add("noneHolder");
  document.getElementById("calibrate-left").classList.remove("fadeIn");
  document.getElementById("calibrate-left").classList.add("noneHolder");
  document.getElementById("calibrate-right").classList.remove("fadeIn");
  document.getElementById("calibrate-right").classList.add("noneHolder");
  document.getElementById("trust-mid").classList.remove("opaqueHolder");
  document.getElementById("trust-mid").classList.add("noneHolder");
  document.getElementById("Mtext").classList.remove("noneHolder");
  document.getElementById("Mtext").classList.add("opaqueHolder");
  document.getElementById("Ltext").classList.remove("opaqueHolder");
  document.getElementById("Ltext").classList.add("noneHolder");
  document.getElementById("Htext").classList.remove("opaqueHolder");
  document.getElementById("Htext").classList.add("noneHolder");
  document.getElementById("bar").classList.remove("BarPosition3");
  document.getElementById("bar").classList.remove("BarPosition2");
  document.getElementById("bar").classList.add("BarPosition1");
  document.getElementById("Trusttoggle").innerHTML = 1;
  
  document.getElementById("thermFill").classList.remove("fill","opaqueHolder");
  document.getElementById("thermFill").classList.add("noneHolder");
  document.getElementById("lifecycle").classList.remove("fadeIn","cycle");
  document.getElementById("lifecycle").classList.add("noneHolder");
  document.getElementById("lifecycle2").classList.remove("fadeIn","cycle");
  document.getElementById("lifecycle2").classList.add("noneHolder");
  document.getElementById("lifecycle3").classList.remove("fadeIn","cycle");
  document.getElementById("lifecycle3").classList.add("noneHolder");
  document.getElementById("lifecycle4").classList.remove("fadeIn","cycle");
  document.getElementById("lifecycle4").classList.add("noneHolder");
  document.getElementById("lifecycle5").classList.remove("fadeIn","cycle");
  document.getElementById("lifecycle5").classList.add("noneHolder");
  document.getElementById("lifecycle6").classList.remove("fadeIn","cycle");
  document.getElementById("lifecycle6").classList.add("noneHolder");
  document.getElementById("life1").classList.remove("fadeInOutL");
  document.getElementById("life1").classList.add("noneHolder");
  document.getElementById("life2").classList.remove("fadeInOutL");
  document.getElementById("life2").classList.add("noneHolder");
  document.getElementById("life3").classList.remove("fadeInOutL");
  document.getElementById("life3").classList.add("noneHolder");
  document.getElementById("life4").classList.remove("fadeInOutL");
  document.getElementById("life4").classList.add("noneHolder");
  document.getElementById("life5").classList.remove("fadeInOutL");
  document.getElementById("life5").classList.add("noneHolder");
  document.getElementById("life6").classList.remove("fadeInOutL");
  document.getElementById("life6").classList.add("noneHolder");
  document.getElementById("disproA").classList.remove("disproFade1");
  document.getElementById("disproA").classList.add("noneHolder");
  document.getElementById("disproB").classList.remove("disproFade1");
  document.getElementById("disproB").classList.add("noneHolder");
  document.getElementById("disproC").classList.remove("disproFade1");
  document.getElementById("disproC").classList.add("noneHolder");
  document.getElementById("disproD").classList.remove("disproFade1");
  document.getElementById("disproD").classList.add("noneHolder");
  document.getElementById("disproE").classList.remove("disproFade1");
  document.getElementById("disproE").classList.add("noneHolder");
  document.getElementById("disproF").classList.remove("disproFade1");
  document.getElementById("disproF").classList.add("noneHolder");
  document.getElementById("disproG").classList.remove("disproFade2");
  document.getElementById("disproG").classList.add("noneHolder");
  
  document.getElementById("paradigm1").classList.remove("paradigm_shift1");
  document.getElementById("paradigm1").classList.add("opaqueHolder");
  document.getElementById("paradigm2").classList.remove("paradigm_shift2");
  document.getElementById("paradigm2").classList.add("noneHolder");
  document.getElementById("transform2").classList.remove("fadeIn");
  document.getElementById("transform2").classList.add("noneHolder");
  document.getElementById("bytes").classList.remove("fadeIn");
  document.getElementById("bytes").classList.add("noneHolder");
  document.getElementById("paradigm_text").classList.remove("paradigm_shiftT");
  

  document.getElementById("brain2").classList.add("noneHolder");
  document.getElementById("brain2").classList.remove("fadeInOut31a");
  document.getElementById("data2").classList.add("noneHolder");
  document.getElementById("data2").classList.remove("fadeInOut31b");
  document.getElementById("methods2").classList.add("noneHolder");
  document.getElementById("methods2").classList.remove("fadeInOut31c");
  document.getElementById("human2").classList.add("noneHolder");
  document.getElementById("human2").classList.remove("fadeInOut31d");
  document.getElementById("usb2").classList.add("noneHolder");
  document.getElementById("usb2").classList.remove("fadeInOut31e");
  document.getElementById("BlackBox2").classList.add("noneHolder");
  document.getElementById("BlackBox2").classList.remove("fadeInOut31f");
  document.getElementById("risk2").classList.add("noneHolder");
  document.getElementById("risk2").classList.remove("fadeInOut31g");
  document.getElementById("dispro2").classList.add("noneHolder");
  document.getElementById("dispro2").classList.remove("fadeInOut31h");
  document.getElementById("transform3").classList.add("noneHolder");
  document.getElementById("transform3").classList.remove("fadeInOut31i");
  document.getElementById("databias2").classList.add("noneHolder");
  document.getElementById("databias2").classList.remove("fadeInOut31j");
  document.getElementById("regulation2").classList.add("noneHolder");
  document.getElementById("regulation2").classList.remove("fadeInOut31k");
  document.getElementById("weight2").classList.add("noneHolder");
  document.getElementById("weight2").classList.remove("fadeInOut31l");

  document.getElementById("rec1").classList.add("noneHolder");
  document.getElementById("rec1").classList.remove("opaqueHolder");
  document.getElementById("rec1").classList.remove("fadeOutR");
  document.getElementById("rec2").classList.add("noneHolder");
  document.getElementById("rec2").classList.remove("opaqueHolder");
  document.getElementById("rec2").classList.remove("fadeOutR");
  document.getElementById("rec3").classList.add("noneHolder");
  document.getElementById("rec3").classList.remove("fadeOutR3");
  document.getElementById("rec4").classList.add("noneHolder");
  document.getElementById("rec4").classList.remove("opaqueHolder");
  document.getElementById("rec4").classList.remove("fadeOutR");
  document.getElementById("rec5").classList.add("noneHolder");
  document.getElementById("rec5").classList.remove("opaqueHolder");
  document.getElementById("rec5").classList.remove("fadeOutR");
  document.getElementById("rec6").classList.add("noneHolder");
  document.getElementById("rec6").classList.remove("fadeOutR2");
  document.getElementById("rec7").classList.add("noneHolder");
  document.getElementById("rec7").classList.remove("opaqueHolder");
  document.getElementById("rec7").classList.remove("fadeOutR");
  document.getElementById("rec8").classList.add("noneHolder");
  document.getElementById("rec8").classList.remove("opaqueHolder");
  document.getElementById("rec8").classList.remove("fadeOutR");
  document.getElementById("rec9").classList.add("noneHolder");
  document.getElementById("rec9").classList.remove("opaqueHolder");
  document.getElementById("rec9").classList.remove("fadeOutR");
  
  document.getElementById("InteractiveAutoSlide12a").innerHTML = 0;
  document.getElementById("InteractiveAutoSlide12b").innerHTML = 0;
  document.getElementById("InteractiveAutoSlide12c").innerHTML = 0;
  document.getElementById("InteractiveAutoSlide12d").innerHTML = 0;
  document.getElementById("InteractiveAutoSlide14a").innerHTML = 0;
  document.getElementById("InteractiveAutoSlide14b").innerHTML = 0;
  document.getElementById("InteractiveAutoSlide14c").innerHTML = 0;
  document.getElementById("InteractiveAutoSlide19a").innerHTML = 0;
  document.getElementById("InteractiveAutoSlide19b").innerHTML = 0;
  document.getElementById("InteractiveAutoSlide19c").innerHTML = 0;
  
  document.getElementById("12b1").classList.remove("backcolor2");
  document.getElementById("12b1").classList.add("backcolor1");
  document.getElementById("12b2").classList.remove("backcolor2");
  document.getElementById("12b2").classList.add("backcolor1");
  document.getElementById("12b3").classList.remove("backcolor2");
  document.getElementById("12b3").classList.add("backcolor1");
  document.getElementById("12b4").classList.remove("backcolor2");
  document.getElementById("12b4").classList.add("backcolor1");
  document.getElementById("PP2toggle").innerHTML = 0;
  document.getElementById("PP2atoggle").innerHTML = 0;
  document.getElementById("PP2btoggle").innerHTML = 0;
  document.getElementById("PP2ctoggle").innerHTML = 0;
  document.getElementById("PP2dtoggle").innerHTML = 0;
  document.getElementById("PP3toggle").innerHTML = 0;
  document.getElementById("PP3atoggle").innerHTML = 0;
  document.getElementById("PP3btoggle").innerHTML = 0;
  document.getElementById("PP3ctoggle").innerHTML = 0;
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
	autoplay();
    
  
  }

}




// get elements
let presentation = document.querySelector(".presentation");
let slides = document.querySelectorAll(".slide");
let currentSlide = document.querySelector(".slide.show");

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
var currentSlideNo = 1;
var totalSides = 0;
var MySlideCounter = 1;
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

// handle full screen and small screen modes
toFullScreenBtn.addEventListener("click", fullScreenMode);
toSmallScreenBtn.addEventListener("click", smallScreenMode);



// moves to left slide
function moveToLeftSlide() {
  var tempSlide = currentSlide;
  currentSlide = currentSlide.previousElementSibling;
  tempSlide.classList.remove("show");
  currentSlide.classList.add("show");

  init();
}

// moves to right slide
function moveToRightSlide() {
  var tempSlide = currentSlide;
  currentSlide = currentSlide.nextElementSibling;
  tempSlide.classList.remove("show");
  currentSlide.classList.add("show");  
  
  init();
}

function moveToIntroSlide() {
var tempSlide = currentSlide;
currentSlide = document.querySelector("#navigate1");
tempSlide.classList.remove("show");
currentSlide.classList.add("show");
MySlideCounter = 1;
document.getElementById("slide1_audio").play();
document.getElementById("slide2_audio").load();
document.getElementById("slide3_audio").load();
document.getElementById("slide4_audio").load();
document.getElementById("slide5_audio").load();
document.getElementById("slide6_audio").load();
document.getElementById("slide7_audio").load();
document.getElementById("slide8_audio").load();
document.getElementById("slide9_audio").load();
document.getElementById("slide10_audio").load();
document.getElementById("slide11_audio").load();
document.getElementById("slide12_audio").load();
document.getElementById("slide13_audio").load();
document.getElementById("slide14_audio").load();
document.getElementById("slide15_audio").load();
document.getElementById("slide16_audio").load();
document.getElementById("slide17_audio").load();
document.getElementById("slide18_audio").load();
document.getElementById("slide19_audio").load();
document.getElementById("slide20_audio").load();
document.getElementById("slide21_audio").load();
document.getElementById("slide22_audio").load();
document.getElementById("slide23_audio").load();
document.getElementById("slide24_audio").load();
document.getElementById("slide25_audio").load();
document.getElementById("slide26_audio").load();
document.getElementById("slide27_audio").load();
document.getElementById("slide28_audio").load();
document.getElementById("slide29_audio").load();
document.getElementById("slide30_audio").load();
document.getElementById("slide31_audio").load();
document.getElementById("slide32_audio").load();
document.getElementById("myDropdown").classList.toggle("show");
document.getElementById("transcript").innerHTML = "In taking this module, you will learn to recognize different forms of algorithmic bias in the use of artificial intelligence for health care and the origins of those biases, recalling them for multiple choice questions; To deconstruct algorithmic bias in the use of artificial intelligence for health care by discussing example cases; And to empathize with the importance of recognizing and addressing algorithmic bias in health care by exploring the problems resulting from algorithmic bias and the disproportionate impact on already marginalized populations.";
  
  init(); 

}

function moveToTermsSlide() {
var tempSlide = currentSlide;
currentSlide = document.querySelector("#navigate2");
tempSlide.classList.remove("show");
currentSlide.classList.add("show");
MySlideCounter = 4;
document.getElementById("slide1_audio").load();
document.getElementById("slide2_audio").load();
document.getElementById("slide3_audio").load();
document.getElementById("slide4_audio").play();
document.getElementById("slide5_audio").load();
document.getElementById("slide6_audio").load();
document.getElementById("slide7_audio").load();
document.getElementById("slide8_audio").load();
document.getElementById("slide9_audio").load();
document.getElementById("slide10_audio").load();
document.getElementById("slide11_audio").load();
document.getElementById("slide12_audio").load();
document.getElementById("slide13_audio").load();
document.getElementById("slide14_audio").load();
document.getElementById("slide15_audio").load();
document.getElementById("slide16_audio").load();
document.getElementById("slide17_audio").load();
document.getElementById("slide18_audio").load();
document.getElementById("slide19_audio").load();
document.getElementById("slide20_audio").load();
document.getElementById("slide21_audio").load();
document.getElementById("slide22_audio").load();
document.getElementById("slide23_audio").load();
document.getElementById("slide24_audio").load();
document.getElementById("slide25_audio").load();
document.getElementById("slide26_audio").load();
document.getElementById("slide27_audio").load();
document.getElementById("slide28_audio").load();
document.getElementById("slide29_audio").load();
document.getElementById("slide30_audio").load();
document.getElementById("slide31_audio").load();
document.getElementById("slide32_audio").load();
document.getElementById("myDropdown").classList.toggle("show");
document.getElementById("transcript").innerHTML = "Let's begin with the core terminology you will need to understand algorithmic bias in health care. There are five key terms: Artificial Intelligence, Machine Learning, Algorithms, Bias, and Algorithmic Bias. This will provide a starting point, but there are a number of other important terms that will not be discussed in the module that you should take some time to read about later. Some of these terms are explained in the suggested reading alonside the module. This includes supervised learning, unsupervised learning, deep learning, narrow AI, general AI.";  
  
  init(); 
}

function moveToConceptsSlide() {
var tempSlide = currentSlide;
currentSlide = document.querySelector("#navigate3");
tempSlide.classList.remove("show");
currentSlide.classList.add("show");
MySlideCounter = 10;
document.getElementById("slide1_audio").load();
document.getElementById("slide2_audio").load();
document.getElementById("slide3_audio").load();
document.getElementById("slide4_audio").load();
document.getElementById("slide5_audio").load();
document.getElementById("slide6_audio").load();
document.getElementById("slide7_audio").load();
document.getElementById("slide8_audio").load();
document.getElementById("slide9_audio").load();
document.getElementById("slide10_audio").play();
document.getElementById("slide11_audio").load();
document.getElementById("slide12_audio").load();
document.getElementById("slide13_audio").load();
document.getElementById("slide14_audio").load();
document.getElementById("slide15_audio").load();
document.getElementById("slide16_audio").load();
document.getElementById("slide17_audio").load();
document.getElementById("slide18_audio").load();
document.getElementById("slide19_audio").load();
document.getElementById("slide20_audio").load();
document.getElementById("slide21_audio").load();
document.getElementById("slide22_audio").load();
document.getElementById("slide23_audio").load();
document.getElementById("slide24_audio").load();
document.getElementById("slide25_audio").load();
document.getElementById("slide26_audio").load();
document.getElementById("slide27_audio").load();
document.getElementById("slide28_audio").load();
document.getElementById("slide29_audio").load();
document.getElementById("slide30_audio").load();
document.getElementById("slide31_audio").load();
document.getElementById("slide32_audio").load();
document.getElementById("myDropdown").classList.toggle("show");
document.getElementById("transcript").innerHTML = "Now that we have the core terms defined, we can move to some of the main concepts in algorithmic bias in health care. These concepts are derived from an extensive literature review and discussions with experts on AI in health care. We will cover 5 main concepts: biased data, transparency & explainability, regulation of AI in health care, risk of harm, and the transformation of health care. What is covered here is just the tip of the iceberg, but representative of essential knowledge for clinicians who will be interacting with AI tools in providing patient care.";
  
  init(); 
}

function moveToExamplesSlide() {
var tempSlide = currentSlide;
currentSlide = document.querySelector("#navigate4");
tempSlide.classList.remove("show");
currentSlide.classList.add("show");
MySlideCounter = 28;
document.getElementById("slide1_audio").load();
document.getElementById("slide2_audio").load();
document.getElementById("slide3_audio").load();
document.getElementById("slide4_audio").load();
document.getElementById("slide5_audio").load();
document.getElementById("slide6_audio").load();
document.getElementById("slide7_audio").load();
document.getElementById("slide8_audio").load();
document.getElementById("slide9_audio").load();
document.getElementById("slide10_audio").load();
document.getElementById("slide11_audio").load();
document.getElementById("slide12_audio").load();
document.getElementById("slide13_audio").load();
document.getElementById("slide14_audio").load();
document.getElementById("slide15_audio").load();
document.getElementById("slide16_audio").load();
document.getElementById("slide17_audio").load();
document.getElementById("slide18_audio").load();
document.getElementById("slide19_audio").load();
document.getElementById("slide20_audio").load();
document.getElementById("slide21_audio").load();
document.getElementById("slide22_audio").load();
document.getElementById("slide23_audio").load();
document.getElementById("slide24_audio").load();
document.getElementById("slide25_audio").load();
document.getElementById("slide26_audio").load();
document.getElementById("slide27_audio").load();
document.getElementById("slide28_audio").play();
document.getElementById("slide29_audio").load();
document.getElementById("slide30_audio").load();
document.getElementById("slide31_audio").load();
document.getElementById("slide32_audio").load();
document.getElementById("myDropdown").classList.toggle("show"); 
document.getElementById("transcript").innerHTML = "Now we will go through a couple of examples, keeping in mind the terminology and concepts just covered.";
  
  init(); 
}

function moveToSummarySlide() {
var tempSlide = currentSlide;
currentSlide = document.querySelector("#navigate5");
tempSlide.classList.remove("show");
currentSlide.classList.add("show");
MySlideCounter = 31;
document.getElementById("slide1_audio").load();
document.getElementById("slide2_audio").load();
document.getElementById("slide3_audio").load();
document.getElementById("slide4_audio").load();
document.getElementById("slide5_audio").load();
document.getElementById("slide6_audio").load();
document.getElementById("slide7_audio").load();
document.getElementById("slide8_audio").load();
document.getElementById("slide9_audio").load();
document.getElementById("slide10_audio").load();
document.getElementById("slide11_audio").load();
document.getElementById("slide12_audio").load();
document.getElementById("slide13_audio").load();
document.getElementById("slide14_audio").load();
document.getElementById("slide15_audio").load();
document.getElementById("slide16_audio").load();
document.getElementById("slide17_audio").load();
document.getElementById("slide18_audio").load();
document.getElementById("slide19_audio").load();
document.getElementById("slide20_audio").load();
document.getElementById("slide21_audio").load();
document.getElementById("slide22_audio").load();
document.getElementById("slide23_audio").load();
document.getElementById("slide24_audio").load();
document.getElementById("slide25_audio").load();
document.getElementById("slide26_audio").load();
document.getElementById("slide27_audio").load();
document.getElementById("slide28_audio").load();
document.getElementById("slide29_audio").load();
document.getElementById("slide30_audio").load();
document.getElementById("slide31_audio").play();
document.getElementById("slide32_audio").load(); 
document.getElementById("myDropdown").classList.toggle("show");
document.getElementById("transcript").innerHTML = "In summary, algorithmic bias is the systematic prejudice found in the development and use of artificial intelligence systems in a reflection of the data input, methods used, and human judgment. The source of that bias is prominently from the use of biased data, the lack of transparency and explainability, and poses a risk in health care due to inadequate regulation. The harms of algorithmic bias disproportionately affect marginalized populations. Nonetheless, the use of AI technology is increasing along with the amount of data in health care, and so clinicians need to recognize the presence of bias, understand the limitations of tools and regulation, and know when to trust the AI output and when not to trust it. ";
  
  init(); 
}

function moveToCasesSlide() {
var tempSlide = currentSlide;
currentSlide = document.querySelector("#navigate6");
tempSlide.classList.remove("show");
currentSlide.classList.add("show");
MySlideCounter = 32;
document.getElementById("slide1_audio").load();
document.getElementById("slide2_audio").load();
document.getElementById("slide3_audio").load();
document.getElementById("slide4_audio").load();
document.getElementById("slide5_audio").load();
document.getElementById("slide6_audio").load();
document.getElementById("slide7_audio").load();
document.getElementById("slide8_audio").load();
document.getElementById("slide9_audio").load();
document.getElementById("slide10_audio").load();
document.getElementById("slide11_audio").load();
document.getElementById("slide12_audio").load();
document.getElementById("slide13_audio").load();
document.getElementById("slide14_audio").load();
document.getElementById("slide15_audio").load();
document.getElementById("slide16_audio").load();
document.getElementById("slide17_audio").load();
document.getElementById("slide18_audio").load();
document.getElementById("slide19_audio").load();
document.getElementById("slide20_audio").load();
document.getElementById("slide21_audio").load();
document.getElementById("slide22_audio").load();
document.getElementById("slide23_audio").load();
document.getElementById("slide24_audio").load();
document.getElementById("slide25_audio").load();
document.getElementById("slide26_audio").load();
document.getElementById("slide27_audio").load();
document.getElementById("slide28_audio").load();
document.getElementById("slide29_audio").load();
document.getElementById("slide30_audio").load();
document.getElementById("slide31_audio").load();
document.getElementById("slide32_audio").play();
document.getElementById("myDropdown").classList.toggle("show");  
document.getElementById("transcript").innerHTML = "Three cases based on real-life scenarios have been prepared for you to further explore algortihmic bias. To complete the cases, go to the forums page in Sakai. Watch the case video and then respond to the questions. There is not necessarily a right or wrong answer to the questions. The goal is provide thoughtful answers.";
  init(); 

}





// get current slide
function getCurrentSlideNo() {
  let counter = 0;

  slides.forEach((slide, i) => {
    counter++;

    if (slide.classList.contains("show")) {
      currentSlideNo = counter;
    }
  });
}

// go full screen
function fullScreenMode() {
  presentationController.classList.add("full-screen");
  toFullScreenBtn.classList.remove("show");
  toSmallScreenBtn.classList.add("show");

  screenStatus = 1;
}

// switch to small screen
function smallScreenMode() {
  presentationController.classList.remove("full-screen");
  toFullScreenBtn.classList.add("show");
  toSmallScreenBtn.classList.remove("show");

  screenStatus = 0;
}

// update counter
function setSlideNo() {
  slideNumber.innerText = `${currentSlideNo} of ${totalSides}`;
}

// play audio on next slide
function PlayAudio() {
if (MySlideCounter == 1) {
document.getElementById("slide1_audio").load();
document.getElementById("slide2_audio").play();}
else if (MySlideCounter == 2) {
document.getElementById("slide2_audio").load();
document.getElementById("slide3_audio").play();}
else if (MySlideCounter == 3) {
document.getElementById("slide3_audio").load();
document.getElementById("slide4_audio").play();}
else if (MySlideCounter == 4) {
document.getElementById("slide4_audio").load();
document.getElementById("slide5_audio").play();}
else if (MySlideCounter == 5) {
document.getElementById("slide5_audio").load();
document.getElementById("slide6_audio").play();}
else if (MySlideCounter == 6) {
document.getElementById("slide6_audio").load();
document.getElementById("slide7_audio").play();}
else if (MySlideCounter == 7) {
document.getElementById("slide7_audio").load();
document.getElementById("slide8_audio").play();}
else if (MySlideCounter == 8) {
document.getElementById("slide8_audio").load();
document.getElementById("slide9_audio").play();}
else if (MySlideCounter == 9) {
document.getElementById("slide9_audio").load();
document.getElementById("slide10_audio").play();}
else if (MySlideCounter == 10) {
document.getElementById("slide10_audio").load();
document.getElementById("slide11_audio").play();}
else if (MySlideCounter == 11) {
document.getElementById("slide11_audio").load();
document.getElementById("slide12_audio").play();}
else if (MySlideCounter == 12) {
document.getElementById("slide12_audio").load();
document.getElementById("slide12a_audio").load();
document.getElementById("slide12b_audio").load();
document.getElementById("slide12c_audio").load();
document.getElementById("slide12d_audio").load();
document.getElementById("slide13_audio").play();}
else if (MySlideCounter == 13) {
document.getElementById("slide13_audio").load();
document.getElementById("slide14_audio").play();}
else if (MySlideCounter == 14) {
document.getElementById("slide14_audio").load();
document.getElementById("slide14a_audio").load();
document.getElementById("slide14b_audio").load();
document.getElementById("slide14c_audio").load();
document.getElementById("slide15_audio").play();}
else if (MySlideCounter == 15) {
document.getElementById("slide15_audio").load();
document.getElementById("slide16_audio").play();}
else if (MySlideCounter == 16) {
document.getElementById("slide16_audio").load();
document.getElementById("slide17_audio").play();}
else if (MySlideCounter == 17) {
document.getElementById("slide17_audio").load();
document.getElementById("slide18_audio").play();}
else if (MySlideCounter == 18) {
document.getElementById("slide18_audio").load();
document.getElementById("slide19_audio").play();}
else if (MySlideCounter == 19) {
document.getElementById("slide19_audio").load();
document.getElementById("slide20_audio").play();}
else if (MySlideCounter == 20) {
document.getElementById("slide20_audio").load();
document.getElementById("slide21_audio").play();}
else if (MySlideCounter == 21) {
document.getElementById("slide21_audio").load();
document.getElementById("slide22_audio").play();}
else if (MySlideCounter == 22) {
document.getElementById("slide22_audio").load();
document.getElementById("slide23_audio").play();}
else if (MySlideCounter == 23) {
document.getElementById("slide23_audio").load();
document.getElementById("slide24_audio").play();}
else if (MySlideCounter == 24) {
document.getElementById("slide24_audio").load();
document.getElementById("slide25_audio").play();}
else if (MySlideCounter == 25) {
document.getElementById("slide25_audio").load();
document.getElementById("slide26_audio").play();}
else if (MySlideCounter == 26) {
document.getElementById("slide26_audio").load();
document.getElementById("slide27_audio").play();}
else if (MySlideCounter == 27) {
document.getElementById("slide27_audio").load();
document.getElementById("slide28_audio").play();}
else if (MySlideCounter == 28) {
document.getElementById("slide28_audio").load();
document.getElementById("slide29_audio").play();}
else if (MySlideCounter == 29) {
document.getElementById("slide29_audio").load();
document.getElementById("slide30_audio").play();}
else if (MySlideCounter == 30) {
document.getElementById("slide30_audio").load();
document.getElementById("slide31_audio").play();}
else if (MySlideCounter == 31) {
document.getElementById("slide31_audio").load();
document.getElementById("slide32_audio").play();}
}

// play audio on back slide
function PlayLastAudio() {
if (MySlideCounter == 2) {
document.getElementById("slide2_audio").load();
document.getElementById("slide1_audio").play();}
else if (MySlideCounter == 3) {
document.getElementById("slide3_audio").load();
document.getElementById("slide2_audio").play();}
else if (MySlideCounter == 4) {
document.getElementById("slide4_audio").load();
document.getElementById("slide3_audio").play();}
else if (MySlideCounter == 5) {
document.getElementById("slide5_audio").load();
document.getElementById("slide4_audio").play();}
else if (MySlideCounter == 6) {
document.getElementById("slide6_audio").load();
document.getElementById("slide5_audio").play();}
else if (MySlideCounter == 7) {
document.getElementById("slide7_audio").load();
document.getElementById("slide6_audio").play();}
else if (MySlideCounter == 8) {
document.getElementById("slide8_audio").load();
document.getElementById("slide7_audio").play();}
else if (MySlideCounter == 9) {
document.getElementById("slide9_audio").load();
document.getElementById("slide8_audio").play();}
else if (MySlideCounter == 10) {
document.getElementById("slide10_audio").load();
document.getElementById("slide9_audio").play();}
else if (MySlideCounter == 11) {
document.getElementById("slide11_audio").load();
document.getElementById("slide10_audio").play();}
else if (MySlideCounter == 12) {
document.getElementById("slide12_audio").load();
document.getElementById("slide11_audio").play();}
else if (MySlideCounter == 13) {
document.getElementById("slide13_audio").load();
document.getElementById("slide12_audio").play();}
else if (MySlideCounter == 14) {
document.getElementById("slide14_audio").load();
document.getElementById("slide13_audio").play();}
else if (MySlideCounter == 15) {
document.getElementById("slide15_audio").load();
document.getElementById("slide14_audio").play();}
else if (MySlideCounter == 16) {
document.getElementById("slide16_audio").load();
document.getElementById("slide15_audio").play();}
else if (MySlideCounter == 17) {
document.getElementById("slide17_audio").load();
document.getElementById("slide16_audio").play();}
else if (MySlideCounter == 18) {
document.getElementById("slide18_audio").load();
document.getElementById("slide17_audio").play();}
else if (MySlideCounter == 19) {
document.getElementById("slide19_audio").load();
document.getElementById("slide18_audio").play();}
else if (MySlideCounter == 20) {
document.getElementById("slide20_audio").load();
document.getElementById("slide19_audio").play();}
else if (MySlideCounter == 21) {
document.getElementById("slide21_audio").load();
document.getElementById("slide20_audio").play();}
else if (MySlideCounter == 22) {
document.getElementById("slide22_audio").load();
document.getElementById("slide21_audio").play();}
else if (MySlideCounter == 23) {
document.getElementById("slide23_audio").load();
document.getElementById("slide22_audio").play();}
else if (MySlideCounter == 24) {
document.getElementById("slide24_audio").load();
document.getElementById("slide23_audio").play();}
else if (MySlideCounter == 25) {
document.getElementById("slide25_audio").load();
document.getElementById("slide24_audio").play();}
else if (MySlideCounter == 26) {
document.getElementById("slide26_audio").load();
document.getElementById("slide25_audio").play();}
else if (MySlideCounter == 27) {
document.getElementById("slide27_audio").load();
document.getElementById("slide26_audio").play();}
else if (MySlideCounter == 28) {
document.getElementById("slide28_audio").load();
document.getElementById("slide27_audio").play();}
else if (MySlideCounter == 29) {
document.getElementById("slide29_audio").load();
document.getElementById("slide28_audio").play();}
else if (MySlideCounter == 30) {
document.getElementById("slide30_audio").load();
document.getElementById("slide29_audio").play();}
else if (MySlideCounter == 31) {
document.getElementById("slide31_audio").load();
document.getElementById("slide30_audio").play();}
else if (MySlideCounter == 32) {
document.getElementById("slide32_audio").load();
document.getElementById("slide31_audio").play();}
}

function PausePlay() {

if (MySlideCounter == 1 && document.getElementById("slide1_audio").paused) {
document.getElementById("slide1_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 2 && document.getElementById("slide2_audio").paused) {
document.getElementById("slide2_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 3 && document.getElementById("slide3_audio").paused) {
document.getElementById("slide3_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 4 && document.getElementById("slide4_audio").paused) {
document.getElementById("slide4_audio").play();
document.getElementById("PPtoggle").innerHTML = 1
document.getElementById("PP_text").innerHTML = "playing";;}

else if (MySlideCounter == 5 && document.getElementById("slide5_audio").paused) {
document.getElementById("slide5_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 6 && document.getElementById("slide6_audio").paused) {
document.getElementById("slide6_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 7 && document.getElementById("slide7_audio").paused) {
document.getElementById("slide7_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 8 && document.getElementById("slide8_audio").paused) {
document.getElementById("slide8_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 9 && document.getElementById("slide9_audio").paused) {
document.getElementById("slide9_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 10 && document.getElementById("slide10_audio").paused) {
document.getElementById("slide10_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 11 && document.getElementById("slide11_audio").paused) {
document.getElementById("slide11_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 12 && document.getElementById("slide12_audio").paused && document.getElementById("PP2toggle").innerHTML == 0 && document.getElementById("PP2atoggle").innerHTML == 0 && document.getElementById("PP2btoggle").innerHTML == 0 && document.getElementById("PP2ctoggle").innerHTML == 0 && document.getElementById("PP2dtoggle").innerHTML == 0) {
document.getElementById("slide12_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 12 && document.getElementById("slide12a_audio").paused && document.getElementById("PP2atoggle").innerHTML == 1) {
document.getElementById("slide12a_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP2toggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 12 && document.getElementById("slide12b_audio").paused && document.getElementById("PP2btoggle").innerHTML == 1) {
document.getElementById("slide12b_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP2toggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 12 && document.getElementById("slide12c_audio").paused && document.getElementById("PP2ctoggle").innerHTML == 1) {
document.getElementById("slide12c_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP2toggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 12 && document.getElementById("slide12d_audio").paused && document.getElementById("PP2dtoggle").innerHTML == 1) {
document.getElementById("slide12d_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP2toggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 13 && document.getElementById("slide13_audio").paused) {
document.getElementById("slide13_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 14 && document.getElementById("slide14_audio").paused && document.getElementById("PP3toggle").innerHTML == 0 && document.getElementById("PP3atoggle").innerHTML == 0 && document.getElementById("PP3btoggle").innerHTML == 0 && document.getElementById("PP3ctoggle").innerHTML == 0) {
document.getElementById("slide14_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 14 && document.getElementById("slide14a_audio").paused && document.getElementById("PP3atoggle").innerHTML == 1) {
document.getElementById("slide14a_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP3toggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 14 && document.getElementById("slide14b_audio").paused && document.getElementById("PP3btoggle").innerHTML == 1) {
document.getElementById("slide14b_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP3toggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 14 && document.getElementById("slide14c_audio").paused && document.getElementById("PP3ctoggle").innerHTML == 1) {
document.getElementById("slide14c_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP3toggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 15 && document.getElementById("slide15_audio").paused) {
document.getElementById("slide15_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 16 && document.getElementById("slide16_audio").paused) {
document.getElementById("slide16_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 17 && document.getElementById("slide17_audio").paused) {
document.getElementById("slide17_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 18 && document.getElementById("slide18_audio").paused) {
document.getElementById("slide18_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 19 && document.getElementById("slide19_audio").paused) {
document.getElementById("slide19_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 20 && document.getElementById("slide20_audio").paused) {
document.getElementById("slide20_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 21 && document.getElementById("slide21_audio").paused) {
document.getElementById("slide21_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 22 && document.getElementById("slide22_audio").paused) {
document.getElementById("slide22_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 23 && document.getElementById("slide23_audio").paused) {
document.getElementById("slide23_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 24 && document.getElementById("slide24_audio").paused) {
document.getElementById("slide24_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 25 && document.getElementById("slide25_audio").paused) {
document.getElementById("slide25_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 26 && document.getElementById("slide26_audio").paused) {
document.getElementById("slide26_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 27 && document.getElementById("slide27_audio").paused) {
document.getElementById("slide27_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 28 && document.getElementById("slide28_audio").paused) {
document.getElementById("slide28_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 29 && document.getElementById("slide29_audio").paused) {
document.getElementById("slide29_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 30 && document.getElementById("slide30_audio").paused) {
document.getElementById("slide30_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 31 && document.getElementById("slide31_audio").paused) {
document.getElementById("slide31_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else if (MySlideCounter == 32 && document.getElementById("slide32_audio").paused) {
document.getElementById("slide32_audio").play();
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";}

else {
document.getElementById("slide1_audio").pause();
document.getElementById("slide2_audio").pause();
document.getElementById("slide3_audio").pause();
document.getElementById("slide4_audio").pause();
document.getElementById("slide5_audio").pause();
document.getElementById("slide6_audio").pause();
document.getElementById("slide7_audio").pause();
document.getElementById("slide8_audio").pause();
document.getElementById("slide9_audio").pause();
document.getElementById("slide10_audio").pause();
document.getElementById("slide11_audio").pause();
document.getElementById("slide12_audio").pause();
document.getElementById("slide12a_audio").pause();
document.getElementById("slide12b_audio").pause();
document.getElementById("slide12c_audio").pause();
document.getElementById("slide12d_audio").pause();
document.getElementById("slide13_audio").pause();
document.getElementById("slide14_audio").pause();
document.getElementById("slide14a_audio").pause();
document.getElementById("slide14b_audio").pause();
document.getElementById("slide14c_audio").pause();
document.getElementById("slide15_audio").pause();
document.getElementById("slide16_audio").pause();
document.getElementById("slide17_audio").pause();
document.getElementById("slide18_audio").pause();
document.getElementById("slide19_audio").pause();
document.getElementById("slide20_audio").pause();
document.getElementById("slide21_audio").pause();
document.getElementById("slide22_audio").pause();
document.getElementById("slide23_audio").pause();
document.getElementById("slide24_audio").pause();
document.getElementById("slide25_audio").pause();
document.getElementById("slide26_audio").pause();
document.getElementById("slide27_audio").pause();
document.getElementById("slide28_audio").pause();
document.getElementById("slide29_audio").pause();
document.getElementById("slide30_audio").pause();
document.getElementById("slide31_audio").pause();
document.getElementById("slide32_audio").pause();
document.getElementById("PPtoggle").innerHTML = 0;
document.getElementById("PP2toggle").innerHTML = 0;
document.getElementById("PP_text").innerHTML = "paused";
}
}

function PausePlay2() {
if (document.getElementById("InformationBox").style.display === "none") {
document.getElementById("slide1_audio").pause();
document.getElementById("slide2_audio").pause();
document.getElementById("slide3_audio").pause();
document.getElementById("slide4_audio").pause();
document.getElementById("slide5_audio").pause();
document.getElementById("slide6_audio").pause();
document.getElementById("slide7_audio").pause();
document.getElementById("slide8_audio").pause();
document.getElementById("slide9_audio").pause();
document.getElementById("slide10_audio").pause();
document.getElementById("slide11_audio").pause();
document.getElementById("slide12_audio").pause();
document.getElementById("slide12a_audio").pause();
document.getElementById("slide12b_audio").pause();
document.getElementById("slide12c_audio").pause();
document.getElementById("slide12d_audio").pause();
document.getElementById("slide13_audio").pause();
document.getElementById("slide14_audio").pause();
document.getElementById("slide14a_audio").pause();
document.getElementById("slide14b_audio").pause();
document.getElementById("slide14c_audio").pause();
document.getElementById("slide15_audio").pause();
document.getElementById("slide16_audio").pause();
document.getElementById("slide17_audio").pause();
document.getElementById("slide18_audio").pause();
document.getElementById("slide19_audio").pause();
document.getElementById("slide20_audio").pause();
document.getElementById("slide21_audio").pause();
document.getElementById("slide22_audio").pause();
document.getElementById("slide23_audio").pause();
document.getElementById("slide24_audio").pause();
document.getElementById("slide25_audio").pause();
document.getElementById("slide26_audio").pause();
document.getElementById("slide27_audio").pause();
document.getElementById("slide28_audio").pause();
document.getElementById("slide29_audio").pause();
document.getElementById("slide30_audio").pause();
document.getElementById("slide31_audio").pause();
document.getElementById("slide32_audio").pause();
document.getElementById("PPtoggle").innerHTML = 0;
document.getElementById("PP_text").innerHTML = "paused";
}

else {
PausePlay();
}
}

function InformationPopdown() {
var show1 = document.getElementById("InformationBox");
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
var show3 = document.getElementById("StartButton");
var show4 = document.getElementById("right-btn");
var show4b = document.getElementById("left-btn");
var show5 = document.getElementById("PP");
var show6 = document.getElementById("disabled1");
var show7 = document.getElementById("disabled2");
var show8 = document.getElementById("disabled3");
var show9 = document.getElementById("disabled4");
var show10 = document.getElementById("disabled5");
var show11 = document.getElementById("transcript_button");
var show12 = document.getElementById("information_button");
var show13 = document.getElementById("references");
var show14 = document.getElementById("navigator_btn");
var show15 = document.getElementById("autoplay_button");
var show16 = document.getElementById("autoplay_text");
var show17 = document.getElementById("PP_text");

if (show1.style.display === "none" && MySlideCounter == 1) {
show1.style.display = "block";
show3.style.display = "none";
}

else if (show1.style.display === "none") {
show1.style.display = "block";
show3.style.display = "none";
}

else if (show1.style.display = "block" && MySlideCounter == 1) {
show1.style.display = "none";
show3.style.display = "none";
show4.style.display = "inline-block";
show4b.style.display = "inline-block";
show5.style.display = "inline-block";
show6.style.display = "inline-block";
show7.style.display = "inline-block";
show8.style.display = "inline-block";
show9.style.display = "inline-block";
show10.style.display = "inline-block";
show11.style.display = "inline-block";
show12.style.display = "inline-block";
show13.style.display = "inline-block";
show14.style.display = "inline-block";
show15.style.display = "inline-block";
show16.style.display = "inline-block";
show17.style.display = "inline-block";
document.getElementById("slide1_audio").play();}

else {
show1.style.display = "none";
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
}

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
}

}



//show transcript
function TranscriptShow() { 
if (document.getElementById("Ttoggle").innerHTML == "0")
{
document.getElementById("Ttoggle").innerHTML = "1";
document.getElementById("transcript").style.display = "inline-block";
}
else
{
document.getElementById("Ttoggle").innerHTML = "0";
document.getElementById("transcript").style.display = "none";
}
}

//toggle autoplay
function toggleAutoplay() {
if (document.getElementById("Atoggle").innerHTML == "0")
{
document.getElementById("Atoggle").innerHTML = 1;
document.getElementById("autoplay_text").innerHTML = "autoplay:on";
}
else
{
document.getElementById("Atoggle").innerHTML = 0;
document.getElementById("autoplay_text").innerHTML = "autoplay:off";
}
}


//toggle pauseplay
function togglePauseplay() {
if (document.getElementById("PPtoggle").innerHTML == "0")
{
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";
}
else
{
document.getElementById("PPtoggle").innerHTML = 1;
document.getElementById("PP_text").innerHTML = "playing";
}
}

//change my slide counter
function ChangeMyCounter() {
MySlideCounter++;
MySlideCounterNo.innerHTML = MySlideCounter;
}

//change my slide counter down
function MyCounterDown() {
MySlideCounter--;
MySlideCounterNo.innerHTML = MySlideCounter;
}


//change transcript on slide change
function ChangeTranscript() {
if (MySlideCounter == 1)
{document.getElementById("transcript").innerHTML = "In this module, you will learn, first, to recognize different forms of algorithmic bias in the use of artificial intelligence for health care and the origins of those biases; second, to deconstruct algorithmic bias in the use of artificial intelligence for health care; and third, to empathize with the importance of recognizing and addressing algorithmic bias in health care by exploring the problems resulting from algorithmic bias and the disproportionate impact on already marginalized populations.";}
else if (MySlideCounter == 2)
{document.getElementById("transcript").innerHTML = "We will begin the module by reviewing some core terminology essential for understanding the content. Then we will delve into the main concepts of algorithmic bias, followed by looking at some examples. You will then receive a brief summary of the module and a set of general recommendations on how to approach using AI systems in health care to mitigate bias. After viewing the module you can then move on to cases where you will apply the concepts learned here.";}
else if (MySlideCounter == 3)
{document.getElementById("transcript").innerHTML = "Lets begin with the core terminology you will need to understand algorithmic bias in health care. There are five key terms: Artificial Intelligence, Machine Learning, Algorithms, Bias, and Algorithmic Bias. This will provide a starting point, but you can learn some other important terms in the reading listed on the overview page.";}
else if (MySlideCounter == 4)
{document.getElementById("transcript").innerHTML = "First, what is artificial intelligence? AI describes a branch of computer science for developing digital algorithmic systems capable of complex decisions";}
else if (MySlideCounter == 5)
{document.getElementById("transcript").innerHTML = "Next, what is machine learning? Machine learning is the dominant branch of AI wherein systems train predictive models by identifying patterns of data from input, and then use those patterns to make predictions in new data.";}
else if (MySlideCounter == 6)
{document.getElementById("transcript").innerHTML = "Algorithms are a set of step-by-step instructions which the computer system relies on to perform tasks modified through the training process of machine learning to be more accurate.";}
else if (MySlideCounter == 7)
{document.getElementById("transcript").innerHTML = "Bias is a systematic deviation from the truth, and the processes that lead to such a deviation. Bias can be come in the form of social biases and statistical biases. Bias contrasts with noise or variation which randomly deviates from the truth. Many errors are a combination of both bias and noise.";}
else if (MySlideCounter == 8)
{document.getElementById("transcript").innerHTML = "And now, what is algorithmic bias? This is the systematic prejudice found in the development and use of artificial intelligence systems in a reflection of the data input, methods used, and human judgment.";}
else if (MySlideCounter == 9)
{document.getElementById("transcript").innerHTML = "Now that we have the core terms defined, we can move to some of the main concepts in algorithmic bias in health care. These concepts are derived from an extensive literature review and discussions with experts on AI in health care. We will cover 5 main concepts: biased data, transparency & explainability, regulation of AI in health care, risk of harm, and the transformation of health care. What is covered here is just the tip of the iceberg, but representative of essential knowledge for clinicians who will be interacting with AI tools in providing patient care.";}
else if (MySlideCounter == 10)
{document.getElementById("transcript").innerHTML = "The first concept we will explore is biased data which is the largest source of bias in AI algorithms.";}
else if (MySlideCounter == 11)
{document.getElementById("transcript").innerHTML = "Click each of the four areas to learn about different major sources of biased data in AI systems.";}
else if (MySlideCounter == 12)
{document.getElementById("transcript").innerHTML = "The importance of biased data is in how this data influences the development of the AI algorithm, in a problem often referred to as garbage in, garbage out. In other words, AI systems are only as good as the data on which they are trained.";}
else if (MySlideCounter == 13)
{document.getElementById("transcript").innerHTML = "Another way in which data is biased is when preexisting social biases are captured in the data and then codified into the algorithm. In any AI tool, there are risks for unintended consequences when users are not aware of the social biases being captured in the data. And furthermore, those biases can become amplified by the system. Click each line to hear examples of how each biased process could occur.";}
else if (MySlideCounter == 14)
{document.getElementById("transcript").innerHTML = "To avoid using biased data, it is essential for AI algorithms to rely on diverse data sources which are accessible and standardized. Due to the poor integrity of data historically, the data used for an algorithm should be new whenever possible, in addtion to being accurate and complete.";}
else if (MySlideCounter == 15)
{document.getElementById("transcript").innerHTML = "The next concept, transparency and explainability, is important for understanding the role of using AI systems in health care. When advanced technology is not well understood, as Sci-Fi writer Arthur C. Clarke suggests, it is indistinguishable from magic. ";}
else if (MySlideCounter == 16)
{document.getElementById("transcript").innerHTML = "Transparency and Explainability are best described in the frame of black boxes in AI. The black box refers to a situation where an AI algorithm has learned to provide an output but no one is able to explain how the system derived the output. This can be problematic in terms of our inability to know if that output is correct and fair. This is especially an issue in health care where the ability to explain is essential to maintaining trust in the health care system.";}
else if (MySlideCounter == 17)
{document.getElementById("transcript").innerHTML = "The ability for users of an AI system to understand how the output was achieved is often purposefully hindered by commercial entities, where developers want to keep proprietary tools unexamined. This means that tools in use can provide incorrect or unfair output without the user being able to determine that is the case. Clearly, this can be an issue when AI tools are used to provide clincial care. From a different perspective, it is important to consider that any AI systems with some level of transparency and explainability will increase the burden on clinicians to learn more with the expectation to be educated users of those systems.";}
else if (MySlideCounter == 18)
{document.getElementById("transcript").innerHTML = "Underlying the concept of explainability and transparency is the inclination to trust, or not trust, the use of AI in health care. As clinicians, there is a need to determine how much trust to place in an AI system. Part of knowing how much trust to place in the system is in the transparency of those systems and the ability to audit how well the algorithm is performing. Those systems should also regularly report to users the level of certainty with which it is providing an output rather than as a a simple binary output. Based on what is known about a system, clinicians should calibrate their level of trust in the system, with the level of trust also dependent on the context in which the system is used. Click the left and right arrows next to the calibration tool appearing on the screen now to read more about determining the right amount of trust to hold in an AI system. If you are using autoplay, this has been paused on this slide to allow time to read the text and you can restart autoplay on the next slide.";}
else if (MySlideCounter == 19)
{document.getElementById("transcript").innerHTML = "To effectively use AI tools, clinicians should have some understanding of the regulation for those tools, and for understanding bias, specifically the limits of regulation.";}
else if (MySlideCounter == 20)
{document.getElementById("transcript").innerHTML = "The legal response to new technology always lags behind the development. At the time of developing this module, the FDA has not addressed concerns regarding algorithmic bias in the tools used for health care. There also remains significant uncertainty about liability in the development and use of AI. And, as with other areas of health care, industry can exert a significant influence over the regulation of AI. In Europe, there has been ongoing debate on a right to explanation.  In thinking about the level of explainability in AI systems in health care, it is important to keep in mind how this can also limit the effectiveness of AI systems.";}
else if (MySlideCounter == 21)
{document.getElementById("transcript").innerHTML = "Medical professionals have a duty of nonmalificence, to do no harm or more specifically weigh the risk of harm against the benefits. The clinical use of AI algorithms with bias presents a clear risk of harm that clinicians must be able to fairly weigh against their benefits.";}
else if (MySlideCounter == 22)
{document.getElementById("transcript").innerHTML = "In general, the use of AI tools lends to a high risk of bias, and that bias represents potential harm. Where bias is involved, it also means that the risk of harm is disproportinately distributed to marginalized populations. And this harm can arise anywhere in the lifecycle of an AI system from the development of the system in deciding what to make an algorithm for and why, to the collection and use of biased data that informs the algorithm, to where and how the algorithm is deployed, as well as how it is evaluated.";}
else if (MySlideCounter == 23)
{document.getElementById("transcript").innerHTML = "The most commonly referenced form of harm from algorithmic bias is racism and colorism. This goes back to the issue with biased data where racial minorities are underrepresented in most studies. But it goes back even further in that the developers of AI algortihms are often not representative of minority populations. This influences the decisions made in the development process, especially where social factors are involved and may not receive enough attention.";}
else if (MySlideCounter == 24)
{document.getElementById("transcript").innerHTML = "To avoid harm in using AI systems in health care, clinical tools should be evaluated fully for safety and effectiveness in an indepedent validation process. During the development and evaluation process bioethicists should be involved. And clinicians need to be aware of how effective and safe these tools are, including in specific populations so they can determine which circumstances and patients are suitable for using the tool and how to interpret the results.";}
else if (MySlideCounter == 25)
{document.getElementById("transcript").innerHTML = "The final concept, transformation of health care, places the risk of algorithmic bias and the use of AI tools into context of how the health care system is changing, and how the role of clinicians is changing alonside that.";}
else if (MySlideCounter == 26)
{document.getElementById("transcript").innerHTML = "There is a clear paradigm shift occuring with the datafication and digtialization of health care, impacting what clinicians are expected to know and how they are expected to interact with patients. Each day, 750 quadrillion bytes of patient data is produced which is far more than what human clinicians can work with, making AI algorithms increasingly necessary in the health care work flow.";}
else if (MySlideCounter == 27)
{document.getElementById("transcript").innerHTML = "Now we will go through a couple of examples, keeping in mind the terminology and concepts just covered.";}
else if (MySlideCounter == 28)
{document.getElementById("transcript").innerHTML = "The analysis of skin lesions by AI to determine the presence of melanoma has become the classic example of algorithmic bias in health care. AI systems for the diagnosis of skin lesions are often trained with images of these lesions on white patients, while data sets have an estimated proportion of Black patients of 5-10%. This leads to reduced diagnostic accuracy in Black patients compared to the purported level of the system. In the case of melanoma, this can be very consequential in that the estimated 5 year survival rate is 70% for Black patients compared to 94% for white patients. The problem here goes deeper than inclusion, as the process of image capture has historically been affected by racial bias. Digital photography has brought about advancements that improved this issue, but measures to correct lighting can also introduce light artefact or influence color saturation in the image.";}
else if (MySlideCounter == 29)
{document.getElementById("transcript").innerHTML = "The pulse oximeter measures oxygen saturation of hemoglobin by sending infrared light through the skin. Measurements of the pulse oximeter are known to be affected by the patient’s skin color, as the device systematically overestimates oxygen saturation levels in nonwhite patients. As a result, Black patients are three times more likely to suffer from an occult hypoxemia compared with white patients. Despite the difference in quality of measurement from the devices base on skin color, there is no corrective factor to account for this and these measurements are collected as data to be used in AI systems. Furthermore, it is rarely acknowledged that an oximeter that does adjust for skin color was developed in the 1970s but never became widely used.";}
else if (MySlideCounter == 30)
{document.getElementById("transcript").innerHTML = "In summary, algorithmic bias is the systematic prejudice found in the development and use of artificial intelligence systems in a reflection of the data input, methods used, and human judgment. The source of that bias is prominently from the use of biased data, the lack of transparency and explainability, and poses a risk in health care due to inadequate regulation. The harms of algorithmic bias disproportionately affect marginalized populations. Nonetheless, the use of AI technology is increasing along with the amount of data in health care, and so clinicians need to recognize the presence of bias, understand the limitations of tools and regulation, and know when to trust the AI output and when not to trust it. To help put things together, here is a set of general recommendations to follow as clinicians interacting with AI systems in providing patient care. These recommendations orignate from the concepts learned in the module.";}
else if (MySlideCounter == 31)
{document.getElementById("transcript").innerHTML = "Three cases with four videos based on real-life scenarios have been prepared for you to further explore algortihmic bias in health care. Each case is followed by a small set of questions. To receive credit for completing the module, you will need to partipate by answering at least one question for each of the case videos. There is not a right or wrong answer to the questions. The goal is to provide thoughtful answers that use the concepts learned here in the module. To go to the cases, you can either click in the menu or click the image presented here of 3 casebooks. ";}
}

//change transcript on slide back
function ChangeTranscriptBack() {
if (MySlideCounter == 2)
{document.getElementById("transcript").innerHTML = "Welcome to algorithmic bias in artificial intelligence for health care. This module is designed for clinicians to learn how to approach using AI tools in the clinical setting. AI will be increasingly used in health care and clinicians need to know how to approach using these tools safely and ethically. One of the principal issues in using AI is algorithmic bias which is the main topic of this module.";}
else if (MySlideCounter == 3)
{document.getElementById("transcript").innerHTML = "In this module, you will learn, first, to recognize different forms of algorithmic bias in the use of artificial intelligence for health care and the origins of those biases; second, to deconstruct algorithmic bias in the use of artificial intelligence for health care; and third, to empathize with the importance of recognizing and addressing algorithmic bias in health care by exploring the problems resulting from algorithmic bias and the disproportionate impact on already marginalized populations.";}
else if (MySlideCounter == 4)
{document.getElementById("transcript").innerHTML = "We will begin the module by reviewing some core terminology essential for understanding the content. Then we will delve into the main concepts of algorithmic bias, followed by looking at some examples. You will then receive a brief summary of the module and a set of general recommendations on how to approach using AI systems in health care to mitigate bias. After viewing the module you can then move on to cases where you will apply the concepts learned here.";}
else if (MySlideCounter == 5)
{document.getElementById("transcript").innerHTML = "Lets begin with the core terminology you will need to understand algorithmic bias in health care. There are five key terms: Artificial Intelligence, Machine Learning, Algorithms, Bias, and Algorithmic Bias. This will provide a starting point, but you can learn some other important terms in the reading listed on the overview page.";}
else if (MySlideCounter == 6)
{document.getElementById("transcript").innerHTML = "First, what is artificial intelligence? AI describes a branch of computer science for developing digital algorithmic systems capable of complex decisions.";}
else if (MySlideCounter == 7)
{document.getElementById("transcript").innerHTML = "Next, what is machine learning? Machine learning is the dominant branch of AI wherein systems train predictive models by identifying patterns of data from input, and then use those patterns to make predictions in new data.";}
else if (MySlideCounter == 8)
{document.getElementById("transcript").innerHTML = "Algorithms are a set of step-by-step instructions which the computer system relies on to perform tasks modified through the training process of machine learning to be more accurate.";}
else if (MySlideCounter == 9)
{document.getElementById("transcript").innerHTML = "Bias is a systematic deviation from the truth, and the processes that lead to such a deviation. Bias can be come in the form of social biases and statistical biases. Bias contrasts with noise or variation which randomly deviates from the truth. Many errors are a combination of both bias and noise.";}
else if (MySlideCounter == 10)
{document.getElementById("transcript").innerHTML = "And now, what is algorithmic bias? This is the systematic prejudice found in the development and use of artificial intelligence systems in a reflection of the data input, methods used, and human judgment.";}
else if (MySlideCounter == 11)
{document.getElementById("transcript").innerHTML = "Now that we have the core terms defined, we can move to some of the main concepts in algorithmic bias in health care. These concepts are derived from an extensive literature review and discussions with experts on AI in health care. We will cover 5 main concepts: biased data, transparency & explainability, regulation of AI in health care, risk of harm, and the transformation of health care. What is covered here is just the tip of the iceberg, but representative of essential knowledge for clinicians who will be interacting with AI tools in providing patient care.";}
else if (MySlideCounter == 12)
{document.getElementById("transcript").innerHTML = "The first concept we will explore is biased data which is the largest source of bias in AI algorithms.";}
else if (MySlideCounter == 13)
{document.getElementById("transcript").innerHTML = "Click each of the four areas to learn about different major sources of biased data in AI systems.";}
else if (MySlideCounter == 14)
{document.getElementById("transcript").innerHTML = "The importance of biased data is in how this data influences the development of the AI algorithm, in a problem often referred to as garbage in, garbage out. In other words, AI systems are only as good as the data on which they are trained.";}
else if (MySlideCounter == 15)
{document.getElementById("transcript").innerHTML = "Another way in which data is biased is when preexisting social biases are captured in the data and then codified into the algorithm. In any AI tool, there are risks for unintended consequences when users are not aware of the social biases being captured in the data. And furthermore, those biases can become amplified by the system. Click each line to hear examples of how each biased process could occur.";}
else if (MySlideCounter == 16)
{document.getElementById("transcript").innerHTML = "To avoid using biased data, it is essential for AI algorithms to rely on diverse data sources which are accessible and standardized. Due to the poor integrity of data historically, the data used for an algorithm should be new whenever possible, in addtion to being accurate and complete.";}
else if (MySlideCounter == 17)
{document.getElementById("transcript").innerHTML = "The next concept, transparency and explainability, is important for understanding the role of using AI systems in health care. When advanced technology is not well understood, as Sci-Fi writer Arthur C. Clarke suggests, it is indistinguishable from magic.";}
else if (MySlideCounter == 18)
{document.getElementById("transcript").innerHTML = "Transparency and Explainability are best described in the frame of black boxes in AI. The black box refers to a situation where an AI algorithm has learned to provide an output but no one is able to explain how the system derived the output. This can be problematic in terms of our inability to know if that output is correct and fair. This is especially an issue in health care where the ability to explain is essential to maintaining trust in the health care system.";}
else if (MySlideCounter == 19)
{document.getElementById("transcript").innerHTML = "The ability for users of an AI system to understand how the output was achieved is often purposefully hindered by commercial entities, where developers want to keep proprietary tools unexamined. This means that tools in use can provide incorrect or unfair output without the user being able to determine that is the case. Clearly, this can be an issue when AI tools are used to provide clincial care. From a different perspective, it is important to consider that any AI systems with some level of transparency and explainability will increase the burden on clinicians to learn more with the expectation to be educated users of those systems. ";}
else if (MySlideCounter == 20)
{document.getElementById("transcript").innerHTML = "Underlying the concept of explainability and transparency is the inclination to trust, or not trust, the use of AI in health care. As clinicians, there is a need to determine how much trust to place in an AI system. Part of knowing how much trust to place in the system is in the transparency of those systems and the ability to audit how well the algorithm is performing. Those systems should also regularly report to users the level of certainty with which it is providing an output rather than as a a simple binary output. Based on what is known about a system, clinicians should calibrate their level of trust in the system, with the level of trust also dependent on the context in which the system is used. Click the left and right arrows next to the calibration tool appearing on the screen now to read more about determining the right amount of trust to hold in an AI system. If you are using autoplay, this has been paused on this slide to allow time to read the text and you can restart autoplay on the next slide.";}
else if (MySlideCounter == 21)
{document.getElementById("transcript").innerHTML = "To effectively use AI tools, clinicians should have some understanding of the regulation for those tools, and for understanding algorithmic bias it is specifically important to have some understanding on the limits of that regulation.";}
else if (MySlideCounter == 22)
{document.getElementById("transcript").innerHTML = "The legal response to new technology always lags behind the development. At the time of developing this module, the FDA has not addressed concerns regarding algorithmic bias in the tools used for health care. There also remains significant uncertainty about liability in the development and use of AI. And, as with other areas of health care, industry can exert a significant influence over the regulation of AI. In Europe, there has been ongoing debate on a right to explanation.  In thinking about the level of explainability in AI systems in health care, it is important to keep in mind how this can also limit the effectiveness of AI systems.";}
else if (MySlideCounter == 23)
{document.getElementById("transcript").innerHTML = "Medical professionals have a duty of nonmalificence, to do no harm or more specifically weigh the risk of harm against the benefits. The clinical use of AI algorithms with bias presents a clear risk of harm that clinicians must be able to fairly weigh against their benefits.";}
else if (MySlideCounter == 24)
{document.getElementById("transcript").innerHTML = "In general, the use of AI tools lends to a high risk of bias, and that bias represents potential harm. Where bias is involved, it also means that the risk of harm is disproportinately distributed to marginalized populations. And this harm can arise anywhere in the lifecycle of an AI system from the development of the system in deciding what to make an algorithm for and why, to the collection and use of biased data that informs the algorithm, to where and how the algorithm is deployed, as well as how it is evaluated.";}
else if (MySlideCounter == 25)
{document.getElementById("transcript").innerHTML = "The most commonly referenced form of harm from algorithmic bias is racism and colorism. This goes back to the issue with biased data where racial minorities are underrepresented in most studies. But it goes back even further in that the developers of AI algortihms are often not representative of minority populations. This influences the decisions made in the development process, especially where social factors are involved and may not receive enough attention.";}
else if (MySlideCounter == 26)
{document.getElementById("transcript").innerHTML = "To avoid harm in using AI systems in health care, clinical tools should be evaluated fully for safety and effectiveness in an indepedent validation process. During the development and evaluation process bioethicists should be involved. And clinicians need to be aware of how effective and safe these tools are, including in specific populations so they can determine which circumstances and patients are suitable for using the tool and how to interpret the results.";}
else if (MySlideCounter == 27)
{document.getElementById("transcript").innerHTML = "The final concept, transformation of health care, places the risk of algorithmic bias and the use of AI tools into context of how the health care system is changing, and how the role of clinicians is changing alongside that.";}
else if (MySlideCounter == 28)
{document.getElementById("transcript").innerHTML = "There is a clear paradigm shift occuring with the datafication and digtialization of health care, impacting what clinicians are expected to know and how they are expected to interact with patients. Each day, 750 quadrillion bytes of patient data is produced which is far more than what human clinicians can work with, making AI algorithms increasingly necessary in the health care work flow.";}
else if (MySlideCounter == 29)
{document.getElementById("transcript").innerHTML = "Now we will go through a couple of examples, keeping in mind the terminology and concepts just covered.";}
else if (MySlideCounter == 30)
{document.getElementById("transcript").innerHTML = "The analysis of skin lesions by AI to determine the presence of melanoma has become the classic example of algorithmic bias in health care. AI systems for the diagnosis of skin lesions are often trained with images of these lesions on white patients, while data sets have an estimated proportion of Black patients of 5-10%. This leads to reduced diagnostic accuracy in Black patients compared to the purported level of the system. In the case of melanoma, this can be very consequential in that the estimated 5 year survival rate is 70% for Black patients compared to 94% for white patients. The problem here goes deeper than inclusion, as the process of image capture has historically been affected by racial bias. Digital photography has brought about advancements that improved this issue, but measures to correct lighting can also introduce light artefact or influence color saturation in the image.";}
else if (MySlideCounter == 31)
{document.getElementById("transcript").innerHTML = "The pulse oximeter measures oxygen saturation of hemoglobin by sending infrared light through the skin. Measurements of the pulse oximeter are known to be affected by the patient’s skin color, as the device systematically overestimates oxygen saturation levels in nonwhite patients. As a result, Black patients are three times more likely to suffer from an occult hypoxemia compared with white patients. Despite the difference in quality of measurement from the devices base on skin color, there is no corrective factor to account for this and these measurements are collected as data to be used in AI systems. Furthermore, it is rarely acknowledged that an oximeter that does adjust for skin color was developed in the 1970s but never became widely used.";}
else if (MySlideCounter == 32)
{document.getElementById("transcript").innerHTML = "In summary, algorithmic bias is the systematic prejudice found in the development and use of artificial intelligence systems in a reflection of the data input, methods used, and human judgment. The source of that bias is prominently from the use of biased data, the lack of transparency and explainability, and poses a risk in health care due to inadequate regulation. The harms of algorithmic bias disproportionately affect marginalized populations. Nonetheless, the use of AI technology is increasing along with the amount of data in health care, and so clinicians need to recognize the presence of bias, understand the limitations of tools and regulation, and know when to trust the AI output and when not to trust it. To help put things together, here is a set of general recommendations to follow as clinicians interacting with AI systems in providing patient care. These recommendations orignate from the concepts learned in the module.";}
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


function SetButton1() {

if (MySlideCounter == 1) {
document.getElementById("left-btn").classList.remove("noneHolder");
document.getElementById("left-btn").classList.add("opaqueHolder");
}
if (MySlideCounter == 31) {
document.getElementById("right-btn").classList.remove("opaqueHolder");
document.getElementById("right-btn").classList.add("noneHolder");
}
}

function SetButton2() {

if (MySlideCounter == 2) {
document.getElementById("left-btn").classList.remove("opaqueHolder");
document.getElementById("left-btn").classList.add("noneHolder");
}
if (MySlideCounter == 32) {
document.getElementById("right-btn").classList.remove("noneHolder");
document.getElementById("right-btn").classList.add("opaqueHolder");
}
}

function setButton3() {

document.getElementById("left-btn").classList.remove("opaqueHolder");
document.getElementById("left-btn").classList.add("noneHolder");

document.getElementById("right-btn").classList.remove("noneHolder");
document.getElementById("right-btn").classList.add("opaqueHolder");

}

function setButton4() {

document.getElementById("left-btn").classList.remove("noneHolder");
document.getElementById("left-btn").classList.add("opaqueHolder");

document.getElementById("right-btn").classList.remove("opaqueHolder");
document.getElementById("right-btn").classList.add("noneHolder");

}

function setButton5() {

document.getElementById("left-btn").classList.remove("noneHolder");
document.getElementById("left-btn").classList.add("opaqueHolder");

document.getElementById("right-btn").classList.remove("noneHolder");
document.getElementById("right-btn").classList.add("opaqueHolder");

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




