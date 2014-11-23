/**
 To check for the username and password match. If matched, redirect to new page.
 */

//$(document).Event=alert("Hellooooo");

//$(document).Element=open("#page3", "windowName", "windowFeatures", "");

/*$(document).EventListener=addEventListener("click", function()
		{
	$(document).Event=alert("Hellooooo");
		});*/

/*$(document).ready(function(){
$("submit1").on("click",function()
		{
			alert("Submit was clicked");
		});

});
*/

	/*
	 * if(form1.user.value=="100"&&form1.pass.value=="1234")
		{
			return 2;
			$("#page3").load("user/contacts.html", function(){
			(currentPage.init);
			});*/
			
			/*alert("Success");
			alert(window.location);
			window.location="user/contacts.html";
			alert(window.location);
			return true;
		}
	else
		{
			return 3;
		}
	*/

/*$("#submit1").EventListener=addEventListener("click", function()
		{
			alert("Hell");
		});
*/

$("#submit1").on("tap",function(){
   /*alert($("#user").val());
   alert($("#pass").val());*/
	
   if(($("#user1").val())=="100"&&($("#pass1").val())=="1234")
	   {
	   		$.mobile.navigate("#page3");
	
	   		//$("#page4").load("user/contacts.html");
	   }
   else
	   {
	   		alert("Wrong Username and Password combination. Enter again...");
	   		$.mobile.navigate("#page2");
	   }
});