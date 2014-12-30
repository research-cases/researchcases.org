/* global smoothScroll, _ */

var researchCases = (function(window, document, _, smoothScroll, researchCases) {

  'use strict';

  researchCases.Main = (function(window, document, _, smoothScroll) {

    var mainNav = document.querySelector('.nav-background'),
        introduction = document.querySelector('.introduction'),
        header = document.querySelector('.page-header');

    var scrollingBelowMenu = function() {
      var introRect = introduction.getBoundingClientRect();
      return introRect.bottom <= 0;
    };

    var addClass = function(el, className) {
      if (el.classList) {
        el.classList.add(className);
      } else {
        el.className += ' ' + className;
      }
    };

    var removeClass = function(el, className) {
      if (el.classList) {
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    };

    var displayFixedMenu = _.throttle(function() {
      if (scrollingBelowMenu()) {
        addClass(mainNav, 'pinned');
        addClass(header, 'shown');
      } else {
        removeClass(header, 'shown');
        removeClass(mainNav, 'pinned');
      }
    }, 100);

    var registerMenuListeners = function() {
      window.addEventListener('resize', displayFixedMenu);
      window.addEventListener('scroll', displayFixedMenu);

      // Trigger it once on page load
      displayFixedMenu();
    };

    return {
      init: function() {
        smoothScroll.init();
        registerMenuListeners();
      }
    };

  })(window, document, _, smoothScroll);

  researchCases.init = researchCases.Main.init;

  return researchCases;

})(window, document, _, smoothScroll, researchCases || {});

document.addEventListener('DOMContentLoaded', researchCases.init);
