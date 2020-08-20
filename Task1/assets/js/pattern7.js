var n=5;
var z=1;
var k=n-1;
for (let i=1;i<=n;i++){
	z=i;
	for (let j=1;j<=k+1;j++){
    	document.write("&nbsp &nbsp");
	}
	k=k-1;
	for (j=1;j<=i;j++){
		document.write(z+'&nbsp');
		z=z+1;
	}
	z=z-2;
	for(j=2;j<=i;j++){
		document.write(z+'&nbsp');
		z=z-1;
	}
	document.write('<br>');
}