if (Meteor.isClient) {

  Router.route('/', function () {
    // this.render('art_wall', {
    //   data: function () {
    //     bob=  Markers.findOne({});
    //     // bob: [
    //     // "jesus"]
    //      console.log("bob")
    //     console.log(bob)
    //     console.log(bob.graph)
    //     // console.log(bob.lat)
    //     console.log("bob")
    //   }
    // });
    // data: function () { return Posts.findOne({_id: this.params._id}) },

    // yieldRegions: {
    //   'bob': {to: 'bob'}
    // },
  });


  Template.page.helpers({

  });

  Template.page.events({
    'click #map-btn': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('map-btn').style.display="none"
      document.getElementById('map-tools').style.display="block"
      
    },
    'click #create-wall-form-backer': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('create-wall-form').style.display="none"
      document.getElementById('create-wall-form-backer').style.display="none"
      
      
    },
    'click #art-wall-backer': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('art-wall-backer').style.display="none"
      document.getElementById('art-wall').style.display="none"  
    },
    'click #add-btn': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('art-wall-backer').style.display="none"
      document.getElementById('art-wall').style.display="none"  
      document.getElementById('create-wall-form').style.display="block"
      document.getElementById('create-wall-form-backer').style.display="block"
    }

  });
}

if (Meteor.isServer) {
  
}

