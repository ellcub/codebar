/* Exercise 2: Color picker */
$(document).ready(function() {

  $(document).on('keydown keyup keypress', '#color', function() {
    color = $(this).val();
    rgb = setPreviewColor(color);
    $('.color-code').text(rgb);
  })

})

function setPreviewColor(color) {
  // set background color
  $('.preview').css('background-color', color);
  return $('.preview').css('background-color');
}
