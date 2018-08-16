
$(function() {
  function findSibling(child, sibling){
    return $(child).parent().find(sibling);
  }

  function setCounter(element, value) {
    $ (element).text(`${value}`);
    if (value < 0) {
      $ (element).css('color', 'red');
    } else {
      $ (element).css('color', 'black');
    }
  }
  var updateCharCount = function(event) {
    const maxChar = 140;
    const textLen = $(this).val().length;
    const diff = maxChar - textLen;
    const counter = findSibling(this, "span.counter");
    setCounter(counter, diff);
  }

  const textArea = $("textarea[name=text]");
  const composeBox = $("section.new-tweet");
  const composeButton = $("button.compose")

  textArea.on('keydown', updateCharCount);

  composeButton.on("click", function(event) {
    composeBox.slideToggle("slow", function() {
      textArea.focus();
    });
  });
});
