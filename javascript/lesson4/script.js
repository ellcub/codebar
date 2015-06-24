// github user finder example
function getGithubInfo(username) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/", true);

  return xhr;
}


$(document).ready(function() {
  $(document).on('keypress', '#username', function(e) {
    if (e.which === 13) {
      // get val() from input field

      // assign getGithubInfo(username) to a variable response
    }
  })
});
