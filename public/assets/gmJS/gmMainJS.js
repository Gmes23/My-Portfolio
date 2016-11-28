//logic for the menu//
var $images = [];
$("#d1 > .c1 > a").each(function() {
    $images.push($("img", this).attr("src"));
});
var $length = $images.length;
var $imgShow = 0;
$("#d1 > .c1").html( $("#d1 > .c1 > a:first") );
$(".navBar").click(function () {
    $("img").attr("src", $images[++$imgShow % $length]);
    $(".menu-spoiler").fadeIn(500);
});

$(".navBar-Showing").click(function () {
    $(".menu-spoiler").fadeOut(500);
});


var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

$('.mainContactButton').click(function(){
		modal.style.display = "block";
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(".gm-Project-1").click(function(e) {
    e.stopPropagation();
    $(".gmPro-Des-Section").fadeToggle();
});

$(document).click(function(e) {
    if (!$(e.target).closest('.gmPro-Des-Section').length) {
        $('.gmPro-Des-Section').fadeOut();
    }
});
