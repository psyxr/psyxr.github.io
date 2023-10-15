$(document).ready(function() {

    const playerAbout = new Plyr('#about_video', {
        controls: [
        ],
        autoplay: false,
        loop: { active: true },
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerAbout.source = {
        type: 'video',
        title: 'About',
        sources: [
            {
                src: appUrl+'/video/about.mp4',
                type: 'video/mp4',
                size: 1080,
            },
        ],
        poster: '/img/dash/1920_1080black.png'
    };

    setTimeout(function(){
        playerAbout.play();
    },3000);

    playerAbout.on('ready', function(){
        playerAbout.play();
    });

    const playerRooms = new Plyr('#rooms_video', {
        controls: [
        ],
        volume: 0,
        muted: true,
        autoplay: false,
        loop: { active: true },
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerRooms.source = {
        type: 'video',
        title: 'Rooms',
        sources: [
            {
                src: appUrl+'/video/rooms_na.mp4',
                type: 'video/mp4',
                size: 1080,
            },
        ],
        poster: '/img/dash/1920_1080black.png'
    };

    setTimeout(function(){
        playerRooms.volume = 0;
        playerRooms.muted = 0;
        playerRooms.play();
    },2000);

    const playerSafety = new Plyr('#safety_video', {
        controls: [
        ],
        muted: true,
        autoplay: false,
        loop: { active: true },
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerSafety.source = {
        type: 'video',
        title: 'Safety',
        sources: [
            {
                src: appUrl+'/video/safety.mp4',
                type: 'video/mp4',
                size: 1080,
            },
        ],
        poster: '/img/dash/1920_1080black.png'
    };

    setTimeout(function(){
        playerSafety.play();
    },2000);

    const playerLine = new Plyr('#line_video', {
        controls: [
        ],
        volume: 0,
        muted: true,
        autoplay: false,
        loop: { active: true },
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerLine.source = {
        type: 'video',
        title: 'Line',
        sources: [
            {
                src: appUrl+'/video/line_na.mp4',
                type: 'video/mp4',
                size: 1080,
            },
        ],
        poster: '/img/dash/1920_1080black.png'
    };

    setTimeout(function(){
        playerLine.volume = 0;
        playerLine.muted = true;
        playerLine.play();
    },2000);


    const playerLineTw = new Plyr('#line_video_tw', {
        controls: [
        ],
        volume: 0,
        muted: true,
        autoplay: false,
        loop: { active: true },
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerLineTw.source = {
        type: 'video',
        title: 'Line',
        sources: [
            {
                src: appUrl+'/video/line_na.mp4',
                type: 'video/mp4',
                size: 1080,
            },
        ],
        poster: '/img/dash/1920_1080black.png'
    };

    setTimeout(function(){
        playerLineTw.volume = 0;
        playerLineTw.muted = true;
        playerLineTw.play();
    },2000);


    const playerBeliefs = new Plyr('#beliefs_video', {
        controls: [
        ],
        muted: true,
        autoplay: false,
        loop: { active: true },
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerBeliefs.source = {
        type: 'video',
        title: 'Beliefs',
        sources: [
            {
                src: appUrl+'/video/beliefs.mp4',
                type: 'video/mp4',
                size: 1080,
            },
        ],
        poster: '/img/dash/1920_1080black.png'
    };

    setTimeout(function(){
        playerBeliefs.play();
    },2000);

});
