$(function () {

    "use strict";


    //=====NICE SELECT=====
    $('#select_js').niceSelect();
    $('#select_js2').niceSelect();
    $('#select_js3').niceSelect();
    $('#select_js4').niceSelect();
    $('#select_js5').niceSelect();
    $('#select_js6').niceSelect();
    $('#select_js7').niceSelect();
    $('#select_js8').niceSelect();
    $('#select_js9').niceSelect();
    $('#select_js10').niceSelect();



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
    });


    //=====DASHBOARD ADD STUDENT=====
    $(".add_btn").click(function () {
        $(".wsus__dashboard_content").addClass("show");
    });

    $(".back_btn").click(function () {
        $(".wsus__dashboard_content").removeClass("show");
    });


    //===venobox.js===
    $('.venobox').venobox();









});



