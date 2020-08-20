var arr = [12,45,22,66,86,43,13,65,99,43];
var n = prompt("Enter the No. :- ");

for (let i = 0; i <= arr.length-1; i++){
	for (let j = i+1; j <= arr.length-1; j++){
		if(arr[i] + arr[j] == n){
			document.write("The nos. are ",arr[i], " & ",arr[j]);
			document.write('<br>');
		}
	}
}