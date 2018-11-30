$(document).ready(function () {

    initVideo();


})

function initVideo() {
    var wrap = $(".videoWrap");
    



    // var video =$('#video')[0];

    // video.onended = function() {
    //     $('.videoWrap').addClass('hide');
    // };

    $('.btn').on('click', function () {
        var vv = $('<video id="my-player" class="video-js" controls preload="auto"  width="100%" height="100%" data-setup="{}"></video>')
        $('.videoWrap').append(vv);
        wrap.removeClass('hide');
        var player = videojs('my-player');
        player.on('ended', function () {
            this.dispose();
            wrap.addClass('hide')
        });
        var id = $(this).attr('data-vid');
        player.src('./video/' + id + '_1.mp4');
        player.ready(function () {
            player.requestFullscreen();
            player.play();
        });
    });
}