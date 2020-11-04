$(document).ready(function(){
    $.getJSON("https://api.github.com/users/ryanstedmanw/repos", JSON, function(result){
    $.each(result, function(i, field){
      $(".github").append(field + " ");
    });
  });
});