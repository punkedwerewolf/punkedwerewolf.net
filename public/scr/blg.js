  
$('.previous').click(function () {
    var cur = $('.form-panel').index($('.form-panel.active'));
    if (cur!=0) {
        $('.form-panel').removeClass('active');
        $('.form-panel').eq(cur-1).addClass('active');
    }
});
$('.next').click(function () {
    var cur = $('.form-panel').index($('.form-panel.active'));
    if (cur!=$('.form-panel').length-1) {
        $('.form-panel').removeClass('active');
        $('.form-panel').eq(cur+1).addClass('active');
    }
});