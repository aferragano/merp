Walls = new Meteor.Collection("walls");
Markers = new Mongo.Collection('markers');

if(Meteor.isServer) {
	Meteor.publish("markers", function(){
		return Markers.find({});
	});
}

if (Meteor.isClient) {
	Meteor.subscribe("markers");
}
