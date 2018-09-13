<?php
	header("content-type","text/html;charset=utf-8");
	$username = $_GET['name'];
	$userpassword = $_GET['password'];
	//连接数据库         数据库地址   用户名   密码
	$con = mysql_connect("localhost","root","root");
	//判断是否连接上数据库
	if(!$con){
		die("Could not connect:".mysql_error());
	}
	//选择库
	mysql_select_db("usersbass",$con);
	//判断有无注册过的账号
	//执行sql查询语句
	//插入一条数据
	$select = "select * from userinfo where name='".$username."' and password='".$userpassword."'";
	// $select = "select * from userinfo where name=123 and password=12";
	$num =	mysql_query($select,$con);
	// $sql = "insert into userinfo (name,password) values ('".$username ."','".$userpassword."')";
	// mysql_query($sql,$con);

	if(mysql_num_rows($num)==0){
		$sql = "insert into userinfo (name,password) values ('".$username ."','".$userpassword."')";
		mysql_query($sql,$con);
		echo "0";	
	}else if(mysql_num_rows($num)>=1){
		echo "账号已被占用";
	}

	//关闭连接
	mysql_close($con);
	// echo mysql_num_rows($num);
?>