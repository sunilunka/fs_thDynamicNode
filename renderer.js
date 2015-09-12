
/* Function that handles the reading of files and merge in the values. 
  Read from file and get string. 
    => Merge values into string. 
*/

var fs = require('fs');


function mergeValues(values, content){
  // Cycle over keys
    // Replace all {{key}} with the value from the values object

}


function view(templateName, values, response){
  //  Read from template files. (Need template name);

  var fileContents = fs.readFileSync('./views/' + templateName + '.html');


    //  Insert values into content. (Need values to insert);
    fileContents = mergeValues(values, fileContents);


    //  Write out to the response. (Write out file to response);
    response.write(fileContents);
  

  
}

module.exports.view = view;