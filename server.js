var express = require('express');
var serveStatic = require('serve-static');
    var app = express();
    app.use(serveStatic(__dirname));
    app.listen(8080, function(err){
        if(err)
            throw(err);
    console.log('Server running on 8080...');
});
