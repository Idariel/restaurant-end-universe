//= require jquery
//= require jquery_ujs
//= require_tree .

window.addEventListener('DOMContentLoaded', function(){
  "use strict";

  // Hide toutes les divs n'appartenant pas à la landing page
  $("#presentation").hide();
  $("#menu").hide();
  $("#specials").hide();

  // click sur les onglets (tabs)
  $("#presentationTab").click(function(){
    $("#presentation").show();
    $("#menu").hide();
    $("#specials").hide();
  });

  $("#menuTab").click(function(){
    $("#presentation").hide();
    $("#menu").show();
    $("#specials").hide();
  });

  $("#specialsTab").click(function(){
    $("#presentation").hide();
    $("#menu").hide();
    $("#specials").show();
  });


});
