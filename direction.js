
/*function output( number ) {

};*/
var latitude;
var longitude;


//http://ezbike.xweb.service.cmwp.com/cgi-bin/report.pl?home_latitude=5.5&home_longitude=0&work_latitude=40.714&work_longitude=-73.989
var Go = $( "#go" );
var where = $( "#where" );
var work = $( "#work" );

Go.click( callNav );

function callNav(){
	navigator.geolocation.getCurrentPosition(function( position ) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		where.text( "The latitude is "
		 + latitude
		  + " and the longitude is " + longitude + " good luck");

		callApi( latitude, longitude );
	}); 
};


function callApi( hLatitude, hLongitude ){
 	$.getJSON( "http://ezbike.xweb.service.cmwp.com/cgi-bin/report.pl?"
		+"home_latitude="
		+hLatitude
		+"&home_longitude="
		+hLongitude
		+"&work_latitude=55.714"
		+"&work_longitude=-65.989", answer
    );
};


function answer( data ) {
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

/*Go.click(function GO(){
	callNav();
	callApi();
	answer( data );
});*/

//already able to generate lat and long from location on click
//need to put that lat and long into API web address
//goal to output start statation.... on click of another button



/*button.click(function(){
		where.text( latitude );*/

