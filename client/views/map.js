// ///////////////////////////////////////////////////////////////////////////////
// // Map display

// Template.map.created = function() {
//   Walls.find({}).observe({
//     added: function(wall) {
//       var marker = new L.Marker(wall.latlng, {
//         _id: wall._id,
//         icon: createIcon(wall)
//       }).on('click', function(e) {
//         Session.set("selected", e.target.options._id);
//       });      
//       addMarker(marker);
//     },
//     changed: function(wall) {
//       var marker = markers[wall._id];
//       if (marker) marker.setIcon(createIcon(wall));
//     },
//     removed: function(wall) {
//       removeMarker(wall._id);
//     }
//   });
// }

// Template.map.rendered = function () { 
//   // basic housekeeping
//   $(window).resize(function () {
//     var h = $(window).height(), offsetTop = 0; // Calculate the top offset
//     $('#map_canvas').css('height', (h - offsetTop));
//   }).resize();

//   // initialize map events
//   if (!map) {
//     initialize($("#map_canvas")[0], [ 37.7833, -122.4167 ], 13);
  
//     map.on("dblclick", function(e) {
//       if (! Meteor) // must be logged in to create parties
//         return;
      
//       openCreateDialog(e.latlng);
//     });
  
//     var self = this;
//     Meteor.autorun(function() {
//       var selectedwall = Walls.findOne(Session.get("selected"));
//       if (selectedwall) {
//         if (!self.animatedMarker) {
//           var line = L.polyline([[selectedwall.latlng.lat, selectedwall.latlng.lng]]);
//           self.animatedMarker = L.animatedMarker(line.getLatLngs(), {
//             autoStart: false,
//             distance: 3000,  // meters
//             interval: 200, // milliseconds
//             icon: L.divIcon({
//               iconSize: [50, 50],
//               className: 'leaflet-animated-div-icon'
//             })
//           });
//           map.addLayer(self.animatedMarker);
//         } else {
//           // animate to here
//           var line = L.polyline([[self.animatedMarker.getLatLng().lat, self.animatedMarker.getLatLng().lng],
//             [selectedwall.latlng.lat, selectedwall.latlng.lng]]);
//           self.animatedMarker.setLine(line.getLatLngs());
//           self.animatedMarker.start();
//         } 
//       }
//     })
//   }
// }

// var map, markers = [ ];

// var initialize = function(element, centroid, zoom, features) { 
//   map = L.map(element, {
//     scrollWheelZoom: false,
//     doubleClickZoom: false,
//     boxZoom: false,
//     touchZoom: false
//   }).setView(new L.LatLng(centroid[0], centroid[1]), zoom);
  
//   L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png').addTo(map);

//   map.attributionControl.setPrefix('');
  
// 	var attribution = new L.Control.Attribution();
//   attribution.addAttribution("Geocoding data &copy; 2013 <a href='http://open.mapquestapi.com'>MapQuest, Inc.</a>");
//   attribution.addAttribution("Map tiles by <a href='http://stamen.com'>Stamen Design</a> under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>.");
//   attribution.addAttribution("Data by <a href='http://openstreetmap.org'>OpenStreetMap</a> under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>.");
  
//   map.addControl(attribution);
// }

// var addMarker = function(marker) {
//   map.addLayer(marker);
//   markers[marker.options._id] = marker;
// }

// var removeMarker = function(_id) {
//   var marker = markers[_id];
//   if (map.hasLayer(marker)) map.removeLayer(marker);
// }

// var createIcon = function(wall) {
//   var className = 'leaflet-div-icon ';
//   console.log("create")
//   // className += wall.public ? 'public' : 'private';
//   return L.divIcon({
//     iconSize: [30, 30],
//     html: '<b>' + attending(wall) + '</b>',
//     className: className  
//   });
// }

// var openCreateDialog = function (latlng) {
// 	console.log("thing")
//   Session.set("createCoords", latlng);
//   Session.set("createError", null);
//   Session.set("showCreateDialog", true);
// };


if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.map.onCreated(function() {
    GoogleMaps.ready('map', function(map) {
      google.maps.event.addListener(map.instance, 'click', function(event) {
        Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      });


      var markers = {};

      Markers.find().observe({

        added: function (thing) {
          var marker = new google.maps.Marker({
            draggable: true,
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
  					sessionStorage.setItem("marker.id", this.id);
            console.log(sessionStorage)
  					showArtWall()
  				});


          google.maps.event.addListener(marker, 'dragend', function(event) {
            Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!marker.id")
            console.log(marker.id)
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!marker.id")
            // Session.set("Lat", "is-editing");
            sessionStorage.setItem("marker.id", marker.id);
            console.log(sessionStorage)
          });

          markers[document._id] = marker;
        },
        changed: function (newDocument, oldDocument) {
          markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
          // console.log(this);
          function showCreateForm() {
          	console.log("boop")
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
