 $(function(){
   $('.n1').click(function(){
      $('html').animate({scrollTop:$('.anh3').offset().top},1000);
      return false;
   })

   $('.n2').click(function(){
      $('html').animate({scrollTop:$('.anh4').offset().top},1000);
      return false;
   })

   $('.n3').click(function(){
      $('html').animate({scrollTop:$('.anh5').offset().top},1000);
      return false;
   })

    $(window).scroll(function(){
       var vitri = $('html').scrollTop();
       if(vitri > 305){
        $('.navbar-fixed-top').addClass('them');
      }
       else if(vitri < 305){
        $('.navbar-fixed-top').removeClass('them');
      }
      if(vitri > 500){
         $('.navbar-default').removeClass('navbar-fixed-top');
      }
      else{
         $('.navbar-default').addClass('navbar-fixed-top');
      }

      $('[hieuung = "popover"]').popover();

    })
 })
