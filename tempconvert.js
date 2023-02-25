function temp1(){
var a=document.getElementById("inputnumber").value;
var b=document.getElementById("degrees");
var c=document.getElementById("degrees1");
var d=document.getElementById("displayvalue");
if(c.value=="celsius"){
    if(b.value=="celsius")
    {
        d.value=a;
    }
    if(b.value=="fahrenheit")
    {
        var e=(parseFloat(a-32)*5/9);
        d.value=e;
    }
    if(b.value=="kelvin")
    {
       var e=(parseFloat(a-273.15));
       d.value=e;
    }
}
else  if(c.value=="fahrenheit")
{
    if(b.value=="celsius")
    {
        var e=(parseFloat((a*9/5)+32));
        d.value=e;
    }
    if(b.value=="fahrenheit")
    {
        d.value=a;
    }
    if(b.value=="kelvin")
    {
       var e=(parseFloat((a-273.15)*9/5)+32);
       d.value=e;
    }
}
else if(c.value=="kelvin")
{
    if(b.value=="celsius")
    {
        var e=(parseFloat(a+273.15));
        d.value=e;
    }
    if(b.value=="fahrenheit")
    {
        var e=(parseFloat((a-32)*5/9)+273.15);
        d.value=e;
    }
    if(b.value=="kelvin")
    {
       d.value=a;
    }
}
}