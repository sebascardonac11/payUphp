/**
 * 
 */
$(document).ready(function(){
 $("#msgid").html("This is Hello World by JQuery");
});

$(".test").click(function( event ) {
  console.log( "clicked: " );
});
$(".test2").click(function() {
	  alert("Probando");
	  console.log( "clicked: "  );
	});

$( "#target" ).click(function() {
	  alert( "Handler for .click() called." );
	});