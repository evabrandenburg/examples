/*function output( number ) {

};*/

//http://ezbike.xweb.service.cmwp.com/cgi-bin/report.pl?home_latitude=5.5&home_longitude=0&work_latitude=40.714&work_longitude=-73.989

 $.getJSON( "http://ezbike.xweb.service.cmwp.com/cgi-bin/report.pl?"
		+"home_latitude="
		+latitude
		+"&home_longitude="
		+longitude
		+"&work_latitude=40.714"
		+"&work_longitude=-73.989",
        $.each(results[0].address_components, function(){
         $("#start").find('input[name="'+ this.types+'"]').attr('value', this.long_name);
        };);

		 function ( data ) {
		 	var start0 = $( '#start0' );
		 	
		 	start0.text(
		 		data.begin_at[0].slots
		 		+ " bikes at "
		 		+ data.begin_at[0].name  
		 		+ ", " 
		 		+ data.begin_at[0].blocks  
		 		+ " blocks away"
		 	);
		 };
    ); 




var latitude;
var longitude;

var button = $( "button" );
var where = $( "#where" ); 

button.click(function(){
	navigator.geolocation.getCurrentPosition(function(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		where.text( "The latitude is "
		 + latitude
		  + " and the longitude is " + longitude + " good luck");
	});
});

/*button.click(function(){
		where.text( latitude );
});*/

