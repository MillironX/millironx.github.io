/*!
 * Custom scripts for millironx.github.io
 */

// Resize the window image on first page load
$(".img-src").width($("#main-content").width());
if ($("#top-container").width() > 768) {
    $("#nav-link-container").height($("#nav-link-list").height());
}

// Resize the window image if the screen size changes
$(window).resize(function () {
    $(".img-src").width($("#main-content").width());
    if ($("#top-container").width() > 768) {
        $("#nav-link-container").height($("#nav-link-list").height());
    }
    else {
        $("#nav-link-container").css('height', '');
    }
});

// Squeeze the heading text into the proper box
$("#motto").fitText();
$("[rel='tooltip']").tooltip();

// Animate the transparency for the glossy scroll effect
var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    if (oVal >= 3) {
        $(".img-src").css("visibility", "hidden")
    }
    else {
        $(".img-src").css("visibility", "")
    }

});
