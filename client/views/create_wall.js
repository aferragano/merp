if (Meteor.isClient) {


  Template.body.events({
  	"submit form": function (event, template){
    	
    	// console.log(form)
    	

    	//pull last selected marker/wall to edit add 
    	var marker_id = sessionStorage.getItem("marker.id");
    	var marker = Markers.find( { "_id": marker_id }).fetch()

    	var locationName = event.target.locationName.value;
        var crewName = event.target.crewName.value;
        var artDescription = event.target.artDescription.value;
        var displayDate = event.target.displayDate.value;
    	var photographerName = event.target.photographerName.value;
    	var artistName = event.target.artistName.value;
    	var imageName = event.target.imageName.value;

    	Markers.update( marker_id, {
    		$addToSet: { graph: [ { locationName: event.target.locationName.value,
	    							photographerName: event.target.photographerName.value,
                                    crewName: event.target.crewName.value,
                                    displayDate: event.target.displayDate.value,
                                    artDescription: event.target.artDescription.value,
	    							artistName: event.target.artistName.value,
	    							date: new Date()}] }
    	});
    	Cloudinary.upload( function(){
    		console.log("Frake")
    	})
        console.log(Markers)

    	var marker = Markers.find( { "_id": marker_id }).fetch()
    	// console.log("lalalalalallalalalalalalallalal")
    	console.log(marker)

    	$("#photographers-name-field").val("");
    	$("#artist-name-field").val("");
    	$("#image-name").val("");
    	$("#artDescription-name-field").val("");
        $("#crew-name-field").val("");
        $("#displayDate-name-field").val("");
        $("#location-name-field").val("");

    }

  });
}

