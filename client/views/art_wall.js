
if (Meteor.isClient) {
// var _dep = new Deps.Dependency

	Template.art_wall.helpers({
		


		'artist_name': function(){
			_dep.depend();
			marker_id = sessionStorage.getItem("marker.id");
	    mark = Markers.find( { "_id": marker_id }).fetch()
	    artistName = mark[0].graph[0][0].artistName
	    sessionStorage.setItem("lastUpdate", new Date()  );
	    // _dep.changed();
	    $("#back-btn").hide();
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
			return date
		},
	})

}
