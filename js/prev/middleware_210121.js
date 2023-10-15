$(document).ready(function () {

    if (appEnv !== 'local') {
        console.log = function() {};
    }

    // let links = document.getElementsByClassName('nav-link');
    //
    // let clickEvent = function (link) {
    //     // console.log('Link',link);
    //     clicked = true;
    //     console.log('A clicked true: ',clicked);
    // };
    //
    // for (let i = 0; i < links.length; i++) {
    //     // links[i].addEventListener('click', clickEvent(), false);
    //     // links[i].addEventListener('click', clickEvent(links[i]), {capture: false});
    // }

    var clicked = false;
    $('a').on('click', function(e){
        clicked = true;
        //this replace # to ''

        //hover on || hover off ?
        console.log('A clicked true: ',clicked);
    });

    $(".nav-link").on('click', function(event) {
        let pageUrl = $(this).attr('href');
        if (pageUrl !== "#") {
            event.preventDefault();
            event.stopPropagation();

            let newUrl = appUrl + dashLangPart + pageUrl;
            // window.location.assign(newUrl);
            // window.history.go();
            window.location.href = newUrl;
            window.location.reload();
        }
    });

    window.onpopstate = function (e) {
        // console.log('event: ',e);
        // console.log('Change browser history');
        // let location = window.location.href;
        // console.log('Location: ',location);
        if (clicked === false) {
            // console.log('Clicked INSIDE false: ',clicked);
            // window.history.go();
            window.location.reload();
        } else {
            // console.log('Clicked INSIDE true: ',clicked);
        }
    };

    // if ($(window).scrollTop() > '20') {
    //     console.log("Top 20px");
    //     console.log("ScrollTop: ",$(window).scrollTop());
    // }

    //проблема, когда показывает footer-shadow;

    let lastScrollTop = 0;
    let sidebar = document.getElementsByClassName('sidebar')[0];
    let sibebarFirstElement = document.getElementsByClassName('sidebar-first-element')[0];
    // let footer = document.getElementsByTagName('footer')[0];
    let footer = document.getElementById('footer-shadow-container');
    let body = document.getElementsByTagName('BODY')[0];

    function isSidebarShown() {
        let res = false;
        if (body.classList.contains('sidebar-show')) {
            res = true;
        }
        // console.log('is sidebarshown ', res);
        return res;
    }

    function isSidebarFixed() {
        let res = false;
        if (body.classList.contains('sidebar-fixed')){
            res = true;
        }
        return res;
    }

    // if (isSidebarShown()) {
    sidebar.style.top = 'inherit';
    sidebar.style.height = 'calc(100vh - 55px)';
    sibebarFirstElement.style.padding = '0.75rem 1rem';

    $("#in-txt-menu-btn").click(function(){
        sidebar.style.top = '0';
        sidebar.style.height = 'calc(100vh)';
        sibebarFirstElement.style.padding = '1rem !important';
    });

    var appHeader = document.querySelector('.app-header');

    window.addEventListener("scroll", function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        // console.log('st: ', st);

        // const appHeaderPosition = appHe;
        let position = getComputedStyle(appHeader).position;
        // console.log("style", style);
        // console.log("position", position);

        if (position === 'fixed') {
            sidebar.style.top = 'inherit';
            sidebar.style.height = 'calc(100vh - 55px)';
            sibebarFirstElement.style.padding = '0.75rem 1rem';
        }

        // console.log('App header', appHeader);
        // console.log('App header position: ', appHeaderPosition);

        if (st > lastScrollTop){
            // console.log('Downscroll');
            // console.log('St', st);
            if (st > 40) {
                // document.getElementsByClassName('sidebar')[0].style.top = 'inherit';

                // if (isSidebarShown()) {
                if (position === 'absolute') {
                    // console.log("Sidebar mobile, down");
                    sidebar.style.top = '0';
                    sidebar.style.height = 'calc(100vh)';
                    sibebarFirstElement.style.padding = '1rem !important';
                    // if (body.classList.contains('sidebar-show')) {
                    //     footer.classList.add('footer-shadow');
                    // }
                } else {
                    // console.log("Sidebar not shown");
                }
            }
        } else {
            // console.log('Upscroll');
            // console.log('St', st);

            // if (!body.classList.contains('sidebar-show')) {
            //     footer.classList.remove('footer-shadow');
            // }

            if (st < 20) {
                // if (isSidebarShown()) {
                if (position === 'absolute') {
                    // console.log('Sidebar mobile, up');
                    sidebar.style.top = 'inherit';
                    sidebar.style.height = 'calc(100vh - 55px)';
                    sibebarFirstElement.style.padding = '0.75rem 1rem';

                    // if (body.classList.contains('sidebar-show')) {
                    //     footer.classList.remove('footer-shadow');
                    // }
                } else {
                    // console.log("Sidebar not shown");
                }
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        // console.log('lastScrollTop: ', lastScrollTop);
    }, false);
    // }

    let lazyLoad = new LazyLoad({});

    lazyLoad.loadAll();

    // [].forEach.call(document.querySelectorAll('img[data-lazy-src]'), function(img) {
    //     img.setAttribute('src', img.getAttribute('data-lazy-src'));
    //     img.onload = function() {
    //         img.removeAttribute('data-lazy-src');
    //     };
    // });

    $(".slow_appear").animate({opacity: 1}, 1350);
    localStorage.removeItem('pageElementsInitiated');
    resolveAuthRelatedActions();
    resolveHeaderMenuItems();

    if (isPsysessionPage()) {
        receiveCoursePriceAndPsysessions();

        // if (isCourseObjectReceived()
        //     && !isPageElementsInitiated()) {
        //
        //     //TODO: Problem: revoke twice, убрать двойной вызов
        //
        //     initPageElements();
        // }
    }

    $('#btn-buy-and-listen').click(function () {
        localStorage.setItem('buyingCourseId', parseInt(getCurrentPageCourseId()));
        redirectToBuy();
    });

    $("#btn-redirect-signup").click(function (event) {
        event.preventDefault();
        // TODO localize
        window.location.href = '/ru/dash/#settings/signup';
        location.reload();
    });

    $("#btn-redirect-login").click(function (event) {
        event.preventDefault();
        // TODO localize
        window.location.href = '/ru/dash/#settings/login';
        location.reload();
    });

    $(".auth").click(function () {
        localStorage.setItem('authReferrer', resolveReferrerUrl());
        authEvent();
    });

    $("#logout").click(function (event) {
        event.preventDefault();
        logout();
    });

    $("#btn-forget-pass").click(function() {
        event.preventDefault();
        window.location.href = '/ru/dash/#settings/reset_pass';
        location.reload();
    });

    initComingSoonAudioPlayerIfExists();

    $("#prescription_open_btn").click(function(e){
        e.preventDefault();
        // let prescriptionContainer = document.getElementById("prescription_container");
        // prescriptionContainer.style.display = "block";
        $("#prescription_container").fadeToggle();
    });

    $(".steps-portret").click(function(){
        $(this).next(".step-txt").fadeToggle();
    });

    $("#open-steps-descr").click(function(){
        $(".steps-portret-container").css("justify-content","center");
        $(".step-txt").fadeToggle();
    });

    // let currentUrl = window.location.href;
    // const prevUrls = [];
    // prevUrls.push(currentUrl);
    // sessionStorage.setItem('currentUrl',currentUrl);

    // console.log('Current url first load',currentUrl);
    // console.log('prevUrl',prevUrls);
    // var newUrl;


    // window.addEventListener('popstate', function (event) {
    //     // The URL changed...
    //     console.log('Hash changed');
    //     // console.log('currentUrl', currentUrl);
    //
    //     // currentUrl = window.location;
    //     let prevUrl = sessionStorage.getItem('currentUrl');
    //     console.log('prevUrl', prevUrl);
    //
    //     let updatedUrl = window.location.href;
    //     console.log('updatedUrl', updatedUrl);
    //     location.reload();
    // });

    setInterval(function(){
        $("#waves_2").animate({
            opacity: 0
        },3500);
    },2000);
    setInterval(function(){
        $("#waves_2").animate({
            opacity: 1
        },3500);
    },3000);



    setInterval(function(){
        $("#waves_2_3").animate({
            opacity: 0
        },3500);
    },2000);
    setInterval(function(){
        $("#waves_2_3").animate({
            opacity: 1
        },3500);
    },3000);

    // setInterval(function(){
    //     $("#waves_2_2").animate({
    //         opacity: 0
    //     },3500);
    // },4000);
    // setInterval(function(){
    //     $("#waves_2_2").animate({
    //         opacity: 0.6
    //     },3500);
    // },5000);

    // setInterval(function(){
    //     $("#waves_3").animate({
    //         opacity: 0
    //     },3500);
    // },4000);
    // setInterval(function(){
    //     $("#waves_3").animate({
    //         opacity: 0.4
    //     },3500);
    // },5000);

    if ($('#ink_background').length) {
        const playerInk = new Plyr('#ink_background', {
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
            autoplay: true,
            loop: { active: true },
            hideControls: false,
            iconUrl: '/data/plyr.svg',
            blankVideo: '/data/blank.mp4'
        });

        playerInk.source = {
            type: 'video',
            title: 'Ink',
            sources: [
                {
                    // src: 'https://psyfundvideo.s3.eu-west-3.amazonaws.com/mixed_reality.mp4',
                    // type: 'video/mp4',
                    // size: 1080,
                    src: 'https://psyfund.com/video/ink2.webm',
                    type: 'video/webm',
                    size: 1080,
                },
            ],
            // poster: '/img/dash/axr/xr_video_thumb_revert.png'
        };

        setTimeout(function(){
            playerInk.play();
        },2000);
    }
});

function afterSuccessfullBuy() {
    setTimeout(function() {
        console.log('First setTimeout');
        if (!isPsysessionsReceived('paid')) {
            console.log('Make first http request');
            receivePaidPsysessionsByHttp();
        }
    }, 4000);

    setTimeout(function() {
        console.log('Second setTimeout');
        if (!isPsysessionsReceived('paid')) {
            console.log('Paid psysessions do not received after second timeout');
            showWaitBillingCheck();
            sendHttpPendingStatus();
            console.log('Show waiting msg, send pending status');
        }
    }, 6000);

    setInterval(function () {
        console.log('setInterval to periodical Api calling');
        if (!isPsysessionsReceived('paid')) {
            receivePaidPsysessionsByHttp();
            console.log('make http request inside interval');
        }
    }, 10000);

    try {
        //TODO: get key from env
        const socket = new Pusher('d39abbe984aba22548d8', {
            cluster: 'eu',
            authEndpoint: getBaseApiUrl() + '/auth/broadcast',
            auth: {
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
                    //this is correct (for Pusher) notation here, without slash
                    'Content-Type': 'application-json'
                }
            },
        });

        //TODO: add course differentiation
        const channel = socket.subscribe('private-connection_'
            + localStorage.getItem('websocketConnectionId'));

        channel.bind('course.paid', function (data) {
            console.log(data);
            paidPsysessionsUrlsReceived(data.paidPsysessions, data.courseId);
            socket.disconnect();
        });
    } catch (e) {
        console.log(e);
    }
}

function isRedirectFromSuccessfullBuy() {
    let result = false;
    if (localStorage.getItem('redirectFromSuccessfulBuy')) {
        result = true;
    }
    return result;
}

function setRedirectFromSuccessfulBuy(value) {
    localStorage.setItem('redirectFromSuccessfulBuy', value);
    return null;
}

function handleSuccessfulLogin(data) {
    localStorage.setItem('websocketConnectionId',data.websocketConnectionId);
    localStorage.setItem('email', $('#email').val());
    localStorage.setItem('token', data.accessToken);
    //TODO: resolve expires option
    localStorage.setItem('expiresAt', data.expiresAt);

    // initBoughtCoursesIds(data.boughtCoursesIds);
    // initPendingCoursesIds(data.pendingCoursesIds);
    // saveLocallyPsysessionsSources(data.paidPsysessions,'paid');
    // saveLocallyPsysessionsSources(data.freePsysessions,'free');

    path = resolveRedirectPath();
    window.location.href = path;
    location.reload(true);
}

function sendNotification(msg) {
    //TODO: add send
    return null;
}

function getCurrentLocale() {
    return document.documentElement.lang.trim();
}

function isCourseObjectReceived() {
    let result = false;
    if (localStorage.getItem('course_object_'+getCurrentPageCourseId()+'_received')) {
        result = true;
    }
    return result;
}

function isPageElementsInitiated() {
    let result = false;
    if (localStorage.getItem('pageElementsInitiated')) {
        result = true;
    }
    return result;
}

function isPsysessionPage() {
    let result = false;
    if (getCurrentPsysessionId()) {
        result = true;
    }
    return result;
}

function paidPsysessionsUrlsReceived(psysessions, courseId) {
    let mode = 'paid';
    console.log('paid psysessions received', psysessions, courseId);
    saveLocallyPsysessionsSources(psysessions, mode);
    // addCurrentPsysessionHtmlSrc(mode);

    addCourseIdToBoughtList(courseId);
    removeCourseIdFromPendingList(courseId);

    hideProcessingPaymentGif();
    hideWaitBillingCheckMsg();
    makeHtmlListen('paid');
    localStorage.removeItem('redirectFromSuccessfulBuy');
    return null;
}

function saveLocallyPsysessionsSources(psysessions, mode) {
    localStorage.setItem(mode + 'Psysessions', JSON.stringify(psysessions));
    if (!($.isEmptyObject(psysessions))) {
        console.log('Set psysession received in mode: '+mode,psysessions);
        setPsysessionsReceived(mode);
    } else {
        setPsysessionsReceived(mode, false);
    }
    return null;
}

function receivePaidPsysessionsByHttp() {
    let currentCourseId = getCurrentPageCourseId();

    console.log('receivingPsysessionByHttp');
    $.ajax({
        url: getBaseApiUrl() + "/courses/" + currentCourseId + "/paid",
        type: "GET",
        headers: {
            "X-localization": getCurrentLocale(),
            "Authorization": "Bearer " + getAuthToken()
        },
        contentType: "application/json",
        dataType: "json",
        success: function (paidPsysessions) {
            paidPsysessionsUrlsReceived(paidPsysessions, currentCourseId);
            hideProcessingPaymentGif();
        },
        error: function (error) {
            console.log(error);
        }
    });

    sendNotification('receivingPaidPsysessionByHttp');
}

function hideProcessingPaymentGif() {
    hideDataLoader();
}

function hideWaitBillingCheckMsg() {
    $("#wait-billing-check").hide();
}

function getCurrentPsysessionId() {
    return $("#psysessionId").html();
}

function getAuthToken() {
    return localStorage.getItem('token');
}

// function makeCurrentPsysessionSrc(mode = 'paid') {
//     let currentPsysessionId = getCurrentPsysessionId();
//     let psysessionsInfo = JSON.parse(localStorage.getItem(mode + 'Psysessions'));
//     let currentPsysessionInfo = psysessionsInfo[currentPsysessionId];
//     let src = currentPsysessionInfo.src;
//
//     console.log('psysession src', src);
//     return src;
// }

// function addCurrentPsysessionHtmlSrc(mode = 'paid') {
//     let currentPsysessionId = getCurrentPsysessionId();
//     let psysessionsInfo = JSON.parse(localStorage.getItem(mode + 'Psysessions'));
//     let currentPsysessionInfo = psysessionsInfo[currentPsysessionId];
//
//     if (currentPsysessionInfo) {
//
//         //подгрузка плеера
//
//         getAudioTag().setAttribute('src', currentPsysessionInfo.src);
//
//
//
//
//         console.log('BLOCKED: '+mode + ' psysession src initiated', currentPsysessionInfo.src);
//     }
//     return null;
// }

function getCurrentPsysessionUrl(mode = 'paid') {
    let currentPsysessionId = getCurrentPsysessionId();
    let psysessionsInfo = JSON.parse(localStorage.getItem(mode + 'Psysessions'));
    return psysessionsInfo[currentPsysessionId].src;
}

function getAudioTag() {
    return document.getElementById("audio_player");
}

/**
 * @returns {boolean}
 */
function isPsysessionsReceived(mode) {
    let result = false;
    if (JSON.parse(localStorage.getItem(mode + 'PsysessionsReceived'))) {
        result = true;
    }
    console.log('isPsysessionReceivedCheck in mode: '+mode, result);
    return result;
}

function showWaitBillingCheck() {
    $("#wait-billing-check").show();
}

function sendHttpPendingStatus() {
    let courseId = getCurrentPageCourseId();
    $.ajax({
        url:getBaseApiUrl()+'/courses/'+courseId+'/billing/pending',
        type:"POST",
        headers: {
            'X-localization': getCurrentLocale(),
            'Authorization':'Bearer '+getAuthToken()
        },
        data: JSON.stringify({course_id: courseId}),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function receiveCoursePriceAndPsysessions() {
    //TODO: maybe possible to make some cache here?
    // let course = getCourseFromStorage(currentCourseId);
    let course = null;
    if (!course) {
        let courseUrl = resolveCourseUrl();
        $.ajax({
            url: courseUrl,
            type: "GET",
            headers: {
                "X-localization": getCurrentLocale(),
                "Authorization": "Bearer " + getAuthToken()
            },
            contentType: "application/json",
            dataType: "json",
            success: function (data) {

                console.log('receive CourseUserInfo', data);

                saveLocallyCourse(data);

                //TODO: ? нужны ли здесь изменения?
                initBoughtCoursesIds(data.boughtCoursesIds);

                //TODO: fix
                //статус pending еще не отправлен с фронта, и уже переписывается
                //старой инфой; брать имеющийся, и добавлять к нему, если есть
                initOrUpdatePendingCoursesIds(data.pendingCoursesIds);

                saveLocallyPsysessionsSources(data.freePsysessions,'free');
                saveLocallyPsysessionsSources(data.paidPsysessions,'paid');
                //
                // let freePsysessions = data.freePsysessions;
                // saveLocallyPsysessionsSources(freePsysessions, 'free');
                localStorage.setItem('course_object_'+getCurrentPageCourseId()
                    +'_received', true);
                initPageElements();
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    return null;
}

function resolveCourseUrl(){
    let url, apiToken;
    let currentCourseId = getCurrentPageCourseId();
    //TODO: divide for auth or simple
    url = getBaseApiUrl() + "/courses/" + currentCourseId;
    // apiToken = getApiToken();
    // if (apiToken) {
    //     url = url + '?api_token=' + apiToken;
    // }
    return url;
}

// function getApiToken() {
//     return localStorage.getItem('token');
// }

function initPageElements() {
    localStorage.setItem('pageElementsInitiated', true);
    if (isPsysessionPayable()) {
        if (isCourseBought(getCurrentPageCourseId())) {
            // addCurrentPsysessionHtmlSrc('paid');
            hideBuyAndListenButton();
            hidePriceSection();
            makeHtmlListen('paid');
        } else if (isCoursePending(getCurrentPageCourseId())) {
            afterSuccessfullBuy();
        } else {
            makeHtmlBuy();
        }
    } else {
        // addCurrentPsysessionHtmlSrc('free');
        makeHtmlListen('free');
    }
    return null;
}

function saveLocallyCourse(data) {
    localStorage.setItem('course_object_' + data.id, JSON.stringify(data));
    return null;
}

function getCourseFromStorage(id) {
    return JSON.parse(localStorage.getItem('course_object_' + id));
}

function insertCoursePriceToPage() {
    let course = getCourseFromStorage(getCurrentPageCourseId());
    let price = course.price;
    $("#set_old_price").html(makeOldPrice(price) + "$");
    $("#set_current_price").html(price + "$");
    return null;
}

function setPsysessionsReceived(mode, status = true) {
    localStorage.setItem(mode + 'PsysessionsReceived', status);
}

function isPsysessionPayable() {
    let result = false;
    if (parseInt($("#isPsysessionPayable").html()) > 0) {
        result = true;
    }
    return result;
}

function makeHtmlBuy() {
    hideDataLoader();
    insertCoursePriceToPage();

    showPriceSection();
    showBuyAndListenButton();
}

function showBuyAndListenButton() {
    $("#btn-buy-and-listen").show();
}

function hideBuyAndListenButton() {
    $("#btn-buy-and-listen").hide();
}

function showPriceSection() {
    $("#price_section").css('display', 'flex');
}

function hidePriceSection() {
    $("#price_section").css('display', 'none');
}

//TODO: (perhaps) remove param and merge free and paid psysessions in localStorage
function makeHtmlListen(mode) {
    console.log('Make html listen');
    hideDataLoader();

    showListenBtn();
    isBlobFileStillExists();
    resolveDownloading(mode);

    return null;
}

//TODO: fix: remove param
function resolveDownloading(mode){
    if (!isPsysessionDownloading() && !isPsysessionReady()) {
        let psysessionUrl = getCurrentPsysessionUrl(mode);
        downloadAndPrepareAudio(psysessionUrl);
    }
    return null;
}

function isPsysessionDownloading() {
    let res = false;
    if (isDownloadingStatusSet()) {
        res = true;
        let currentDownloadPercent = getCurrentPsysessionDownloadPercent();
        console.log('Current download percent: ', currentDownloadPercent);

        setTimeout(function(){
            let comparingDownloadPercent = getCurrentPsysessionDownloadPercent();
            console.log('Comparing download percent: ', comparingDownloadPercent);
            if (
                (currentDownloadPercent === comparingDownloadPercent)
                && currentDownloadPercent !== '100'
            ) {
                console.log("Download FAILED, restart");
                setCurrentPsysessionDownloadStatus('DOWNLOAD_FAILED');
                downloadAndPrepareAudio(
                    getCurrentPsysessionUrl(resolveCurrentPsysessionMode()));
            }
        }, 5000);
    }
    console.log('Is downloading?', res);
    return res;
}

function isDownloadingStatusSet() {
    let res = false;
    if (sessionStorage.getItem(
        'psysessionBlobUrl'+getCurrentPsysessionId()) === 'DOWNLOADING'){
        res = true;
    }
    return res;
}

function setCurrentPsysessionDownloadStatus(status){
    sessionStorage.setItem(
        'psysessionBlobUrl'+getCurrentPsysessionId(),status);
    return null;
}

function getCurrentPsysessionDownloadPercent() {
    return sessionStorage.getItem(
        'psysession'+getCurrentPsysessionId()+'DownloadPercent'
    );
}

function setPsysessionDownloadPercent(psysessionId, percent){
    sessionStorage.setItem(
        'psysession'+psysessionId
        +'DownloadPercent', percent);
    return null;
}


function downloadAndPrepareAudio(url) {
    sessionStorage.setItem('psysessionBlobUrl'+getCurrentPsysessionId(), 'DOWNLOADING');
    setPsysessionDownloadPercent(getCurrentPsysessionId(), 0);
    //TODO: for audio updates
    sessionStorage.setItem('psysessionSourceUrl'+getCurrentPsysessionId(), url);

    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    let startPsysessionId = getCurrentPsysessionId();

    request.onprogress = function (e) {
        if (e.lengthComputable) {
            let percentComplete = e.loaded / e.total * 100;
            if (startPsysessionId === getCurrentPsysessionId()) {
                const progressbar = document.getElementById('psysession_progress_loader_value');
                progressbar.textContent = Math.round(percentComplete);
            }
            setPsysessionDownloadPercent(startPsysessionId, percentComplete.toFixed(4));
        }
    };

    request.onload = function() {
        console.log('Loading audio done');

        if (this.status == 200) {
            let blob = new Blob([request.response], {type: 'audio/mpeg'});
            blobUrl = URL.createObjectURL(blob);
            sessionStorage.setItem('psysessionBlobUrl'+startPsysessionId, blobUrl);

            if (isListenBtnClicked()) {
                console.log("on load done");
                if (startPsysessionId === getCurrentPsysessionId()) {
                    resolveShowingPlayerOrProgressLoader();
                } else {
                    console.log('Loading finished on page with another audio player');
                }
            } else {
                console.log('Loading finished on another page or btn is not clicked');
            }
        }
    };

    request.onerror = function(e) {
        console.log('error',e);
    };
    console.log('####', startPsysessionId);
    console.log('I_N_I_T_I_A_T_E DOWNLOADING audio for psysessionId ', startPsysessionId);
    console.log('####', startPsysessionId);
    request.send();
}

$("#btn-listen").click(function (event) {
    event.preventDefault();
    hideListenBtn();
    resolveShowingPlayerOrProgressLoader();
});

function isListenBtnClicked(){
    let res = false;
    if(getListenBtnElement().getAttribute('style').includes('none')){
        res = true;
    }
    return res;
}

function getListenBtnElement(){
    return document.getElementById('btn-listen');
}

// function resolveShowingPlayerOrProgressLoaderWhenRender(){
//     console.log('resolveShowingPlayerOrProgress');
//     if (isPsysessionReady()){
//         hideProgressLoader();
//         showAudioPlayer();
//
//         // isBlobFileStillExists();
//     }else {
//         showProgressLoader();
//     }
//     return null;
// }

// function resolveShowingPlayerOrProgressLoaderWhenLoadComplete(){
//     resolveShowingPlayerOrProgressLoader();
// }

function resolveShowingPlayerOrProgressLoader() {
    console.log('resolveShowingPlayerOrProgressLoader');
    if (isPsysessionReady()){
        hideProgressLoader();
        showAudioPlayer();
    }else {
        showProgressLoader();
    }
    return null;
}

function isPsysessionReady() {
    let res = false;
    res = isAudioHandled();
    console.log('isPsysessionReady', res);
    return res;
}

function isAudioHandled(){
    let res = false;
    if(!isPsysessionDownloading()
        && !isPsysessionDownloadFailed()
        && sessionStorage.getItem('psysessionBlobUrl'+getCurrentPsysessionId())
    ) {
        console.log('Check is audio handled done');
        res = true;
    }
    console.log('isAudioHandled', res);
    return res;
}

function isPsysessionDownloadFailed(){
    let res = false;
    if (getPsysessionDownloadingStatus() === 'DOWNLOAD_FAILED'){
        res = true;
    }
    console.log('Is psysessionDownloadFailed',res);
    return res;
}

function getPsysessionDownloadingStatus(){
    return sessionStorage.getItem('psysessionBlobUrl'+getCurrentPsysessionId());
}

function isBlobFileStillExists() {
    if (isAudioHandled()) {

        let url = sessionStorage.getItem('psysessionBlobUrl'+getCurrentPsysessionId());
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";

        request.onload = function() {
            console.log('Blob-data checking request is done');
            if (this.status == 200) {
                console.log("Blob file exists");
            }
        };

        request.onerror = function(e) {
            console.log("File doesn't exists", e);

            sessionStorage.removeItem('psysessionBlobUrl'+getCurrentPsysessionId());
            sessionStorage.removeItem('psysessionSourceUrl'+getCurrentPsysessionId());
            console.log("Remove entry for blobUrl");
            console.log("Init making html");

            //TODO: legacy: remove 'mode' in general
            let mode = resolveCurrentPsysessionMode();
            console.log("Resolved mode: ", mode);
            resolveDownloading(mode);
        };
        request.send();
    }
    return null;
}


function resolvePsysessionModeById(psysessionId) {
    let mode = 'paid';
    let freePsysessionsIds = getCourseFreePsysessionIds();
    console.log('freePsysessionIds', freePsysessionsIds);
    if (freePsysessionsIds.indexOf(getCurrentPsysessionId()) !== -1) {
        mode = 'free';
    }
    return mode;
}

function getCourseFreePsysessionIds() {
    let info = getCourseFreePsysessionInfo();
    let ids = [];
    Object.keys(info).forEach(function(key) {
        ids.push(key);
    });
    return ids;
}

function getCourseFreePsysessionInfo(){
    const course = getCourseObject(getCurrentPageCourseId());
    console.log('Course object ', course);
    return course.freePsysessions;
}

function getCourseObject(courseId) {
    let courseObject = null;
    if (localStorage.getItem('course_object_'+courseId)) {
        courseObject = JSON.parse(localStorage.getItem('course_object_'+courseId))
    }
    return courseObject;
}


function resolveCurrentPsysessionMode() {
    return resolvePsysessionModeById(getCurrentPsysessionId());
}

function hideProgressLoader() {
    let loader = getProgressLoaderDivElement();
    loader.hide();
    let loaderDescription = getLoaderDescriptionElement();
    loaderDescription.hide();
}

function showProgressLoader() {
    let loader = getProgressLoaderDivElement();
    loader.show();
    let loaderDescription = getLoaderDescriptionElement();
    loaderDescription.show();
}

function getProgressLoaderDivElement() {
    return $('#progress_loader_container');
}

function getLoaderDescriptionElement(){
    return $('#loading_description');
}

// plyr__tab-focus

function showAudioPlayer(blobUrl) {
    const controls = `
<div class="plyr__controls">
    <button type="button" class="plyr__control" data-plyr="play" aria-label="{title}">
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
    <a href="`+getPsysessionBlobUrl()+`"
        target="_blank" class="plyr__control" data-plyr="download" download="`+getTrackTitle()+`.mp3">
        <svg role="presentation" focusable="false">
        <use xlink:href="#plyr-download"></use></svg>
    <span class="plyr__sr-only">Download</span></a></div>
`;

    const player = new Plyr('#audio_player', {
        title: getTrackTitle(),
        debug: false,
        controls: controls,
        // controls: [
        //     'play',
        //     'restart',
        //     // 'progress',
        //     'current-time',
        //     'mute',
        //     'volume',
        //     // 'settings',
        //     'download',
        //     'airplay'
        // ],
        invertTime: false,
        // settings: [''],
        // disableContextMenu: false,
        // hideControls: false,
        // urls: {
        //     download: getAudioMp3SourceTag().attr('src')
        // },
        // iconUrl: '/data/plyr.svg',
        // blankVideo: '/data/blank.mp4'
    });

    player.source = {
        type: 'audio',
        title: getTrackTitle(),
        sources: [
            {
                src: getPsysessionBlobUrl(),
                type: 'audio/mpeg',
            }
        ],
    };

    // sessionStorage.removeItem('psysessionBlobUrl'+getCurrentPsysessionId());
    // $("[data-plyr=download]").attr('download', getTrackTitle()+'.mp3');

    // let el = $("[data-plyr=restart]");

    // player.play();

    // player.on('pause', function() {
    //     let el = $("[data-plyr=restart]");
    //
    //
    //     //look hover/focus css
    //
    //     setTimeout(function () {
    //         console.log('timeout pushed');
    //         let classValue = el.attr('class');
    //         // el.attr('class', classValue.replace(classValue, classValue + 'data-plyr-restart-clicked'));
    //         console.log(el.attr('class')+'before clean');
    //         el.attr('class', classValue.replace('plyr__tab-focus',''));
    //         console.log(el.attr('class')+'after clean');
    //     }, 3000);
    // });

    player.volume = 100;
    player.muted = false;

    return null;
}

function getPsysessionBlobUrl(){
    return sessionStorage.getItem('psysessionBlobUrl'+getCurrentPsysessionId());
}


function showListenBtn() {
    $("#btn-listen").show();
}

function hideListenBtn() {
    $("#btn-listen").hide();
}


function getTrackTitle() {
    return $("#trackTitle").html();
}

function getTrackTitleWithExtension() {
    let extension = '.mp3';
    // let extension = resolveAudioFileExtension();
    return getTrackTitle() + extension;
}

function hideDataLoader() {
    $("#data_loader").hide();
}

function showDataLoader(){
    $("#data_loader").show();
}

function makeOldPrice(price) {
    return Math.round(price * 3.6);
}

function resolveAuthRelatedActions() {
    // console.log(getCurrentUrl());
    let authRestricted = getAuthRestrictedPages();
    let authRequired = getAuthRequiredPages();

    //TODO: localize lang part
    let basicUrl = getAppUrl() + '/ru/dash/#';
    let currentUrl = window.location.href.split("?")[0];

    authRestricted.forEach(function (item) {
        if (
            ((basicUrl + item) === currentUrl)
        ) {
            console.log("restricted for auth", currentUrl);
            if (localStorage.getItem('token')) {
                redirectToBoard();
            }
        }
    });

    authRequired.forEach(function (item) {
        if (
            ((basicUrl + item) === currentUrl)
        ) {
            console.log("auth required", currentUrl);
            if (!localStorage.getItem('token')) {
                redirectToAuth();
            }
        }
    });
}

function resolveHeaderMenuItems() {
    if (localStorage.getItem('token')) {
        authRestrictedHide();
        authRequiredShow();
    } else {
        authRequiredHide();
        authRestrictedShow();
    }
    return null;
}

function authRestrictedShow() {
    $(".auth_restricted").each(function () {
        $(this).show();
    });
    return null;
}

function authRequiredHide() {
    $(".auth_required").each(function (item) {
        $(this).hide();
    });
    return null;
}

function authRestrictedHide() {
    $(".auth_restricted").each(function (item) {
        $(this).hide();
    });
    return null;
}

function authRequiredShow() {
    $(".auth_required").each(function (item) {
        $(this).show();
    });
    return null;
}

function resolveReferrerUrl(){
    let currentUrl = getCurrentUrl();
    let resolvedPath = currentUrl;
    let authRestrictedReferrers = getAuthRestrictedPages();
    authRestrictedReferrers.forEach(function (element) {
        if (currentUrl.indexOf(element) >= 0) {
            resolvedPath = getBasePath();
        }
    });
    return resolvedPath;
}

function getBasePath(){
    return getAppUrl()+'/'+getCurrentLocale()+'/dash/#board'
}

function getAuthRestrictedPages(){
    return [
        'settings/login',
        'settings/signup',
        'settings/reset_pass',
        'settings/save_new_pass',
        'settings/account_activation',
    ];
}

function getAuthRequiredPages(){
    return [
        'settings/profile',
        //TODO: then: fix to related above-url
        'settings/buy',
        'settings/buys'
    ];
}

function getCurrentUrl() {
    return window.location.href;
}

function redirectToBoard() {
    //TODO: сделать локаль сменяемой
    window.location.href = getAppUrl()+'/ru/dash/#board';
    location.reload();
}

function redirectToAuth() {
    authEvent();
    let currentPath = window.location.href;
    localStorage.setItem('authReferrer', currentPath);

    // if (currentPath === appUrl+'/ru/dash/#settings/logout') {
    //     localStorage.setItem('authReferrer', appUrl+'/ru/dash/#board');
    // }
    if (isCurrentPageBuyPage(currentPath)) {
        localStorage.setItem('isAuthReferrerBuyPage', true);
    }
    window.location.href = getAppUrl()+'/ru/dash/#settings/signup';
    location.reload();
}

function isCurrentPageBuyPage(currentPath) {
    let result = false;
    if (currentPath === getAppUrl()+'/ru/dash/#settings/buy') {
        result = true;
    }
    return result;
}

function redirectToBuy() {
    localStorage.setItem('buyReferrer', window.location.href);
    localStorage.setItem('currentPrice', $("#set_current_price").html());
    localStorage.setItem('oldPrice', $("#set_old_price").html());

    window.location.href = '/ru/dash/#settings/buy';
    location.reload();
}

function getBuyReferrerPath() {
    return localStorage.getItem('buyReferrer');
}

function getAuthReferrerPath() {
    let path = localStorage.getItem('authReferrer');
    if (!path) {
        path = getAppUrl()+'/ru/dash/#board'
    }
    return path;
}

function setAuthReferrerPath(path) {
    localStorage.setItem('authReferrer', path);
    return null;
}

function logout() {
    localStorage.clear();
    location.reload();
}

function initBoughtCoursesIds(boughtCoursesIds) {
    localStorage.setItem("boughtCoursesIds", JSON.stringify(boughtCoursesIds));
}

function initOrUpdatePendingCoursesIds(idsReceivedFromDb) {
    let storagedIds = getStoragedPendingCoursesIds();
    console.log('storagedIds',storagedIds);
    console.log('idsReceivedFromDB',idsReceivedFromDb);
    let ids = mergeStoragedAndReceivedCoursesIds(storagedIds, idsReceivedFromDb);
    saveMergedIdsToStorage(ids);
    return null;
}

function getStoragedPendingCoursesIds(){
    let storagedIds;
    storagedIds = localStorage.getItem('pendingCoursesIds');
    console.log("initial storaged ids ", storagedIds);
    if (storagedIds
        &&
        (storagedIds !== 'undefined')
        && (storagedIds !== 'null')
        && (storagedIds !== '[null]')
    ) {
        storagedIds = JSON.parse(storagedIds);
    } else {
        storagedIds = []
    }
    //ids.push(parseInt(getBuyingCourseId()));
    //ids = [...new Set(ids)];
    return storagedIds;
}

function mergeStoragedAndReceivedCoursesIds(storagedIds, receivedIds) {
    let ids;
    if (receivedIds) {
        ids = storagedIds.concat(receivedIds);
        console.log('Merged ids before Set',ids);
    }
    ids = [...new Set(ids)];
    console.log('Merged ids after Set',ids);
    return ids;
}

function saveMergedIdsToStorage(ids){
    localStorage.setItem("pendingCoursesIds", JSON.stringify(ids));
    return null;
}

function addCourseIdToPendingList() {
    let pendingCoursesIds;
    pendingCoursesIds = JSON.parse(localStorage.getItem('pendingCoursesIds'));
    console.log('Check pending course ids', pendingCoursesIds);

    pendingCoursesIds.push(parseInt(getBuyingCourseId()));

    pendingCoursesIds = [...new Set(pendingCoursesIds)];
    localStorage.setItem('pendingCoursesIds', JSON.stringify(pendingCoursesIds));

    console.log('pendingList', pendingCoursesIds);
    return null;
}

function addCourseIdToBoughtList(courseId) {
    let boughtCoursesIds;

    boughtCoursesIds = JSON.parse(localStorage.getItem('boughtCoursesIds'));
    boughtCoursesIds.push(parseInt(courseId));

    boughtCoursesIds = [...new Set(boughtCoursesIds)];
    localStorage.setItem('boughtCoursesIds', JSON.stringify(boughtCoursesIds));

    console.log('boughtList', boughtCoursesIds);
    return null;
}

function removeCourseIdFromPendingList(courseId) {
    let pendingCoursesIds;
    pendingCoursesIds = JSON.parse(localStorage.getItem('pendingCoursesIds'));

    pendingCoursesIds.filter(function(value, index, arr) {
        if (parseInt(value) === parseInt(courseId)) {
            arr.splice(index,1);
        }
    });
    // pendingCoursesIds = [...new Set(pendingCoursesIds)];
    localStorage.setItem('pendingCoursesIds', JSON.stringify(pendingCoursesIds));

    console.log('pending after remove', pendingCoursesIds);
    return null;
}

function resolveRedirectPath() {
    if (isAuthReferrerPageBuyPage()) {
        if (isCourseBought(getBuyingCourseId())) {
            setAuthReferrerPath(getBuyReferrerPath());
            removeBuyingInfo();
        }
    }
    return getAuthReferrerPath();
}

function isAuthReferrerPageBuyPage() {
    return localStorage.getItem('isAuthReferrerBuyPage');
}

function getCurrentPageCourseId() {
    return $("#courseId").html();
}

function getBuyingCourseId() {
    return localStorage.getItem('buyingCourseId');
}

function isBuyingCourseId() {
    let result = false;
    if (getBuyingCourseId()) {
        result = true;
    }
    return result;
}

function isCourseBought(courseId) {
    let result, boughtCoursesIds, courseIdIndex;

    result = false;
    boughtCoursesIds = JSON.parse(localStorage.getItem('boughtCoursesIds'));

    if (boughtCoursesIds) {
        courseIdIndex = boughtCoursesIds.indexOf(parseInt(courseId));
        if (courseIdIndex >= 0) {
            result = true;
        }
    }
    return result;
}

function isCoursePending(courseId) {
    let result, pendingCoursesIds, courseIdIndex;

    result = false;
    // pendingCoursesIds = JSON.parse(localStorage.getItem('pendingCoursesIds'));
    pendingCoursesIds = getStoragedPendingCoursesIds();

    if (pendingCoursesIds) {
        console.log('courseId', courseId);
        console.log('pending coursesIds', pendingCoursesIds);
        courseIdIndex = pendingCoursesIds.indexOf(parseInt(courseId));
        console.log('courseId index', courseIdIndex);
        if (courseIdIndex >= 0) {
            result = true;
        }
    }
    console.log('Is course pending: ', result);
    return result;
}

function removeBuyingInfo() {
    localStorage.removeItem('buyingCourseId');
    localStorage.removeItem('buyReferrer');
    localStorage.removeItem('currentPrice');
    localStorage.removeItem('oldPrice');
    localStorage.removeItem('isAuthReferrerBuyPage');
    return null;
}

function getAppUrl() {
    return appUrl;
}

function authEvent() {
    localStorage.setItem('isAuthReferrerBuyPage', false);
    return null;
}

function getQueryStringParams() {
    let res = {};
    let keyAndValue;

    if (location.href.indexOf("?") > 0) {
        let queryString = location.href.split('?')[1];
        queryString = queryString.split('&');
        queryString.forEach(function (element){
            keyAndValue = element.split('=');
            res[keyAndValue[0]] = keyAndValue[1];
        });
    }
    return res;
}

function login(sendData){
    $.ajax({
        type: 'POST',
        url: getBaseApiUrl() + '/auth/login',
        data: sendData,
        headers: {
            'X-Localization': getCurrentLocale()
        },
        success: function (result) {
            handleSuccessfulLogin(result);
        },
        error: function(error) {
            showError(error);
        }
    });
}

function showError(error){
    console.log(error);
    let div = $("#error-response");
    div.html(JSON.stringify(error.responseJSON));
    div.show();
}

function getAccountActivationUrl() {
    return getBaseApiUrl()+'/auth/account/activate';
}

function getBaseApiUrl() {
    return coreApiUrl + '/api';
}


// MAILCHIMP
if ($(".mailchimp").length > 0)
{
    $(".mailchimp").ajaxChimp({
        callback: mailchimpCallback,
        // url: "http://droitlab.us15.list-manage.com/subscribe/post?u=0fa954b1e090d4269d21abef5&id=a80b5aedb0" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        url: "https://psyfund.us20.list-manage.com/subscribe/post?u=aae8692d21c9dcd0ae783f0fa&amp;id=3f195f4c4c" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
    });
}

$(".memail").on("focus", function ()
{
    $(".mchimp-errmessage").fadeOut();
    $(".mchimp-sucmessage").fadeOut();
});
$(".memail").on("keydown", function ()
{
    $(".mchimp-errmessage").fadeOut();
    $(".mchimp-sucmessage").fadeOut();
});
$(".memail").on("click", function ()
{
    $(".memail").val("");
});
function mailchimpCallback(resp)
{
    if (resp.result === "success") {
        $(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
        $(".mchimp-sucmessage").fadeOut(500);
    } else if (resp.result === "error") {
        $(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
    }
}

function initComingSoonAudioPlayerIfExists() {

    let cs_player = document.getElementById('coming_soon_audio_player');

    if (cs_player) {
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
    <a href="https://psyfund.com/audio/SomewhereOverTheRainbow_mix.mp3"
        target="_blank" class="plyr__control" data-plyr="download" download="Somewhere_over_the_rainbow.mp3">
        <svg role="presentation" focusable="false">
        <use xlink:href="#plyr-download"></use></svg>
        <span class="plyr__sr-only">Download</span>
    </a>
</div>
`;

        const cs_player = new Plyr('#coming_soon_audio_player', {
            title: 'Somewhere_over_the_rainbow',
            debug: false,
            controls: cs_controls,
            // controls: [
            //     'play',
            //     'restart',
            //     // 'progress',
            //     'current-time',
            //     'mute',
            //     'volume',
            //     // 'settings',
            //     'download',
            //     // 'airplay'
            // ],
            invertTime: false,
            // settings: [''],
            // disableContextMenu: false,
            // hideControls: false,
            // urls: {
            //     download: getAudioMp3SourceTag().attr('src')
            // },
            // iconUrl: '/data/plyr.svg',
            // blankVideo: '/data/blank.mp4'
        });

        cs_player.source = {
            type: 'audio',
            title: 'Somewhere_over_the_rainbow',
            sources: [
                {
                    // src: "https://storage.googleapis.com/psyfund/audio/SomewhereOverTheRainbow_mix.mp3",
                    src: "https://psyfund.com/audio/SomewhereOverTheRainbow_mix.mp3",
                    type: 'audio/mpeg',
                }
            ],
        };

        setTimeout(function(){
            cs_player.volume = 100;
            cs_player.muted = false;
        },2000);
    }
    return null;
}
