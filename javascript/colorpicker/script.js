/* Exercise 2: Color picker */
$(document).ready(function() {
  var colors = [ "22ac5e", "d68236", "123456", "ff1111", "ff6611",
                 "ffac5e", "008236", "789abc", "11ff11", "66ff11"  ];

  $.each(colors, function(index, element) {
    addBox(element);
  })

  random_position = Math.floor( Math.random() * colors.length);
  random_color = colors[random_position];
  $('.preview').css('background-color', random_color);

  $(document).on('keydown keyup keypress', '#color', function() {
    color = $(this).val();
    rgb = setPreviewColor(color);
    $('.color-code').text(rgb);
  })

  $(document).on('click', '#add-to-favorite', function() {
    if ($('#colors .item').length >= 16) {
      $('#colors .item:last').remove();
    }
    color = $('#color').val();
    addBox(color);
    $('#color').val("");

    // reset focus
    $('#color').focus();
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
