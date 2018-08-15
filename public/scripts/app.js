/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


$(function() {

  function renderTweets(tweets) {

    for (var i = 0; i < tweets.length; i++){
      var $tweetItem = createTweetElement(tweets[i]);
      $('#tweet-area').append($tweetItem);
    }
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

  // renderTweets(data);
  var formSubmit = $("#tweet-post");
  formSubmit.on("submit", function(event) {
    event.preventDefault();
    let inputData = $(this).serialize();
    console.log(inputData);
  });

});
