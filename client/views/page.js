if (Meteor.isClient) {


  Template.page.helpers({

  });

  Template.page.events({
    //map view only
    'click #map-icon-btn': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="none"
      document.getElementById('peek').style.display="block"
      document.getElementById('logo-corner').style.display="block"
    },
    //show search field 
    'click #find-icon-btn': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="none"
      document.getElementById('peek-search').style.display="block"
      document.getElementById('logo-corner').style.display="block"
    },
    //bye bye search field
    'click #x-circle': function () {
      document.getElementById('peek-search').style.display="none" 
      document.getElementById('peek').style.display="block" 
      document.getElementById('logo-corner').style.display="block"     
    },
    //show full search view
    'click #search': function () {
      document.getElementById('peek-search').style.display="none" 
      document.getElementById('peek').style.display="none" 
      document.getElementById('logo-corner').style.display="none"
      document.getElementById('full-search').style.display="block"
    },
    'click #x-circle-find': function () {
      document.getElementById('peek-search').style.display="none" 
      document.getElementById('peek').style.display="block" 
      document.getElementById('logo-corner').style.display="block"
      document.getElementById('full-search').style.display="none"
    },
    //hide full search view
    'click #peek': function () {
      document.getElementById('main-nav').style.display="block" 
      document.getElementById('peek').style.display="none"
      document.getElementById('logo-corner').style.display="block"      
    },
    //WUT WUT INFO/about PAGE
    'click #about-icon-btn': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="none"
      document.getElementById('about').style.display="block"
      document.getElementById('logo-corner').style.display="none"  
    },
    //BYE BYE INFO/about PAGE
    'click #about': function () {
      document.getElementById('muro-welcome').style.display="block"
      document.getElementById('main-nav').style.display="block"
      document.getElementById('about').style.display="none"
      document.getElementById('logo-corner').style.display="none" 
    },
    'click #create-wall-form-backer': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('create-wall-form').style.display="none"
      document.getElementById('create-wall-form-backer').style.display="none"
      document.getElementById('logo-corner').style.display="block"
    },
    'click #back-btn': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('art-wall-backer').style.display="none"
      document.getElementById('art-wall').style.display="none" 
      document.getElementById('logo-corner').style.display="block" 
  
    },
    'click #art-wall-backer': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('art-wall-backer').style.display="none"
      document.getElementById('art-wall').style.display="none"
      document.getElementById('logo-corner').style.display="block" 
    },
    'click #add-btn': function () {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('art-wall-backer').style.display="none"
      document.getElementById('art-wall').style.display="none"  
      document.getElementById('create-wall-form').style.display="block"
      document.getElementById('create-wall-form-backer').style.display="block"
      document.getElementById('logo-corner').style.display="none" 
    }

  });
}

if (Meteor.isServer) {
  
}

