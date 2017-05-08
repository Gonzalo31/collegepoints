
subject = ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Programming', 'Computing', 'Visual Arts', 'Technology'];
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
        if (document.getElementById("checkbox" + c).checked) {
            radioButtons = document.getElementsByName('points' + c);
            for (d = 0; d < radioButtons.length; ++d) {
                if (radioButtons[d].checked) {
                    total += +radioButtons[d].value;
                }
            }
        }
    }
    alert("You have " + total + " points in total.");
}
