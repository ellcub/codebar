/* Exercise 2: Color picker */
$(document).ready(function() {
  // initial colors
  var colors = [ "22ac5e", "d68236", "123456", "ff1111", "ff6611",
                 "ffac5e", "008236", "789abc", "11ff11", "66ff11"  ];
  $.each(colors, function(index, element) {
    addBox(element);
  })

  // initialise preview box with random color
  setPreviewColor(colors[Math.floor( Math.random() * colors.length)]);

  // set color from text input
  $(document).on('keydown keyup keypress', '#color', function() {
    color = $(this).val();
    rgb = setPreviewColor(color);
    $('.color-code').text(rgb);
  })

  // add to favourites
  $(document).on('click', '#add-to-favorite', function() {
    if ($('#colors .item').length >= 16) {
      $('#colors .item:last').remove();
    }
    var color = $('#color').val();
    addBox(color);
    $('#color').val("");
    $('#color').focus();
  })

  // change preview box on mouseover
  var previewColor;
  $(document).on('mouseenter', '#colors .item', function() {
    previewColor = $('.preview').css('background-color');
    setPreviewColor($(this).css('background-color'));
  }).on('mouseleave', '#colors .item', function() {
    setPreviewColor(previewColor);
  })

})

function setPreviewColor(color) {
  // set background color
  $('.preview').css('background-color', color);
  return $('.preview').css('background-color');
}

function addBox(color) {
  $('#colors').prepend("<div class='item' style='background-color: " + color + ";'></div>");
}
