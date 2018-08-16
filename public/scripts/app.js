/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  function renderTweet(tweets) {
    for (var i = 0; i < tweets.length; i++){
      if (i === tweets.length-1){
        var $tweetNewestItem = createTweetElement(tweets[i]);
        $('#tweet-area').prepend($tweetNewestItem);
      }
    }
  }
  function renderTweets(tweets) {
    for (var i = 0; i < tweets.length; i++){
      var $tweetItem = createTweetElement(tweets[i]);
      $('#tweet-area').append($tweetItem);
    }
  }

  function loadTweets(cb){
    $.get("/tweets").done(function(tweets) {
      cb(tweets);
    });
  }

  function createTweetElement(tweetdb) {
    var miliseconds = tweetdb["created_at"];
    var myCurDate = new Date().getTime();
    var diffTime = myCurDate - miliseconds;
    var totalDays = Math.floor(diffTime / 86400000);

    var $tweet = $("<article>").addClass("tweet");
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
    $tweet.append($header);

    $tweet.append($p_body);

    $span.appendTo($footer);
    $i_heart.appendTo($footer);
    $i_retweet.appendTo($footer);
    $i_flag.appendTo($footer);
    $tweet.append($footer);

    return $tweet;
  }


  var formSubmit = $("#tweet-post");
  formSubmit.on("submit", function(event) {
    event.preventDefault();

    var inputData = $(this).serialize();
    var error = $(this).find("p.error");

    if (error.text() !== ""){
      error.slideUp("fast");
    }

    if (inputData.length > 145) {
      error.text("Over exceed tweet limit!!!");
      error.slideDown("fast");
    } else {
      $.post("/tweets", inputData).done(function(tweets) {
        loadTweets(renderTweet);
      });
    }
  });

  loadTweets(renderTweets);
});
