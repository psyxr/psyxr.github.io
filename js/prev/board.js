$(document).ready(function() {

    const playerFluid = new Plyr('#dash_video', {
        controls: [
            // 'play',
            // 'restart',
            // 'progress',
            // 'current-time',
            // 'mute',
            // 'volume',
            // 'settings',
            // 'fullscreen'
            // 'download',
            // 'airplay'
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
                src: 'https://psyfund.com/video/dashboard.webm',
                type: 'video/webm',
                size: 1080,
            },
        ],
        // poster: '/img/dash/axr/xr_video_thumb_revert.png'
    };

    $('.plyr.plyr--full-ui.plyr--video').css('margin-left','-20px');
    // $('.plyr.plyr--full-ui.plyr--video').css('box-shadow','-7px 6px 8px 0px #201f21ba, -2px 5px 7px -1px #2a2f387a, 2px 5px 9px 1px #8f22b2');
    // $('.plyr.plyr--full-ui.plyr--video').css('box-shadow','rgba(32, 31, 33, 0.73) -7px 6px 8px 0px, rgba(58, 51, 55, 0.97) 3px 7px 7px -1px, rgb(143, 34, 178) 2px 5px 9px 1px');
    // $('.plyr.plyr--full-ui.plyr--video').css('box-shadow','rgba(32, 31, 33, 0.45) -7px 2px 1px 0px, rgba(58, 51, 55, 0.5) 3px 2px 3px -1px, rgba(7, 141, 183, 0.85) 2px 2px 2px 1px');
    // $('.plyr.plyr--full-ui.plyr--video').css('box-shadow','rgba(32, 31, 33, 0.45) -7px 2px 1px 0px, rgba(58, 51, 55, 0.81) 3px 2px 3px -1px, rgba(7, 141, 183, 0.85) 2px 2px 2px 1px');
    $('.plyr.plyr--full-ui.plyr--video').css('box-shadow','rgba(32, 31, 33, 0.45) -7px 2px 1px 0px, rgba(58, 51, 55, 0.81) 3px 2px 3px -1px, rgba(7, 141, 183, 0.25) 2px 2px 2px 1px');

    setTimeout(function(){
        playerFluid.play();
    },2000);
});
