(function(){
if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
  // Deps.autorun(function (){
  //   console.log('bonusMode is now:');
  // });

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
            icon: "/images/wall_gray-01.png",
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(thing.lat, thing.lng),
            map: map.instance,
            id: thing._id
          });

          function showArtWall() {
          	console.log("boop")
          	document.getElementById('art-wall').style.display="block"
          	document.getElementById('art-wall-backer').style.display="block"
          }
          
          google.maps.event.addListener(marker, 'click', function() {
  					console.log("this muther marker art wall")
  					console.log(this)
  					console.log(this.id)
  					console.log(this.id)
            console.log("beeboop")
  
  					sessionStorage.setItem("marker.id", marker.id);
  					sessionStorage.setItem("lastUpdate", new Date()  );
            console.log(sessionStorage)
  					showArtWall()
            
  				});


          google.maps.event.addListener(marker, 'dragend', function(event) {
            Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!marker.id")
            console.log(marker._id)

            // Session.set("Lat", "is-editing");
            sessionStorage.setItem("marker.id", marker._id);
            sessionStorage.setItem("lastUpdate", new Date()  );
            console.log(sessionStorage)
          });

          markers[document._id] = marker;
        },
        changed: function (newDocument, oldDocument) {
          markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
          // console.log(this);
          function showCreateForm() {
          	console.log("booplalal")
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
          center: new google.maps.LatLng(37.7833, -122.4167),
          zoom: 14
        };
      }
    }
  });
}

})();
