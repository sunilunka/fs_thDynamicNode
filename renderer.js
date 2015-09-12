
/* Function that handles the reading of files and merge in the values. 
  Read from file and get string. 
    => Merge values into string. 
*/

var fs = require('fs');

function view(templateName, values, response){
  //  Read from template files. (Need template name);

  fs.readFile('/views/' + templateName + '.html', function (error, fileContents) {
    if (err) throw err;

    //  Insert values into content. (Need values to insert);

    //  Write out to the response. (Write out file to response);

    response.write(fileContents);
  });  

  

  
}

module.exports.view = view;