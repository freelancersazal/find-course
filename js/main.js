$(function () {

    "use strict";


    //=====NICE SELECT=====
    $('#select_js').niceSelect();
    $('#select_js2').niceSelect();
    $('#select_js3').niceSelect();
    $('#select_js4').niceSelect();
    $('#select_js5').niceSelect();



    //=====MENU SEARCH=====
    $(".search").click(function () {
        $(".wsus__search_form").addClass("show");
    });

    $(".close_search").click(function () {
        $(".wsus__search_form").removeClass("show");
    });


    //=====RADIAL PROGRESS BAR=====
    $("[id$='circle']").percircle();


    //=====PROGRESS BAR=====
    $(".progress-bar").ProgressBar();


    //=====COURSE LIST=====
    $(".list_plus").click(function () {
        $(".hidden_text").toggleClass("show");
    });


    //*========STICKY SIDEBAR=======
    $("#sticky_sidebar").stickit({
        top: 90,
    })


});
