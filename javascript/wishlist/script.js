/* Exercise 1: Wish list */

$(document).ready(function() {

  $(document).on('click', '#add-to-list', function() {
    var item = $('#item').val();
    addToList(item);
    $('#item').val("");
    $('#item').focus();
    updateTotal();
  })

  $(document).on('click', '.pending', function() {
    var parent_node = $(this).parent();
    parent_node.addClass('completed')
               .append('<span class="label success">Done!</span>');
    $(this).remove();
    updateTotal();
  })

})


function addToList(item) {
  $("ol#items").append("<li>" + item +
    "<span class='label pending'>Pending</span></li>");
}

function updateTotal() {
  pending = $('.pending').length;
  completed = $('.completed').length;
  $('.total').text("Pending: " + pending + " Completed: " + completed);
}
