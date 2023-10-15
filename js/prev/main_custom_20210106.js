$(document).ready(function() {

    const playerWorkflow = new Plyr('#workflowvideotag', {
        controls: [
        ],
        autoplay: true,
        loop: { active: true },
        hideControls: false,
    });

    playerWorkflow.source = {
        type: 'video',
        title: 'Workflow',
        sources: [
            {
                // src: appUrl+'/video/ink.webm',
                // type: 'video/webm',
                // size: 1080,
                src: 'https://psyfundvideo.s3.eu-west-3.amazonaws.com/main_workflow_shortened.webm',
                // src: 'https://psyfundvideo.s3.eu-west-3.amazonaws.com/main_workflow_shortened.webm2',
                type: 'video/webm',
                size: 1080,
            },
        ],
        // poster: '/img/dash/axr/xr_video_thumb_revert.png'
    };

    setTimeout(function(){
        playerWorkflow.play();
    },2000);




    // const players = Array.from(document.querySelectorAll('.plyr_toggled')).map(player => new Plyr(player));
    // players.forEach(function (player, i) {
    //     //fix
    //     document.getElementsByClassName("plyr__video-wrapper")[i].addEventListener("click", event => {
    //         player.togglePlay();
    //     });
    // });

    // $("#top_card").hover(function(){
    //
    //
    //
    // });

    function handleWindowSize() {
        const width = window.innerWidth;
        if (width < 1200) {
            $("#fluid_container").addClass('row');
        } else {
            $("#fluid_container").removeClass('row');
        }
        console.log(width);
    }

    handleWindowSize();
    window.onresize = handleWindowSize;

});



