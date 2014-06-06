
var button = $( "button" );
var where = $( "#where" ); 

button.click(function(){
	navigator.geolocation.getCurrentPosition(function(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		where.text( latitude );
	});
});

/*button.click(function(){
		where.text( latitude );
});*/

