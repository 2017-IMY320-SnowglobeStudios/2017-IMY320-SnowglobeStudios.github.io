$(document).ready(function() {

    var loader = $("#loader");
    var loaderImg = $("#loader div");
    loaderImg.css("height", loaderImg.css("width"));

    loaderImg.css("margin-top", Math.round((loader.height() - loaderImg.height()) / 2) + 'px');
    loaderImg.css("margin-left", Math.round((loader.width() - loaderImg.width()) / 2) + 'px');

    $(window).on("load", function() {

        loader.css("display", "none");
        
    });
});
