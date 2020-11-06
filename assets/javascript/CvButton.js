$(document).ready(function(){
    $("button").hover(function(){
       $( this ).fadeOut( 300 );
  $( this ).fadeIn( 500 );
    })
})

/*js to make button fade in and out*/

   var DownloadPath = 'http//:'+'gitpod.io/assets/Download/cv.txt';

   window.open(DownloadPath , '_blank');