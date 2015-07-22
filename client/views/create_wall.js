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

    	var locationName = event.target.locationName.value;
    	var photographerName = event.target.photographerName.value;
    	var artistName = event.target.artistName.value;
    	var imageName = event.target.imageName.value;

    	console.log("locationName")
    	console.log(locationName)
    	console.log("photographerName")
    	console.log(photographerName)
    	console.log("artistName")
    	console.log(artistName)
    	console.log("imageName")
    	console.log(imageName)

    }

  });
}

