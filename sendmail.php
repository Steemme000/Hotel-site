<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    $mail->From = "from@yourdomain.com";
    $mail->FromName = "Клиент";

    $mail->addAddress("vip.verona5555@mail.ru");

    $mail->Subject = 'Бронирование';

    $body = '<h1>Новое бронирование:</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'<p>';}
    
        if(trim(!empty($_POST['phone']))){
            $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'<p>';}
    
            if(trim(!empty($_POST['email']))){
                $body.='<p><strong>Email:</strong> '.$_POST['email'].'<p>';}
                
                if(trim(!empty($_POST['people']))){
                    $body.='<p><strong>Количество людей:</strong> '.$_POST['people'].'<p>';}
    
                    if(trim(!empty($_POST['dateEnter']))){
                        $body.='<p><strong>Дата заезда:</strong> '.$_POST['dateEnter'].'<p>';}
                    
                        if(trim(!empty($_POST['dateExit']))){
                            $body.='<p><strong>Дата выезда:</strong> '.$_POST['dateExit'].'<p>';}

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Ошибка, Форма не отправлена';
    }else{
        $message = 'Данные отправлены!';
    }
                        
    $response = ['message'=>$message];

    header('Content-type: application/json');
    echo json_encode($response);

?>