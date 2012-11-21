/*
 * Scroll To
 * A smooth little plugin to scroll to an element
 * (c) 2012 Nic Johnson - www.trivial.ly
 * MIT Licence
 */

(function($) {
  $.fn.scroll_to = function() {
    this.click(function() {
      var link = $(this);
      var target = link.attr('data-scroll-to') || link.attr('href');
      $('html,body').animate({
        scrollTop: $(target).offset().top
      }, 500);
      return false;
    })
    return this;
  }
})(jQuery)