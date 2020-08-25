var selectedRow = null;

function onFormSubmit(){
	var formData = readFormData();
	if (selectedRow == null)
		insertRecord(formData);
	else
		updateRecord(formData);
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

function insertRecord(data){
	var table = document.getElementById('elist').getElementsByTagName('tbody')[0];
	var row = table.insertRow(table.length);
	cell1 = row.insertCell(0);
	cell1.innerHTML = data.firstname;
	cell2 = row.insertCell(1);
	cell2.innerHTML = data.lastname;
	cell3 = row.insertCell(2);
	cell3.innerHTML = data.gender;
	cell4 = row.insertCell(3);
	cell4.innerHTML = data.address;
	cell4 = row.insertCell(4);
	cell4.innerHTML = '<a onClick="onEdit(this)">Edit</a>';
	cell5 = row.insertCell(5);
	cell5.innerHTML = '<a onClick="onDelete(this)">Delete</a>';
	alert("Thank you!");
}

function resetForm(){
	document.getElementById('firstname').value = '';
	document.getElementById('lastname').value = '';
	document.getElementById('gender').value = '';
	document.getElementById('address').value = '';
	selectedRow = null;
}

function onEdit(td){
	selectedRow = td.parentElement.parentElement;
	document.getElementById('firstname').value = selectedRow.cells[0].innerHTML;
	document.getElementById('lastname').value = selectedRow.cells[1].innerHTML;
	document.getElementById('gender').value = selectedRow.cells[2].innerHTML;
	document.getElementById('address').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
	selectedRow.cells[0].innerHTML = formData.firstname;
	selectedRow.cells[1].innerHTML = formData.lastname;
	selectedRow.cells[2].innerHTML = formData.gender;
	selectedRow.cells[3].innerHTML = formData.address;
}

function onDelete(td){
	if (confirm('Are you sure you want to delete this record?')){
		delRow = td.parentElement.parentElement; 
		document.getElementById('elist').deleteRow(delRow.rowIndex);
		resetForm();
	}
}
