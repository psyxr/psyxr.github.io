(function($){
    "use strict";

    function popupGallery(){
        if ($(".img_popup,.image-link").length) {
            $(".img_popup,.image-link").each(function(){
                $(".img_popup,.image-link").magnificPopup({
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    removalDelay: 300,
                    mainClass:  'mfp-with-zoom mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image,
                    }
                });
            })
        }

        const playerPopup = new Plyr('#popupvideotag', {
            controls: [
                'volume',
                'fullscreen',
            ],
            autoplay: false,
            loop: { active: false },
            speed: { selected: 1},
            iconUrl: '/data/plyr.svg',
            blankVideo: '/data/blank.mp4'
        });

        playerPopup.speed = 1;

        playerPopup.source = {
            type: 'video',
            title: 'Psyfund',
            sources: [
                {
                    src: appUrl + "/video/main_overview.webm",
                    type: 'video/webm',
                    size: 1080,
                },
            ],
        };

        /**
         * Fixes pausing on click on mobile
         * https://github.com/sampotts/plyr/issues/718
         */
        const videoWrapper = document.getElementsByClassName("plyr__video-wrapper")[0];
        videoWrapper.addEventListener("click", event => {
            playerPopup.togglePlay();
            event.stopPropagation(); // Necessary or the video will toggle twice => no playback
        });

        playerPopup.toggleControls(false);
        playerPopup.muted = false;
        playerPopup.volume = 100;


        var playerSens = new Plyr('#sens_video', {
            controls: [
            ],
            autoplay: false,
            loop: { active: true },
            speed: { selected: 1},
            hideControls: false,
            iconUrl: '/data/plyr.svg',
            blankVideo: '/data/blank.mp4'
        });

        playerSens.speed = 1;

        playerSens.source = {
            type: 'video',
            title: 'Tr',
            sources: [
                {
                    src: appUrl + '/video/tr_rebuild.webm',
                    type: 'video/webm',
                    size: 1080,
                },
            ],
            poster: '/img/tr_rebuild1.jpg'
        };

        playerSens.autoplay = false;
        playerSens.stop();
        playerSens.rewind(0);

        setTimeout(function(){
            playerSens.rewind(0);
            playerSens.stop();
        },2000);


        $("#sens_video_place > .plyr").click(function(){
            playerSens.speed = 1;
        });

        $('.open-popup-link').magnificPopup({
            type:'inline',
            midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.

            callbacks: {
                open: function() {

                    playerPopup.speed = 1;
                    playerPopup.play();

                    playerSens.pause();


                },
                close: function() {
                    // $(".header_area.navbar_fixed").css("display","block");
                    playerPopup.pause();

                    playerSens.speed = 1;
                    playerSens.play();
                }
                // e.t.c.
            },
            showCloseBtn: false,
            removalDelay: 160,
        });


        // $('.popup-with-zoom-anim').magnificPopup({
        //     type: 'inline',
        //     fixedContentPos: false,
        //     fixedBgPos: true,
        //     overflowY: 'auto',
        //     closeBtnInside: true,
        //     preloader: false,
        //     midClick: true,
        //     removalDelay: 300,
        //     mainClass: 'my-mfp-zoom-in'
        // });
    }
    popupGallery();


    // MAILCHIMP
    if ($(".mailchimp").length > 0)
    {
        $(".mailchimp").ajaxChimp({
            callback: mailchimpCallback,
            // url: "http://droitlab.us15.list-manage.com/subscribe/post?u=0fa954b1e090d4269d21abef5&id=a80b5aedb0" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
            url: "https://psyfund.us20.list-manage.com/subscribe/post?u=aae8692d21c9dcd0ae783f0fa&amp;id=3f195f4c4c" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }
    $("#fs_s_email").on("focus", function ()
    {
        $("#mchimp_errmessage").fadeOut();
        $("#mchimp_sucmessage").fadeOut();
    });
    $("#fs_s_email").on("keydown", function ()
    {
        $("#mchimp_errmessage").fadeOut();
        $("#mchimp_sucmessage").fadeOut();
    });
    $("#fs_s_email").on("click", function ()
    {
        // $("#fs_s_email").val("");
    });

    function mailchimpCallback(resp)
    {
        if (resp.result === "success") {
            $("#mchimp_errmessage").html(resp.msg).fadeIn(1000);
            $("#mchimp_sucmessage").fadeOut(500);
        } else if (resp.result === "error") {
            $("#mchimp_errmessage").html(resp.msg).fadeIn(1000);
        }
    }





})(jQuery)
