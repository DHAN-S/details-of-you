var back=document.getElementById("backside");
var pop=document.getElementById("popup");

function show1()
{
back.style.display="block";
pop.style.display="block";

}
function close1()
{back.style.display="none";
pop.style.display="none";

}
function del(event)
{

    event.target.parentElement.remove()
}

function add1(event)
{ event.preventDefault();

    var tot=document.getElementById("world");
  var newelement= document.createElement('div')
 
  const name=document.getElementById("name").value

  const fathername=document.getElementById("fathername").value
  const mothername=document.getElementById("mothername").value
  const dob=document.getElementById("dob").value
console.log(fathername);
var newelement=document.createElement("div")
newelement.setAttribute("class","total-body")
var n1="Name : "+name;
var n2="Father name : "+fathername;
var n3="Mother name : "+mothername;
var n4="D.O.B : "+dob;
var titleall=document.getElementById('alltitle')

newelement.innerHTML=`<h2>${n1}</h2><h2>${n2}</h2><h2>${n3}</h2><h2>${n4}</h2><button id="delete" onclick="del(event)
">DELETE</button>`



tot.append(newelement)

  back.style.display="none";
pop.style.display="none";

}

