// github user finder example
function getGithubInfo(username) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/" + username, false);
  xhr.send();
  return xhr;
}

function noSuchUser(username) {
  $("#profile h2").html("No such user: " + username);
  $("#profile .information").hide();
  $("#profile .avatar").hide();
}

function showUser(user) {
  $("#profile .information").show();
  $("#profile .avatar").show();
  // Display the user's Github id
  $("#profile h2").html(user.login + " is GitHub user #" + user.id);
  // Add a link to the user's Github profile in #profile .information. The link should have a class profile
  $("#profile .information").html("<a href='" + user.html_url + "' class='profile'>" + user.login + "</a>");
  // Add an image in #profile .avatar. To do that, you can use the avatar_url from the response.
  $("#profile .avatar").html("<img src='" + user.avatar_url + "' alt='" + user.login + "'>");
}


$(document).ready(function() {
  $(document).on('keypress', '#username', function(e) {

    if (e.which === 13) {
      // get val() from input field
      var username = $('#username').val();
      // assign getGithubInfo(username) to a variable response
      var response = getGithubInfo(username);
      if (response.status === 200) {
        showUser(JSON.parse(response.responseText));
      } else {
        noSuchUser(username);
      }
    }

  })
});
