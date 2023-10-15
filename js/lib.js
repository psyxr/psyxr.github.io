
function makeCommonBoxShadowObj() {
    const commonBoxShadowObj = {
        elName: 'blank',
        element: $("#btn"),
        elIdentifierIsClass: false,
        elName: 'default_name',

        elHoverKeyframes: '',
        elHoverKeyframesReverse: '',
        elClickKeyframes: '',
        elClickKeyframesReverse: '',

        elHoverAnimDuration: "0.3s",
        elHoverReverseAnimDuration: "0.3s",

        elClickAnimDuration: "0.5s",
        elClickReverseAnimDuration: "0.5s",

        //TODO: refactor to default ease-out
        clickAnimationFunction: "ease-in",

        makeElHoverName: function() {
            return this.elName+"_hover_animation";
        },
        makeElHoverReverseName: function() {
            return this.elName+"_hover_animation_reverse";
        },
        makeElClickName: function() {
            return this.elName+"_click_animation";
        },
        makeElClickReverseName: function() {
            return this.elName+"_click_animation_reverse";
        },

        isObjectLinkedFollower: false,
        makeLinkedBoxShadowBtns: function() {
            // console.log('recursion call');
        },
        linkedBoxShadowBtns: [],
        resolveLinkedDomElement: function(basicDomElement){},

        hasClickAnimationItself: true,
        isClickPersist: false,

        clickCallable: function(domElement){},
    };

    return commonBoxShadowObj;
}

function boxShadowBtn (btnObj) {

    var domEl = btnObj.element;

    var btnState = 'init';

    let template = makeAnimationTemplate(btnObj);

    $('head').append("<style>"+template+"</style>");

    //recursion call: calling from first (main) btn
    //to init style for other, linked btns, defined in first (main) obj

    btnObj.makeLinkedBoxShadowBtns();


    if (!btnObj.isObjectLinkedFollower) {
        //TODO: hover is used resolving

        //instead of just css rules because of click animation
        domEl.hover (function() {

            triggerHoverAnimation($(this), btnObj);
            triggerLinkedHoverAnimation($(this), btnObj);

        }, function() {

            triggerHoverAnimationReverse($(this), btnObj);
            triggerLinkedHoverAnimationReverse($(this), btnObj);

        });

        //TODO: click is used resolving ?

        domEl.click(function(){

            if (btnState === 'init') {
                btnState = 'pressed';

                //TODO: point examples when used
                if (btnObj.hasClickAnimationItself) {
                    triggerClickAnimation($(this), btnObj);

                    btnObj.clickCallable($(this));
                }

                triggerLinkedClickAnimation($(this), btnObj);

            } else {
                btnState = 'init';

                if (btnObj.hasClickAnimationItself) {
                    triggerClickAnimationReverse($(this), btnObj);

                    btnObj.clickCallable($(this));
                }

                triggerLinkedClickAnimationReverse($(this), btnObj);
            }
        });
    }


}

function triggerHoverAnimation(domEl, btnObj) {
    domEl.removeClass(btnObj.makeElClickReverseName());
    domEl.removeClass(btnObj.makeElHoverReverseName());
    domEl.addClass(btnObj.makeElHoverName());
    domEl.css('animation-play-state', 'running');
}

function triggerHoverAnimationReverse(domEl, btnObj) {

    if (!btnObj.isClickPersist) {
        domEl.removeClass(btnObj.makeElClickName());
        domEl.removeClass(btnObj.makeElClickReverseName());
    }

    domEl.removeClass(btnObj.makeElHoverName());
    domEl.addClass(btnObj.makeElHoverReverseName());
    domEl.css('animation-play-state', 'running');

    // el.removeClass(elHoverAnimation);
}

function triggerClickAnimation(domEl, btnObj) {
    domEl.addClass(btnObj.makeElClickName());
    domEl.css('animation-play-state', 'running');

    domEl.removeClass(btnObj.makeElClickReverseName());
}

function triggerClickAnimationReverse(domEl, btnObj) {
    // el.css('animation-play-state', 'paused');
    domEl.addClass(btnObj.makeElClickReverseName());
    domEl.css('animation-play-state', 'running');

    domEl.removeClass(btnObj.makeElClickName());
}

function triggerLinkedHoverAnimation(domEl, firstBtnObj) {

    firstBtnObj.linkedBoxShadowBtns.forEach((btnObj, i) => {

        let linkedDomEl = btnObj.resolveLinkedDomElement(domEl);
        triggerHoverAnimation(linkedDomEl, btnObj);

    });

}

function triggerLinkedHoverAnimationReverse(domEl, firstBtnObj) {

    firstBtnObj.linkedBoxShadowBtns.forEach((btnObj, i) => {
        let linkedDomEl = btnObj.resolveLinkedDomElement(domEl);
        triggerHoverAnimationReverse(linkedDomEl, btnObj);
    });

}

function triggerLinkedClickAnimation(domEl, firstBtnObj) {

    firstBtnObj.linkedBoxShadowBtns.forEach((btnObj, i) => {
        let linkedDomEl = btnObj.resolveLinkedDomElement(domEl);

        if (btnObj.hasClickAnimationItself) {
            triggerClickAnimation(linkedDomEl, btnObj);
        }

    });

}

function triggerLinkedClickAnimationReverse(domEl, firstBtnObj) {

    firstBtnObj.linkedBoxShadowBtns.forEach((btnObj, i) => {
        let linkedDomEl = btnObj.resolveLinkedDomElement(domEl);

        if (btnObj.hasClickAnimationItself) {
            triggerClickAnimationReverse(linkedDomEl, btnObj);
        }
    });

}

function makeAnimationTemplate(btnObj) {
    let template;

    template = `
    @keyframes `+btnObj.elName+`_hover_anmtn {
        `+btnObj.elHoverKeyframes+`
    }

    .`+btnObj.elName+`_hover_animation {
        animation-name: `+btnObj.elName+`_hover_anmtn;
        animation-duration: ${btnObj.elHoverAnimDuration};
        animation-timing-function: ease-out;
        animation-play-state: paused;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    @keyframes `+btnObj.elName+`_hover_anmtn_reverse {
        `+btnObj.elHoverKeyframesReverse+`
    }

    .`+btnObj.elName+`_hover_animation_reverse {
        animation-name: `+btnObj.elName+`_hover_anmtn_reverse;
        animation-duration: ${btnObj.elHoverReverseAnimDuration};
        animation-timing-function: ease-out;
        animation-play-state: paused;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    @keyframes `+btnObj.elName+`_click_anmtn {
        `+btnObj.elClickKeyframes+`
    }

    .`+btnObj.elName+`_click_animation {
        animation-name: `+btnObj.elName+`_click_anmtn;
        animation-duration: ${btnObj.elClickAnimDuration};
        animation-timing-function: `+btnObj.clickAnimationFunction+`;
        animation-play-state: paused;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    @keyframes `+btnObj.elName+`_click_anmtn_reverse {
        `+btnObj.elClickKeyframesReverse+`
    }

    .`+btnObj.elName+`_click_animation_reverse {
        animation-name: `+btnObj.elName+`_click_anmtn_reverse;
        animation-duration: ${btnObj.elClickReverseAnimDuration};
        animation-timing-function: `+btnObj.clickAnimationFunction+`;
        animation-play-state: paused;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }`;

    return template;
}

// ****** //

// TODO: refactor, may be when remove jquery to React

// alias
function makeCommonAnimatedBtnObj() {
    return makeCommonBoxShadowObj();
}

// alias
function initAnimatedBtnObj() {
    return makeCommonBoxShadowObj();
}

// alias
function makeAnimatedBtn(btnObj) {
    return boxShadowBtn(btnObj);
}


// ****** //

function makeCommonSliderObj() {

    const sliderObj = {};

    sliderObj.direction = "";

    sliderObj.slidingElementsObjects = [
        {
            selector: "",
            class: "",
            elementSlidingEvent: function() {
                console.log("run callback")
            }
        },
    ];

    sliderObj.slidingPointerClass = [];

    sliderObj.isSliderPointerExists = function() {
        let res = false;
        if (sliderObj.slidingPointerClass.length > 0) {
            res = true;
        }
        return res;
    };

    sliderObj.slidingPointerFieldClass = "";
    sliderObj.slidingPointerMovingSize = "20";

    sliderObj.disappearingTime = 300;
    sliderObj.appearingTime = 300;

    sliderObj.pointerDisappearingTime = 200;
    sliderObj.pointerAppearingTime = 100;

    return sliderObj;
}

function slider (sliderObj) {
    let slidingElementsObjects = sliderObj.slidingElementsObjects;

    slidingElementsObjects.forEach((activeElementObject, i) => {

        let activeElement = $(activeElementObject.selector);

        let futureElement = resolveFutureElement(sliderObj, activeElement);

        activeElement.fadeOut(sliderObj.disappearingTime);

        futureElement.fadeIn(sliderObj.appearingTime);
        futureElement.addClass(activeElementObject.class);

        activeElement.removeClass(activeElementObject.class);

        activeElementObject.elementSlidingEvent();
    });

    resolveSliderPointer(sliderObj);
};

function resolveFutureElement(sliderObj, activeElement) {
    let futureElement;

    if (sliderObj.direction === 'next') {
        futureElement = activeElement.next();
    } else {
        futureElement = activeElement.prev();
    }

    if (futureElement.length === 0 && sliderObj.direction === 'next') {
        futureElement = activeElement.prevAll().last();
    } else if (futureElement.length === 0 && sliderObj.direction === 'prev') {
        futureElement = activeElement.nextAll().last();
    }

    return futureElement;
}

function resolveSliderPointer(sliderObj) {

    if (sliderObj.isSliderPointerExists()) {
        let sliderPointer = $("."+sliderObj.slidingPointerClass);

        let moveSize = sliderObj.slidingPointerMovingSize;

        let disappearingSign = "+";
        let appearingSign = "-";
        if (sliderObj.direction === "prev") {
            disappearingSign = "-";
            appearingSign = "+";
        }

        sliderPointer.animate({
            left: disappearingSign+"="+moveSize,
        }, sliderObj.pointerDisappearingTime, function() {
            sliderPointer.hide();
            futurePointerField.html(sliderPointer);
            sliderPointer.animate({left: appearingSign+"="+moveSize},10,function(){});
            sliderPointer.fadeIn(sliderObj.pointerAppearingTime);
        });

        let pointerField = sliderPointer.parent().parent()
            .find("."+sliderObj.slidingPointerFieldClass);

        let futurePointerField = resolveFutureElement(sliderObj, pointerField);

        pointerField.removeClass(sliderObj.slidingPointerFieldClass);
        futurePointerField.addClass(sliderObj.slidingPointerFieldClass);
    }

}
