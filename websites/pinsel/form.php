<?
// ini_set('error_reporting', E_ALL);

$data = array();
if($_POST['name'])
{
	foreach($_POST['name'] as $n=>$v)
	{
		if(!isset($data[$n]))
			$data[$n] = new stdClass;
		$data[$n]->name = $v;
	}
}
if($_POST['value'])
{
	foreach($_POST['value'] as $n=>$v)
		$data[$n]->value = $v;
}

	
	function email($to, $subject, $message, $from = '', $reply_to = '')
    {
    	$headers  = "MIME-Version: 1.0\n" ;
    	$headers .= "Content-type: text/html; charset=utf-8; \r\n";
    	$headers .= "From: $from\r\n";
    	if(!empty($reply_to))
	    	$headers .= "reply-to: $reply_to\r\n";
    	
    	$subject = "=?utf-8?B?".base64_encode($subject)."?=";

    	@mail($to, $subject, $message, $headers);
    }	
	
if(!empty($data)){

	// Отправляем письмо
	$email_template = '';
	foreach ($data as $d) 
	{
		$email_template .= $d->value.'<br>';		
	}
	

	$subject = 'Pinselstudio: '.$data[0]->name.' '.$data[0]->value;
	email('d.pilipenko@ukr.net', $subject, $email_template, 'info@pinselstudio.com');
	

	

	$data_arr['content'] = 'Ваша заявка успешно отправлена.<br>Наш специалист свяжется с Вами в ближайшее время.';

}
else
	$data_arr['content'] = 'Произошел сбой отправки данных. <br>Попробуйте обновить страницу и повторить попытку.';


header("Content-type: application/json; charset=UTF-8");
header("Cache-Control: must-revalidate");
header("Pragma: no-cache");
header("Expires: -1");
echo json_encode($data_arr);