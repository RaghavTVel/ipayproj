
/* JavaScript content from js/rechargecheck.js in folder common */
/**
 To get for the amount from user to pay others. If card number and CVV is checked, redirect to new page
 */

$("#submit3").on("tap",function(){
   if(($("#cardnumber3").val())==1234123412341234&&($("#cvv3").val())==789&&($("#amount3").val())<=100)
	   {
	   		alert("Payment to Wallet successful!!!");
	   		//$.mobile.navigate("#page3");
	   }
   else
	   {
	   		if(($("#cardnumber3").val())==1234123412341234&&($("#cvv3").val())==789&&($("#amount3").val())>100)
	   		{
	   			alert("Not enough amount in the account!!!");
	   		}
	   		else
	   		{
	   			alert("Incorrect Card number or CVV!!!");
	   		}
	   }
});