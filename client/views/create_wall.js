if (Meteor.isClient) {


  Template.body.helpers({
    // "submit .add-to-art-wall": function (event){
    // 	// event.preventDefault();

    // 	var locationName = event.target.text.value
    // 	console.log("locationName")
    // }
  });

  Template.body.events({
  	"submit form": function (event){
    	event.preventDefault();
    	// console.log(form)
    	

    	
    	var marker_id = sessionStorage.getItem("marker.id");
    	var marker = Markers.find( { "_id": marker_id }).fetch()
    	console.log("DEEEEE MARKER IS");
    	console.log(marker_id)
    	console.log("DEEEEE obj MARKER IS");
    	console.log(marker)

    	var locationName = event.target.locationName.value;
    	var photographerName = event.target.photographerName.value;
    	var artistName = event.target.artistName.value;
    	var imageName = event.target.imageName.value;

    	Markers.update( marker_id, {
    		$addToSet: { 	graph: [ {locationName: event.target.locationName.value,
    		    		    							photographerName: event.target.photographerName.value,
    		    		    							artistName: event.target.artistName.value,
    		    		    							date: "date"}] }
    	});
    	var marker = Markers.find( { "_id": marker_id }).fetch()
    	console.log("lalalalalallalalalalalalallalal")
    	console.log(marker)
    	

    	// console.log("locationName")
    	// console.log(locationName)
    	// console.log("photographerName")
    	// console.log(photographerName)
    	// console.log("artistName")
    	// console.log(artistName)
    	// console.log("imageName")
    	// console.log(imageName)

    }

  });
}

