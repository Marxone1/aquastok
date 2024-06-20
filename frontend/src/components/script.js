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
    } else {
      $('body').css('overflow', 'visible');
      $('main').css('margin-left', '0px')
    }
  }
}


burgerMenu(".burger-menu")

