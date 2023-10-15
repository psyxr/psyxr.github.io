if (appEnv !== 'local') {
    console.log = function() {};
}

$(document).ready(function() {

    const playerWorkflow = new Plyr('#workflowvideotag', {
        controls: [
        ],
        autoplay: false,
        loop: { active: true },
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerWorkflow.source = {
        type: 'video',
        title: 'Workflow',
        sources: [
            {
                // src: appUrl+'/video/main_workflow360.mp4',
                // type: 'video/mp4',
                // size: 1080,
                src: 'https://psyfund.com/video/main_workflow_shortened.webm',
                type: 'video/webm',
                size: 1080,
            },
        ],
        // poster: '/img/dash/axr/xr_video_thumb_revert.png'
    };

    setTimeout(function(){
        playerWorkflow.stop();
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
        console.log(width + 'after resize');
    }

    handleWindowSize();
    window.onresize = handleWindowSize;

    const playerRelationships = new Plyr('#relationships_video', {
        controls: [
        ],
        muted: true,
        autoplay: true,
        loop: { active: true },
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerRelationships.source = {
        type: 'video',
        title: 'Relationships',
        sources: [
            {
                src: appUrl+'/video/relationships_na.mp4',
                // src: 'https://storage.googleapis.com/psyfund/video/circle_relationships_2x_n3.mp4',
                type: 'video/mp4',
                size: 1080,
            },
        ],
        // poster: '/img/dash/axr/xr_video_thumb_revert.png'
    };

    setTimeout(function(){
        // playerRelationships.volume = 0;
        // playerRelationships.muted = true;
        playerRelationships.play();
    },2000);

});
