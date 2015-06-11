/* Exercise 2: Color picker */
$(document).ready(function() {

  $(document).on('keydown keyup keypress', '#color', function() {
    color = $(this).val();
    setPreviewColor(color);
  })

})

function setPreviewColor(color) {
  // set background color
  $('.preview').css('background-color', color);
}
