$(function() {
  $('body').on('mouseenter', 'article.tweet', function() {
    $(this).css("border", "1px solid #000");
    $(this).find("header").css('opacity', '1');
    $(this).children().find("i").css('visibility', 'visible');
  });
  $('body').on('mouseleave', 'article.tweet', function() {
    $(this).css("border", "1px solid #ccc");
    $(this).find("header").css('opacity', '0.75');
    $(this).children().find("i").css('visibility', 'hidden');
  });
});