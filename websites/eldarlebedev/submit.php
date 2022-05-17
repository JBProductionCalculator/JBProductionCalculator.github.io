  <?php 
    
    if (!empty($_POST['name']) and !empty($_POST['email']) and !empty($_POST['message'])) {

       $letter = 'Данные сообщения:\r\n';
       $letter .='Имя: ' .$_POST['name']. '\r\n';
       $letter .='Email: ' .$_POST['email']. '\r\n';
       $letter .='Сообщение: ' .$_POST['message']. '\r\n';

    	if(mail('eldarlebedev@gmail.com', 'Новое сообщение', $letter)){
           header('Location:/thankyou.php');
    	}else{

    	}
    } else{
    	header('Location:/error.php');
    }



     // session_start();
   //   if (isset($_POST['send'])) {
      
   //     $message = trim($_POST['message']);
   //     $from = trim($_POST['from']);
   //     $to = "eldarlebedev@gmail.com";
   //     $subject =  trim($_POST['subject']);
   //     $subject = "=?utf-8?B?".base64_encode($subject)."?=";
   //     $headers = "From: $from\r\nReplay-to: $from\r\nContent-type: 
   //        //text/paint; charset=utf-8\r\n"; 
   //     mail($to,$subject,$massage,$headers); 

   // }
      // header("Location: sos.php");

     // }
//        $_SESSION['from'] = $from;
//        $_SESSION['subject'] = $subject;
//        $_SESSION['message'] = $message;
//      }
    
//      $error = false;
//       setcookie('from',$from);

//       if (strlen($from)>5) {
//        $error = true;
//       }

//       if (strlen($subject)>5) {
//        $error = true;
//       }
//        if (strlen($message)>5) {
//        $error = true;
//       }
    
// if (!$error) { 
//    
//    $headers = 'From: $from\r\nReplay-to: $from\r\nContent-type: 
//     text/paint; charset=utf-8\r\n'; 

//     mail($to, $subject, $massage,$headers); 

//     header("Location: sos.php?send=1");
//     exit();

?>

<h2>
	Сообщение отправлено
</h2>