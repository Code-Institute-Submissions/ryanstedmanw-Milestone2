$(document).ready(function() {
    var clicked = 0;
    $("button").hover(function() {
        $(this).fadeOut(300);
        $(this).fadeIn(500);
    })
    $("button").click(function(){
        clicked++;
        console.log(clicked);
    })
      if (clicked == 1) {
        ("a").text("Downloaded")
        console.log("clicked")
    }else if (clicked == 2) {
        ("a").text("Downloaded twice")
    } 
    
})

/*js to make button fade in and out*/



