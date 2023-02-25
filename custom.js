jQuery(function () {
	// アコーディオンメニュー
    $('.hidden').hide();
    $('.nav-open').click(function () {
        $(this).next('div').slideToggle();
    });

	// モーダルウィンドウ
    const modal = $("#js-modal");
    const overlay = $("#js-overlay");
    const close = $("#js-close");
    const open = $("#js-open");

    open.on('click', function () {
        modal.addClass("open");
        overlay.addClass("open");
    });

    close.on('click', function () {
        modal.removeClass("open");
        overlay.removeClass("open");
    });
});