// github user finder example
function getGithubInfo(username) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/" + username, true);
  xhr.send();
  return xhr;
}


$(document).ready(function() {
  $(document).on('keypress', '#username', function(e) {

    if (e.which === 13) {
      // get val() from input field
      var username = $('#username').val();
      console.log(username);
      // assign getGithubInfo(username) to a variable response
      var response = getGithubInfo(username);
      console.log(response);
    }

  })
});
