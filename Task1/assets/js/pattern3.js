for (let i=1;i<=3;i++){
	for (let j=1;j<=i;j++){
		if(i==j){
			document.write(i**i);
		}
		else if(j==1){
			document.write(j+' ');
		}
		else{
			document.write((i*j+j)+' ');
		}
	}
	document.write('<br>');
}