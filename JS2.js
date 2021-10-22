    var row=1;
    var entry=document.getElementById("entry");
    entry.addEventListener("click",displayDetails());
    var user_name=[];

    
  
    function displayDetails()
    {
      var username=document.getElementById("username").value;
      var password=document.getElementById("password").value;
      var name=document.getElementById("name").value;
      var dateofbirth=document.getElementById("dateofbirth").value;
      var address=document.getElementById("address").value;
      var email=document.getElementById("email").value;
      var sex=document.getElementById("sex").value;
      var language=document.getElementById("language").value;
      var about=document.getElementById("about").value;
    
    if(!username || !password || !name || !dateofbirth || !address || !email || !sex || !language || !about)
       {
        alert("Please fill all the boxes");
        return;
       }
   if(user_name && user_name.includes(username)){
      alert('This username already exixts');
      username=console.log("name"+"dateofbirth");
      return;
   }
    
    
    var display=document.getElementById("display");

    var newRow=display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
    var cell6=newRow.insertCell(5);
    var cell7=newRow.insertCell(6);
    var cell8=newRow.insertCell(7);
    var cell9=newRow.insertCell(8);

    cell1.innerHTML=username;
    cell2.innerHTML=password;
    cell3.innerHTML=name;
    cell4.innerHTML=dateofbirth;
    cell5.innerHTML=address;
    cell6.innerHTML=email;
    cell7.innerHTML=sex;
    cell8.innerHTML=language;
    cell9.innerHTML=about;
    user_name.push(username);

    row++;


   }
   function formValidation()
{
var usname = document.registration.username;
var passid = document.registration.password;
var uname = document.registration.name;
var umail = document.registration.email;
var usex= document.registration.sex;

if(username_validation(usname,7))
{
if(password_validation(passid,7,12))
{
if(uname_validation(uname))
{
if(email_validation(umail))
{
if(sex_validation(usex,"male","female"))
{
}
} 
}
} 
}
return false;
} 
function username_validation(usname,val)
{
var uid_len = uid.value.length;
var utext= /^[A-Za-z0-9]+$/;
if(uid_len > 6 && uid.value.match(utext))
{
    return true;
}
else if(uid_len ==0 || uid< val){
alert("Username should not be empty / it should be greater than 6");
uid.focus();
return false;
}
return true;
}

function password_validation(passid,x,y)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len > y || passid_len < x)
{
alert("Password should not be empty / length be between "+x+" to "+y);
passid.focus();
return false;
}
return true;
}

function name_validation(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

function email_validation(umail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(umail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
umail.focus();
return false;
}
} 

function sex_validation()
{
m=0;

if(usex.checked) 
{
m++;
} if(usex.checked)
{
m++; 
}
if(m==0)
{
alert('Select Male/Female');
usex.focus();
return false;
}
else
{
//alert('Form Succesfully Submitted');
//window.location.reload()
return true;
}
}
   