(function(){
if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.map.onCreated(function() {
    GoogleMaps.ready('map', function(map) {


      google.maps.event.addListener(map.instance, 'click', function(event) {
        Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng()});

      });

      var markers = {};

      Markers.find().observe({

        added: function (thing) {
          var marker = new google.maps.Marker({
            draggable: true,
            icon: "/images/marker-01.png",
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(thing.lat, thing.lng),
            map: map.instance,
            id: thing._id
          });

          function showArtWall() {
          	document.getElementById('art-wall').style.display="block"
          	document.getElementById('art-wall-backer').style.display="block"
            document.getElementById('logo-corner').style.display="none" 
          }
          
          google.maps.event.addListener(marker, 'click', function() {
          	console.log("click event")
          	// _newInfoDependency.depend();
  
  					sessionStorage.setItem("marker.id", marker.id);
  					sessionStorage.setItem("lastUpdate", new Date()  );
  					marker_id = sessionStorage.getItem("marker.id");
				    mark = Markers.find( { "_id": marker_id }).fetch()
				    if (mark[0].graph) {
				    	console.log(mark)
				    	console.log(mark[0])
					    artistName = mark[0].graph[0][0].artistName
					    crewName = mark[0].graph[0][0].crewName
					    artDescription = mark[0].graph[0][0].artDescription
					    locationName = mark[0].graph[0][0].locationName
					    photographerName = mark[0].graph[0][0].photographerName
					    displayDate = mark[0].graph[0][0].displayDate
					    date = mark[0].graph[0][0].date
					    console.log("mark")
					    console.log(mark)
					    console.log(mark[0].graph)
					    $("#artist-name").val("");
              $("#crewName").val("");
              $("#location-name").val("");
              $("#photo-cred").val("");
              $("#artDescription").val(""); 
	  					$("#artist-name").text(artistName);
	  					$("#crewName").text(crewName);
	  					$("#location-name").text(locationName);
	  					$("#photo-cred").text(photographerName);
	  					$("#artDescription").text(artDescription);
	  					
	  				} else {
	  				//create a function to go straight to the add art to wall here if there is none currently
	  				}
					showArtWall()
            
  				});


          google.maps.event.addListener(marker, 'dragend', function(event) {
            Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
            console.log(sessionStorage)
          });

          markers[document._id] = marker;
        },
        changed: function (newDocument, oldDocument) {
          markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
          // console.log(this);
          function showCreateForm() {
          	// console.log("booplalal")
          	document.getElementById('create-wall-form').style.display="block"
          	document.getElementById('create-wall-form-backer').style.display="block"
          }
          showCreateForm();
        }, 
        removed: function (oldDocument) {
          markers[oldDocument._id].setMap(null);
          google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
          delete markers[oldDocument._id];
        }
      });
    });
  });


  Template.map.helpers({
    mapOptions: function() {

      if (GoogleMaps.loaded()) {

        return {
          styles:[
            {
              "featureType":"administrative",
              "elementType":"labels.text.fill",
              "stylers":[{"color":"#444444"}]
            },
            {
              "featureType":"landscape",
              "elementType":"all",
              "stylers":[{"color":"#f2f2f2"}]
            },
            {
              "featureType":"poi",
              "elementType":"all",  
              "stylers":[{"visibility":"off"}]
            },
            {
              "featureType":"road",
              "elementType":"all",
              "stylers":[{"saturation":-100},{"lightness":45}]
            },
            {
              "featureType":"road.highway",
              "elementType":"all",
              "stylers":[{"visibility":"simplified"}]
            },{
              "featureType":"road.arterial",
              "elementType":"labels.icon",
              "stylers":[{"visibility":"off"}]
            },
            {
              "featureType":"transit",
              "elementType":"all",
              "stylers":[{"visibility":"off"}]
            },{
              "featureType":"water",
              "elementType":"all",
              "stylers":[{"color":"#c2cbd9"},{"visibility":"on"}]
            },
            
          ],

        	 
          center: new google.maps.LatLng(37.7833, -122.4167),
          zoom: 14,
          zoomControlOptions: {
              style: google.maps.ZoomControlStyle.LARGE,
              position: google.maps.ControlPosition.LEFT_TOP
          },
          scaleControl: true,
          streetViewControl: false,
          streetViewControlOptions: {
              position: google.maps.ControlPosition.RIGHT_CENTER
          }
        };
      }
    }
  });
}

})();
