import $ from './jquery.min';

$('.song-item').hover(function () {
  $(this).find('.list-menu').stop().fadeIn()
  $(this).find('.list-time').children('a').stop().fadeIn()
}, function () {
  $(this).find('.list-menu').stop().fadeOut()
  $(this).find('.list-time').children('a').stop().fadeOut()
})

$('.list-check').on('click', function () {
  $(this).find('i').toggleClass('active')
})