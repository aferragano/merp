if (Meteor.isClient) {
	// Deps.autorun(function (){
 //    console.log('bonusMode is now:', bonusMode.get());
 //  });


	// Template.art_wall.artist_name = function(){
	// 	marker_id = sessionStorage.getItem("marker.id");
 //    mark = Markers.find( { "_id": marker_id }).fetch()
 //    console.log("markkkkkkkkk")
 //    console.log(mark)
 //    artistName = mark[0].graph[0][0].artistName
	// 	return artistName
	// }

	//maybe create a function to change content when onclick of marker


	Template.art_wall.helpers({


		'artist_name': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    console.log("markkkkkkkkk")
	    console.log(mark)
	    artistName = mark[0].graph[0][0].artistName
	    sessionStorage.setItem("lastUpdate", new Date()  );
			return artistName
		},
		'crewName': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    console.log("markkkkkkkkk")
	    console.log(mark)
	    crewName = mark[0].graph[0][0].crewName
			return crewName
		},
		'artDescription': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    console.log("markkkkkkkkk")
	    console.log(mark)
	    artDescription = mark[0].graph[0][0].artDescription
			return artDescription
		},
		'locationName': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    console.log("markkkkkkkkk")
	    console.log(mark)
	    locationName = mark[0].graph[0][0].locationName
			return locationName
		},
		'photographerName': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    console.log("markkkkkkkkk")
	    console.log(mark)
	    photographerName = mark[0].graph[0][0].photographerName
			return photographerName
		},
		'displayDate': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    console.log("markkkkkkkkk")
	    console.log(mark)
	    displayDate = mark[0].graph[0][0].displayDate
			return displayDate
		},
		'date': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    console.log("markkkkkkkkk")
	    console.log(mark)
	    date = mark[0].graph[0][0].date
			return date
		},
	})

}