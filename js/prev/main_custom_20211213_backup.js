// if (appEnv !== 'local') {
//     console.log = function() {};
// }

$(document).ready(function() {


    /*preloader*/
    function loader(){
        $(window).on('load', function() {
            $('#ctn-preloader').addClass('loaded');
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        });
    }
    loader();

    // const players = Array.from(document.querySelectorAll('.plyr_toggled')).map(player => new Plyr(player));
    // players.forEach(function (player, i) {
    //     //fix
    //     document.getElementsByClassName("plyr__video-wrapper")[i].addEventListener("click", event => {
    //         player.togglePlay();
    //     });
    // });

    // lazyload();

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


    var adaptScalesAnimationState = 'not_activated';
    const adaptCircleBtn = $("#ms_as_circle_btn");

    adaptCircleBtn.hover(function() {

        //add state resolve if needed

        adaptCircleBtn.removeClass("adapt_c_btn_click_animation_reverse");
        adaptCircleBtn.removeClass("adapt_c_btn_hover_animation_reverse");

        adaptCircleBtn.addClass("adapt_c_btn_hover_animation");
        adaptCircleBtn.css('animation-play-state', 'running');

    }, function() {

            adaptCircleBtn.removeClass("adapt_c_btn_hover_animation");
            adaptCircleBtn.addClass("adapt_c_btn_hover_animation_reverse");
            adaptCircleBtn.css('animation-play-state', 'running');

    });

    adaptCircleBtn.click(function() {

        if (adaptScalesAnimationState === 'not_activated') {

            $("#ms_as_h_neon").css('height', '22%');
            $("#ms_as_h_neon").removeClass("ms_as_1_neon_animation_reverse");
            $("#ms_as_h_neon").addClass("ms_as_1_neon_animation");
            $("#ms_as_h_neon").css('animation-play-state', 'running');

            $("#ms_as_fr_neon").css('height', '41%');
            $("#ms_as_fr_neon").removeClass("ms_as_2_neon_animation_reverse");
            $("#ms_as_fr_neon").addClass("ms_as_2_neon_animation");
            $("#ms_as_fr_neon").css('animation-play-state', 'running');

            $("#ms_as_env_neon").css('height', '31%');
            $("#ms_as_env_neon").removeClass("ms_as_3_neon_animation_reverse");
            $("#ms_as_env_neon").addClass("ms_as_3_neon_animation");
            $("#ms_as_env_neon").css('animation-play-state', 'running');

            $("#ms_as_partn_neon").css('height', '25%');
            $("#ms_as_partn_neon").removeClass("ms_as_4_neon_animation_reverse");
            $("#ms_as_partn_neon").addClass("ms_as_4_neon_animation");
            $("#ms_as_partn_neon").css('animation-play-state', 'running');

            adaptCircleBtn.removeClass("adapt_c_btn_click_animation_reverse");
            adaptCircleBtn.addClass("adapt_c_btn_click_animation");
            adaptCircleBtn.css('animation-play-state', 'running');

            adaptScalesAnimationState = 'activated';

            setTimeout(function(){
                $("#ms_as_h_neon").css('height', '45%');
                $("#ms_as_fr_neon").css('height', '55%');
                $("#ms_as_env_neon").css('height', '51%');
                $("#ms_as_partn_neon").css('height', '64%');
            },3000);

        } else {


            $("#ms_as_h_neon").addClass("ms_as_1_neon_animation_reverse");
            $("#ms_as_h_neon").removeClass("ms_as_1_neon_animation");
            $("#ms_as_h_neon").css('animation-play-state', 'running');

            $("#ms_as_fr_neon").removeClass("ms_as_2_neon_animation");
            $("#ms_as_fr_neon").addClass("ms_as_2_neon_animation_reverse");
            $("#ms_as_fr_neon").css('animation-play-state', 'running');

            $("#ms_as_env_neon").removeClass("ms_as_3_neon_animation");
            $("#ms_as_env_neon").addClass("ms_as_3_neon_animation_reverse");
            $("#ms_as_env_neon").css('animation-play-state', 'running');

            $("#ms_as_partn_neon").removeClass("ms_as_4_neon_animation");
            $("#ms_as_partn_neon").addClass("ms_as_4_neon_animation_reverse");
            $("#ms_as_partn_neon").css('animation-play-state', 'running');

            adaptCircleBtn.css('animation-play-state', 'paused');
            adaptCircleBtn.removeClass("adapt_c_btn_click_animation");
            adaptCircleBtn.addClass("adapt_c_btn_click_animation_reverse");
            adaptCircleBtn.css('animation-play-state', 'running');

            adaptScalesAnimationState = 'not_activated';
        }


    });


    const processPlayBtn = $("#p_play_btn_cont");
    const playBtnFrame = $("#p_play_btn_frame");
    var processPlayState = 'paused';

    //instead of just css rules because of click animation
    processPlayBtn.hover (function() {
        playBtnFrame.removeClass("p_play_btn_click_animation_reverse");
        playBtnFrame.removeClass("p_play_btn_hover_animation_reverse");
        playBtnFrame.addClass("p_play_btn_hover_animation");
        playBtnFrame.css('animation-play-state', 'running');
    }, function() {
        playBtnFrame.removeClass("p_play_btn_hover_animation");
        playBtnFrame.addClass("p_play_btn_hover_animation_reverse");
        playBtnFrame.css('animation-play-state', 'running');
    });

    processPlayBtn.click(function(){

        if (processPlayState === 'paused') {
            processPlayState = 'play';

            $("#p_d_circle").addClass("p_d_circle_animation");
            $("#p_d_circle").css('animation-play-state', 'running');

            $("#p_d_line_one").addClass("p_d_line_1_animation");
            $("#p_d_line_one").css('animation-play-state', 'running');

            playBtnFrame.removeClass("p_play_btn_click_animation_reverse");
            playBtnFrame.addClass("p_play_btn_click_animation");
            playBtnFrame.css('animation-play-state', 'running');

        } else {

            processPlayState = 'paused';

            $("#p_d_circle").css('animation-play-state', 'paused');
            $("#p_d_line_one").css('animation-play-state', 'paused');

            playBtnFrame.css('animation-play-state', 'paused');
            playBtnFrame.addClass("p_play_btn_click_animation_reverse");
            playBtnFrame.removeClass("p_play_btn_click_animation");
            playBtnFrame.css('animation-play-state', 'running');

        }
    });


    const playerRelationships = new Plyr('#relationships_video', {
        controls: [
        ],
        muted: true,
        autoplay: true,
        loop: { active: true },
        speed: { selected: 0.1},
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerRelationships.speed = 0.1;

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


    rsGoalsBtn = $("#rs_goals_btn");
    rsValuesBtn = $("#rs_values_btn");
    rsLoveBtn = $("#rs_love_btn");

    rsPanelBtn = $(".rs_panel_btn");

    var rsPanelBtnState;
    const resolvePanelBtnAnimationId = function resolvePanelBtnAnimationId(el) {
        let animationId;

        btnId = $(el).attr('id');
        switch (btnId) {
            case 'rs_goals_btn':
                animationId = 1;
                break;
            case 'rs_values_btn':
                animationId = 2;
                break;
            case 'rs_love_btn':
                animationId = 3;
                break;
        }

        return animationId;
    }

    var playerRelationshipsState = 'paused';

    var screenTxt;

    rsPanelBtn.click(function(){

        if (playerRelationshipsState === 'paused') {
            playerRelationships.play();
            playerRelationshipsState = 'play';
        }

        rsPanelBtnState = $(this).hasClass('rs_panel_btn_pressed');

        let pressedBtn, btnId, animationId, btnUnderscore;

        if (!rsPanelBtnState) {

            pressedBtn = $(this).parent().parent().find('.rs_panel_btn_pressed');

            pressedBtnAnimationId = resolvePanelBtnAnimationId(pressedBtn);

            pressedBtn.removeClass('rs_panel_btn_pressed');
            pressedBtn.removeClass('rs_panel_btn_press_animation_'+pressedBtnAnimationId);
            pressedBtn.addClass('rs_panel_btn_press_animation_reverse_'+pressedBtnAnimationId);
            pressedBtn.css('animation-play-state', 'running');

            pressedBtn.prev().find('.rs_panel_btn_underscore').fadeOut();

            $("#rs_screen_txt_"+pressedBtnAnimationId).fadeOut();

            animationId = resolvePanelBtnAnimationId(this);
            $(this).removeClass('rs_panel_btn_press_animation_reverse_'+animationId);
            $(this).addClass('rs_panel_btn_press_animation_'+animationId);
            $(this).css('animation-play-state', 'running');

            $(this).addClass('rs_panel_btn_pressed');

            $(this).prev().find('.rs_panel_btn_underscore').fadeIn();

            $("#rs_screen_txt_"+animationId).fadeIn();

        } else {

            $(this).removeClass('rs_panel_btn_pressed');

            animationId = resolvePanelBtnAnimationId(this);
            $(this).removeClass('rs_panel_btn_press_animation_'+animationId);

            $(this).addClass('rs_panel_btn_press_animation_reverse_'+animationId);
            $(this).css('animation-play-state', 'running');

            $(this).prev().find('.rs_panel_btn_underscore').fadeOut();

            $("#rs_screen_txt_"+animationId).fadeOut();

        }
    });


    const playerFireplace = new Plyr('#fireplace_video', {
        controls: [
        ],
        muted: true,
        autoplay: true,
        loop: { active: true },
        speed: { selected: 0.55},
        hideControls: false,
        iconUrl: '/data/plyr.svg',
        blankVideo: '/data/blank.mp4'
    });

    playerFireplace.speed = 0.55;
    playerFireplace.muted = true;

    playerFireplace.source = {
        type: 'video',
        title: 'Fireplace',
        sources: [
            {
                // src: 'https://psyfund.com/video/fireplace720.webm',
                // src: appUrl+'/video/relationships_na.mp4',
                src: appUrl+'/video/fireplace720.webm',
                // src: 'https://storage.googleapis.com/psyfund/video/circle_relationships_2x_n3.mp4',
                type: 'video/mp4',
                size: 1080,
            },
        ],
        // poster: '/img/dash/axr/xr_video_thumb_revert.png'
    };

    setTimeout(function(){
        playerFireplace.volume = 0;
        playerFireplace.muted = true;
        // playerFireplace.play();
    },2000);


    let date = new Date();
    let year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1; //months from 1-12

    $("#ms_c_year").html(year);
    $("#ms_c_month").html(month);

    let day = date.getUTCDate();
    if (day < 10) {
        day = "0" + day;
    }

    $("#ms_c_day").html(day);




    /*
        ховер на кнопку

        переход в нажатие на кнопку с углублением

        активируется вылет для наречий

        повторное нажатие закрывает наречия..

        нажатие на другую кнопку закрывает наречия и открывает другие


        либо делать это по ховеру.. ховерин и ховераут



        есть связка глагол и наречие..

    */

    // const adverbs = {
    //     1: "Как",
    //     2: "Когда",
    //     3: "Где",
    //     4: "Чтобы",
    //     5: "Куда",
    //     6: "Сколько",
    //     7: "Что",
    //     8: "Кому",
    //     9: "С кем",
    //     10: "Кого",
    // };
    //
    // const actions = {
    //     1: "Сделать",
    //     2: "Отдохнуть",
    //     3: "Посмотреть",
    //     4: "Встретиться",
    //     5: "Съездить",
    //     6: "Предложить",
    //     7: "Написать",
    //     8: "Обнять",
    //     9: "Побыть",
    //     10: "Позвонить",
    //     11: "Сказать",
    //     12: "Попросить",
    //     13: "Сходить",
    //     14: "Купить",
    //     15: "Отдать",
    //     16: "Отвезти",
    //     17: "Поцеловать",
    //     18: "Поиграть",
    // };

    const actionsAdverbsConnections = {
        1: [1,2,3,4,7,8,9],
        2: [1,2,3,4,9],
        3: [1,2,3,4,5,6,7,9],
        4: [1,2,3,4,9],
        5: [1,2,4,5,8,9],
        6: [1,2,3,4,7,8,9],
        7: [1,2,3,4,5,6,7,8,9],
        8: [1,2,3,4,7,9,10],
        9: [1,2,3,4,9],
        10: [2,3,4,5,8],
        11: [1,2,3,4,6,7,8,9],
        12: [1,2,3,4,7,10],
        13: [1,2,3,4,5,9],
        14: [1,2,3,4,7,8,9,10],
        15: [1,2,3,4,5,6,7,8,9,10],
        16: [1,2,3,4,5,6,7,8,9,10],
        17: [1,2,3,5,7,10],
        18: [1,2,3,4,9]
    };


    // добавить анимацию кнопки,
    // добавить резолв стейта
    // выключение, если та же кнопка (вкл/выкл, если одна и та же)
    // фикс box-shadow/background/color наречий

    var actionBtnClickState = 'not_clicked';

    $(".ms_concentr_action_btn").click(function(){

        let btnId = $(this).attr('id').replace("ms_c_btn_","");
        btnAdverbs = actionsAdverbsConnections[btnId];

        if (actionBtnClickState === 'not_clicked') {

            console.log('not_clicked');

            // $(".ms_concentr_adverb_btn").addClass("ms_adverb_btn_click_animation_reverse");
            // $(".ms_concentr_adverb_btn").css('animation-play-state', 'running');
            //
            // $(".ms_concentr_adverb_btn").removeClass("ms_adverb_btn_click_animation");
            //
            //
            // $(".ms_concentr_adverb").addClass("ms_adverb_txt_animation_reverse");
            // $(".ms_concentr_adverb").css('animation-play-state', 'running');
            //
            // $(".ms_concentr_adverb").removeClass("ms_adverb_txt_animation");


            btnAdverbs.forEach((item, i) => {
                // console.log("item", item);
                $("#ms_c_adverb_btn_"+item).addClass("ms_adverb_btn_click_animation");
                $("#ms_c_adverb_btn_"+item).css('animation-play-state', 'running');

                // $("#ms_c_adverb_txt_"+item).addClass("ms_adverb_txt_animation");
                // $("#ms_c_adverb_btn_"+item).css('animation-play-state', 'running');

            });

            actionBtnClickState = 'clicked';

        } else {

            console.log('clicked');

            $(".ms_concentr_adverb_btn").addClass("ms_adverb_btn_click_animation_reverse");
            $(".ms_concentr_adverb_btn").css('animation-play-state', 'running');

            $(".ms_concentr_adverb_btn").removeClass("ms_adverb_btn_click_animation");


            // $(".ms_concentr_adverb").addClass("ms_adverb_txt_animation_reverse");
            // $(".ms_concentr_adverb").css('animation-play-state', 'running');
            //
            // $(".ms_concentr_adverb").removeClass("ms_adverb_txt_animation");


            btnAdverbs.forEach((item, i) => {

                // console.log("item", item);
                $("#ms_c_adverb_btn_"+item).addClass("ms_adverb_btn_click_animation");
                $("#ms_c_adverb_btn_"+item).css('animation-play-state', 'running');

                $("#ms_c_adverb_btn_"+item).removeClass("ms_adverb_btn_click_animation_reverse");


                // $("#ms_c_adverb_txt_"+item).addClass("ms_adverb_txt_animation");
                // $("#ms_c_adverb_btn_"+item).css('animation-play-state', 'running');
                //
                // $("#ms_c_adverb_txt_"+item).removeClass("ms_adverb_txt_animation_reverse");


            });

            // actionBtnClickState = 'not_clicked';
        }


    });




    // let ws_play_running, ws_play_paused;
    // ws_play_paused = true;
    //
    // $("#ws_play_control_btn").click(function(){
    //
    //     if (ws_play_paused) {
    //         $('.shadow_animation_ws_cube_1').css('animation-play-state', 'running');
    //         $('.shadow_animation_ws_cube_2').css('animation-play-state', 'running');
    //         $('.shadow_animation_ws_cube_3').css('animation-play-state', 'running');
    //         $('.shadow_animation_ws_cube_4').css('animation-play-state', 'running');
    //         $('.shadow_animation_ws_cube_5').css('animation-play-state', 'running');
    //         $('.shadow_animation_ws_circle').css('animation-play-state', 'running');
    //         $('.shadow_animation_ws_line_1').css('animation-play-state', 'running');
    //
    //         ws_play_running = true;
    //         ws_play_paused = false;
    //
    //         $("#ws_play_img").fadeOut();
    //
    //     } else {
    //         $('.shadow_animation_ws_cube_1').css('animation-play-state', 'paused');
    //         $('.shadow_animation_ws_cube_2').css('animation-play-state', 'paused');
    //         $('.shadow_animation_ws_cube_3').css('animation-play-state', 'paused');
    //         $('.shadow_animation_ws_cube_4').css('animation-play-state', 'paused');
    //         $('.shadow_animation_ws_cube_5').css('animation-play-state', 'paused');
    //         $('.shadow_animation_ws_circle').css('animation-play-state', 'paused');
    //         $('.shadow_animation_ws_line_1').css('animation-play-state', 'paused');
    //
    //         ws_play_running = false;
    //         ws_play_paused = true;
    //
    //         $("#ws_play_img").fadeIn();
    //
    //     }
    // });

});


function initSwiperSlider() {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 30,
        loop: true,
        lazy: false,

        navigation: {
            nextEl: '#ps_controls_right',
            prevEl: '#ps_controls_left',
        }

    });

}

function moveDisadaptBtnColor(el) {
    $(el).parent().parent().find('.ms_disadapt_active').removeClass('ms_disadapt_active');
    $(el).addClass('ms_disadapt_active');
}
