var z=1;
var n=5;
for (let i=1;i<=n;i++){
	for (let j=n-1;j>=i;j--){
    	document.write('&nbsp &nbsp');
	}
	for (let k=1;k<=z;k++){
		if (k==1 || k==z || i==n){
			document.write('* ');	
		}
		else{
			document.write('&nbsp &nbsp');
		}
	}
	z=z+2;
	document.write('<br>');
}