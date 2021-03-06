/* Author: 

*/

// blur event validation function

var x = document.getElementById("contact-form");
x.addEventListener("blur", blurvalidation, true);

function blurvalidation() {
	var fname = document.getElementById('firstname').value;
	if (fname == '') {
		document.getElementById('fname').innerHTML = '*Please enter your first name';
		return false;
		// statusFlag = false;
	} 
	else if (!isNaN(fname)) {
		document.getElementById('fname').innerHTML = '*Please enter valid name';
		return false;
		// statusFlag = false;
	} else {
        document.getElementById('fname').innerHTML = "";
    }

    var lname = document.getElementById('lastname').value;
	if (lname == '') {
		document.getElementById('lname').innerHTML = '*Please enter your last name';
		return false;
		// statusFlag = false;
	}
	else if (!isNaN(lname)) {
		document.getElementById('lname').innerHTML = '*Please enter valid name';
		return false;
		// statusFlag = false;
	} else {
        document.getElementById('lname').innerHTML = "";
    }

    var mobile = document.getElementById('mobileno').value;
	if (mobile == '') {
		document.getElementById('mobile').innerHTML = '*Please enter your mobile number';
		return false;
		// statusFlag = false;
	}
	else if (isNaN(mobile)) {
		document.getElementById('mobile').innerHTML = '*Please enter valid mobile number';
		return false;
		// statusFlag = false;
	}
	else if (mobile.length != 10) {
		document.getElementById('mobile').innerHTML = '*Mobile No. must be 10 digits';
		return false;
		// statusFlag = false;
	} else {
        document.getElementById('mobile').innerHTML = "";
    }

    var email = document.getElementById('emailid').value;
	if (email == '') {
		document.getElementById('email').innerHTML = '*Please enter your email ID';
		return false;
		// statusFlag = false;
	} else {
        document.getElementById('email').innerHTML = "";
    }

    var msg = document.getElementById('yourmsg').value;
	if (msg == '') {
		document.getElementById('msg').innerHTML = '*Please enter message';
		return false;
		// statusFlag = false;
	} else {
        document.getElementById('msg').innerHTML = "";
    }
}

// submit event and modal function

document.getElementById('contact-form').addEventListener('submit', function(e){ 
	e.preventDefault();
	if (!validation()) {
		return false;
	} else {
		var modal = document.getElementById('modal')
		modal.style.display = 'block';
	}
});

// close btn

var close = document.getElementById('close')
close.addEventListener('click', function(){
	var modal = document.getElementById('modal')
	modal.style.display = "none";
	document.getElementById('contact-form').reset();
})

// window event

window.addEventListener('click', function(event) {
	var modal = document.getElementById('modal')
	if (event.target == modal) {
		modal.style.display = "none";
		document.getElementById('contact-form').reset();
  	}
})

// validation function

var validation = function() {
	var statusFlag = true;

	var fname = document.getElementById('firstname').value;
	if (fname == '') {
		document.getElementById('fname').innerHTML = '*Please enter your first name';
		// return false;
		statusFlag = false;
	} 
	else if (!isNaN(fname)) {
		document.getElementById('fname').innerHTML = '*Please enter valid name';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('fname').innerHTML = "";
    }

	var lname = document.getElementById('lastname').value;
	if (lname == '') {
		document.getElementById('lname').innerHTML = '*Please enter your last name';
		// return false;
		statusFlag = false;
	}
	else if (!isNaN(lname)) {
		document.getElementById('lname').innerHTML = '*Please enter valid name';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('lname').innerHTML = "";
    }

    var mobile = document.getElementById('mobileno').value;
	if (mobile == '') {
		document.getElementById('mobile').innerHTML = '*Please enter your mobile number';
		// return false;
		statusFlag = false;
	}
	else if (isNaN(mobile)) {
		document.getElementById('mobile').innerHTML = '*Please enter valid mobile number';
		// return false;
		statusFlag = false;
	}
	else if (mobile.length != 10) {
		document.getElementById('mobile').innerHTML = '*Mobile No. must be 10 digits';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('mobile').innerHTML = "";
    }

    var email = document.getElementById('emailid').value;
	if (email == '') {
		document.getElementById('email').innerHTML = '*Please enter your email ID';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('email').innerHTML = "";
    }

    var msg = document.getElementById('yourmsg').value;
	if (msg == '') {
		document.getElementById('msg').innerHTML = '*Please enter message';
		// return false;
		statusFlag = false;
	} else {
        document.getElementById('msg').innerHTML = "";
    }

    return statusFlag;
}
















