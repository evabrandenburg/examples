function output( number ) {

};

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
            };

    		 function ( data ) {
    		 	var start0 = $( '#start0' );
    		 	var start1 = $( '#start1' );
    		 	var start2 = $( '#start2' );
    		 	var finish0 = $( '#finish0' );
    		 	var finish1 = $( '#finish1' );
    		 	var finish2 = $( '#finish2' );
    		 	var tooFar = data.begin_at[0].blocks
    		 	var warning = $( '.warning');
    		 	start0.text(
    		 		data.begin_at[0].slots
    		 		+ " bikes at "
    		 		+ data.begin_at[0].name  
    		 		+ ", " 
    		 		+ data.begin_at[0].blocks  
    		 		+ " blocks away"
    		 	);
    		 	start1.text(
    		 		data.begin_at[1].slots
    		 		+ " bikes at "
    		 		+ data.begin_at[1].name 
    		 		+ ", " 
    		 		+ data.begin_at[1].blocks 
    		 		+ " blocks away"
    		 	);
    		 	start2.text(
    		 		data.begin_at[2].slots
    		 		+ " bikes at "
    		 		+ data.begin_at[2].name
    		 		+ ", " 
    		 		+ data.begin_at[2].blocks 
    		 		+ " blocks away"
    		 	);
    		 	finish0.text(
    		 		data.finish_at[0].slots
    		 		+ " docks at "
    		 		+ data.finish_at[0].name 
    		 		+ ", " 
    		 		+ data.finish_at[0].blocks 
    		 		+ " blocks away"
    		 	);
    		 	finish1.text(
    		 		data.finish_at[1].slots
    		 		+ " docks at "
    		 		+ data.finish_at[1].name
    		 		+ ", " 
    		 		+ data.finish_at[1].blocks
    		 		+ " blocks away"
    		 	);
    		 	finish2.text(
    		 		data.finish_at[2].slots
    		 		+ " docks at "
    		 		+(data.finish_at[2].name) 
    		 		+ ( ", " )
    		 		+ ( data.finish_at[2].blocks ) 
    		 		+ " blocks away"
    		 	);
    		 	if(tooFar > 20) {
    		 		warning.text("That's pretty far bro, maybe you shouldn't bike");
    		 	}

    		 }
    	); 
	);
}



var latitude;

console.log( latitude );

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

