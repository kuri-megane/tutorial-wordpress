/**
 * up-overlays.js
 * 
 * Description: child thema script for nbaku.makenexus.com
 * Author: kuri-megane
 * Author URI: https://github.com/kuri-megane
 */

jQuery(function () {
    $('.hidden').hide();
    $('.nav-open').click(function () {
        $(this).next('div').slideToggle();
    });

    const modal = $("#js-modal-1");
    const overlay = $("#js-overlay-1");
    const close = $("#js-close-1");
    const open = $("#js-open-1");

    open.on('click', function () {
        modal.addClass("open");
        overlay.addClass("open");
    });

    close.on('click', function () {
        modal.removeClass("open");
        overlay.removeClass("open");
    });
});