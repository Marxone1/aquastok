/**********/
function burgerMenu(selector){
  let menu = $(selector);
  let button = menu.find('.burger-menu_button');
  let links = menu.find(".burger-menu_link");
  let lines = menu.find(".burger-menu_lines");
  //let overlay = menu.find(".burger-menu_overlay");

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
      });

  links.on('click', () => toggleMenu());
  //overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    //overlay.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')){
      $('main').css('margin-left', document.querySelector('.burger-menu_nav').offsetWidth + 'px')
      if ($(window).scrollTop() >= 35){
        setTimeout(() =>{
          $('.header-title').addClass('header_fixed');
        }, 350)
      }else{
        $('.header-title').addClass('header_fixed');
      }
    } else {
      $('main').css('margin-left', '0px');
      if ($(window).scrollTop() >= 35){
        $('.header-title').removeClass('header_fixed');
      }else{
        setTimeout(() =>{
          $('.header-title').removeClass('header_fixed');
        }, 350)
      }
      $('body').css('overflow', 'visible');
    }
  }
}


burgerMenu(".burger-menu")

