
function generercaptcha()
{
	ch="";
for (i=0;i<10;i++)
{
do { 
x=Math.random();
y=Math.floor(x*100);}
while (y<1 || y>26); //x=Math.floor(Math.randm()*26)+1
if (y%2==0)
c=String.fromCharCode(64+y);
else
c=String.fromCharCode(96+y);
ch=ch+c;//ch+=c;
}
document.f.cap.value=ch;}
