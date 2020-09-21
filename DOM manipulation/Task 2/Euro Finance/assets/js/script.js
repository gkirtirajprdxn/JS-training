/* Author: 

*/

document.getElementById('main-form').addEventListener('submit', function(e){ 
	e.preventDefault();
	if (!validation()) {
		return false;
	} else {
		alert('Thank You! Submitted Successfully!');
		document.getElementById('main-form').reset();
	}
});

var validation = function() {
	var statusFlag = true;

	var fname = document.getElementById('firstname').value;
	if (fname == '') {
		document.getElementById('e-fname').innerHTML = '*Please enter your first name';
		// return false;
		statusFlag = false;

	} 
	else if (!isNaN(fname)) {
		document.getElementById('e-fname').innerHTML = '*Please enter valid name';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('e-fname').innerHTML = "";
    }

	var lname = document.getElementById('lastname').value;
	if (lname == '') {
		document.getElementById('e-lname').innerHTML = '*Please enter your last name';
		// return false;
		statusFlag = false;
	}
	else if (!isNaN(lname)) {
		document.getElementById('e-lname').innerHTML = '*Please enter valid name';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('e-lname').innerHTML = "";
    }

	var pos = document.getElementById('pos').value;
	if (pos == '') {
		document.getElementById('e-position').innerHTML = '*Please enter your Position';
		// return false;
		statusFlag = false;
	}
	else if (!isNaN(pos)) {
		document.getElementById('e-position').innerHTML = '*Please enter valid position name';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('e-position').innerHTML = "";
    }

	var comp = document.getElementById('comp').value;
	if (comp == '') {
		document.getElementById('e-company').innerHTML = '*Please enter your company';
		// return false;
		statusFlag = false;
	}
	else if (!isNaN(comp)) {
		document.getElementById('e-company').innerHTML = '*Please enter valid company name';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('e-company').innerHTML = "";
    }

	var ctype = document.getElementById('c-type').value;
	if (ctype == '- select -') {
		document.getElementById('e-c-type').innerHTML = '*Please select company type';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('e-c-type').innerHTML = "";
    }

	var country = document.getElementById('country').value;
	if (country == '- Choose -') {
		document.getElementById('e-country').innerHTML = '*Please select your country';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('e-country').innerHTML = "";
    }

	var email = document.getElementById('em').value;
	if (email == '') {
		document.getElementById('e-email').innerHTML = '*Please enter your email ID';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('e-email').innerHTML = "";
    }

	var checky = document.getElementById('yes').checked;
	var checkn = document.getElementById('no').checked;
	if (!(( checky && !checkn ) || ( !checky && checkn ))) {
		document.getElementById('e-check').innerHTML = '*Please tick any one (y/n)';
		// return false;
		statusFlag = false;
	} else {
		document.getElementById('e-check').innerHTML = '';
	}

	return statusFlag;
}





















