$(document).ready(function() {

    // const playerAbout = new Plyr('#about_video', {
    //     controls: [
    //     ],
    //     autoplay: false,
    //     loop: { active: true },
    //     hideControls: false,
    //     iconUrl: '/data/plyr.svg',
    //     blankVideo: '/data/blank.mp4'
    // });
    //
    // playerAbout.source = {
    //     type: 'video',
    //     title: 'About',
    //     sources: [
    //         {
    //             src: appUrl+'/video/about.mp4',
    //             type: 'video/mp4',
    //             size: 1080,
    //         },
    //     ],
    //     poster: '/img/dash/1920_1080black.png'
    // };
    //
    // setTimeout(function(){
    //     playerAbout.volume = 0;
    //     playerAbout.muted = 0;
    //     playerAbout.play();
    // },2000);

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


    initAboutAudioPlayer();
    initAboutAudioPlayer2();

    initSwiperSlider();

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
        playerSafety.volume = 0;
        playerSafety.muted = true;
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
        playerBeliefs.volume = 0;
        playerBeliefs.muted = true;
        playerBeliefs.play();
    },2000);

});

function initSwiperSlider() {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 30,
        loop: true,
        lazy: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

function initAboutAudioPlayer() {

    let about_aplayer = document.getElementById('about_audio_player');

    if (about_aplayer) {
        const cs_controls = `
<div class="plyr__controls">
    <button type="button" class="plyr__control" data-plyr="play" aria-label="Over the Rainbow">
        <svg class="icon--pressed" role="presentation" focusable="false">
            <use xlink:href="#plyr-pause"></use>
        </svg>
        <svg class="icon--not-pressed" role="presentation" focusable="false">
            <use xlink:href="#plyr-play"></use>
        </svg>
        <span class="label--pressed plyr__sr-only">Pause</span>
        <span class="label--not-pressed plyr__sr-only">Play</span>
    </button>

    <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
    <div class="plyr__volume"><button type="button" class="plyr__control" data-plyr="mute">
        <svg class="icon--pressed" role="presentation" focusable="false">
        <use xlink:href="#plyr-muted"></use>
        </svg>
        <svg class="icon--not-pressed" role="presentation" focusable="false">
        <use xlink:href="#plyr-volume"></use>
        </svg>
        <span class="label--pressed plyr__sr-only">Unmute</span>
        <span class="label--not-pressed plyr__sr-only">Mute</span>
        </button>
        <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1"
            autocomplete="off" role="slider" aria-label="Volume" aria-valuemin="0"
            aria-valuemax="100" aria-valuenow="100" id="plyr-volume-3345"
            aria-valuetext="100.0%" style="--value:100%;">
    </div>
    <button type="button" class="plyr__control " data-plyr="restart">
        <svg role="presentation" focusable="false">
            <use xlink:href="#plyr-restart"></use>
        </svg>
        <span class="plyr__sr-only">Restart</span>
    </button>
    <a href="https://psyfund.com/audio/Zivert_Rocky.mp3"
        target="_blank" class="plyr__control" data-plyr="download" download="Zivert_Rocky.mp3">
        <svg role="presentation" focusable="false">
        <use xlink:href="#plyr-download"></use></svg>
        <span class="plyr__sr-only">Download</span>
    </a>
</div>
`;

        const about_aplayer = new Plyr('#about_audio_player', {
            title: 'Rocky',
            debug: false,
            controls: cs_controls,
            invertTime: false,
        });

        about_aplayer.source = {
            type: 'audio',
            title: 'Rocky',
            sources: [
                {
                    src: "https://psyfund.com/audio/Zivert_Rocky.mp3",
                    type: 'audio/mpeg',
                }
            ],
        };

        setTimeout(function(){
            about_aplayer.volume = 100;
            about_aplayer.muted = false;
        },2000);
    }
    return null;
}


function initAboutAudioPlayer2() {

    let about_aplayer = document.getElementById('about_audio_player2');

    if (about_aplayer) {
        const cs_controls = `
<div class="plyr__controls">
    <button type="button" class="plyr__control" data-plyr="play" aria-label="Over the Rainbow">
        <svg class="icon--pressed" role="presentation" focusable="false">
            <use xlink:href="#plyr-pause"></use>
        </svg>
        <svg class="icon--not-pressed" role="presentation" focusable="false">
            <use xlink:href="#plyr-play"></use>
        </svg>
        <span class="label--pressed plyr__sr-only">Pause</span>
        <span class="label--not-pressed plyr__sr-only">Play</span>
    </button>

    <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
    <div class="plyr__volume"><button type="button" class="plyr__control" data-plyr="mute">
        <svg class="icon--pressed" role="presentation" focusable="false">
        <use xlink:href="#plyr-muted"></use>
        </svg>
        <svg class="icon--not-pressed" role="presentation" focusable="false">
        <use xlink:href="#plyr-volume"></use>
        </svg>
        <span class="label--pressed plyr__sr-only">Unmute</span>
        <span class="label--not-pressed plyr__sr-only">Mute</span>
        </button>
        <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1"
            autocomplete="off" role="slider" aria-label="Volume" aria-valuemin="0"
            aria-valuemax="100" aria-valuenow="100" id="plyr-volume-3345"
            aria-valuetext="100.0%" style="--value:100%;">
    </div>
    <button type="button" class="plyr__control " data-plyr="restart">
        <svg role="presentation" focusable="false">
            <use xlink:href="#plyr-restart"></use>
        </svg>
        <span class="plyr__sr-only">Restart</span>
    </button>
    <a href="https://psyfund.com/audio/Mary_Gu_17.mp3"
        target="_blank" class="plyr__control" data-plyr="download" download="Mary_Gu_17.mp3">
        <svg role="presentation" focusable="false">
        <use xlink:href="#plyr-download"></use></svg>
        <span class="plyr__sr-only">Download</span>
    </a>
</div>
`;

        const about_aplayer = new Plyr('#about_audio_player2', {
            title: '17',
            debug: false,
            controls: cs_controls,
            invertTime: false,
        });

        about_aplayer.source = {
            type: 'audio',
            title: 'Rocky',
            sources: [
                {
                    src: "https://psyfund.com/audio/Mary_Gu_17.mp3",
                    type: 'audio/mpeg',
                }
            ],
        };

        setTimeout(function(){
            about_aplayer.volume = 100;
            about_aplayer.muted = false;
        },2000);
    }
    return null;
}
