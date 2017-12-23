"use strict";


$(window).on('load',function() {

$("#btn").click(function(e){
 var url = 'sandrajonesresume.pdf';
  e.preventDefault();
 window.location.href = url;
});
});