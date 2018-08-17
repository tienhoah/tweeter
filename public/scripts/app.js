$(function() {
  function renderLastTweet(tweets) {
    var newestTweet = tweets.slice(-1);

    newestTweet.forEach(function(tweet) {
      var $tweet = createTweetElement(tweet);
      $('#tweet-area').prepend($tweet);
    });
  }

  function renderAllTweets(tweets) {
    tweets.forEach(function(tweet) {
      var $tweet = createTweetElement(tweet);
      $('#tweet-area').prepend($tweet);
    });
  }

  function loadTweets(cb) {
    $.get("/tweets").done(function(tweets) {
      cb(tweets);
    });
  }

  function createHeader(user_header) {
    var $outputHeader = $("<header>"),
        $img          = $("<img>").addClass("userlogo"),
        $h1           = $("<h1>").addClass("username"),
        $p            = $("<p>").addClass("usertag"),
        profilePic    = user_header['avatars']['small'];

    $img.attr('src', `${profilePic}`);
    $h1.text(user_header['name']);
    $p.text(user_header['handle']);

    $img.appendTo($outputHeader);
    $h1.appendTo($outputHeader);
    $p.appendTo($outputHeader);

    return $outputHeader;
  }

  function createFooter(tweet_timestamp) {
    var $outputFooter = $("<footer>"),
        $i_retweet    = $("<i>").addClass("fa fa-retweet"),
        $i_heart      = $("<i>").addClass("fa fa-heart"),
        $i_flag       = $("<i>").addClass("fa fa-flag"),
        $span         = $("<span>").addClass("timestamp");

    var currentDate = new Date().getTime(),
        calDays     = currentDate - tweet_timestamp,
        totalDays   = Math.round(calDays / 86400000);

    $span.text(`${totalDays} days`);

    $span.appendTo($outputFooter);
    $i_heart.appendTo($outputFooter);
    $i_retweet.appendTo($outputFooter);
    $i_flag.appendTo($outputFooter);

    return $outputFooter;
  }

  function createTweetElement(tweetdb) {
    var headerInfo = tweetdb['user'],
        footerInfo = tweetdb['created_at'];

    var $tweet     = $("<article>").addClass("tweet"),
        $p         = $("<p>").addClass("comment");

    $p.text(tweetdb['content']['text']);

    $tweet.append(createHeader(headerInfo));
    $tweet.append($p);
    $tweet.append(createFooter(footerInfo));

    return $tweet;
  }

  var formSubmit = $("#tweet-post");
  formSubmit.on("submit", function(event) {
    event.preventDefault();

    var inputData = $(this).serialize(),
        error     = $(this).find("p.error");

    if (error.text() !== ""){
      error.slideUp("fast");
    }

    if (inputData.length > 145) {
      error.text("Over exceed tweet limit!!!");
      error.slideDown("fast");
    } else {
      $.post("/tweets", inputData).done(function(tweets) {
        loadTweets(renderLastTweet);
      });
    }
  });

  loadTweets(renderAllTweets);
});
