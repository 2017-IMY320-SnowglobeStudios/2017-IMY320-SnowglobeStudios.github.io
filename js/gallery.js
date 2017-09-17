var top1_wallopEl = document.querySelector('.topic1-Wallop');
var top1_wallopElTiny = document.querySelector('.topic1-Tiny-Wallop');
var top2_wallopEl = document.querySelector('.topic2-Wallop');
var top2_wallopElTiny = document.querySelector('.topic2-Tiny-Wallop');
var top3_wallopEl = document.querySelector('.topic3-Wallop');
var top3_wallopElTiny = document.querySelector('.topic3-Tiny-Wallop');

var top1_slider = new Wallop(top1_wallopEl);
var top1_sliderMini = new Wallop(top1_wallopElTiny);
var top2_slider = new Wallop(top2_wallopEl);
var top2_sliderMini = new Wallop(top2_wallopElTiny);
var top3_slider = new Wallop(top3_wallopEl);
var top3_sliderMini = new Wallop(top3_wallopElTiny);

function slideImg () {
  $(".anim-incoming")
    .velocity("transition.slideRightIn");
}

$(document).ready(slideImg);

$('#topic-01-btn-next').on('click', function () {
  top1_slider.next();
  top1_sliderMini.next();
});

$('#topic-01-btn-prev').on('click', function () {
  top1_slider.previous();
  top1_sliderMini.previous();
});

$('#topic-02-btn-next').on('click', function () {
  top2_slider.previous();
  top2_sliderMini.previous();
});

$('#topic-02-btn-prev').on('click', function () {
  top2_slider.next();
  top2_sliderMini.next();
});

$('#topic-03-btn-next').on('click', function () {
  top3_slider.next();
  top3_sliderMini.next();
});

$('#topic-03-btn-prev').on('click', function () {
  top3_slider.previous();
  top3_sliderMini.previous();
});
