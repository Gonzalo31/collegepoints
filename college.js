

subject = ['English', 'Maths', 'Physics', 'Programming', 'Computing', 'Visual Arts', 'Technology'];
ns = subject.length;


// PUTS LIST INTO EMPTY ID (subjectList)
function showSubjects() {
	subjectList = '';
	for (c = 0; c< ns; ++c) {
		subjectList += '<span class="subject"><input type="checkbox" name="checkbox" id="checkbox' + c + '"></span>' + subject[c] + '<br>';
	}
	
	document.getElementById('subjects').innerHTML = subjectList;
}

// FUNCTION THAT CHECKS TICKS IN PROGRAMMING AND COMPUTING
function checkTick() {	
	if (document.getElementById("checkbox4").checked && document.getElementById("checkbox3").checked) {
		alert("You picked Computing and Programming! You're a genius.");
  	} else if (document.getElementById("checkbox3").checked) {
		alert("You picked programming, that shows your infinite wisdom.");
	} else if (document.getElementById("checkbox4").checked) {
		alert("You picked Computing, that shows your infinite wisdom.");
	} else {
		alert("You didn't pick Programming nor Computing. Go back and choose one of them. NOW.");
	}
}

// FUNCTION THAT SHOWS SELECTED SUBJECTS
function showGrades() {
	gradesList = '';
	for (c = 0; c< ns; ++c) {
		if (document.getElementById("checkbox"+c).checked) {
			gradesList += "<div>" + subject[c];
			gradesList +=  '<br>' + '<label><input type="radio" name="points' + c + '" value="100">H1  </label>';
			gradesList +=  '<label><input type="radio" name="points' + c + '" value="88">H2    </label>';
			gradesList +=  '<label><input type="radio" name="points' + c + '" value="77">H3    </label>';
			gradesList +=  '<label><input type="radio" name="points' + c + '" value="66">H4    </label>';
			gradesList +=  '<label><input type="radio" name="points' + c + '" value="56">H5    </label>';
			gradesList +=  '<label><input type="radio" name="points' + c + '" value="46">H6    </label>';
			gradesList +=  '<label><input type="radio" name="points' + c + '" value="37">H7    </label>';
			gradesList +=  '<label><input type="radio" name="points' + c + '" value="0" checked>H8    </label>';
			gradesList += "</div>";
		}
	}
	document.getElementById("grades").innerHTML = gradesList;
}

function calcPoints() {
	total = 0;
	for (c = 0; c< ns; ++c) {
		if (document.getElementById("checkbox"+c).checked) {
			radios = document.getElementsByName('points' + c);
			for (d = 0; d < radios.length; ++d) {
				if (radios[d].checked) {
					total += +radios[d].value;
				}
			}
		}
	}
	//alert(total);
	
	document.getElementById("got").value = total;
	
	if (total >= document.getElementById("needed").value) {
		//alert("Yay!");
		document.getElementById("icon").src = "http://www.hey.fr/fun/emoji/android/en/android/634-emoji_android_smiling_face_with_open_mouth_and_smiling_eyes.png";
	} else {
		//alert("Oh no...");
		document.getElementById("icon").src = "data:image/png;base64,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";
	}
	
}
