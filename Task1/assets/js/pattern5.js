for(i=1;i<=5;i++){
	for(j=1;j<=i;j++){
		document.write('* ');
	}
	for(j=1;j<=2*(5-i);j++){
		document.write('&nbsp &nbsp');
	}
	for(j=1;j<=i;j++){
		document.write("* ");
	}
	document.write("<br>");
}
for(i=5;i>=1;i--){
	for(j=1;j<=i;j++){
		document.write('* ');
	}
	for(j=1;j<=2*(5-i);j++){
		document.write('&nbsp &nbsp');
	}
	for(j=1;j<=i;j++){
		document.write("* ");
	}
	document.write("<br>");
}