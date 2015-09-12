/* Handle HTTP route GET / and POST / (root; or more commonly, HOME)
  if url "/" && GET request
    => show search

  if url "/" && POST request
    => redirect to /:username


*/
var Profile = require('./profile.js');



function home(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    if(request.url === "/"){
      response.write("Header\n");
      response.write("Search\n");
      response.end("Footer\n");
    };
};

/* Handle HTTP route GET /:username (parameter) i.e. /sunilunka
  if url == "/..."


     

*/

function user(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var username = request.url.replace("/", "");
  if(username.length > 0){
    response.write("Header\n");
    // => get JSON from Treehouse:
    var studentProfile = new Profile(username);

    // >> on END, show profile
    studentProfile.on("end", function(profileJSON){
      // Store the values that we need
      var values = {
        avatarURL: profileJSON.gravatarURL,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };

      // Simple response

      response.write(values.username + " has " + values.badges + " badges.\n");
      response.end("Footer\n");

    });



    //  >> on ERROR, show error
    studentProfile.on("error", function(error){
      // show error
      response.write(error.message + "\n");
      response.end("Footer\n");
    });
  }
};

module.exports.home = home;
module.exports.user = user;