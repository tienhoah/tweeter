$(function() {
  var tweetArticle = $("article.tweet");
  console.log(tweetArticle.children().find("i"));
  tweetArticle.hover(function() {
    $(this).parent().css('border', 'solid 1px');
    $(this).children().find("h1.username").css('opacity', '1');
    $(this).children().find("img.userlogo").css('opacity', '1');
    $(this).children().find("p.usertag").css('opacity', '1');
    $(this).children().find("i[name='icon']").css('visibility', 'visible');
  }, function() {
    $(this).parent().css('border', 'solid 1px #ccc');
    $(this).children().find("h1.username").css('opacity', '0.5');
    $(this).children().find("img.userlogo").css('opacity', '0.5');
    $(this).children().find("p.usertag").css('opacity', '0.5');
    $(this).children().find("i[name='icon']").css('visibility', 'hidden');
  });
});