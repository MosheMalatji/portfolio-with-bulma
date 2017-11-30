'use strict';

//bulma navbar burgers toggle logic
$(function () {
    var $navbarBurgers = $('.navbar-burger');
    if ($navbarBurgers.length > 0) {
        $.each($navbarBurgers, function (i, val) {
            $(val).on('click', function () {
                var target = $(val).attr('data-target');
                var navMenu = $('#' + target);
                $(val).toggleClass('is-active');
                $(navMenu).toggleClass('is-active');
            });
        });
    }
});