/* Handle HTTP route GET / and POST / (root; or more commonly, HOME)
  if url "/" && GET request
    => show search

  if url "/" && POST request
    => redirect to /:username


*/
var Profile = require('./profile.js');
var renderer = require('./renderer.js');



function home(request, response){
    if(request.url === "/"){
      response.writeHead(200, {'Content-Type': 'text/plain'});
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    };
};

/* Handle HTTP route GET /:username (parameter) i.e. /sunilunka
  if url == "/..."


     

*/

function user(request, response){

  var username = request.url.replace("/", "");
  if(username.length > 0){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // => get JSON from Treehouse:
    var studentProfile = new Profile(username);

    // >> on END, show profile
    studentProfile.on("end", function(profileJSON){
      // Store the values that we need
      var values = {
        avatarUrl: profileJSON.gravatarURL,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };

      // Simple response
      console.log(values);
      renderer.view("header", {}, values, response);
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);      
      response.end();

    });



    //  >> on ERROR, show error
    studentProfile.on("error", function(error){
      // show error
      renderer.view("header", {}, response);
      renderer.view("error", { errorMessage: error.message }, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });
  }
};

module.exports.home = home;
module.exports.user = user;