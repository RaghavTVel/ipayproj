/**
  To get for the amount from user to pay others. If password is matched, redirect to new page
 */

$("#submit2").on("tap",function(){
   if(($("#amount2").val())<=100&&($("#pass2").val())=="1234")
	   {
	   		alert("Payment successful!!!");
	   		//$.mobile.navigate("#page3");
	   }
   else
	   {
	   		if(($("#pass2").val())!="1234")
	   		{
	   			alert("Wrong Password!!!");
	   		}
	   		
	   		if(($("#amount2").val())>100)
	   		{
	   			alert("Not enough amount in the wallet!!!");
	   		}
	   }
});