var node_mailer = require('nodemailer');

var transporter = node_mailer.createTransport(
	
	{
		service:'QQ',
		auth:{
			user:"461505435@qq.com",
			pass:"lqq6633061129"
		}
	}
	
	
);





module.exports.sendMail = function(request){
	
		console.log(typeof(request));
	if(typeof(request) =='object')
	return;
	

	// 
	// var json = 	JSON.parse(request.substring(5,request.length));
	
	console.log(request);
	transporter.sendMail({
    from    : 'Kris<461505435@qq.com>'
  , to      : '461505435@qq.com,824945943@qq.com,442346129@qq.com'
  , subject : '三国项目git pull 提醒'
  , html    : request          
}, function(err, res) {
    console.log(err, res);
});

	
}