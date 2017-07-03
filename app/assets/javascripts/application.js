// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require react
//= require react_ujs
//= require components
//= require_tree .
// require 'gems'

window.onload = function() {
$(".glass").click(function() {
  $('.searchContainer input').focus();
});
$(".searchContainer .star").click(function(){
  $(this).closest(".star").toggleClass("blue")
  localStorage.setItem($(this).closest(".blue").attr("id"),$(this).closest(".blue").attr("id"));
});
$(".star .blue").click(function(){
  console.log(localStorage.removeItem($(this).attr("id")));})
for (var i = 0; i <localStorage.length; i++) {
  if (localStorage.getItem(localStorage.key(i))) {
    $("#"+(localStorage.getItem(localStorage.key(i)))).toggleClass("blue")
  }
}
$(".star").click(function(){
  $(this).closest(".star").toggleClass("blue");
  if ($(this).closest(".star").hasClass("blue")){
    localStorage.setItem($(this).closest(".blue").attr("id"),$(this).closest(".blue").attr("id"))
  } else{
    localStorage.removeItem(($(this).closest(".star").attr("id")));
  }
})
}
