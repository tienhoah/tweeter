/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

$(function() {

  function createTweetElement(tweetdb) {
    var miliseconds = tweetdb["created_at"];
    var myCurDate = new Date().getTime();
    var diffTime = myCurDate - miliseconds;
    var totalDays = Math.floor(diffTime / 86400000);

    var $article = $("<article>").addClass("tweet");
    var $header = $("<header>");
    var $footer = $("<footer>");
    var $h1 = $("<h1>").addClass("username");
    var $p_body = $("<p>").addClass("comment");
    var $img = $("<img>").addClass("userlogo");
    var $p_header = $("<p>").addClass("usertag");
    var $i_retweet = $("<i>").addClass("fa fa-retweet");
    var $i_heart = $("<i>").addClass("fa fa-heart");
    var $i_flag = $("<i>").addClass("fa fa-flag");
    var $span = $("<span>").addClass("timestamp");

    $h1.text(tweetdb['user']['name']);
    $p_header.text(tweetdb['user']['handle']);
    profile_pic = tweetdb['user']['avatars']['small'];
    profile_pic_add = `src="${profile_pic}"`;
    $img.attr({src: `${profile_pic}`});
    $span.text(`${totalDays} days`);

    $p_body.text(tweetdb['content']['text']);

    $h1.appendTo($header);
    $img.appendTo($header);
    $p_header.appendTo($header);
    $article.append($header);

    $article.append($p_body);

    $span.appendTo($footer);
    $i_heart.appendTo($footer);
    $i_retweet.appendTo($footer);
    $i_flag.appendTo($footer);
    $article.append($footer);

    return $article;
  }

  var $tweet = createTweetElement(tweetData);
  console.log($tweet);
  console.log($('#tweet-area').append($tweet));
});
