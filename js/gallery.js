var top1_wallopEl_left = document.querySelector('.topic1-Wallop-left');
var top1_wallopEl_right = document.querySelector('.topic1-Wallop-right');
var top1_wallopElTiny = document.querySelector('.topic1-Tiny-Wallop');
var top2_wallopEl_left = document.querySelector('.topic2-Wallop-left');
var top2_wallopEl_right = document.querySelector('.topic2-Wallop-right');
var top2_wallopElTiny = document.querySelector('.topic2-Tiny-Wallop');
var top3_wallopEl_left = document.querySelector('.topic3-Wallop-left');
var top3_wallopEl_right = document.querySelector('.topic3-Wallop-right');
var top3_wallopElTiny = document.querySelector('.topic3-Tiny-Wallop');

var top1_slider_left = new Wallop(top1_wallopEl_left);
var top1_slider_right = new Wallop(top1_wallopEl_right);
var top1_sliderMini = new Wallop(top1_wallopElTiny);
var top2_slider_left = new Wallop(top2_wallopEl_left);
var top2_slider_right = new Wallop(top2_wallopEl_right);
var top2_sliderMini = new Wallop(top2_wallopElTiny);
var top3_slider_left = new Wallop(top3_wallopEl_left);
var top3_slider_right = new Wallop(top3_wallopEl_right);
var top3_sliderMini = new Wallop(top3_wallopElTiny);

function slideImg () {
  $(".anim-incoming")
    .velocity("transition.slideRightIn");
}

$(document).ready(slideImg);

function slideLeft(obj) {
  obj.next();
}

function slideRight(obj) {
  obj.previous();
}

$('#topic-01-btn-next').on('click', function () {
  window.setTimeout(function() {slideLeft(top1_slider_left)},200);
  window.setTimeout(function() {slideLeft(top1_slider_right)},100);
  window.setTimeout(function() {slideLeft(top1_sliderMini)},0);
});

$('#topic-01-btn-prev').on('click', function () {
  window.setTimeout(function() {slideRight(top1_slider_left)},0);
  window.setTimeout(function() {slideRight(top1_slider_right)},100);
  window.setTimeout(function() {slideRight(top1_sliderMini)},200);
});

$('#topic-02-btn-next').on('click', function () {
  window.setTimeout(function() {slideRight(top2_slider_right)},200);
  window.setTimeout(function() {slideRight(top2_slider_left)},100);
  window.setTimeout(function() {slideRight(top2_sliderMini)},0);
});

$('#topic-02-btn-prev').on('click', function () {
  window.setTimeout(function() {slideLeft(top2_slider_right)},0);
  window.setTimeout(function() {slideLeft(top2_slider_left)},100);
  window.setTimeout(function() {slideLeft(top2_sliderMini)},200);
});

$('#topic-03-btn-next').on('click', function () {
  window.setTimeout(function() {slideLeft(top3_slider_left)},200);
  window.setTimeout(function() {slideLeft(top3_slider_right)},100);
  window.setTimeout(function() {slideLeft(top3_sliderMini)},0);
});

$('#topic-03-btn-prev').on('click', function () {
  window.setTimeout(function() {slideRight(top3_slider_left)},0);
  window.setTimeout(function() {slideRight(top3_slider_right)},100);
  window.setTimeout(function() {slideRight(top3_sliderMini)},200);
});