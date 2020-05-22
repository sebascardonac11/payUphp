/**
 * 
 */
$(document).ready(function(){
 $("#msgid").html("This is Hello World by JQuery");
});

$(".test").click(function( event ) {
	alert("Probando test");
  console.log( "clicked: " );
});
$(".test2").click(function() {
	  alert("Probando test2 ");
	  console.log( "clicked: "  );
	});

$( "#target" ).click(function() {
	  alert( "Handler for .click() called." );
	});