//user information displaying on the screen
function userInformationHTML(user) {
   return `
        <h2>${user.name}
             <span class="small-name">
                  (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
            </span>
         </h2>
         <div class="gh-content>
            <div class="gh-avatar"
                <a href="${user.html_url} target="_blank">
                   <img src="${user.avatar_url}" width="80 height="80 alt="${user.login}" />
                </a>
            </div>
            <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>
         </div>`;
}

// fetch github user information
function fetchGitHubInformation(event) {
   var username = $("#gh-username").val();
   if (!username) {
      $("#gh-user-data").html(`<h2>Please enter Github username</h2>`);
      return;
   }
   //displaying our loader
   $("#gh-user-data").html(
      `<div id = "loader">
          <img src = "assets/css/loader.gif" alt = "loading..."/>
      </div>`)
   
   //Issue Promise
   $.when(
      $.getJSON(`https://api.github.com/users/${username}`)
   ).then(
      function(response) {
         var userData = response
         $("#gh-user-data").html(userInformationHTML(userData));
      }, function(errorResponse) {
         if (errorResponse.status === 404) {
            $("#gh-user-data").html(
               `<h2>No info found for user ${username}</h2>`)
         } else {
            console.log(errorResponse);
            $("#gh-user-data").html(
               `<h2>Error: ${errorResponse.response.JSON.message}</h2>`)
         }
      });
   
}