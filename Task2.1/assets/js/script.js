

function onFormSubmit(){
	var formData = readFormData();
	insertRecord(formData);
	resetForm();
}

function readFormData(){
	var formData = {};
	formData['firstname'] = document.getElementById('firstname').value;
	formData['lastname'] = document.getElementById('lastname').value;
	formData['gender'] = document.getElementById('gender').value;
	formData['address'] = document.getElementById('address').value;
	return formData;
}