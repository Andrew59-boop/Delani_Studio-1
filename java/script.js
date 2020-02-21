$("document").ready(function(){
    $("form#form").submit(function(){
        var name=$(".name").val();
        var email=$(".email").val();
        var message=$(".message").val();
alert("thank you "+name );

alert("Your message has been recieved");
    });

    $(".portfolio1").hover(function(){
        $(".1").fadeToggle()
    });
    $(".portfolio2").hover(function(){
        $(".2").fadeToggle()
    });
    $(".portfolio3").hover(function(){
        $(".3").fadeToggle()
    });
    $(".portfolio4").hover(function(){
        $(".4").fadeToggle()
    });
    $(".portfolio5").hover(function(){
        $(".5").fadeToggle()
    });
    $(".portfolio6").hover(function(){
        $(".6").fadeToggle()
    });
    $(".portfolio7").hover(function(){
        $(".7").fadeToggle()
    });
    $(".portfolio8").hover(function(){
        $(".8").fadeToggle()
    });

    $(".design,#design").click(function(){
        $("#design").slideToggle(500);
        $(".design").slideToggle(500);
    })
    $(".development,#development").click(function(){
        $("#development").slideToggle(500);
        $(".development").slideToggle(500);
    })
    $(".product,#product").click(function(){
        $("#product").slideToggle(500);
        $(".product").slideToggle(500);
    })
});