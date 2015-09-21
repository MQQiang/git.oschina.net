var http = require('http');
var url = require('url');
var mail = require('./email');
var iconv = require('iconv-lite');
var BufferHelper = require('bufferhelper');
// var urlencode = require('urlencode');



http.createServer(function(request,response){
	
	
	 var bufferHelper = new BufferHelper();
	
	// request.setEncoding("utf8");
	
	mail.sendMail(request);
	
	request.addListener("data", function(postDataChunk) {
   
    
      bufferHelper.concat(postDataChunk);
      console.log("Received POST data chunk"+postDataChunk);
     
    });

  request.addListener("end", function() {
      
    	// mail.sendMail(iconv.decode(bufferHelper.toBuffer(),'GBK'));
    // var content=  urlencode.parse(bufferHelper.toBuffer(), {charset: 'gbk'});
   var  content = decodeURIComponent(bufferHelper.toBuffer());
    console.log(content);
    
    mail.sendMail(content);
      
    })
	
	
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
	
}).listen(9999);

console.log('server is runing at 9999');