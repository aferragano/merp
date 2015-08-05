if (Meteor.isClient) {


  Template.page.helpers({

  });

  Template.page.events({
    'click #map-icon-btn': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="none"
      document.getElementById('peek').style.display="block"
      document.getElementById('logo-corner').style.display="block"
    },
    'click #find-icon-btn': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="none"
      document.getElementById('peek-search').style.display="block"
    },
    'click #peek': function () {
      document.getElementById('main-nav').style.display="block" 
      document.getElementById('peek').style.display="none"      
    },
    'click #create-wall-form-backer': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('create-wall-form').style.display="none"
      document.getElementById('create-wall-form-backer').style.display="none"

    },
    'click #back-btn': function () {
      console.log("boop LALAMLAMALMLAMLAMA")
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('art-wall-backer').style.display="none"
      document.getElementById('art-wall').style.display="none" 
  
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

