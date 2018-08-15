function findSibling(child, sibling){
  return $(child).parent().find(sibling);
}

function setCounter(element, value) {
  $ (element).text(`${value}`);
  if (value < 0) {
    $ (value).css('color', 'red');
  } else {
    $ (value).css('color', 'black');
  }
}
var updateCharCount = function(event) {
    const maxChar = 140;
    const textLen = $(this).val().length;
    const diff = maxChar - textLen;
    const counter = findSibling(this, "span.counter");
    setCounter(counter, diff);
}

$(function() {
  const textArea = $("textarea[name=text]");
  const tweetArticleHeader = $("article.tweet header");
  textArea.on('keydown', updateCharCount);
});

