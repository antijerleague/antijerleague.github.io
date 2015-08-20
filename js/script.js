 function grow(){
  var element = '.bar';
  var i = 1;

  $(element).each(function(index,value){
    var percent = $(this).attr('data-percent');
    var percentBarDisplay = $(this).attr('data-percent-bar-display');
    var name = $(this).attr('data-name');
    var record = $(this).attr('data-record');
    var timing = percent / 150;
    setTimeout(function(){

      $(value).css('max-width',+ percentBarDisplay + '%').css('transition', timing + 's ease all');
      $(value).append('<div class="num">'+'<strong>'+name+'</strong>'+" "+percent+'%</div>');

    }, i * 50);
    
    i++;
  });
      }

      

      window.onload = function(){
        
  requestAnimationFrame(grow);

      };
