/*
    Programmer: Adi Zejnilovic


*/

// this is a single line comment
var box=document.getElementById('display');
function addtodisplay(x)
{
    if (x=='C')
    {
       box.value='';
    }
    else 
    {
       box.value += x;
    }
}

function calculateresult()
{ 
var result = eval(box.value);
 box.value = result;

}
function backspace(){
  box.value = box.value.slice(0, box.value.length - 1);
}

function raisetopower(x)
{ 
  box.value = Math.pow(box.value, x) 
}