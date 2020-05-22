/**
 * 
 */
$(document).ready(function(){
 $("#msgid").html("This is Hello World by JQuery");

 $(".test").click(function( event ) {
		alert("Probando test");
	  console.log( "clicked: " + event.target);
	  
	  $.ajax({url: "https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi", 
		  	method: "POST",
		  	 data: { 
		  		 "test": false,
		  		 "language": "en",
		  		 "command": "PING",
		  		 "merchant": {
		  	     "apiLogin": "pRRXKOl8ikMmt9u",
		  	     "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
		  		 }
		  	 },
		  	success: function(result){
		    $("#msgid").html(result);
		  }
		  	 });
	  
	});


});

