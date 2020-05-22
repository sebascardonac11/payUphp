/**
 * 
 */
$(document).ready(function(){

 $(".test").click(function( event ) {
	  $.ajax({url: "https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi", 
		  	method: "POST",
		  	type: 'json',
		  	headers:null,
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
		    
		  },
	        error: function (error) {
	        	  $("#msgid").html(result);
	            console.log(error);
	        }
		  	 })
	  
	});


});

