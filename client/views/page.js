if (Meteor.isClient) {


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
      
      
    }
  });
}

