var express = require('express');
var http=require('http');
var sio=require('socket.io');
var router = express.Router();

var names=[];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.sendFile(__dirname+'/index.ejs');
});
router.prepareSokcetio=function(server){
	var io=sio.listen(server);
	io.sockets.on('connection',function(socket){
		socket.on('login',function(name){
			for(var i=0;i<names.length;i++){
				if(names[i]==name){
					socket.emit('duplicate');
					return;
				}
			}

			names.push(name);
			io.sockets.emit('login',name);
			io.sockets.emit('sendClients',names);
			
		});
		socket.on('chat',function(data){
			io.sockets.emit('chat',data);
		});
		socket.on('logout',function(name){
			for(var i=0;i<names.length;i++){
				if(names[i]==name){
					names.splice(i,1);
					break;
				}
			}
			socket.broadcast.emit('logout',name);
			io.sockets.emit('sendClients',names);
		})
	})
}
	

module.exports = router;
