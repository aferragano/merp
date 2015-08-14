if (Meteor.isClient) {


  Template.page.helpers({

  });

  Template.page.events({
    //map view only
    'touchstart #map-icon-btn': function (event, template) {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="none"
      document.getElementById('peek').style.display="block"
      document.getElementById('logo-corner').style.display="none"
    },
    'touchstart #muro-welcome': function (event, template) {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="none"
      document.getElementById('peek').style.display="block"
      document.getElementById('logo-corner').style.display="block"
    },
    //show search field 
    'touchstart #find-icon-btn': function (event, template) {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="none"
      document.getElementById('peek-search').style.display="block"
      document.getElementById('logo-corner').style.display="block"
    },
    //bye bye search field
    'touchstart #x-circle': function (event, template) {
      document.getElementById('main-nav').style.display="block"
      document.getElementById('peek-search').style.display="none" 
      document.getElementById('peek').style.display="none" 
      document.getElementById('logo-corner').style.display="block"     
    },
    //show full search view
    'touchstart #search': function (event, template) {
      document.getElementById('peek-search').style.display="none" 
      document.getElementById('peek').style.display="none" 
      document.getElementById('logo-corner').style.display="none"
      document.getElementById('full-search').style.display="block"
    },
    'touchstart #x-circle-find': function (event, template) {
      document.getElementById('main-nav').style.display="block"
      document.getElementById('peek-search').style.display="none" 
      document.getElementById('peek').style.display="none" 
      document.getElementById('logo-corner').style.display="block"
      document.getElementById('full-search').style.display="none"
    },
    //hide full search view
    'touchstart #peek': function (event, template) {
      document.getElementById('main-nav').style.display="block" 
      document.getElementById('peek').style.display="none"
      document.getElementById('logo-corner').style.display="block"      
    },
    //WUT WUT INFO/about PAGE
    'touchstart #about-icon-btn': function (event, template) {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="none"
      document.getElementById('about').style.display="block"
      document.getElementById('logo-corner').style.display="none"  
    },
    //BYE BYE INFO/about PAGE
    'touchstart #about': function (event, template) {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="block"
      document.getElementById('about').style.display="none"
      document.getElementById('logo-corner').style.display="block" 
    },
    'touchstart #create-wall-form-backer': function (event, template) {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('main-nav').style.display="block"
      document.getElementById('create-wall-form').style.display="none"
      document.getElementById('create-wall-form-backer').style.display="none"
      document.getElementById('logo-corner').style.display="block"
    },
    'touchstart #back-btn': function (event, template) {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('art-wall-backer').style.display="none"
      document.getElementById('art-wall').style.display="none" 
      document.getElementById('logo-corner').style.display="block" 
  
    },
    'touchstart #art-wall-backer': function (event, template) {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('art-wall-backer').style.display="none"
      document.getElementById('art-wall').style.display="none"
      document.getElementById('logo-corner').style.display="block" 
    },
    'touchstart #add-btn': function (event, template) {
      document.getElementById('muro-welcome').style.display="none"
      document.getElementById('art-wall-backer').style.display="none"
      document.getElementById('art-wall').style.display="none"  
      document.getElementById('create-wall-form').style.display="block"
      document.getElementById('create-wall-form-backer').style.display="block"
      document.getElementById('logo-corner').style.display="none" 
      document.getElementById('main-nav').style.display="none"
    },
    'touchstart .graf': function(event,template) {
      // console.log(this)
      // $(".graf").hide();
      
      // $(this).style.display="none" 
    }

  });
}

if (Meteor.isServer) {
  
}

