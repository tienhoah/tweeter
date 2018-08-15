$(function() {
  var tweetArticle = $("article.tweet");

  tweetArticle.hover(function() {
    $(this).css("border", "1px solid #000");
    $(this).find("header").css('opacity', '1');
    $(this).children().find("i").css('visibility', 'visible');
  }, function() {
    $(this).css("border", "1px solid #ccc");
    $(this).find("header").css('opacity', '0.5');
    $(this).children().find("i").css('visibility', 'hidden');
  });
});