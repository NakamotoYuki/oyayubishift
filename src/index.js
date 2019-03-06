import 'bootstrap';
import './style.scss';
import keyArray from './key.json';
import keyArrayWithSpace from './space-with-key.json';
import $ from "jquery";

var article='';
var spaceInput = false;


$(function(){
  $(window).keydown(function(e){

  if(e.keyCode === 32){
    spaceInput = true;
  }
  if(spaceInput) {
    article += (keyArrayWithSpace[e.keyCode])? keyArrayWithSpace[e.keyCode] : '';
  } else {
    article += (keyArray[e.keyCode])? keyArray[e.keyCode] : '';
  }

//  if(e.keyCode === 8) {
//    article = article.slice(0, -1);
//  } else if(e.keyCode === 32){
//      if(e.keyCode){
//        article += keyArrayWithSpace[e.keyCode];
//      }
//    return false;
//  } else if(e.shiftKey){
//          if(e.shiftKey){
//            article += String.fromCharCode(e.keyCode);
//    }
//  } else {
//    article += keyArray[e.keyCode];
//  }
      $(".oya-input").val(article);

      return false;
    });

  $(".to-clipboard").click(function(){
    $(".oya-input").select();
 document.execCommand('copy');
  });

  $(".input-reset").click(function(){
    article = '';
    $(".oya-input").val("");
  });

$('.show-keyboard').click(function(){
  $('.type-photo').toggleClass('hidden');
});


});

$(window).keydown(function(e){
    if(e.shiftKey){
      if(e.keyCode === 13){
         return false;
      }
    }
  });

$(window).keyup(function(e){
    if(e.keyCode === 32){
      spaceInput = false;
    }

});
