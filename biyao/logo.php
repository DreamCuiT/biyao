<?php
	header("content-type","text/html;charset=utf-8");
	//获取数据
	$username = $_POST['name'];
	$userpassword = $_POST['password'];

	//连接数据库        数据库地址   用户名   密码
	$con = mysql_connect("localhost","root","root");
	//判断是否连接上数据库
	if(!$con){
		die("Could not connect:".mysql_errno());
	}
	//选择库
	mysql_select_db("usersbass",$con);
	//判断账号是否注册过的sql语句
	$select = "select * from userinfo where name='".$username."' and password='".$userpassword."'";
	//执行sql语句
	$num = mysql_query($select,$con);
	//是否能查到行数
	if(mysql_num_rows($num)==1){
		// $sql = "insert into userinfo (name,password) values ('".$username ."','".$userpassword."')";
		// mysql_query($sql,$con);
		echo 1;	
	}else if(mysql_num_rows($num)==0){
		echo 0;
	}

	// 关闭连接
	mysql_close($con);
?>