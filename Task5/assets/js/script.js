var pid = 0, r = 0, fifty = 0, century = 0, duckout = 0;
var pobj={};
var players = [];
var formData;



document.getElementById('submit').addEventListener('click',onFormSubmit);
document.querySelector('form').addEventListener('submit', function(e){ e.preventDefault(); });

// if (document.getElementById('pname').value != null && document.getElementById('runs').value != null){
	function onFormSubmit(){
		var formData = readFormData();
		pObject(formData);

		console.log(players);

		insertRecord(formData);
		return false;
		resetForm();
	}
// }

function readFormData(){
	var formData = {};
	formData['playername'] = document.getElementById('pname').value;
	formData['runs'] = parseInt(document.getElementById('runs').value);
	return formData;
}

function pObject(formData) {
	if (!(formData.playername in players)) {
		//player doesn't exists
		pobj = {
			'id': players.length + 1,
			'name': formData.playername,
			'total runs': formData.runs,
			'last5innings': [],
		};

		//generate id
		//increment id by 1 if new player
		for (var key in players) {
			pobj['id'] += 1; 
		}

		//check half century
		if (formData.runs >= 50 && formData.runs < 100) {
	        pobj['50s'] = 1;
	    } else {
	        pobj['50s'] = 0;
	    };

		//check century
		if (formData.runs >= 100) {
	        pobj['100s'] = Math.floor(formData.runs/100);
	    } else {
	    	pobj['100s'] = 0;
	    };

		//check duck out
		if (formData.runs == 0) {
		    pobj['0s'] = 1;
	    } else {
	    	pobj['0s'] = 0;
	    };

		// push new players object into players array
        players[formData.playername] = pobj;
        // console.log(players)

	} else {
		//player exists
		players[formData.playername]['total runs'] += formData.runs;

		//check half century
		if (formData.runs >= 50 && formData.runs < 100) {
			players[formData.playername]['50s'] += 1;
		}

		//check century
		if (formData.runs >= 100) {
			players[formData.playername]['100s'] += Math.floor(formData.runs/100);
		}

		//check duck
		if (formData.runs == 0)
			players[formData.playername]['0s'] += 1;
		}

		//update last 5 innings record
		if (players[formData.playername]['last5innings'].length < 5) {
			//less than 5 innings played
			players[formData.playername]['last5innings'].push(formData.runs);
		} else {
			players[formData.playername]['last5innings'].shift();
			players[formData.playername]['last5innings'].push(formData.runs);
		}
}

function insertRecord(data){
	var table = document.getElementById('elist').getElementsByTagName('tbody')[0];
	var row = table.insertRow(table.length);
	
	cell1 = row.insertCell(0);
	cell1.innerHTML = pobj['id'];
	cell2 = row.insertCell(1);
	cell2.innerHTML = data.playername;
	cell3 = row.insertCell(2);
	cell3.innerHTML = data.runs;
	cell4 = row.insertCell(3);
	cell4.innerHTML = pobj['50s'];
	cell5 = row.insertCell(4);
	cell5.innerHTML = pobj['100s'];
	cell6 = row.insertCell(5);
	cell6.innerHTML = pobj['0s'];
}

function resetForm(){
	document.getElementById('pname').value = '';
	document.getElementById('runs').value = '';
}


// var id = parseInt(players[a.id]);
// var total_runs = players[formData.playername]['total runs'];
// var fifty = players[formData.playername]['50s'];
// var century = players[formData.playername]['100s'];
// var duckout = players[formData.playername]['0s'];

// function pObject(formData){
//     pid += 1;
//     pobj['pID'] = pid;
//     pobj['pname'] = formData.playername;
//     r += formData.runs;
//     pobj['total runs'] = r;
//     if (formData.runs >= 50 && formData.runs < 100) {
//     	fifty = 0;
//         fifty += 1;
//         pobj['50s'] = fifty;
//     } else {
//     	pobj['50s'] = 0;
//     };
//     if (formData.runs >= 100) {
//         century += Math.floor(formData.runs/100);
//         pobj['100s'] = century;
//     } else {
//     	pobj['100s'] = century
//     };
//     if (formData.runs == 0) {
//         duckout += 1;
//         pobj['0s'] = duckout;
//     } else {
//     	pobj['0s'] = duckout
//     };
//     console.log(pobj);
//     players.push(pobj);
//     console.log('after');
//     console.log(players);
//     return players.push(pobj);
// }


// for (i=0; i <= players.length; i++) {
// 	if (formData.playername == players[i][1]) {
// 		pObject(formData);
// 	} else {

// 	}
// }


