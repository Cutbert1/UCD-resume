function fetchGitHubInformation(event) {
   var username = $("#gh-username").val();
   if (!username) {
      $("#gh-user-data").html(`<h2>Please enter Github username</h2>`);
      return;
   }
   $("#gh-user-data").html(
      `<div id = "loader">
          <img src = "assets/css/loader.gif" alt = "loading..."/>
      </div>`)

}