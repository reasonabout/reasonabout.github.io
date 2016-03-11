alphabet=new Array();
alphabet[0]='a';
alphabet[1]='b';
alphabet[2]='c';
alphabet[3]='d';
alphabet[4]='e';
alphabet[5]='f';
alphabet[6]='g';
alphabet[7]='h';
alphabet[8]='i';
alphabet[9]='j';
alphabet[10]='k';
alphabet[11]='l';
alphabet[12]='m';
alphabet[13]='n';
alphabet[14]='o';
alphabet[15]='p';
alphabet[16]='q';
alphabet[17]='r';
alphabet[18]='s';
alphabet[19]='t';
alphabet[20]='u';
alphabet[21]='v';
alphabet[22]='w';
alphabet[23]='x';
alphabet[24]='y';
alphabet[25]='z';
alphabet[26]='#';	

for(i=0;i<27;i++)
{
	car=alphabet[i];	
	if(car!=lettre) document.write('<a href="'+base+'/alpha.php?lettre='+escape(car)+p+'"> '+car+'</a>');
	else document.write('<span class="select">&nbsp;'+car+' </span>');;
}