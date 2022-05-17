<?php
	$to = "woof@uglyinu.io"; // емайл получателя данных из формы
	$tema = "The Ugly Inu Form"; // тема полученного емайла
	$message = "User name: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
	$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
	$message .= "Message: ".$_POST['message']."<br>"; //полученное из формы name=message
	$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
	  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
	mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="refresh" content="3; url=index.html">
	<title>Thank you</title>
	<meta name="generator">
	<script type="text/javascript">
		 setTimeout('location.replace("/index.html")', 3000);
	/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
	</script> 
</head>
<body>
	<h1>Thank you</h1>
</body>
</html>