const http = require('http');

 

const httpServer = http.createServer( (request, response)=>{

    const url = request.url;

    response.end(`Request URL - ${url}`);

    //response.end("Hello, from server....");

} );

 

httpServer.listen(8080, ()=>{

    console.log(`Server started on port 8080`); 

});