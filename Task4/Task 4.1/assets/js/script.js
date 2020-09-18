function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

document.getElementById('drag1').draggable = false;
document.getElementById('drag2').draggable = false;
document.getElementById('drag3').draggable = false;
document.getElementById('drag4').draggable = false;
document.getElementById('drag5').draggable = false;

function startFun() {
	var startbutton = document.getElementById('start');
	if(start) {
		startbutton.innerHTML = 'STOP';
		start = false;
		document.getElementById('drag1').draggable = true;
		document.getElementById('drag2').draggable = true;
		document.getElementById('drag3').draggable = true;
		document.getElementById('drag4').draggable = true;
		document.getElementById('drag5').draggable = true;
	} else {
		startbutton.innerHTML = 'START';
		start = true;
		document.getElementById('drag1').draggable = false;
		document.getElementById('drag2').draggable = false;
		document.getElementById('drag3').draggable = false;
		document.getElementById('drag4').draggable = false;
		document.getElementById('drag5').draggable = false;
	}
}
 
// var draggable = document.getElementById('drag');
// var drops = document.getElementsByClassName('drop');


// draggable.addEventListener('dragstart', dragStart);
// draggable.addEventListener('dragend', dragEnd);


// for(var drop of drops) {
// 	drop.addEventListener('dragover', dragOver);
// 	drop.addEventListener('drop', dragDrop);
// }

// function dragStart() {
// 	setTimeout(() => this.className = 'invisible', 0);
// 	console.log('start');
// }

// function dragEnd() {
// 	this.className = 'draggable';
// 	console.log('end');

// }

// function dragOver(e) {
// 	e.preventDefault();
// 	console.log('over');

// }

// function dragDrop() {
// 	this.className = 'drop';
// 	this.append(draggable[1]);
// 	console.log('drop');

// }

