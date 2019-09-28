$(".img-src").width($("#main-content").width());
if ($("#top-container").width() > 768) {
    $("#nav-link-container").height($("#nav-link-list").height());
}
$(window).resize(function () {
    $(".img-src").width($("#main-content").width());
    if ($("#top-container").width() > 768) {
        $("#nav-link-container").height($("#nav-link-list").height());
    }
    else {
        $("#nav-link-container").css('height', '');
    }
});

$("#motto").fitText();
$("[rel='tooltip']").tooltip();