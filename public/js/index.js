var user_name,socket;
var username=$('#username');
var login=$('#login');
var logout=$('#logout');
var chat_body=$(".chat_body");
var msg_textarea=$('.msg_textarea');
var send_btn=$(".send_btn");
var user_list=$(".user_list");
$(function(){
	
	username.focus().select();

	$(window).unload(function(){
		window_colse();
	})

	// tips('123',1500,'error')
	// addmsg('hahah',2,'xiaomi');
})	

login.on('click',function(){
	btn_login_onclick();
});
logout.on('click',function(){
	btnlogout();
});
send_btn.on('click',function(){
	btnsend_click()
});
// 消息显示 
function addmsg(msg,status,names){
	status=status?status:0; 
	var times=time();
	switch(status){
		case 0: 
			addtext='<p>'+times+msg+'</p>';
			break;
		case 1:
			addtext='<p>'+times+'欢迎用户<span>'+names+'</span>进入聊天室</p>';
			break;
		case 2:
			addtext='<p>'+times+names+'说：'+msg+'</p>';
			break;
		case 3:
			addtext='<p>'+times+names+'已退出聊天室</p>';
			break;
	}
	$(".chat_body").append($(addtext));
}

// 登录点击事件
function btn_login_onclick(){
	if(username.val().trim()==""){
		tips('请输入用户名', 1500, 'error');
		return 
	}
	user_name=username.val();
	socket=io.connect();
	socket.on('connect',function(){
		addmsg('与聊天服务器的连接已建立', 0);
		socket.on('login',function(name){
			addmsg('', 1, name);
		});
		socket.on('sendClients',function(names){
			var str='';
			names.forEach(function(name){
				str+=name+'<br>';
			});
			user_list.html(str);
		});
		socket.on('chat',function(data){
			addmsg(data.msg, 2, data.user);
		});
		socket.on('disconnect',function(){
			addmsg('与服务器之间的连接已断开', 0);
			login.attr('disabled',true);
			logout.attr('disabled',true);
			send_btn.attr('disabled',false);
			user_list.html('');
		});
		socket.on('logout',function(name){
			addmsg('', 3, name);
		});
		socket.on('duplicate',function(){
			tips('改用户名已被使用', 1500, 'error');
			socket.disconnect();
			send_btn.attr('disabled',true);
			logout.attr('disabled',true);
			login.attr('disabled',false);
		});
	});
	socket.on('error',function(err){
		addmsg('与聊天服务器之间的连接发生错误', 0);
		socket.disconnect();
		socket.removeAllListeners('connect');
		io.sockets={};
	});
	socket.emit('login',user_name);
	send_btn.attr('disabled',false);
	logout.attr('disabled',false);
	login.attr('disabled',true);

}
// 发送消息
function btnsend_click(){
	var msg=msg_textarea.val();
	if(msg.length>0){
		socket.emit('chat',{user:user_name,msg:msg});
		msg_textarea.val('');
	}else{
		tips('请输入内容', 1500, 'error')
	}
}

// 退出 
function btnlogout(){
	socket.emit('logout',user_name);
	socket.disconnect();
	socket.removeAllListeners('connect');
	io.sockets={};
	addmsg('', 3, user_name);
	user_list.html('');
	send_btn.attr('disabled',true);
	logout.attr('disabled',true);
	login.attr('disabled',false);
}
// 关闭聊天室
function window_colse(){
	socket.emit('logout',user_name);
	socket.disconnect();
}

// 时间
function time(){
	var date=new Date();
	var hours=addzero(date.getHours());
	var minutes=addzero(date.getMinutes());
	var seconds=addzero(date.getSeconds());
	var times=hours+':'+minutes+':'+seconds+' ';
	return times;
}
function addzero(num){
	var num=parseInt(num);
	if(num<10) num='0'+num;
	return num;
}




