/**
 * up-overlays.js
 * 
 * Description: child thema script for nbaku.makenexus.com
 * Author: kuri-megane
 * Author URI: https://github.com/kuri-megane
 */

jQuery(function () {
        
    // TODO: 要リファクタ
    const open_1 = $("#js-open-1");
    const overlay_1 = $("#js-overlay-1");
    const modal_1 = $("#js-modal-1");
    const close_1 = $("#js-close-1");
    open_1.on('click', function () {
        modal_1.addClass("open");
        overlay_1.addClass("open");
    });
    close_1.on('click', function () {
        modal_1.removeClass("open");
        overlay_1.removeClass("open");
    });

    const open_2 = $("#js-open-2");
    const overlay_2 = $("#js-overlay-2");
    const modal_2 = $("#js-modal-2");
    const close_2 = $("#js-close-2");
    open_2.on('click', function () {
        modal_2.addClass("open");
        overlay_2.addClass("open");
    });
    close_2.on('click', function () {
        modal_2.removeClass("open");
        overlay_2.removeClass("open");
    });

    const open_3 = $("#js-open-3");
    const overlay_3 = $("#js-overlay-3");
    const modal_3 = $("#js-modal-3");
    const close_3 = $("#js-close-3");
    open_3.on('click', function () {
        modal_3.addClass("open");
        overlay_3.addClass("open");
    });
    close_3.on('click', function () {
        modal_3.removeClass("open");
        overlay_3.removeClass("open");
    });

    const open_4 = $("#js-open-4");
    const overlay_4 = $("#js-overlay-4");
    const modal_4 = $("#js-modal-4");
    const close_4 = $("#js-close-4");
    open_4.on('click', function () {
        modal_4.addClass("open");
        overlay_4.addClass("open");
    });
    close_4.on('click', function () {
        modal_4.removeClass("open");
        overlay_4.removeClass("open");
    });
});