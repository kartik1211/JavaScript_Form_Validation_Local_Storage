var btn=document.getElementById('sub');
var newUser =[];
window.onload=function(){

//localStorage.removeItem('usernames');
newUser =  JSON.parse(localStorage.getItem('usernames'));
 //console.log(typeof(newUser));
 //console.log(typeof([]));
 if(newUser===null){
 	newUser=[];
 }else{
for(var i=0;i<newUser.length;i++){
updateTable(newUser[i]);
 }

 }

}
console.log(newUser);
   var f = document.getElementById("fn").value;
	   var l = document.getElementById("ln").value;
	   var e = document.getElementById("email").value;
	   
	   var loc = document.getElementById("loc").value;
	  var radio1 = document.getElementById("male").checked;
	  var radio2 = document.getElementById("female").checked;



// function validateForm(){
		//var testing=true;
btn.addEventListener('click',function(){


		  f = document.getElementById("fn").value;
		
	    l = document.getElementById("ln").value;
	    e = document.getElementById("email").value;
	   
	    loc = document.getElementById("loc").value;
	  radio1 = document.getElementById("male").checked;
	  radio2 = document.getElementById("female").checked;
	 var radio, testing=true;
	
if (f == "") {

      //document.getElementById("fn1").innerHTML=" FirstName must be filled!";
        document.getElementById("fn").insertAdjacentHTML("afterend", " FirstName must be filled!");
     testing= false;

}

 if( l==""){
	  //document.getElementById("ln1").innerHTML=" LastName must be filled!";
	   document.getElementById("ln").insertAdjacentHTML("afterend", " LastName must be filled!");
    testing= false;
}

var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var testemail=re.test(e);
 if (!testemail) {
    document.getElementById("email").insertAdjacentHTML("afterend", "Enter a valid email!");
     testing= false;
  }


  if( e==""){
 	  //document.getElementById("email1").innerHTML=" EmailId must be filled!";
     document.getElementById("email").insertAdjacentHTML("afterend", " Please enter your email!");
    testing= false;
 }
 
 if(loc==""){
 	document.getElementById("loc").insertAdjacentHTML("afterend", " Location must be filled");
   
  testing= false;
}

if((radio1=="")&&(radio2=="")){
  //document.getElementById("rad1").innerHTML="Please select your gender";	
  	document.getElementById("x").insertAdjacentHTML("afterend", " Please select a gender!");
  testing= false;
}else if(radio1){
	radio=document.getElementById('male').value;
}
else
{
	radio=document.getElementById('female').value;
}
//console.log(radio);
 	  //document.getElementById("loc1").innerHTML=" Location must be filled!";

console.log(testing);
 if(!testing) {

 	return false;
 }




var users={
	fn:f,//document.getElementById('fn').value,
	l:l,//document.getElementById('ln').value,
	e :e,//document.getElementById('email').value,
	loc :loc,//document.getElementById('loc').value,
		radio :radio//document.getElementById('male').value,
	//radio2 :radio2//document.getElementById('female').value,
};

console.log(newUser);


 newUser.push(users);
 updateTable(users);

//newUser.push(users);	
 localStorage.setItem('usernames', JSON.stringify(newUser));



});



function updateTable(users) {
    var myString = "<tr>";
    for (const key in users) {
        console.log(key);
        if (users.hasOwnProperty(key)) {
            myString += "<td>" + users[key] + "</td>";
        }
    }
    myString += "</tr>";
    document.getElementById("t1").insertAdjacentHTML("beforeend", myString);
}
