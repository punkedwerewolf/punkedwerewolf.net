$('.prv').click(function () {
    var cur = $('.pan').index($('.pan.tiv'));
    if (cur!=0) {
        $('.pan').removeClass('tiv');
        $('.pan').eq(cur-1).addClass('tiv');
    }
});
$('.nxt').click(function () {
    var cur = $('.pan').index($('.pan.tiv'));
    if (cur!=$('.pan').length-1) {
        $('.pan').removeClass('tiv');
        $('.pan').eq(cur+1).addClass('tiv');
    }
});