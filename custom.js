jQuery(function () {
    // デフォルトでは隠しておく
    $('.hidden').hide();
    // nav-open直下のdiv要素をクリックで表示、非表示
    $('.nav-open').click(function () {
        $(this).next('div').slideToggle();
    });
});