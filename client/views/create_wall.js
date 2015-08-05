
//  imageStore = new FS.Store.GridFS(“images”);

// Images = new FS.Collection(“images”, {
//  stores: [imageStore]
// });
if (Meteor.isClient) {

  Template.body.events({

    'change #photoFile':function(event, template){
        // FS.Utility.eachFile(event,function(file){
            
        //     console.log("photoFile photoFile photoFile photoFile photoFile photoFile ")
        //     var fileObj = new FS.File(file)
        //     Uploads.insert(fileObj, function(err){
        //         console.log(err);
        //     })
        // })
        // FS.Utility.eachFile(event,function(file){
        //     Images.insert(file, function (err, fileObj){
        //         if (err){
        //             console.log("ERRORRRRRRR")
        //             console.log(err)

        //         }else{
        //             // var marker = Meteor.markerId();
        //             var imagesUrl = {
        //                 "wall.image": "/cfs/files/images/" + fileObj._id
        //             };
        //             // Meteor.markers.update( )
        //             console.log("HURRAY")
        //         }
        //     })
        // })
    },

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
        var photoFile = event.target.photoFile.value;

    	Markers.update( marker_id, {
    		$addToSet: { graph: [ { locationName: event.target.locationName.value,
	    							photographerName: event.target.photographerName.value,
                                    crewName: event.target.crewName.value,
                                    displayDate: event.target.displayDate.value,
                                    artDescription: event.target.artDescription.value,
	    							artistName: event.target.artistName.value,
                                    photoFile: event.target.photoFile,
	    							date: new Date()
                                }] }
    	});
    	// Cloudinary.upload( function(){
    	// 	console.log("Frake")
    	// })
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

