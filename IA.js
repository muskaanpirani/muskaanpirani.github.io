alert("hi");
$(function() 
      {
        var text = $(".text");
        $(window).scroll(function(){
                          var scroll = $(window).scrollTop();

                          if (scroll >= 10) 
                          {
                          text.removeClass("hidden");
                          } 
                          else 
                          {
                            text.addClass("hidden");
                          }
                        });
      });
alert("hi");