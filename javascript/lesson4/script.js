// github user finder example
function getGithubInfo(username) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/" + username, true);
  xhr.send();
  return xhr;
}

function noSuchUser(username) {
  $("#profile h2").html("No such user: " + username)
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
      if (response.status === 200) {

      } else {
        noSuchUser(username);
      }
    }

  })
});
