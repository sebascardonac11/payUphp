/**
 * 
 */
$(document).ready(function(){

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
		  	 }).done(function() {
		  	    alert( "success" );
		  	  })
		  	  .fail(function() {
		  	    alert( "error" );
		  	  });
	  
	});


});

