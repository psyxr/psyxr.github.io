//TODO: uncomment ?
// if (appEnv !== 'local') {
//     console.log = function() {};
// }

$(document).ready(function() {
    /*preloader*/

    setTimeout(function() {
        $("#preloader").remove();
    }, 100);

    // $('#preloader').delay(100).queue(function () {
    //     $(this).remove();
    // });

    function loader() {
        $(window).on("load", function() {
            $("#ctn-preloader").addClass("loaded");
            // Una vez haya terminado el preloader aparezca el scroll

            if ($("#ctn-preloader").hasClass("loaded")) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $("#preloader")
                    .delay(100)
                    .queue(function() {
                        $(this).remove();
                    });
            }
        });
    }
    // loader();

    // const players = Array.from(document.querySelectorAll('.plyr_toggled')).map(player => new Plyr(player));
    // players.forEach(function (player, i) {
    //     //fix
    //     document.getElementsByClassName("plyr__video-wrapper")[i].addEventListener("click", event => {
    //         player.togglePlay();
    //     });
    // });

    // const lazy = lazyload();
    // lazy.loadImages();

    let lazyLoad = new LazyLoad({});

    lazyLoad.loadAll();

    initSwiperSlider();

    $("#ms_disadapt_btn_procr").click(function() {
        moveDisadaptBtnColor(this);

        $(".ms_disadapt_beliefs_cont").fadeOut(450);
        $("#ms_disadapt_beliefs_cont_procr").fadeIn(550);
    });

    $("#ms_disadapt_btn_psychosom").click(function() {
        moveDisadaptBtnColor(this);

        $(".ms_disadapt_beliefs_cont").fadeOut(450);
        $("#ms_disadapt_beliefs_cont_psychosom").fadeIn(550);
    });

    $("#ms_disadapt_btn_codepent").click(function() {
        moveDisadaptBtnColor(this);

        $(".ms_disadapt_beliefs_cont").fadeOut(450);
        $("#ms_disadapt_beliefs_cont_codepend").fadeIn(550);
    });

    $("#ms_disadapt_btn_depression").click(function() {
        moveDisadaptBtnColor(this);

        $(".ms_disadapt_beliefs_cont").fadeOut(450);
        $("#ms_disadapt_beliefs_cont_depression").fadeIn(550);
    });

    $("#ms_disadapt_btn_anxiety").click(function() {
        moveDisadaptBtnColor(this);

        $(".ms_disadapt_beliefs_cont").fadeOut(450);
        $("#ms_disadapt_beliefs_cont_anxiety").fadeIn(550);
    });

    var adaptScalesAnimationState = "not_activated";
    const adaptCircleBtn = $("#ms_as_circle_btn");

    adaptCircleBtn.hover(
        function() {
            //add state resolve if needed

            adaptCircleBtn.removeClass("adapt_c_btn_click_animation_reverse");
            adaptCircleBtn.removeClass("adapt_c_btn_hover_animation_reverse");

            adaptCircleBtn.addClass("adapt_c_btn_hover_animation");
            adaptCircleBtn.css("animation-play-state", "running");
        },
        function() {
            adaptCircleBtn.removeClass("adapt_c_btn_hover_animation");
            adaptCircleBtn.addClass("adapt_c_btn_hover_animation_reverse");
            adaptCircleBtn.css("animation-play-state", "running");
        }
    );

    adaptCircleBtn.click(function() {
        if (adaptScalesAnimationState === "not_activated") {
            $("#ms_as_h_neon").css("height", "22%");
            $("#ms_as_h_neon").removeClass("ms_as_1_neon_animation_reverse");
            $("#ms_as_h_neon").addClass("ms_as_1_neon_animation");
            $("#ms_as_h_neon").css("animation-play-state", "running");

            $("#ms_as_fr_neon").css("height", "41%");
            $("#ms_as_fr_neon").removeClass("ms_as_2_neon_animation_reverse");
            $("#ms_as_fr_neon").addClass("ms_as_2_neon_animation");
            $("#ms_as_fr_neon").css("animation-play-state", "running");

            $("#ms_as_env_neon").css("height", "31%");
            $("#ms_as_env_neon").removeClass("ms_as_3_neon_animation_reverse");
            $("#ms_as_env_neon").addClass("ms_as_3_neon_animation");
            $("#ms_as_env_neon").css("animation-play-state", "running");

            $("#ms_as_partn_neon").css("height", "25%");
            $("#ms_as_partn_neon").removeClass(
                "ms_as_4_neon_animation_reverse"
            );
            $("#ms_as_partn_neon").addClass("ms_as_4_neon_animation");
            $("#ms_as_partn_neon").css("animation-play-state", "running");

            adaptCircleBtn.removeClass("adapt_c_btn_click_animation_reverse");
            adaptCircleBtn.addClass("adapt_c_btn_click_animation");
            adaptCircleBtn.css("animation-play-state", "running");

            adaptScalesAnimationState = "activated";

            setTimeout(function() {
                $("#ms_as_h_neon").css("height", "45%");
                $("#ms_as_fr_neon").css("height", "55%");
                $("#ms_as_env_neon").css("height", "51%");
                $("#ms_as_partn_neon").css("height", "64%");
            }, 3000);
        } else {
            $("#ms_as_h_neon").addClass("ms_as_1_neon_animation_reverse");
            $("#ms_as_h_neon").removeClass("ms_as_1_neon_animation");
            $("#ms_as_h_neon").css("animation-play-state", "running");

            $("#ms_as_fr_neon").removeClass("ms_as_2_neon_animation");
            $("#ms_as_fr_neon").addClass("ms_as_2_neon_animation_reverse");
            $("#ms_as_fr_neon").css("animation-play-state", "running");

            $("#ms_as_env_neon").removeClass("ms_as_3_neon_animation");
            $("#ms_as_env_neon").addClass("ms_as_3_neon_animation_reverse");
            $("#ms_as_env_neon").css("animation-play-state", "running");

            $("#ms_as_partn_neon").removeClass("ms_as_4_neon_animation");
            $("#ms_as_partn_neon").addClass("ms_as_4_neon_animation_reverse");
            $("#ms_as_partn_neon").css("animation-play-state", "running");

            adaptCircleBtn.css("animation-play-state", "paused");
            adaptCircleBtn.removeClass("adapt_c_btn_click_animation");
            adaptCircleBtn.addClass("adapt_c_btn_click_animation_reverse");
            adaptCircleBtn.css("animation-play-state", "running");

            adaptScalesAnimationState = "not_activated";
        }
    });

    const processPlayBtn = $("#p_play_btn_cont");
    const playBtnFrame = $("#p_play_btn_frame");
    var processPlayState = "paused";

    //instead of just css rules because of click animation
    processPlayBtn.hover(
        function() {
            playBtnFrame.removeClass("p_play_btn_click_animation_reverse");
            playBtnFrame.removeClass("p_play_btn_hover_animation_reverse");
            playBtnFrame.addClass("p_play_btn_hover_animation");
            playBtnFrame.css("animation-play-state", "running");
        },
        function() {
            playBtnFrame.removeClass("p_play_btn_hover_animation");
            playBtnFrame.addClass("p_play_btn_hover_animation_reverse");
            playBtnFrame.css("animation-play-state", "running");
        }
    );

    processPlayBtn.click(function() {
        if (processPlayState === "paused") {
            processPlayState = "play";

            // $("#p_d_cubes_first_1").addClass("p_d_cube_1_animation");
            // $("#p_d_cubes_first_1").css('animation-play-state', 'running');
            //
            // $("#p_d_cubes_first_2").addClass("p_d_cube_2_animation");
            // $("#p_d_cubes_first_2").css('animation-play-state', 'running');
            //
            // $("#p_d_cubes_second_3").addClass("p_d_cube_3_animation");
            // $("#p_d_cubes_second_3").css('animation-play-state', 'running');
            //
            // $("#p_d_cubes_second_4").addClass("p_d_cube_4_animation");
            // $("#p_d_cubes_second_4").css('animation-play-state', 'running');
            //
            // $("#p_d_cubes_second_5").addClass("p_d_cube_5_animation");
            // $("#p_d_cubes_second_5").css('animation-play-state', 'running');

            $("#p_d_circle").addClass("p_d_circle_animation");
            $("#p_d_circle").css("animation-play-state", "running");

            $("#p_d_line_one").addClass("p_d_line_1_animation");
            $("#p_d_line_one").css("animation-play-state", "running");

            playBtnFrame.removeClass("p_play_btn_click_animation_reverse");
            playBtnFrame.addClass("p_play_btn_click_animation");
            playBtnFrame.css("animation-play-state", "running");
        } else {
            processPlayState = "paused";

            $("#p_d_circle").css("animation-play-state", "paused");
            $("#p_d_line_one").css("animation-play-state", "paused");

            // $("#p_d_cubes_first_1").css('animation-play-state', 'paused');
            // $("#p_d_cubes_first_2").css('animation-play-state', 'paused');
            // $("#p_d_cubes_second_3").css('animation-play-state', 'paused');
            // $("#p_d_cubes_second_4").css('animation-play-state', 'paused');
            // $("#p_d_cubes_second_5").css('animation-play-state', 'paused');

            playBtnFrame.css("animation-play-state", "paused");
            playBtnFrame.addClass("p_play_btn_click_animation_reverse");
            playBtnFrame.removeClass("p_play_btn_click_animation");
            playBtnFrame.css("animation-play-state", "running");
        }
    });

    const playBtnTransp = $("#ps_play_transp_cont");
    const playBtn = $("#ps_play_btn_cont");

    playBtnTransp.hover(
        function() {
            playBtn.addClass("ps_play_btn_hover_animation");
            playBtn.css("animation-play-state", "running");

            playBtn.removeClass("ps_play_btn_click_animation");
            playBtn.removeClass("ps_play_btn_hover_animation_reverse");
        },
        function() {
            playBtn.addClass("ps_play_btn_hover_animation_reverse");
            playBtn.css("animation-play-state", "running");

            playBtn.removeClass("ps_play_btn_hover_animation");
            playBtn.removeClass("ps_play_btn_click_animation");
        }
    );

    const psAudio = new Plyr("#ps_audio", {
        title: "Somewhere_over_the_rainbow",
        debug: false,
        controls: {},
        autoplay: false,
        loop: { active: false },
        speed: { selected: 1 },
        invertTime: false
    });

    psAudio.speed = 1;
    psAudio.muted = false;
    psAudio.volume = 100;

    psAudio.source = {
        type: "audio",
        title: "Somewhere_over_the_rainbow",
        sources: [
            {
                src: appUrl + "/audio/SomewhereOverTheRainbow_mix.mp3",
                type: "audio/mpeg"
            }
        ]
    };

    var audioPlayState = "paused";

    playBtnTransp.click(function() {
        playBtn.addClass("ps_play_btn_click_animation");
        playBtn.css("animation-play-state", "running");

        playBtn.removeClass("ps_play_btn_hover_animation");

        setTimeout(function() {
            // playBtn.removeClass("ps_play_btn_click_animation");
        }, 700);

        if (audioPlayState === "paused") {
            //plyr bug
            psAudio.speed = 1;
            psAudio.play();
            audioPlayState = "play";
        } else {
            psAudio.speed = 1;
            psAudio.pause();
            audioPlayState = "paused";
        }
    });

    const playerRelationships = new Plyr("#relationships_video", {
        controls: [],
        muted: true,
        autoplay: true,
        loop: { active: true },
        speed: { selected: 0.8 },
        hideControls: false,
        iconUrl: "/data/plyr.svg",
        blankVideo: "/data/blank.mp4"
    });

    playerRelationships.speed = 0.8;

    playerRelationships.source = {
        type: "video",
        title: "Relationships",
        sources: [
            {
                src: appUrl + "/video/relationships_na.mp4",
                type: "video/mp4",
                size: 1080
            }
        ]
        // poster: '/img/dash/axr/xr_video_thumb_revert.png'
    };

    setTimeout(function() {
        // playerRelationships.volume = 0;
        // playerRelationships.muted = true;
        playerRelationships.speed = 0.8;
        playerRelationships.play();
    }, 2000);

    rsGoalsBtn = $("#rs_goals_btn");
    rsValuesBtn = $("#rs_values_btn");
    rsLoveBtn = $("#rs_love_btn");

    rsPanelBtn = $(".rs_panel_btn");

    var rsPanelBtnState;
    const resolvePanelBtnAnimationId = function resolvePanelBtnAnimationId(el) {
        let animationId;

        btnId = $(el).attr("id");
        switch (btnId) {
            case "rs_goals_btn":
                animationId = 1;
                break;
            case "rs_values_btn":
                animationId = 2;
                break;
            case "rs_love_btn":
                animationId = 3;
                break;
        }

        return animationId;
    };

    var playerRelationshipsState = "paused";

    var screenTxt;

    rsPanelBtn.click(function() {
        if (playerRelationshipsState === "paused") {
            playerRelationships.speed = 0.8;
            playerRelationships.play();
            playerRelationshipsState = "play";
        }

        rsPanelBtnState = $(this).hasClass("rs_panel_btn_pressed");

        let pressedBtn, btnId, animationId, btnUnderscore;

        if (!rsPanelBtnState) {
            pressedBtn = $(this)
                .parent()
                .parent()
                .find(".rs_panel_btn_pressed");

            pressedBtnAnimationId = resolvePanelBtnAnimationId(pressedBtn);

            pressedBtn.removeClass("rs_panel_btn_pressed");
            pressedBtn.removeClass(
                "rs_panel_btn_press_animation_" + pressedBtnAnimationId
            );
            pressedBtn.addClass(
                "rs_panel_btn_press_animation_reverse_" + pressedBtnAnimationId
            );
            pressedBtn.css("animation-play-state", "running");

            pressedBtn
                .prev()
                .find(".rs_panel_btn_underscore")
                .fadeOut();

            $("#rs_screen_txt_" + pressedBtnAnimationId).fadeOut();

            animationId = resolvePanelBtnAnimationId(this);
            $(this).removeClass(
                "rs_panel_btn_press_animation_reverse_" + animationId
            );
            $(this).addClass("rs_panel_btn_press_animation_" + animationId);
            $(this).css("animation-play-state", "running");

            $(this).addClass("rs_panel_btn_pressed");

            $(this)
                .prev()
                .find(".rs_panel_btn_underscore")
                .fadeIn();

            $("#rs_screen_txt_" + animationId).fadeIn();
        } else {
            $(this).removeClass("rs_panel_btn_pressed");

            animationId = resolvePanelBtnAnimationId(this);
            $(this).removeClass("rs_panel_btn_press_animation_" + animationId);

            $(this).addClass(
                "rs_panel_btn_press_animation_reverse_" + animationId
            );
            $(this).css("animation-play-state", "running");

            $(this)
                .prev()
                .find(".rs_panel_btn_underscore")
                .fadeOut();

            $("#rs_screen_txt_" + animationId).fadeOut();
        }
    });

    const playerFireplace = new Plyr("#fireplace_video", {
        controls: [],
        muted: true,
        autoplay: true,
        loop: { active: true },
        speed: { selected: 0.55 },
        hideControls: false,
        iconUrl: "/data/plyr.svg",
        blankVideo: "/data/blank.mp4"
    });

    playerFireplace.speed = 0.55;
    playerFireplace.muted = true;

    playerFireplace.source = {
        type: "video",
        title: "Fireplace",
        sources: [
            {
                src: appUrl + "/video/fireplace720.webm",
                type: "video/mp4",
                size: 1080
            }
        ]
        // poster: '/img/dash/axr/xr_video_thumb_revert.png'
    };

    setTimeout(function() {
        playerFireplace.volume = 0;
        playerFireplace.muted = true;
        playerFireplace.speed = 0.55;
        playerFireplace.play();
    }, 2000);

    let date = new Date();
    let year = date.getUTCFullYear();
    $("#ms_c_year").html(year);

    const makeFirstZero = function(number) {
        let res = number;
        if (number < 10) {
            res = "0" + number;
        }
        return res;
    };

    $("#ms_c_month").html(makeFirstZero(date.getUTCMonth() + 1));

    let day = makeFirstZero(date.getUTCDate());
    $("#ms_c_day").html(day);

    const actionsAdverbsConnections = {
        1: [1, 2, 3, 4, 7, 8, 9],
        2: [1, 2, 3, 4, 9],
        3: [1, 2, 3, 4, 5, 6, 7, 9],
        4: [1, 2, 3, 4, 9],
        5: [1, 2, 3, 4, 5, 9],
        6: [1, 2, 3, 4, 7, 8, 9],
        7: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        8: [1, 2, 3, 4, 7, 9, 10],
        9: [1, 2, 3, 4, 9],
        10: [2, 3, 4, 5, 8],
        11: [1, 2, 3, 4, 6, 7, 8, 9],
        12: [1, 2, 3, 4, 7, 10],
        13: [1, 2, 3, 4, 5, 9],
        14: [1, 2, 3, 4, 7, 8, 9, 10],
        15: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        16: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        17: [1, 2, 3, 5, 7, 10],
        18: [1, 2, 3, 4, 9]
    };

    let actionBtn = $(".ms_concentr_action_btn");
    actionBtn.hover(
        function() {
            $(this).removeClass(
                "ms_action_another_btn_click_animation_reverse"
            );
            $(this).removeClass("ms_action_btn_click_animation_reverse");
            $(this).removeClass("ms_action_btn_hover_animation_reverse");
            $(this).addClass("ms_action_btn_hover_animation");
            $(this).css("animation-play-state", "running");
        },
        function() {
            $(this).removeClass("ms_action_btn_hover_animation");
            $(this).addClass("ms_action_btn_hover_animation_reverse");
            $(this).css("animation-play-state", "running");
        }
    );

    var currentBtnId;

    actionBtn.click(function() {
        let btnId = $(this)
            .attr("id")
            .replace("ms_c_btn_", "");
        btnAdverbs = actionsAdverbsConnections[btnId];

        if (currentBtnId === btnId) {
            // the same btn is clicked

            //adverbs
            $(".ms_adverb_btn_activated").addClass(
                "ms_adverb_btn_click_animation_reverse"
            );
            $(".ms_adverb_btn_activated").css(
                "animation-play-state",
                "running"
            );

            $(".ms_adverb_btn_activated").removeClass(
                "ms_adverb_btn_click_animation"
            );
            $(".ms_adverb_btn_activated").removeClass(
                "ms_adverb_btn_activated"
            );

            $(".ms_adverb_txt_activated").addClass(
                "ms_adverb_txt_animation_reverse"
            );
            $(".ms_adverb_txt_activated").css(
                "animation-play-state",
                "running"
            );

            $(".ms_adverb_txt_activated").removeClass(
                "ms_adverb_txt_animation"
            );
            $(".ms_adverb_txt_activated").removeClass(
                "ms_adverb_txt_activated"
            );

            //action btn

            $(this).addClass("ms_action_btn_click_animation_reverse");
            $(this).css("animation-play-state", "running");

            $(this).removeClass(
                "ms_action_another_btn_click_animation_reverse"
            );
            $(this).removeClass("ms_action_btn_click_animation");

            $(this).removeClass("ms_action_btn_activated");

            currentBtnId = 0;
        } else {
            // another one or first btn is clicked

            //adverbs
            $(".ms_adverb_btn_activated").addClass(
                "ms_adverb_btn_click_animation_reverse"
            );
            $(".ms_adverb_btn_activated").css(
                "animation-play-state",
                "running"
            );

            $(".ms_adverb_btn_activated").removeClass(
                "ms_adverb_btn_click_animation"
            );

            $(".ms_adverb_btn_activated").removeClass(
                "ms_adverb_btn_activated"
            );

            $(".ms_adverb_txt_activated").addClass(
                "ms_adverb_txt_animation_reverse"
            );
            $(".ms_adverb_txt_activated").css(
                "animation-play-state",
                "running"
            );

            $(".ms_adverb_txt_activated").removeClass(
                "ms_adverb_txt_animation"
            );
            $(".ms_adverb_txt_activated").removeClass(
                "ms_adverb_txt_activated"
            );

            btnAdverbs.forEach((item, i) => {
                $("#ms_c_adverb_btn_" + item).addClass(
                    "ms_adverb_btn_click_animation"
                );
                $("#ms_c_adverb_btn_" + item).css(
                    "animation-play-state",
                    "running"
                );

                $("#ms_c_adverb_btn_" + item).removeClass(
                    "ms_adverb_btn_click_animation_reverse"
                );

                $("#ms_c_adverb_btn_" + item).addClass(
                    "ms_adverb_btn_activated"
                );

                $("#ms_c_adverb_txt_" + item).addClass(
                    "ms_adverb_txt_animation"
                );
                $("#ms_c_adverb_txt_" + item).css(
                    "animation-play-state",
                    "running"
                );

                $("#ms_c_adverb_txt_" + item).removeClass(
                    "ms_adverb_txt_animation_reverse"
                );

                $("#ms_c_adverb_txt_" + item).addClass(
                    "ms_adverb_txt_activated"
                );
            });

            //action btn

            $(".ms_action_btn_activated").addClass(
                "ms_action_another_btn_click_animation_reverse"
            );
            $(".ms_action_btn_activated").css(
                "animation-play-state",
                "running"
            );

            $(".ms_action_btn_activated").removeClass(
                "ms_action_btn_click_animation"
            );
            $(".ms_action_btn_activated").removeClass(
                "ms_action_btn_click_animation_reverse"
            );

            $(".ms_action_btn_activated").removeClass(
                "ms_action_btn_activated"
            );

            $(this).removeClass(
                "ms_action_another_btn_click_animation_reverse"
            );
            $(this).removeClass("ms_action_btn_click_animation_reverse");

            $(this).addClass("ms_action_btn_click_animation");
            $(this).css("animation-play-state", "running");

            $(this).addClass("ms_action_btn_activated");

            currentBtnId = btnId;
        }
    });

    // ****

    const initSliderBtnCont = function(basicObj) {
        let btnObj = Object.create(basicObj);
        btnObj.element = $(".lm_btn_cont");
        btnObj.elName = "lm_btn_cont";

        btnObj.makeLinkedBoxShadowBtns = function() {
            const makeSliderBtn = function(basicObj) {
                let btnObj = Object.create(basicObj);
                btnObj.elName = "lm_btn";

                btnObj.resolveLinkedDomElement = function(basicDomEl) {
                    btnObj.element = basicDomEl.find(".lm_btn");
                    return btnObj.element;
                };
                btnObj.elHoverAnimDuration = "0.25s";
                btnObj.elHoverReverseAnimDuration = "0.25s";
                btnObj.elClickAnimDuration = "0.5s";
                btnObj.elClickReverseAnimDuration = "0.5s";
                btnObj.clickAnimationFunction = "ease-out";

                btnObj.elHoverKeyframes = ` 0% {
                    width: 28.48vw;
                    height: 4.42vw;
                    box-shadow:
                        -0.78vw 0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        0.78vw -0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        -0.78vw -0.78vw 1.56vw rgba(173, 173, 173, 0.9),
                        0.78vw 0.78vw 1.97vw rgba(141, 141, 141, 0.9),
                        inset 0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        inset -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5);
                }

                100% {
                    width: 27.7vw;
                    height: 3.85vw;
                    box-shadow:
                        -0.78vw 0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        0.78vw -0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        -0.78vw -0.78vw 1.56vw rgba(173, 173, 173, 0.8),
                        0.78vw 0.78vw 1.97vw rgba(141, 141, 141, 0.8),
                        inset 0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        inset -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        inset -0.41vw 0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset 0.41vw -0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset -0.41vw -0.41vw 0.83vw rgba(173, 173, 173, 0.9),
                        inset 0.41vw 0.41vw 1.04vw rgba(141, 141, 141, 0.9);
                }
                `;

                btnObj.elHoverKeyframesReverse = ` 0% {
                    width: 27.7vw;
                    height: 3.85vw;
                    box-shadow:
                        -0.78vw 0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        0.78vw -0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        -0.78vw -0.78vw 1.56vw rgba(173, 173, 173, 0.8),
                        0.78vw 0.78vw 1.97vw rgba(141, 141, 141, 0.8),
                        inset 0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        inset -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        inset -0.41vw 0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset 0.41vw -0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset -0.41vw -0.41vw 0.83vw rgba(173, 173, 173, 0.9),
                        inset 0.41vw 0.41vw 1.04vw rgba(141, 141, 141, 0.9);
                }

                100% {
                    width: 28.48vw;
                    height: 4.42vw;
                    box-shadow:
                        -0.78vw 0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        0.78vw -0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        -0.78vw -0.78vw 1.56vw rgba(173, 173, 173, 0.9),
                        0.78vw 0.78vw 1.97vw rgba(141, 141, 141, 0.9),
                        inset 0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        inset -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5);
                }

                `;

                btnObj.elClickKeyframes = ` 0% {
                    width: 27.7vw;
                    height: 3.85vw;
                    box-shadow:
                        -0.78vw 0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        0.78vw -0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        -0.78vw -0.78vw 1.56vw rgba(173, 173, 173, 0.8),
                        0.78vw 0.78vw 1.97vw rgba(141, 141, 141, 0.8),
                        inset 0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        inset -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        inset -0.41vw 0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset 0.41vw -0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset -0.41vw -0.41vw 0.83vw rgba(173, 173, 173, 0.9),
                        inset 0.41vw 0.41vw 1.04vw rgba(141, 141, 141, 0.9);
                }

                50% {
                    width: 27.55vw;
                    height: 3.64vw;
                    box-shadow:
                        -0.78vw 0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        0.78vw -0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        -0.78vw -0.78vw 1.56vw rgba(173, 173, 173, 0.8),
                        0.78vw 0.78vw 1.97vw rgba(141, 141, 141, 0.8),
                        inset 0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        inset -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        inset -0.52vw 0.52vw 1.04vw rgba(141, 141, 141, 0.2),
                        inset 0.52vw -0.52vw 1.04vw rgba(141, 141, 141, 0.2),
                        inset -0.52vw -0.52vw 1.04vw rgba(173, 173, 173, 0.9),
                        inset 0.52vw 0.52vw 1.3vw rgba(141, 141, 141, 0.9);
                }

                100% {
                    width: 27.7vw;
                    height: 3.85vw;
                    box-shadow:
                        -0.78vw 0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        0.78vw -0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        -0.78vw -0.78vw 1.56vw rgba(173, 173, 173, 0.8),
                        0.78vw 0.78vw 1.97vw rgba(141, 141, 141, 0.8),
                        inset 0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        inset -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        inset -0.41vw 0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset 0.41vw -0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset -0.41vw -0.41vw 0.83vw rgba(173, 173, 173, 0.9),
                        inset 0.41vw 0.41vw 1.04vw rgba(141, 141, 141, 0.9);
                }

                `;

                btnObj.elClickKeyframesReverse = ` 0% {
                    width: 27.7vw;
                    height: 3.85vw;
                    box-shadow:
                        -0.78vw 0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        0.78vw -0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        -0.78vw -0.78vw 1.56vw rgba(173, 173, 173, 0.8),
                        0.78vw 0.78vw 1.97vw rgba(141, 141, 141, 0.8),
                        inset 0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        inset -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        inset -0.41vw 0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset 0.41vw -0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset -0.41vw -0.41vw 0.83vw rgba(173, 173, 173, 0.9),
                        inset 0.41vw 0.41vw 1.04vw rgba(141, 141, 141, 0.9);
                }

                50% {
                    width: 27.55vw;
                    height: 3.64vw;
                    box-shadow:
                        -0.78vw 0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        0.78vw -0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        -0.78vw -0.78vw 1.56vw rgba(173, 173, 173, 0.8),
                        0.78vw 0.78vw 1.97vw rgba(141, 141, 141, 0.8),
                        inset 0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        inset -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        inset -0.52vw 0.52vw 1.04vw rgba(141, 141, 141, 0.2),
                        inset 0.52vw -0.52vw 1.04vw rgba(141, 141, 141, 0.2),
                        inset -0.52vw -0.52vw 1.04vw rgba(173, 173, 173, 0.9),
                        inset 0.52vw 0.52vw 1.3vw rgba(141, 141, 141, 0.9);
                }

                100% {
                    width: 27.7vw;
                    height: 3.85vw;
                    box-shadow:
                        -0.78vw 0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        0.78vw -0.78vw 1.56vw rgba(141, 141, 141, 0.2),
                        -0.78vw -0.78vw 1.56vw rgba(173, 173, 173, 0.8),
                        0.78vw 0.78vw 1.97vw rgba(141, 141, 141, 0.8),
                        inset 0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        inset -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        0.05vw 0.05vw 0.1vw rgba(173, 173, 173, 0.3),
                        -0.05vw -0.05vw 0.1vw rgba(141, 141, 141, 0.5),
                        inset -0.41vw 0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset 0.41vw -0.41vw 0.83vw rgba(141, 141, 141, 0.2),
                        inset -0.41vw -0.41vw 0.83vw rgba(173, 173, 173, 0.9),
                        inset 0.41vw 0.41vw 1.04vw rgba(141, 141, 141, 0.9);
                }

                `;
                return btnObj;
            };

            const sliderBtn = makeSliderBtn(makeCommonBoxShadowObj());

            const makeArrow = function(basicObj) {
                let btnObj = Object.create(basicObj);
                btnObj.elName = "lm_btn_arrow_img";

                btnObj.resolveLinkedDomElement = function(basicDomEl) {
                    btnObj.element = basicDomEl.find(".lm_btn_arrow");
                    return btnObj.element;
                };
                btnObj.elHoverAnimDuration = "0.1s";
                btnObj.elHoverReverseAnimDuration = "0.1s";
                btnObj.elClickAnimDuration = "0.3s";
                btnObj.elClickReverseAnimDuration = "0.3s";

                btnObj.elHoverKeyframes = ` 0% {
                    height: 2.96vw;
                    opacity: 1;
                }

                100% {
                    height: 2.91vw;
                    opacity: 0.95;
                }

                `;

                btnObj.elHoverKeyframesReverse = ` 0% {
                    height: 2.91vw;
                    opacity: 0.95;
                }

                100% {
                    height: 2.96vw;
                    opacity: 1;
                }

                `;

                btnObj.elClickKeyframes = ` 0% {
                    height: 2.91vw;
                    opacity: 0.95;
                }

                50% {
                    height: 2.89vw;
                    opacity: 0.85;
                }

                100% {
                    height: 2.91vw;
                    opacity: 0.95;
                }

                `;

                btnObj.elClickKeyframesReverse = ` 0% {
                    height: 2.91vw;
                    opacity: 0.95;
                }

                50% {
                    height: 2.89vw;
                    opacity: 0.85;
                }

                100% {
                    height: 2.91vw;
                    opacity: 0.95;
                }

                `;
                return btnObj;
            };

            const arrow = makeArrow(makeCommonBoxShadowObj());
            //init into DOM and register events for this elements
            boxShadowBtn(sliderBtn);
            boxShadowBtn(arrow);
            btnObj.linkedBoxShadowBtns = [sliderBtn, arrow];
        };

        btnObj.clickCallable = function(domElement) {
            let btnContId = domElement.attr("id");
            let sliderObj = makeCommonSliderObj();

            sliderObj.slidingElementsObjects = [
                {
                    selector: ".lm_screen_slide_group_active",
                    class: "lm_screen_slide_group_active",
                    elementSlidingEvent: function() {}
                },

                {
                    selector: ".lm_slide_title_cont_active",
                    class: "lm_slide_title_cont_active",
                    elementSlidingEvent: function() {}
                },

                {
                    selector: ".lm_slide_descr_active",
                    class: "lm_slide_descr_active",
                    elementSlidingEvent: function() {}
                },

                {
                    selector: ".road_field_sliding_active",
                    class: "road_field_sliding_active",
                    elementSlidingEvent: function() {}
                }
            ];
            sliderObj.slidingPointerClass = "lm_pointer";
            sliderObj.slidingPointerFieldClass = "lm_pointer_field_active";
            sliderObj.disappearingTime = 500;
            sliderObj.appearingTime = 500;

            if (btnContId === "lm_btn_cont_right") {
                sliderObj.direction = "next";
            } else {
                sliderObj.direction = "prev";
            }

            slider(sliderObj);
        };

        btnObj.hasClickAnimationItself = true;
        return btnObj;
    };
    makeAnimatedBtn(initSliderBtnCont(initAnimatedBtnObj()));

    const initSliderInnerBtn = function(basicObj) {
        let btnObj = Object.create(basicObj);
        btnObj.element = $(".lm_inner_slider_btn");
        btnObj.elName = "lm_inner_slider_btn";

        btnObj.clickAnimationFunction = "ease-out";

        btnObj.elHoverAnimDuration = "0.2s";
        btnObj.elHoverReverseAnimDuration = "0.2s";

        btnObj.elClickAnimDuration = "0.3s";
        btnObj.elClickReverseAnimDuration = "0.3s";

        btnObj.elHoverKeyframes = `
        0% {
            opacity: 0.5;
        }

        100% {
            opacity: 0.9;
        }

        `;

        btnObj.elHoverKeyframesReverse = `
        0% {
            opacity: 0.9;
        }

        100% {
            opacity: 0.5;
        }

        `;

        //push effect deeper down from hover level on 50%
        btnObj.elClickKeyframes = `
            0% {
                opacity: 0.9;
            }

            50% {
                width: 2.2vw;
                opacity: 0.9;
            }

            100% {
                opacity: 0.9;
            }
        `;

        btnObj.elClickKeyframesReverse = `
        0% {
            opacity: 0.9;
        }

        50% {
            width: 2.2vw;
            opacity: 0.9;
        }

        100% {
            opacity: 0.9;
        }
        `;

        btnObj.clickCallable = function(domElement) {
            var clickedBtnId = domElement.attr("id");

            const innerSlider = function() {
                let sliderObj = makeCommonSliderObj();
                sliderObj.slidingElementsObjects = [
                    {
                        selector:
                            ".lm_screen_slide_group_active > .lm_screen_inner_slide_active",
                        class: "lm_screen_inner_slide_active",
                        elementSlidingEvent: function() {}
                    }
                ];

                sliderObj.disappearingTime = 500;
                sliderObj.appearingTime = 500;

                console.log("clickedBtnId: ", clickedBtnId);

                if (clickedBtnId === "lm_inner_slider_arrow_right") {
                    sliderObj.direction = "next";
                } else {
                    sliderObj.direction = "prev";
                }

                slider(sliderObj);
            };

            innerSlider();
        };

        btnObj.hasClickAnimationItself = true;
        return btnObj;
    };
    makeAnimatedBtn(initSliderInnerBtn(initAnimatedBtnObj()));



    const makeTopSectionBtnObj = function(basicObj) {

        let topSectionBtnObj=Object.create(basicObj);
        topSectionBtnObj.element=$("#ts_left_imgs_btn");
        topSectionBtnObj.elName="ts_left_imgs_btn";

        topSectionBtnObj.elHoverKeyframes = `
        0% {
            box-shadow: 
                -7px 7px 14px rgba(13, 13, 13, 0.2), 
                7px -7px 14px rgba(13, 13, 13, 0.2), 
                -7px -7px 14px rgba(51, 51, 51, 0.9), 
                7px 7px 18px rgba(13, 13, 13, 0.9), 
                inset 1px 1px 2px rgba(51, 51, 51, 0.3), 
                inset -1px -1px 2px rgba(13, 13, 13, 0.5);
        }

        100% {
            box-shadow:                
            -4px 4px 8px rgba(13, 13, 13, 0.2), 
            4px -4px 8px rgba(13, 13, 13, 0.2), 
            -4px -4px 8px rgba(51, 51, 51, 0.9), 
            4px 4px 10px rgba(13, 13, 13, 0.9), 
            inset 1px 1px 2px rgba(51, 51, 51, 0.3), 
            inset -1px -1px 2px rgba(13, 13, 13, 0.5);
        }

        `;



        topSectionBtnObj.elHoverKeyframesReverse=`
        0% {
            box-shadow:
            -4px 4px 8px rgba(13, 13, 13, 0.2), 
            4px -4px 8px rgba(13, 13, 13, 0.2), 
            -4px -4px 8px rgba(51, 51, 51, 0.9), 
            4px 4px 10px rgba(13, 13, 13, 0.9), 
            inset 1px 1px 2px rgba(51, 51, 51, 0.3), 
            inset -1px -1px 2px rgba(13, 13, 13, 0.5);

        }

        100% {
            box-shadow:
            -7px 7px 14px rgba(13, 13, 13, 0.2), 
            7px -7px 14px rgba(13, 13, 13, 0.2), 
            -7px -7px 14px rgba(51, 51, 51, 0.9), 
            7px 7px 18px rgba(13, 13, 13, 0.9), 
            inset 1px 1px 2px rgba(51, 51, 51, 0.3), 
            inset -1px -1px 2px rgba(13, 13, 13, 0.5);
        }

        `;

        topSectionBtnObj.elClickKeyframes=`
        0% {
            box-shadow:
                -4px 4px 8px rgba(13, 13, 13, 0.2), 
                4px -4px 8px rgba(13, 13, 13, 0.2), 
                -4px -4px 8px rgba(51, 51, 51, 0.9), 
                4px 4px 10px rgba(13, 13, 13, 0.9), 
                inset 1px 1px 2px rgba(51, 51, 51, 0.3), 
                inset -1px -1px 2px rgba(13, 13, 13, 0.5);           
            
        }

        50% {
            box-shadow:
                -4px 4px 8px rgba(13, 13, 13, 0.2), 
                4px -4px 8px rgba(13, 13, 13, 0.2), 
                -4px -4px 8px rgba(51, 51, 51, 0.9), 
                4px 4px 10px rgba(13, 13, 13, 0.9), 
                inset 1px 1px 2px rgba(51, 51, 51, 0.3), 
                inset -1px -1px 2px rgba(13, 13, 13, 0.5),

                
                1px 1px 2px rgba(50, 50, 50, 0.3), 
                -1px -1px 2px rgba(14, 14, 14, 0.5), 
                inset -5px 5px 11px rgba(14, 14, 14, 0.2), 
                inset 5px -5px 11px rgba(14, 14, 14, 0.2), 
                inset -5px -5px 11px rgba(50, 50, 50, 0.9), 
                inset 5px 5px 15px rgba(14, 14, 14, 0.9);

        }

        100% {
            box-shadow:
                -4px 4px 8px rgba(13, 13, 13, 0.2), 
                4px -4px 8px rgba(13, 13, 13, 0.2), 
                -4px -4px 8px rgba(51, 51, 51, 0.9), 
                4px 4px 10px rgba(13, 13, 13, 0.9), 
                inset 1px 1px 2px rgba(51, 51, 51, 0.3), 
                inset -1px -1px 2px rgba(13, 13, 13, 0.5),

            
                1px 1px 2px rgba(50, 50, 50, 0.3), 
                -1px -1px 2px rgba(14, 14, 14, 0.5), 
                inset -3px 3px 11px rgba(14, 14, 14, 0.2), 
                inset 3px -3px 11px rgba(14, 14, 14, 0.2), 
                inset -3px -3px 11px rgba(50, 50, 50, 0.9), 
                inset 3px 3px 15px rgba(14, 14, 14, 0.9);
        }

        `;

        topSectionBtnObj.elClickKeyframesReverse=`
        0% {
            box-shadow:
                -4px 4px 8px rgba(13, 13, 13, 0.2), 
                4px -4px 8px rgba(13, 13, 13, 0.2), 
                -4px -4px 8px rgba(51, 51, 51, 0.9), 
                4px 4px 10px rgba(13, 13, 13, 0.9), 
                inset 1px 1px 2px rgba(51, 51, 51, 0.3), 
                inset -1px -1px 2px rgba(13, 13, 13, 0.5),

            
                1px 1px 2px rgba(50, 50, 50, 0.3), 
                -1px -1px 2px rgba(14, 14, 14, 0.5), 
                inset -7px 7px 14px rgba(14, 14, 14, 0.2), 
                inset 7px -7px 14px rgba(14, 14, 14, 0.2), 
                inset -7px -7px 14px rgba(50, 50, 50, 0.9), 
                inset 7px 7px 18px rgba(14, 14, 14, 0.9);
        }

        50% {
            box-shadow:
                -4px 4px 8px rgba(13, 13, 13, 0.2), 
                4px -4px 8px rgba(13, 13, 13, 0.2), 
                -4px -4px 8px rgba(51, 51, 51, 0.9), 
                4px 4px 10px rgba(13, 13, 13, 0.9), 
                inset 1px 1px 2px rgba(51, 51, 51, 0.3), 
                inset -1px -1px 2px rgba(13, 13, 13, 0.5),

                
                1px 1px 2px rgba(50, 50, 50, 0.3), 
                -1px -1px 2px rgba(14, 14, 14, 0.5), 
                inset -9px 9px 14px rgba(14, 14, 14, 0.2), 
                inset 9px -9px 14px rgba(14, 14, 14, 0.2), 
                inset -9px -9px 14px rgba(50, 50, 50, 0.9), 
                inset 9px 9px 18px rgba(14, 14, 14, 0.9);
        }

        100% {
            box-shadow:                          
            -7px 7px 14px rgba(13, 13, 13, 0.2), 
            7px -7px 14px rgba(13, 13, 13, 0.2), 
            -7px -7px 14px rgba(51, 51, 51, 0.9), 
            7px 7px 18px rgba(13, 13, 13, 0.9), 
            inset 1px 1px 2px rgba(51, 51, 51, 0.3), 
            inset -1px -1px 2px rgba(13, 13, 13, 0.5);
        }

        `;

        topSectionBtnObj.isClickPersist = true;

        topSectionBtnObj.isNewScreenActivated = false;

        topSectionBtnObj.clickCallable = function (domElement) {

            // if (!topSectionBtnObj.isNewScreenActivated) {
            //     $("#topSectionNewScreenCont").fadeIn();
            //     topSectionBtnObj.isNewScreenActivated = true;
            // } else {
            //     $("#topSectionNewScreenCont").fadeOut();
            //     topSectionBtnObj.isNewScreenActivated = false;
            // }              
        };

        return topSectionBtnObj;
    }


    const topSectionBtnObj = makeTopSectionBtnObj(makeCommonBoxShadowObj());
    boxShadowBtn(topSectionBtnObj); 

});


function initSwiperSlider() {
    const swiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        spaceBetween: 30,
        loop: true,
        lazy: false,

        navigation: {
            nextEl: "#ps_controls_right",
            prevEl: "#ps_controls_left"
        }
    });
}

function moveDisadaptBtnColor(el) {
    $(el)
        .parent()
        .parent()
        .find(".ms_disadapt_active")
        .removeClass("ms_disadapt_active");
    $(el).addClass("ms_disadapt_active");
}
