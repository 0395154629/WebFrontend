
        $(".header__nav-menu-wrap").click(function(){
          $(".menu__nav").toggle();
      });

      $(".modal__overlay").click(function(){
          $(".main__modal").hide();
      });

      $(".sale-off__close").click(function(){
          $(".main__modal").hide();
      });

      $(".product__panel-item").click(function(){
          $(location).attr('href','product.html');
      });

  
  
