// $(".header__nav-menu-wrap").mouseover(function(){
//     $(".menu__nav").fadeIn();
// });

// $(".menu__nav").mouseleave(function(){
//     $(".menu__nav").fadeOut();
// });

$(".header__nav-menu-wrap").click(function () {
  $(".menu__nav").toggle();
});

$(".modal__overlay").click(function () {
  $(".main__modal").hide();
});

$(".sale-off__close").click(function () {
  $(".main__modal").hide();
});

$(".product__panel-item").click(function () {
  $(location).attr('href', 'product.html');
});

// $(".product__main-img-list img").click(function(){
//     $("product__main-img-primary img").attr('src','product.html');
// });

// $(".header__nav-menu-wrap").click(function(){
//     $(".menu__nav").hide();
// });
//Get the button
var mybutton = document.getElementById("myBtn-scroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


pickBtn.onclick = function () {
  let cookies = document.cookie.split(';')
  let hasCartInfo = false;
  console.log(cookies)
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].split('=')
    // nếu chưa có giá trị cartInfo ban đầu
    if (c.length <= 0) {
      continue;
    }
    // nếu đã có cooki khác cartInfo
    else {
      hasCartInfo = true;
      console.log(c[0])
      if (c[0].trim() == 'cartInfo') {
        let amount = Number(c[1]) + 1
        console.log(amount)
        cartInfo.textContent = amount
        document.getElementsByClassName('header__notice')[0].textContent = amount;
        document.cookie = 'cartInfo=' + amount

      }
    }


    if (!hasCartInfo) {
      document.cookie = 'cartInfo=1';
    }
  }
}