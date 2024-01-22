$(window).on('load', function () {
    $("#loader").fadeOut();
    console.log("first Loader")
});

$(document).ready(function () {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function () {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
    });
});


// Fancy Media
$('.fancybox-media').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    helpers: {
        media: {}
    }
});

// Normal Slider
$('.work-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
});

$('.review-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
});

// Progress Bar
jQuery(document).ready(function () {
    jQuery(".skillbar").each(function () {
        jQuery(this)
            .find(".progressbar")
            .animate({
                width: jQuery(this).attr("data-percent"),
            },
                6000
            );
    });
});

// Count
jQuery(".Count").each(function () {
    var $this = $(this);
    jQuery({
        Counter: 0,
    }).animate({
        Counter: $this.text(),
    }, {
        duration: 6000,
        easing: "swing",
        step: function () {
            $this.text(Math.ceil(this.Counter));
        },
    });
});

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 90
                }, 500, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// OUR PROCESS NAV
jQuery(function ($) {
    var $nav = $('.fixed-product');
    var $win = $(window);
    var winH = $win.height();   // Get the window height.
    var containerWidth = $('.container').outerWidth();

    $win.on("scroll", function () {
        if ($(this).scrollTop() > (winH / 1.5)) {
            $nav.addClass("sticky-product");
            $nav.css("max-width", `${containerWidth}px`);
            var a = $(".sticky-product").height();
            $(".fixed-productextra").css('height', `${a + 30}px`);
        } else {
            $nav.removeClass("sticky-product");
            // $nav.css("width", `0px`)
            $(".fixed-productextra").css('height', '0px');
        }
    }).on("resize", function () { // If the user resizes the window
        winH = $(this).height(); // you'll need the new height value
    });

});

// OUR PROCESS SECTION
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    var $win1 = $(window);
    var winH1 = $win1.height();

    winH1 = winH1 / 1.5;

    var scrDis = scrollDistance + winH1;

    // Assign active class to nav links while scolling
    $('.page-section').each(function (i) {
        if ($(this).position().top <= scrDis) {
            $('.prodNav li.current').removeClass('current');
            $('.prodNav li').eq(i).addClass('current');
        }
    }).on("resize", function () { // If the user resizes the window
        winH1 = $(this).height(); // you'll need the new height value
    });
}).scroll();


// Accordion
$('.acc_title').on('click', function () {
    $(this).parent().parent().find('li').removeClass('active')
    $(this).parent().parent().find('.acc_desc').slideUp();
    $(this).parent('li').addClass('active')
    if (!$(this).next('.acc_desc').is(':visible')) {
        $(this).next('.acc_desc').slideDown();
    } else {
        $(this).parent().parent().find('li').removeClass('active')
    }
});

// Sticky Navigation
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});




// Navigation Menu 
$(window).on('load', function () {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function () {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            $(this).removeClass('active');
            $(this).closest('li').addClass('active')
            $('ul.menu li.first').removeClass('active');
        }
    });

});

// Tabbing JS
$('[data-targetit]').on('click', function (e) {
    $(this).addClass('current');
    $(this).siblings().removeClass('current');
    var target = $(this).data('targetit');
    $('.' + target).siblings('[class^="box-"]').hide();
    $('.' + target).fadeIn();
    $(".tab-slider").slick("setPosition");
});

// HOME PAGE
// Process Works Section
$(window).scroll(function () {
    var check = $(".proceSec-cont").length < 1;
    if (check == false) {
        var scroll = $(window).scrollTop();
        var sec = $(".proceSec-cont").offset().top;
        var secHeight = $(".proceSec-cont").height();
        var len = $('.proceSec-cont > ul > li'), str;
        var time = 800;

        if (scroll >= (sec - secHeight)) {
            $.each(len, function (index, value) {
                str = (300 + 100 * (index - 1)) + "ms";
                setTimeout(function () {
                    len.eq(index).addClass("active");
                    len.eq(index).css('opacity', '1');
                }, time);
                time += 800;
            });
        }
    }
});

// VIDEO AFTER BEFORE EFFECT 
$('.beforeAfter').beforeAfter({

    // is draggable/swipeable
    movable: true,

    // click image to move the slider
    clickMove: true,

    // always show the slider
    alwaysShow: true,

    // intial position of the slider
    position: 50,

    // opacity between 0 and 1
    opacity: 1,
    activeOpacity: 1,
    hoverOpacity: 1,

    // slider colors
    separatorColor: '#000000',
    bulletColor: '#F4BB06',
    arrowColor: '#000818',

});


// ABOUT US PAGE
// MARQUEE TEXT
$(".marquee_text1").marquee({
    direction: "left",
    duration: 10000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
});

//Text Effect GSAP
$(".text2").each(function () {
    $(this).html(
        $(this)
            .text()
            .replace(/([^\x00-\x80]|\w)/g, "<span class='2_text'>$&</span>")
    );
});
var $text2 = $(".text2 span"),
    tl_2 = new TimelineMax({
        repeat: -1
    });

tl_2.staggerFrom(
    $text2,
    0.5, {
    top: "+=25px",
    rotation: "-=-3deg",
    alpha: 0,
    scale: 0.8,
    ease: Power1.easeOut,
}, 0.15).to($text2, 0.5, {
    alpha: 0,
    ease: Power1.easeOut
}, "+=1.2");

// TEXT ANIMATION
// document.addEventListener("DOMContentLoaded", function (event) {
//     animation_text_1("#text-anim");
// });

// function animation_text_1(element) {
//     var newText = "";
//     var theText = document.querySelector(element);
//     for (i = 0; i < theText.innerText.length; i++) {
//         newText += "<div>";
//         if (theText.innerText[i] == " ") { newText += "&nbsp;" }
//         else { newText += theText.innerText[i]; }
//         newText += "</div>";
//     }
//     theText.innerHTML = newText;
//     gsap.fromTo(element + " div", {
//         opacity: 0,
//         y: 90
//     }, {
//         duration: 2,
//         opacity: 1,
//         y: 0,
//         stagger: 0.03,
//         ease: "elastic(1.2, 0.5)",
//         scrollTrigger: {
//             trigger: element,
//             start: "top 70%", // start when the top of the <h1> reaches 70% down from the top of the viewport
//             toggleActions: "restart none none reverse"
//         }
//     });
// }




// OUR WORK POPUP
$(document).on('click', '.ourWorkBtn', function () {
    let myvideo = $('.workPopup-banner video');
    myvideo[0].currentTime = 0;
    $('.workOverlay').show();
    $('.workPopup').show();
    $('body').addClass('scrollStop');
    var srcs = myvideo.find('source').attr('src');
    myvideo.find('source').attr('src', `${srcs}#t=15,20`)
    myvideo[0].play();
});

$(document).on('click', '.workPopup-closed', function () {
    $('.workOverlay').hide();
    $('.workPopup').hide();
    $('body').removeClass('scrollStop')
});

// OUR WORK SLIDER
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    items: 4,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        // 1660: {
        //    items: 5
        // },
        // 2000: {
        //    items: 6
        // },
        // 2200: {
        //    items: 7
        // },
        // 2600: {
        //    items: 8
        // },
        // 3000: {
        //    items: 10
        // },
        // 3500: {
        //    items: 12
        // }
    }
});

/* RESPONSIVE JS */
if ($(window).width() < 825) {
}

















/* --- Split the text, Burrowing Owl --- */
function setupSplits() {

    var tlSplitBurrowing = gsap.timeline(),
        SplitBurrowing = new SplitText("#titleBurrowing", { type: "chars" }),
        chars = SplitBurrowing.chars; //an array of all the divs that wrap each character


    tlSplitBurrowing.from(chars, {
        duration: 0.8,
        opacity: 0,
        y: 10,
        ease: "circ.out",
        stagger: 0.02,
        scrollTrigger: {
            trigger: "#titleBurrowing",
            start: "top 75%",
            end: "bottom center",
            scrub: 1
        }
    }, "+=0");
};
document.addEventListener("DOMContentLoaded", function (event) {
    setupSplits();
});

// ScrollTrigger.addEventListener("refresh", setupSplits);


