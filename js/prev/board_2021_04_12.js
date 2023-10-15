$(document).ready(function() {

    const playerFluid = new Plyr('#dash_video', {
        controls: [
        ],
        autoplay: false,
        loop: { active: true },
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerFluid.source = {
        type: 'video',
        title: 'Ink',
        sources: [
            {
                // src: 'https://psyfundvideo.s3.eu-west-3.amazonaws.com/mixed_reality.mp4',
                // type: 'video/mp4',
                // size: 1080,
                src: 'https://psyfund.com/video/dashboard_formatted.webm',
                type: 'video/webm',
                size: 1080,
            },
        ],
        // poster: '/img/dash/axr/xr_video_thumb_revert.png'
    };


    // $('.plyr.plyr--full-ui.plyr--video').css('box-shadow','rgba(32, 31, 33, 0.45) -7px 2px 1px 0px, rgba(58, 51, 55, 0.81) 3px 2px 3px -1px, rgba(7, 141, 183, 0.25) 2px 2px 2px 1px');

    setTimeout(function(){
        playerFluid.play();
    },2000);
});
