
if (Meteor.isClient) {

	Template.art_wall.helpers({
		
		'artist_name': function(){
			 // _newInfoDependency.changed();
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    artistName = mark[0].graph[0][0].artistName
	    sessionStorage.setItem("lastUpdate", new Date()  );
	    console.log(artistName)

			return artistName
		},
		'crewName': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    crewName = mark[0].graph[0][0].crewName
	    $("#back-btn").hide();
			return crewName
		},
		'artDescription': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    artDescription = mark[0].graph[0][0].artDescription
			return artDescription
		},
		'locationName': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    locationName = mark[0].graph[0][0].locationName
			return locationName
		},
		'photographerName': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    photographerName = mark[0].graph[0][0].photographerName
			return photographerName
		},
		'displayDate': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    displayDate = mark[0].graph[0][0].displayDate
			return displayDate
		},
		'date': function(){
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    date = mark[0].graph[0][0].date
	    console.log(mark)
			return date
		},
		// 'graphs': function(){
		// 	marker_id = sessionStorage.getItem("marker.id");
	 //    mark = Markers.find( { "_id": marker_id }).fetch()
	 //    console.log("meowMIX")
	 //    console.log( mark)
	 //    console.log( mark[0].graph.length)
	 //    graph = []

	 //    mark.forEach(function(art){
	 //    	console.log("LALALALA")
	 //    	console.log(art)
	 //    	graph.push(art)

	 //    })
	 //    console.log("THIS IS YOUR POOP ARRAY OF ART")
	 //    console.log(graph)

	    // console.log(graphs)
	    // console.log("elephant")

	    // return graph.graph[0]
	    // return mark[0].graph[0]
			// return date
		// },
	})

}
